require('dotenv').config();
const dns = require('dns');
// Set reliable DNS resolvers for MongoDB Atlas SRV lookup
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  console.warn('DNS server configuration warning:', e.message);
}

const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'cement_orders';

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static frontend files
app.use(express.static(__dirname));

let db = null;
let client = null;

// Connect to MongoDB Atlas
async function connectToMongo() {
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not defined in .env file!');
    return null;
  }

  try {
    client = new MongoClient(MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    db = client.db(DB_NAME);
    console.log(`✅ Connected to MongoDB Atlas: ${DB_NAME}`);

    // Seed default admin user if not exists
    const usersCol = db.collection('users');
    const existingAdmin = await usersCol.findOne({ username: 'admin' });
    if (!existingAdmin) {
      await usersCol.insertOne({
        username: 'admin',
        password: 'kpn123',
        pin: '295712',
        displayName: 'KPN Admin',
        role: 'admin',
        createdAt: new Date()
      });
      console.log('🌱 Seeded default admin account (PIN: 295712)');
    } else if (existingAdmin.pin === '1234') {
      await usersCol.updateOne({ username: 'admin' }, { $set: { pin: '295712' } });
      console.log('🔄 Updated admin PIN to 295712');
    }

    // Seed default vehicles if not exists
    const vehiclesCol = db.collection('vehicles');
    const countVehicles = await vehiclesCol.countDocuments();
    if (countVehicles === 0) {
      await vehiclesCol.insertMany([
        { number: 'TN 24 WE 1994', createdAt: new Date() },
        { number: 'TN 24 AB 1234', createdAt: new Date() },
        { number: 'TN 38 CD 5678', createdAt: new Date() },
        { number: 'TN 29 AZ 4455', createdAt: new Date() }
      ]);
      console.log('🌱 Seeded initial vehicle fleet');
    }

    return db;
  } catch (err) {
    console.error('❌ MongoDB Atlas Connection Error:', err.message);
    return null;
  }
}

// Middleware to ensure DB connection is ready
const requireDb = (req, res, next) => {
  if (!db) {
    return res.status(503).json({ success: false, error: 'Database not connected. Please check MongoDB Atlas connection.' });
  }
  next();
};

// =========================================================
// API ROUTES
// =========================================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: db ? 'connected' : 'disconnected',
    databaseName: DB_NAME,
    cluster: 'orderlist.hufd3ul.mongodb.net'
  });
});

// 1. AUTHENTICATION: Login (PIN or Username/Password)
app.post('/api/auth/login', requireDb, async (req, res) => {
  try {
    const { mode, pin, username, password } = req.body;
    const usersCol = db.collection('users');

    if (mode === 'pin' || pin) {
      const user = await usersCol.findOne({ pin: String(pin).trim() });
      if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid Security PIN. Please try again.' });
      }
      return res.json({
        success: true,
        user: {
          username: user.username,
          displayName: user.displayName || user.username,
          role: user.role || 'staff'
        }
      });
    }

    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username and password are required.' });
    }

    const user = await usersCol.findOne({
      username: { $regex: new RegExp(`^${username.trim()}$`, 'i') },
      password: password
    });

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid username or password. Please try again.' });
    }

    res.json({
      success: true,
      user: {
        username: user.username,
        displayName: user.displayName || user.username,
        role: user.role || 'staff'
      }
    });
  } catch (err) {
    console.error('Login API error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// 2. AUTHENTICATION: Sign Up / Register
app.post('/api/auth/register', requireDb, async (req, res) => {
  try {
    const { username, password, displayName, pin } = req.body;

    if (!username || !password || !displayName) {
      return res.status(400).json({ success: false, error: 'Name, username, and password are required.' });
    }

    const cleanUser = username.trim().toLowerCase();
    const usersCol = db.collection('users');
    const existing = await usersCol.findOne({ username: cleanUser });

    if (existing) {
      return res.status(409).json({ success: false, error: 'Username is already taken. Please choose another.' });
    }

    const newUser = {
      username: cleanUser,
      password: password,
      displayName: displayName.trim(),
      pin: pin ? String(pin).trim() : '295712',
      role: 'staff',
      createdAt: new Date()
    };

    await usersCol.insertOne(newUser);

    res.status(201).json({
      success: true,
      user: {
        username: newUser.username,
        displayName: newUser.displayName,
        role: newUser.role
      }
    });
  } catch (err) {
    console.error('Register API error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// 3. ORDER HISTORY: Get all orders
app.get('/api/orders', requireDb, async (req, res) => {
  try {
    const ordersCol = db.collection('orders');
    const orders = await ordersCol.find().sort({ createdAt: -1 }).toArray();
    res.json({ success: true, orders });
  } catch (err) {
    console.error('Get orders error:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve orders' });
  }
});

// 4. ORDER HISTORY: Create new order slip
app.post('/api/orders', requireDb, async (req, res) => {
  try {
    const orderData = req.body;
    if (!orderData || !orderData.orderNo) {
      return res.status(400).json({ success: false, error: 'Order details are incomplete.' });
    }

    const ordersCol = db.collection('orders');
    const newRecord = {
      ...orderData,
      createdAt: new Date()
    };

    const result = await ordersCol.insertOne(newRecord);
    newRecord._id = result.insertedId;

    res.status(201).json({ success: true, order: newRecord });
  } catch (err) {
    console.error('Save order error:', err);
    res.status(500).json({ success: false, error: 'Failed to save order' });
  }
});

// 5. ORDER HISTORY: Delete single order
app.delete('/api/orders/:id', requireDb, async (req, res) => {
  try {
    const id = req.params.id;
    const ordersCol = db.collection('orders');

    let filter;
    try {
      filter = { _id: new ObjectId(id) };
    } catch {
      filter = { id: id };
    }

    const result = await ordersCol.deleteOne(filter);
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.error('Delete order error:', err);
    res.status(500).json({ success: false, error: 'Failed to delete order' });
  }
});

// 6. ORDER HISTORY: Clear all orders
app.delete('/api/orders', requireDb, async (req, res) => {
  try {
    const ordersCol = db.collection('orders');
    await ordersCol.deleteMany({});
    res.json({ success: true, message: 'All orders cleared' });
  } catch (err) {
    console.error('Clear orders error:', err);
    res.status(500).json({ success: false, error: 'Failed to clear orders' });
  }
});

// 7. SETTINGS: Get settings
app.get('/api/settings', requireDb, async (req, res) => {
  try {
    const settingsCol = db.collection('settings');
    const settings = await settingsCol.findOne({ id: 'app_settings' });
    res.json({ success: true, settings: settings ? settings.data : null });
  } catch (err) {
    console.error('Get settings error:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve settings' });
  }
});

// 8. SETTINGS: Save settings
app.post('/api/settings', requireDb, async (req, res) => {
  try {
    const data = req.body;
    const settingsCol = db.collection('settings');
    await settingsCol.updateOne(
      { id: 'app_settings' },
      { $set: { id: 'app_settings', data, updatedAt: new Date() } },
      { upsert: true }
    );
    res.json({ success: true, message: 'Settings saved to MongoDB Atlas' });
  } catch (err) {
    console.error('Save settings error:', err);
    res.status(500).json({ success: false, error: 'Failed to save settings' });
  }
});

// 9. VEHICLES: Get vehicles
app.get('/api/vehicles', requireDb, async (req, res) => {
  try {
    const vehiclesCol = db.collection('vehicles');
    const list = await vehiclesCol.find().toArray();
    const numbers = list.map(v => v.number);
    res.json({ success: true, vehicles: numbers });
  } catch (err) {
    console.error('Get vehicles error:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve vehicles' });
  }
});

// 10. VEHICLES: Add or sync vehicles
app.post('/api/vehicles', requireDb, async (req, res) => {
  try {
    const { vehicles } = req.body;
    if (!Array.isArray(vehicles)) {
      return res.status(400).json({ success: false, error: 'Vehicles must be an array' });
    }

    const vehiclesCol = db.collection('vehicles');
    await vehiclesCol.deleteMany({});
    if (vehicles.length > 0) {
      await vehiclesCol.insertMany(vehicles.map(num => ({ number: num, updatedAt: new Date() })));
    }
    res.json({ success: true, message: 'Vehicles saved to MongoDB Atlas' });
  } catch (err) {
    console.error('Save vehicles error:', err);
    res.status(500).json({ success: false, error: 'Failed to save vehicles' });
  }
});

// Root redirects
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server & Connect to Database
connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Cement Order Portal running at http://localhost:${PORT}`);
    console.log(`📊 Connected to MongoDB Atlas cluster (orderlist.hufd3ul.mongodb.net)`);
  });
});
