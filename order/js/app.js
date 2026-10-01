const DEFAULT_SIGNATURE_URL = 'data:image/png;base64,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';

/**
 * CEMENT ORDER SLIP GENERATOR - Core Application Logic
 * Designed for lightning fast cement loading slip creation and bill-book printing.
 */

// --- Default Application Configuration ---
const STORAGE_KEYS = {
  SETTINGS: 'cement_order_settings_v2',
  VEHICLES: 'cement_order_vehicles_v1',
  HISTORY: 'cement_order_history_v1',
  THEME: 'cement_order_theme_v1',
  AUTH: 'cement_order_auth_v1',
  SESSION: 'cement_order_session_v1'
};

const DEFAULT_AUTH = {
  username: 'admin',
  password: 'kpn123',
  pin: '295712',
  displayName: 'KPN Admin'
};

const DEFAULT_SETTINGS = {
  companyName: 'KPN TRADERS',
  ownerName: 'SHANMUGARAJ',
  mobile: '9842100000',
  address: '1/434-G KPN TRADERS, DAM ROAD, KRISHNAGIRI -635101.',
  footerTags: '★ CEMENT  ★  STEEL  ★  ASIANPAINTS',
  autoSignature: true,
  signatureUrl: DEFAULT_SIGNATURE_URL,
  paperPreset: 'billbook-small',
  paperWidth: 5.5,
  paperHeight: 4.25,
  fontStyle: 'font-montserrat',
  nextOrderNum: 1
};

const DEFAULT_VEHICLES = [
  'TN 24 WE 1994',
  'TN 24 AB 1234',
  'TN 38 CD 5678',
  'TN 29 AZ 4455'
];

// --- App State ---
const state = {
  auth: { ...DEFAULT_AUTH },
  session: null,
  settings: { ...DEFAULT_SETTINGS },
  vehicles: [...DEFAULT_VEHICLES],
  history: [],
  currentOrder: {
    date: '',
    orderNo: '001',
    greeting: 'Good Morning',
    cementCompany: 'ULTRATECH',
    vehicleNumber: 'TN 24 WE 1994',
    quantity: '100',
    unit: 'Bags',
    cementType: '',
    remark: ''
  }
};

// --- DOM Elements Cache ---
const el = {
  // Form Inputs
  orderForm: document.getElementById('orderForm'),
  orderDate: document.getElementById('orderDate'),
  orderNumber: document.getElementById('orderNumber'),
  greetingVal: document.getElementById('greetingVal'),
  greetingGroup: document.getElementById('greetingGroup'),
  cementCompany: document.getElementById('cementCompany'),
  companyChips: document.getElementById('companyChips'),
  vehicleNumber: document.getElementById('vehicleNumber'),
  savedTruckChips: document.getElementById('savedTruckChips'),
  orderQuantity: document.getElementById('orderQuantity'),
  unitVal: document.getElementById('unitVal'),
  unitGroup: document.getElementById('unitGroup'),
  typeGroup: document.getElementById('typeGroup'),
  cementTypeVal: document.getElementById('cementTypeVal'),
  orderRemark: document.getElementById('orderRemark'),
  
  // Buttons
  btnSaveAndGenerate: document.getElementById('btnSaveAndGenerate'),
  btnNewOrderQuick: document.getElementById('btnNewOrderQuick'),
  btnResetForm: document.getElementById('btnResetForm'),
  btnQuickAddTruck: document.getElementById('btnQuickAddTruck'),
  btnManageTrucksQuick: document.getElementById('btnManageTrucksQuick'),
  btnPrintSlip: document.getElementById('btnPrintSlip'),
  btnDownloadPdf: document.getElementById('btnDownloadPdf'),
  btnDownloadImg: document.getElementById('btnDownloadImg'),
  btnShareWhatsApp: document.getElementById('btnShareWhatsApp'),
  btnToggleTheme: document.getElementById('btnToggleTheme'),
  themeIcon: document.getElementById('themeIcon'),
  btnQuickToggleSig: document.getElementById('btnQuickToggleSig'),
  sigToggleLabel: document.getElementById('sigToggleLabel'),
  
  // Navigation & Modals
  btnOpenSettings: document.getElementById('btnOpenSettings'),
  btnOpenVehicles: document.getElementById('btnOpenVehicles'),
  btnOpenHistory: document.getElementById('btnOpenHistory'),
  historyBadge: document.getElementById('historyBadge'),
  
  modalSettings: document.getElementById('modalSettings'),
  modalVehicles: document.getElementById('modalVehicles'),
  btnClearAllTrucks: document.getElementById('btnClearAllTrucks'),
  modalHistory: document.getElementById('modalHistory'),
  
  // Settings Form
  settingCompanyName: document.getElementById('settingCompanyName'),
  settingOwnerName: document.getElementById('settingOwnerName'),
  settingMobile: document.getElementById('settingMobile'),
  settingAddress: document.getElementById('settingAddress'),
  settingFooterTags: document.getElementById('settingFooterTags'),
  settingAutoSignature: document.getElementById('settingAutoSignature'),
  sigSettingThumb: document.getElementById('sigSettingThumb'),
  settingSigFileInput: document.getElementById('settingSigFileInput'),
  btnResetDefaultSig: document.getElementById('btnResetDefaultSig'),
  sigSettingPreviewBox: document.getElementById('sigSettingPreviewBox'),
  settingPaperPreset: document.getElementById('settingPaperPreset'),
  customDimensionsRow: document.getElementById('customDimensionsRow'),
  settingPaperWidth: document.getElementById('settingPaperWidth'),
  settingPaperHeight: document.getElementById('settingPaperHeight'),
  settingSlipFont: document.getElementById('settingSlipFont'),
  settingAutoOrderNum: document.getElementById('settingAutoOrderNum'),
  settingAuthUsername: document.getElementById('settingAuthUsername'),
  settingAuthPin: document.getElementById('settingAuthPin'),
  settingAuthPassword: document.getElementById('settingAuthPassword'),
  btnSaveSettings: document.getElementById('btnSaveSettings'),
  
  // Authentication & Login
  loginScreen: document.getElementById('loginScreen'),
  tabPinMode: document.getElementById('tabPinMode'),
  tabPassMode: document.getElementById('tabPassMode'),
  formPinAuth: document.getElementById('formPinAuth'),
  formPassAuth: document.getElementById('formPassAuth'),
  authErrorBox: document.getElementById('authErrorBox'),
  authErrorMsg: document.getElementById('authErrorMsg'),
  inputPin: document.getElementById('inputPin'),
  inputUsername: document.getElementById('inputUsername'),
  inputPassword: document.getElementById('inputPassword'),
  rememberMePin: document.getElementById('rememberMePin'),
  rememberMePass: document.getElementById('rememberMePass'),
  btnTogglePasswordEye: document.getElementById('btnTogglePasswordEye'),
  btnQuickDemoFill: document.getElementById('btnQuickDemoFill'),
  navUserName: document.getElementById('navUserName'),
  btnLogout: document.getElementById('btnLogout'),
  userPillTag: document.getElementById('userPillTag'),

  // Vehicles Modal
  newTruckInput: document.getElementById('newTruckInput'),
  btnAddTruckModal: document.getElementById('btnAddTruckModal'),
  savedTrucksList: document.getElementById('savedTrucksList'),
  
  // History Modal
  historySearchInput: document.getElementById('historySearchInput'),
  historyTableBody: document.getElementById('historyTableBody'),
  emptyHistoryMsg: document.getElementById('emptyHistoryMsg'),
  historyCountNote: document.getElementById('historyCountNote'),
  btnClearAllHistory: document.getElementById('btnClearAllHistory'),

  // Slip Display
  billBookSlip: document.getElementById('billBookSlip'),
  slipCompanyName: document.getElementById('slipCompanyName'),
  slipOwnerLine: document.getElementById('slipOwnerLine'),
  slipMobileLine: document.getElementById('slipMobileLine'),
  slipAddressLine: document.getElementById('slipAddressLine'),
  slipFooterTags: document.getElementById('slipFooterTags'),
  slipDate: document.getElementById('slipDate'),
  slipOrderNo: document.getElementById('slipOrderNo'),
  slipGreetingText: document.getElementById('slipGreetingText'),
  slipTruckNumber: document.getElementById('slipTruckNumber'),
  slipCementCompany: document.getElementById('slipCementCompany'),
  slipCementTypeSuffix: document.getElementById('slipCementTypeSuffix'),
  slipQuantityText: document.getElementById('slipQuantityText'),
  slipForCompany: document.getElementById('slipForCompany'),
  slipSignatureImg: document.getElementById('slipSignatureImg'),
  slipNoteContainer: document.getElementById('slipNoteContainer'),
  slipNoteText: document.getElementById('slipNoteText'),
  sizeIndicatorBadge: document.getElementById('sizeIndicatorBadge'),
  toastContainer: document.getElementById('toastContainer')
};

// =========================================================
// INITIALIZATION
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  checkAuthSession();
  initLucideIcons();
  setupEventListeners();
  initFormWithDefaults();
  renderSavedTruckChips();
  renderHistoryTable();
  updateSlipPreview();
  applyPaperSizeStyles();
  syncFromMongoDb();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// =========================================================
// STORAGE HANDLERS
// =========================================================
function loadFromStorage() {
  try {
    const storedAuth = localStorage.getItem(STORAGE_KEYS.AUTH);
    if (storedAuth) {
      state.auth = { ...DEFAULT_AUTH, ...JSON.parse(storedAuth) };
      if (state.auth.pin === '1234') {
        state.auth.pin = '295712';
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(state.auth));
      }
    }

    const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (storedSettings) {
      state.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(storedSettings) };
      if (state.settings.autoSignature === undefined) state.settings.autoSignature = true;
      if (!state.settings.signatureUrl) state.settings.signatureUrl = DEFAULT_SIGNATURE_URL;
    }

    const storedVehicles = localStorage.getItem(STORAGE_KEYS.VEHICLES);
    if (storedVehicles) state.vehicles = JSON.parse(storedVehicles);

    const storedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (storedHistory) state.history = JSON.parse(storedHistory);

    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (storedTheme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      if (el.themeIcon) el.themeIcon.setAttribute('data-lucide', 'moon');
    }
  } catch (err) {
    console.error('Error reading localStorage:', err);
  }
  updateHistoryBadge();
}

function saveSettingsToStorage() {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings));
  syncSettingsToAtlas(state.settings);
}

function saveVehiclesToStorage() {
  localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(state.vehicles));
  syncVehiclesToAtlas(state.vehicles);
}

function saveHistoryToStorage(newOrder) {
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
  updateHistoryBadge();
  if (newOrder) {
    saveOrderToAtlas(newOrder);
  }
}

// =========================================================
// MONGODB ATLAS CLOUD DATABASE INTEGRATION
// =========================================================
async function syncFromMongoDb() {
  try {
    const resOrders = await fetch('/api/orders');
    if (resOrders.ok) {
      const data = await resOrders.json();
      if (data && data.success && Array.isArray(data.orders)) {
        if (data.orders.length > 0) {
          state.history = data.orders;
          localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
          updateHistoryBadge();
          renderHistoryTable();
        }
      }
    }

    const resVehicles = await fetch('/api/vehicles');
    if (resVehicles.ok) {
      const data = await resVehicles.json();
      if (data && data.success && Array.isArray(data.vehicles) && data.vehicles.length > 0) {
        state.vehicles = data.vehicles;
        localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(state.vehicles));
        renderSavedTruckChips();
      }
    }

    const resSettings = await fetch('/api/settings');
    if (resSettings.ok) {
      const data = await resSettings.json();
      if (data && data.success && data.settings) {
        state.settings = { ...state.settings, ...data.settings };
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings));
        updateSlipPreview();
        applyPaperSizeStyles();
      }
    }

    updateCloudStatusBadge(true);
  } catch (err) {
    console.warn('MongoDB Atlas API offline or standalone static mode:', err.message);
    updateCloudStatusBadge(false);
  }
}

function updateCloudStatusBadge(online) {
  let badge = document.getElementById('cloudDbBadge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'cloudDbBadge';
    badge.className = 'cloud-status-badge';
    const userPill = document.getElementById('userPillTag');
    if (userPill && userPill.parentNode) {
      userPill.parentNode.insertBefore(badge, userPill);
    }
  }
  if (online) {
    badge.innerHTML = '<i data-lucide="cloud-check"></i> <span>MongoDB Atlas</span>';
    badge.title = 'Connected to MongoDB Atlas (orderlist.hufd3ul.mongodb.net)';
    badge.classList.remove('cloud-offline');
    badge.classList.add('cloud-online');
  } else {
    badge.innerHTML = '<i data-lucide="hard-drive"></i> <span>Local Mode</span>';
    badge.title = 'Using local browser storage';
    badge.classList.remove('cloud-online');
    badge.classList.add('cloud-offline');
  }
  initLucideIcons();
}

async function saveOrderToAtlas(order) {
  try {
    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });
  } catch (e) {}
}

async function deleteOrderFromAtlas(order) {
  try {
    const id = order._id || order.id;
    await fetch(`/api/orders/${id}`, { method: 'DELETE' });
  } catch (e) {}
}

async function syncVehiclesToAtlas(vehicles) {
  try {
    await fetch('/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vehicles })
    });
  } catch (e) {}
}

async function syncSettingsToAtlas(settings) {
  try {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });
  } catch (e) {}
}

function updateHistoryBadge() {
  if (el.historyBadge) {
    el.historyBadge.textContent = state.history.length;
  }
}

// =========================================================
// AUTHENTICATION & LOGIN LOGIC
// =========================================================
function checkAuthSession() {
  try {
    const rawSession = localStorage.getItem(STORAGE_KEYS.SESSION) || sessionStorage.getItem(STORAGE_KEYS.SESSION);
    if (rawSession) {
      const session = JSON.parse(rawSession);
      if (session && session.authenticated) {
        state.session = session;
        hideLoginScreen();
        updateNavUser(session.displayName || state.auth.displayName || 'KPN Admin');
        return true;
      }
    }
  } catch (e) {
    console.error('Session check error:', e);
  }
  window.location.replace('login.html');
  return false;
}

function updateNavUser(name) {
  if (el.navUserName) {
    el.navUserName.textContent = name;
  }
}

function showLoginScreen(mode = 'pin') {
  if (!el.loginScreen) return;
  el.loginScreen.classList.remove('auth-hidden');
  if (el.authErrorBox) el.authErrorBox.style.display = 'none';

  if (mode === 'pin') {
    if (el.tabPinMode) el.tabPinMode.classList.add('active');
    if (el.tabPassMode) el.tabPassMode.classList.remove('active');
    if (el.formPinAuth) el.formPinAuth.style.display = 'block';
    if (el.formPassAuth) el.formPassAuth.style.display = 'none';
    if (el.inputPin) {
      el.inputPin.value = '';
      setTimeout(() => el.inputPin.focus(), 150);
    }
  } else {
    if (el.tabPassMode) el.tabPassMode.classList.add('active');
    if (el.tabPinMode) el.tabPinMode.classList.remove('active');
    if (el.formPassAuth) el.formPassAuth.style.display = 'block';
    if (el.formPinAuth) el.formPinAuth.style.display = 'none';
    if (el.inputUsername) {
      setTimeout(() => el.inputUsername.focus(), 150);
    }
  }
}

function hideLoginScreen() {
  if (!el.loginScreen) return;
  el.loginScreen.classList.add('auth-hidden');
}

function showAuthError(msg) {
  if (!el.authErrorBox || !el.authErrorMsg) return;
  el.authErrorMsg.textContent = msg;
  el.authErrorBox.style.display = 'flex';
  el.authErrorBox.classList.remove('shake');
  void el.authErrorBox.offsetWidth; // trigger reflow
  el.authErrorBox.classList.add('shake');
}

function performLoginSuccess(remember) {
  const session = {
    authenticated: true,
    username: state.auth.username,
    displayName: state.auth.displayName || 'KPN Admin',
    loginAt: new Date().toISOString()
  };
  state.session = session;

  if (remember) {
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
  } else {
    sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  }

  updateNavUser(session.displayName);
  hideLoginScreen();
  showToast(`Welcome, ${session.displayName}!`, 'success');
}

async function handlePinLogin() {
  if (!el.inputPin) return;
  const enteredPin = el.inputPin.value.trim();

  // Try Atlas API first
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: 'pin', pin: enteredPin })
    });
    const data = await res.json();
    if (data && data.success && data.user) {
      const remember = el.rememberMePin ? el.rememberMePin.checked : true;
      performLoginSuccess(remember);
      return;
    }
  } catch (err) {}

  if (enteredPin === state.auth.pin) {
    const remember = el.rememberMePin ? el.rememberMePin.checked : true;
    performLoginSuccess(remember);
  } else {
    showAuthError('Invalid Security PIN. Please try again.');
    el.inputPin.value = '';
    el.inputPin.focus();
  }
}

async function handlePassLogin() {
  if (!el.inputUsername || !el.inputPassword) return;
  const user = el.inputUsername.value.trim();
  const pass = el.inputPassword.value;

  // Try Atlas API first
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    });
    const data = await res.json();
    if (data && data.success && data.user) {
      const remember = el.rememberMePass ? el.rememberMePass.checked : true;
      performLoginSuccess(remember);
      return;
    }
  } catch (err) {}

  if (user.toLowerCase() === state.auth.username.toLowerCase() && pass === state.auth.password) {
    const remember = el.rememberMePass ? el.rememberMePass.checked : true;
    performLoginSuccess(remember);
  } else {
    showAuthError('Invalid username or password. Please try again.');
    el.inputPassword.value = '';
    el.inputPassword.focus();
  }
}

function handleLogout() {
  try {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
  } catch (e) {}
  state.session = null;
  window.location.replace('login.html');
}

// =========================================================
// DEFAULT FORM SETUP
// =========================================================
function initFormWithDefaults() {
  // Set Today's Date (YYYY-MM-DD for input)
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  el.orderDate.value = `${yyyy}-${mm}-${dd}`;
  
  // Auto-formatted Order Number
  const orderNumStr = String(state.settings.nextOrderNum || 1).padStart(3, '0');
  el.orderNumber.value = orderNumStr;

  // Auto Greeting based on current hour
  const currentHour = today.getHours();
  let autoGreeting = 'Good Morning';
  if (currentHour >= 12 && currentHour < 17) {
    autoGreeting = 'Good Afternoon';
  } else if (currentHour >= 17 || currentHour < 4) {
    autoGreeting = 'Good Evening';
  }
  setGreetingValue(autoGreeting);

  // Default vehicle (first in saved trucks)
  if (state.vehicles.length > 0 && !el.vehicleNumber.value) {
    el.vehicleNumber.value = state.vehicles[0];
  }

  // Default quantity
  if (!el.orderQuantity.value) {
    el.orderQuantity.value = '100';
  }

  // Sync state
  syncFormToState();
  updateCompanyChipsHighlight();
}

function updateCompanyChipsHighlight() {
  if (!el.companyChips) return;
  const currentVal = (el.cementCompany.value || '').trim().toLowerCase();
  el.companyChips.querySelectorAll('.chip-item').forEach(chip => {
    const chipText = chip.textContent.trim().toLowerCase();
    if (currentVal && (chipText === currentVal || currentVal.includes(chipText) || chipText.includes(currentVal))) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

function setGreetingValue(val) {
  el.greetingVal.value = val;
  const buttons = el.greetingGroup.querySelectorAll('.pill-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === val);
  });
}

function setUnitValue(val) {
  el.unitVal.value = val;
  const buttons = el.unitGroup.querySelectorAll('.pill-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === val);
  });
}

function setCementTypeValue(val) {
  el.cementTypeVal.value = val;
  const buttons = el.typeGroup.querySelectorAll('.pill-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-value') === val);
  });
}

// =========================================================
// EVENT LISTENERS
// =========================================================
function setupEventListeners() {
  // Real-time live updating on any input change
  const liveInputs = [
    el.orderDate, el.orderNumber, el.cementCompany,
    el.vehicleNumber, el.orderQuantity, el.orderRemark
  ];
  
  liveInputs.forEach(input => {
    input.addEventListener('input', () => {
      syncFormToState();
      updateSlipPreview();
      if (input === el.cementCompany) {
        updateCompanyChipsHighlight();
      }
    });
  });

  // Uppercase auto-formatter for Truck Number
  el.vehicleNumber.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
  });

  // Greeting Pills
  el.greetingGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    setGreetingValue(btn.getAttribute('data-value'));
    syncFormToState();
    updateSlipPreview();
  });

  // Unit Pills
  el.unitGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    setUnitValue(btn.getAttribute('data-value'));
    syncFormToState();
    updateSlipPreview();
  });

  // Cement Type Pills
  el.typeGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    setCementTypeValue(btn.getAttribute('data-value'));
    syncFormToState();
    updateSlipPreview();
  });

  // Quick Company Chips
  el.companyChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip-item');
    if (!chip) return;
    el.cementCompany.value = chip.textContent.trim();
    syncFormToState();
    updateSlipPreview();
    updateCompanyChipsHighlight();
    showToast(`Selected: ${chip.textContent.trim()}`);
  });

  // Quick Quantity Presets
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qty = btn.getAttribute('data-qty');
      el.orderQuantity.value = qty;
      syncFormToState();
      updateSlipPreview();
    });
  });

  // Quick Add Truck to Saved
  el.btnQuickAddTruck.addEventListener('click', () => {
    const val = el.vehicleNumber.value.trim().toUpperCase();
    if (!val) {
      showToast('Please enter a vehicle number first', 'danger');
      return;
    }
    if (state.vehicles.includes(val)) {
      showToast('Vehicle is already saved', 'info');
      return;
    }
    state.vehicles.push(val);
    saveVehiclesToStorage();
    renderSavedTruckChips();
    showToast(`Added ${val} to saved trucks!`, 'success');
  });

  // Primary Actions
  el.btnSaveAndGenerate.addEventListener('click', handleSaveAndGenerate);
  el.btnNewOrderQuick.addEventListener('click', handleNewOrder);
  el.btnResetForm.addEventListener('click', handleResetForm);

  // Print & Export Actions
  el.btnPrintSlip.addEventListener('click', handlePrintSlip);
  el.btnDownloadPdf.addEventListener('click', handleDownloadPdf);
  el.btnDownloadImg.addEventListener('click', handleDownloadImage);
  el.btnShareWhatsApp.addEventListener('click', handleShareWhatsApp);

  // Theme Toggle
  el.btnToggleTheme.addEventListener('click', toggleTheme);

  // Paper Style Pickers (White, Pink, Yellow, Vintage)
  document.querySelectorAll('.style-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.style-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const styleName = pill.getAttribute('data-style');
      el.billBookSlip.setAttribute('data-paper-style', styleName);
    });
  });

  // Modal Open Buttons
  el.btnOpenSettings.addEventListener('click', () => openModal(el.modalSettings, populateSettingsForm));
  el.btnOpenVehicles.addEventListener('click', () => openModal(el.modalVehicles, renderVehiclesModalList));
  if (el.btnManageTrucksQuick) {
    el.btnManageTrucksQuick.addEventListener('click', () => openModal(el.modalVehicles, renderVehiclesModalList));
  }
  el.btnOpenHistory.addEventListener('click', () => openModal(el.modalHistory, renderHistoryTable));

  // Modal Close Handlers
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close');
      const targetModal = document.getElementById(targetId);
      if (targetModal) targetModal.style.display = 'none';
    });
  });

  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });

  // Settings Save
  el.btnSaveSettings.addEventListener('click', handleSaveSettings);
  el.settingPaperPreset.addEventListener('change', () => {
    el.customDimensionsRow.style.display = (el.settingPaperPreset.value === 'custom') ? 'grid' : 'none';
  });

  // Signature Settings Listeners
  if (el.settingAutoSignature) {
    el.settingAutoSignature.addEventListener('change', () => {
      if (el.sigSettingPreviewBox) {
        el.sigSettingPreviewBox.style.display = el.settingAutoSignature.checked ? 'flex' : 'none';
      }
    });
  }

  if (el.settingSigFileInput) {
    el.settingSigFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        state.settings.signatureUrl = dataUrl;
        if (el.sigSettingThumb) el.sigSettingThumb.src = dataUrl;
        if (el.slipSignatureImg) el.slipSignatureImg.src = dataUrl;
        saveSettingsToStorage();
        updateSlipPreview();
        showToast('Signature updated successfully!', 'success');
      };
      reader.readAsDataURL(file);
    });
  }

  if (el.btnResetDefaultSig) {
    el.btnResetDefaultSig.addEventListener('click', () => {
      state.settings.signatureUrl = DEFAULT_SIGNATURE_URL;
      if (el.sigSettingThumb) el.sigSettingThumb.src = DEFAULT_SIGNATURE_URL;
      if (el.slipSignatureImg) el.slipSignatureImg.src = DEFAULT_SIGNATURE_URL;
      saveSettingsToStorage();
      updateSlipPreview();
      showToast('Restored default signature', 'info');
    });
  }

  // Quick Signature Toggle button in preview toolbar
  if (el.btnQuickToggleSig) {
    el.btnQuickToggleSig.addEventListener('click', () => {
      state.settings.autoSignature = (state.settings.autoSignature === false) ? true : false;
      saveSettingsToStorage();
      updateSlipPreview();
      updateSigToggleButton();
      showToast(state.settings.autoSignature ? 'Signature Generated on Slip!' : 'Signature Hidden (Blank space for pen)', 'info');
    });
  }

  // Vehicles Modal: Add Truck
  el.btnAddTruckModal.addEventListener('click', () => {
    const val = el.newTruckInput.value.trim().toUpperCase();
    if (!val) return;
    if (state.vehicles.includes(val)) {
      showToast('Truck already in list', 'danger');
      return;
    }
    state.vehicles.push(val);
    saveVehiclesToStorage();
    renderVehiclesModalList();
    renderSavedTruckChips();
    el.newTruckInput.value = '';
    showToast(`Added ${val}`, 'success');
  });

  if (el.btnClearAllTrucks) {
    el.btnClearAllTrucks.addEventListener('click', () => {
      if (!state.vehicles || state.vehicles.length === 0) {
        showToast('No saved trucks to clear', 'info');
        return;
      }
      if (confirm('Are you sure you want to delete all saved truck numbers?')) {
        state.vehicles = [];
        saveVehiclesToStorage();
        renderVehiclesModalList();
        renderSavedTruckChips();
        showToast('All saved trucks deleted', 'info');
      }
    });
  }

  // History Search & Clear
  el.historySearchInput.addEventListener('input', (e) => {
    renderHistoryTable(e.target.value.toLowerCase());
  });

  el.btnClearAllHistory.addEventListener('click', () => {
    if (state.history.length === 0) return;
    if (confirm('Are you sure you want to clear all order slip history?')) {
      state.history = [];
      saveHistoryToStorage();
      renderHistoryTable();
      showToast('Order history cleared', 'info');
    }
  });

  // Keyboard shortcut: Ctrl + P / Cmd + P triggers print slip
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      handlePrintSlip();
    }
  });

  // Authentication Event Listeners
  if (el.tabPinMode) {
    el.tabPinMode.addEventListener('click', () => showLoginScreen('pin'));
  }
  if (el.tabPassMode) {
    el.tabPassMode.addEventListener('click', () => showLoginScreen('pass'));
  }
  if (el.formPinAuth) {
    el.formPinAuth.addEventListener('submit', (e) => {
      e.preventDefault();
      handlePinLogin();
    });
  }
  if (el.inputPin) {
    el.inputPin.addEventListener('input', (e) => {
      const pinLength = (state.auth.pin || '295712').length;
      if (e.target.value.length === pinLength) {
        handlePinLogin();
      }
    });
  }
  if (el.formPassAuth) {
    el.formPassAuth.addEventListener('submit', (e) => {
      e.preventDefault();
      handlePassLogin();
    });
  }
  if (el.btnTogglePasswordEye) {
    el.btnTogglePasswordEye.addEventListener('click', () => {
      const isPass = el.inputPassword.type === 'password';
      el.inputPassword.type = isPass ? 'text' : 'password';
      const icon = el.btnTogglePasswordEye.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isPass ? 'eye-off' : 'eye');
        initLucideIcons();
      }
    });
  }
  if (el.btnQuickDemoFill) {
    el.btnQuickDemoFill.addEventListener('click', () => {
      if (el.inputPin) el.inputPin.value = state.auth.pin;
      if (el.inputUsername) el.inputUsername.value = state.auth.username;
      if (el.inputPassword) el.inputPassword.value = state.auth.password;
      performLoginSuccess(true);
    });
  }
  if (el.btnLogout) {
    el.btnLogout.addEventListener('click', handleLogout);
  }
}

// =========================================================
// LIVE SLIP RENDERING & SYNC
// =========================================================
function syncFormToState() {
  state.currentOrder = {
    date: el.orderDate.value,
    orderNo: el.orderNumber.value || '001',
    greeting: el.greetingVal.value || 'Good Morning',
    cementCompany: el.cementCompany.value || 'ULTRATECH',
    vehicleNumber: el.vehicleNumber.value || 'TN 24 WE 1994',
    quantity: el.orderQuantity.value || '100',
    unit: el.unitVal.value || 'Bags',
    cementType: el.cementTypeVal.value || '',
    remark: el.orderRemark.value.trim()
  };
}

function updateSlipPreview() {
  // Format Date: DD/MM/YYYY
  let displayDate = state.currentOrder.date;
  if (displayDate && displayDate.includes('-')) {
    const parts = displayDate.split('-');
    displayDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  // Company Details on Top Banner
  el.slipCompanyName.textContent = state.settings.companyName || 'KPN TRADERS';
  el.slipAddressLine.textContent = state.settings.address || '1/434-G KPN TRADERS, DAM ROAD, KRISHNAGIRI -635101.';
  
  if (el.slipFooterTags) {
    el.slipFooterTags.textContent = state.settings.footerTags || '★ CEMENT  ★  STEEL  ★  ASIANPAINTS';
  }

  // Meta bar (Right-aligned Date)
  el.slipDate.textContent = displayDate || '30/09/2026';
  el.slipOrderNo.textContent = state.currentOrder.orderNo || '001';

  // Greeting
  el.slipGreetingText.textContent = `${state.currentOrder.greeting} Sir,`;

  // Main Letter Body (Continuous sentence)
  el.slipTruckNumber.textContent = state.currentOrder.vehicleNumber || 'TN 24 WE 1994';
  el.slipCementCompany.textContent = state.currentOrder.cementCompany || 'ULTRATECH';

  // Optional Cement Type suffix
  if (state.currentOrder.cementType && state.currentOrder.cementType.trim() !== '') {
    el.slipCementTypeSuffix.textContent = ` (${state.currentOrder.cementType})`;
  } else {
    el.slipCementTypeSuffix.textContent = '';
  }

  // Quantity
  el.slipQuantityText.textContent = `${state.currentOrder.quantity || 100} ${state.currentOrder.unit || 'Bags'}`;

  // Driver / Loading Note
  if (state.currentOrder.remark) {
    el.slipNoteText.textContent = state.currentOrder.remark;
    el.slipNoteContainer.style.display = 'block';
  } else {
    el.slipNoteContainer.style.display = 'none';
  }

  // Signature Footer
  el.slipForCompany.textContent = `FOR  ${state.settings.companyName || 'KPN TRADERS'}`;

  if (el.slipSignatureImg) {
    if (state.settings.autoSignature !== false) {
      el.slipSignatureImg.style.display = 'block';
      el.slipSignatureImg.src = state.settings.signatureUrl || DEFAULT_SIGNATURE_URL;
    } else {
      el.slipSignatureImg.style.display = 'none';
    }
  }

  updateSigToggleButton();
}

function updateSigToggleButton() {
  if (!el.btnQuickToggleSig) return;
  const isAuto = state.settings.autoSignature !== false;
  if (isAuto) {
    el.btnQuickToggleSig.classList.remove('inactive');
    el.btnQuickToggleSig.classList.add('active');
    if (el.sigToggleLabel) el.sigToggleLabel.textContent = 'Sign: Auto ON';
  } else {
    el.btnQuickToggleSig.classList.remove('active');
    el.btnQuickToggleSig.classList.add('inactive');
    if (el.sigToggleLabel) el.sigToggleLabel.textContent = 'Sign: OFF';
  }
  if (el.settingAutoSignature) {
    el.settingAutoSignature.checked = isAuto;
  }
}

// =========================================================
// SAVED VEHICLES CHIPS & MANAGEMENT
// =========================================================
function renderSavedTruckChips() {
  if (!el.savedTruckChips) return;
  el.savedTruckChips.innerHTML = '';
  if (!state.vehicles || state.vehicles.length === 0) {
    el.savedTruckChips.innerHTML = '<span class="sub-hint">No trucks saved yet. Use "+ Save this truck" above.</span>';
    return;
  }

  state.vehicles.forEach((truck, index) => {
    const chip = document.createElement('div');
    chip.className = 'chip-item truck-chip';
    if (el.vehicleNumber && el.vehicleNumber.value === truck) {
      chip.classList.add('active');
    }

    const textSpan = document.createElement('span');
    textSpan.className = 'truck-chip-text';
    textSpan.textContent = truck;
    textSpan.title = `Click to select ${truck}`;
    textSpan.addEventListener('click', () => {
      el.vehicleNumber.value = truck;
      syncFormToState();
      updateSlipPreview();
      renderSavedTruckChips();
    });

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'chip-delete-btn';
    delBtn.innerHTML = '&times;';
    delBtn.title = `Delete ${truck} from saved trucks`;
    delBtn.setAttribute('aria-label', `Delete ${truck}`);
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Remove truck "${truck}" from saved list?`)) {
        state.vehicles.splice(index, 1);
        saveVehiclesToStorage();
        renderSavedTruckChips();
        renderVehiclesModalList();
        showToast(`Truck ${truck} deleted`, 'info');
      }
    });

    chip.appendChild(textSpan);
    chip.appendChild(delBtn);
    el.savedTruckChips.appendChild(chip);
  });
}

function renderVehiclesModalList() {
  if (!el.savedTrucksList) return;
  el.savedTrucksList.innerHTML = '';
  if (!state.vehicles || state.vehicles.length === 0) {
    el.savedTrucksList.innerHTML = '<p class="empty-history">No saved trucks.</p>';
    return;
  }

  state.vehicles.forEach((truck, index) => {
    const row = document.createElement('div');
    row.className = 'truck-list-item';
    row.innerHTML = `
      <span class="truck-number-badge">${truck}</span>
      <div class="truck-item-actions">
        <button type="button" class="icon-btn-select" title="Select this truck" data-select="${truck}">
          <i data-lucide="check"></i>
        </button>
        <button type="button" class="icon-btn-danger" title="Delete truck" data-delete-index="${index}">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `;

    row.querySelector('[data-select]').addEventListener('click', () => {
      el.vehicleNumber.value = truck;
      syncFormToState();
      updateSlipPreview();
      renderSavedTruckChips();
      el.modalVehicles.style.display = 'none';
      showToast(`Selected ${truck}`);
    });

    row.querySelector('[data-delete-index]').addEventListener('click', () => {
      if (confirm(`Remove truck "${truck}" from saved list?`)) {
        state.vehicles.splice(index, 1);
        saveVehiclesToStorage();
        renderVehiclesModalList();
        renderSavedTruckChips();
        showToast('Truck removed', 'info');
      }
    });

    el.savedTrucksList.appendChild(row);
  });

  initLucideIcons();
}

// =========================================================
// ORDER ACTIONS (SAVE, NEW, PRINT, PDF, IMAGE, WHATSAPP)
// =========================================================
function handleSaveAndGenerate() {
  if (!el.orderForm.reportValidity()) {
    showToast('Please fill all required fields', 'danger');
    return;
  }

  syncFormToState();

  const newOrderEntry = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    orderNo: state.currentOrder.orderNo,
    date: state.currentOrder.date,
    company: state.currentOrder.cementCompany,
    vehicle: state.currentOrder.vehicleNumber,
    quantity: state.currentOrder.quantity,
    unit: state.currentOrder.unit,
    cementType: state.currentOrder.cementType,
    remark: state.currentOrder.remark
  };

  // Add to beginning of history
  state.history.unshift(newOrderEntry);
  saveHistoryToStorage(newOrderEntry);

  // Increment next auto order number in settings
  const currentNum = parseInt(state.currentOrder.orderNo, 10);
  if (!isNaN(currentNum)) {
    state.settings.nextOrderNum = currentNum + 1;
    saveSettingsToStorage();
  }

  updateSlipPreview();
  showToast(`Order #${newOrderEntry.orderNo} saved successfully!`, 'success');
}

function handleNewOrder() {
  // Increment order number
  const nextNum = state.settings.nextOrderNum || (parseInt(state.currentOrder.orderNo, 10) + 1) || 1;
  el.orderNumber.value = String(nextNum).padStart(3, '0');

  // Keep date current
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  el.orderDate.value = `${yyyy}-${mm}-${dd}`;

  // Clear remark
  el.orderRemark.value = '';

  syncFormToState();
  updateSlipPreview();
  showToast(`Prepared New Order Slip #${el.orderNumber.value}`);
}

function handleResetForm() {
  initFormWithDefaults();
  updateSlipPreview();
  showToast('Form reset to defaults');
}

function handlePrintSlip() {
  syncFormToState();
  updateSlipPreview();
  window.print();
}

// High Quality PDF Download in exact Bill-Book dimensions
async function handleDownloadPdf() {
  showToast('Generating Bill-Book PDF...', 'info');

  const slipElement = document.getElementById('billBookSlip');
  if (!slipElement) return;

  try {
    const { jsPDF } = window.jspdf;
    
    // Calculate dimensions in mm
    let widthInches = state.settings.paperWidth || 5.5;
    let heightInches = state.settings.paperHeight || 4.25;
    
    const widthMm = widthInches * 25.4;
    const heightMm = heightInches * 25.4;

    const canvas = await html2canvas(slipElement, {
      scale: 3, // High DPI
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: widthMm > heightMm ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [widthMm, heightMm]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, widthMm, heightMm);
    const filename = `Cement_Order_${state.currentOrder.orderNo}_${state.currentOrder.vehicleNumber.replace(/\s+/g, '_')}.pdf`;
    pdf.save(filename);
    showToast('PDF downloaded successfully!', 'success');
  } catch (err) {
    console.error('PDF export error:', err);
    showToast('Failed to create PDF. Please try Print > Save as PDF.', 'danger');
  }
}

// Crisp PNG Slip Download
async function handleDownloadImage() {
  showToast('Creating slip image...', 'info');
  const slipElement = document.getElementById('billBookSlip');
  if (!slipElement) return;

  try {
    const canvas = await html2canvas(slipElement, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const link = document.createElement('a');
    link.download = `Cement_Order_${state.currentOrder.orderNo}_${state.currentOrder.vehicleNumber.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('Slip image downloaded!', 'success');
  } catch (err) {
    console.error('Image export error:', err);
    showToast('Failed to generate image', 'danger');
  }
}

// Instant WhatsApp dispatch format - Direct In-Memory Image Sharing (No Storage/Download Required)
async function handleShareWhatsApp() {
  syncFormToState();
  updateSlipPreview();

  const slipElement = document.getElementById('billBookSlip');
  if (!slipElement) return;

  showToast('Preparing slip image for WhatsApp...', 'info');

  let formattedDate = state.currentOrder.date;
  if (formattedDate && formattedDate.includes('-')) {
    const parts = formattedDate.split('-');
    formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  const typeText = state.currentOrder.cementType ? ` (${state.currentOrder.cementType})` : '';
  const noteText = state.currentOrder.remark ? `\n*Note:* ${state.currentOrder.remark}` : '';

  const shareText = 
`*${state.settings.companyName.toUpperCase()} - CEMENT ORDER SLIP #${state.currentOrder.orderNo}*
*Truck:* ${state.currentOrder.vehicleNumber}
*Company:* ${state.currentOrder.cementCompany}${typeText}
*Quantity:* ${state.currentOrder.quantity} ${state.currentOrder.unit}
*Date:* ${formattedDate}${noteText}`;

  try {
    // 1. Generate crisp slip image directly in memory (RAM only, no disk saving!)
    const canvas = await html2canvas(slipElement, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    // 2. Convert directly to in-memory Blob without triggering any download
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png', 0.95));
    if (!blob) throw new Error('Blob generation failed');

    const fileName = `Order_${state.currentOrder.orderNo}_${state.currentOrder.vehicleNumber.replace(/\s+/g, '_')}.png`;
    const imageFile = new File([blob], fileName, { type: 'image/png' });

    // 3. Mobile Web Share API: Directly attaches image to WhatsApp with ZERO storage impact
    if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
      await navigator.share({
        files: [imageFile],
        title: `${state.settings.companyName} Order #${state.currentOrder.orderNo}`,
        text: shareText
      });
      showToast('Slip image sent directly to WhatsApp!', 'success');
      return;
    }

    // 4. Desktop Clipboard Support: Copies slip image to clipboard for instant Ctrl+V into WhatsApp Web
    if (navigator.clipboard && window.ClipboardItem) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        showToast('Slip image copied! Press Ctrl+V in WhatsApp to paste.', 'success');
      } catch (clipErr) {
        console.warn('Clipboard write error:', clipErr);
      }
    }

    // Open WhatsApp Web with order message
    const encoded = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  } catch (err) {
    console.error('WhatsApp share error:', err);
    // Fallback to text message if browser blocks canvas/share
    const encoded = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  }
}

// =========================================================
// ORDER HISTORY TABLE & ACTIONS
// =========================================================
function renderHistoryTable(searchQuery = '') {
  el.historyTableBody.innerHTML = '';

  let filtered = state.history;
  if (searchQuery) {
    filtered = state.history.filter(item => {
      const combined = `${item.orderNo} ${item.date} ${item.company} ${item.vehicle} ${item.quantity} ${item.cementType}`.toLowerCase();
      return combined.includes(searchQuery);
    });
  }

  if (filtered.length === 0) {
    el.emptyHistoryMsg.style.display = 'block';
  } else {
    el.emptyHistoryMsg.style.display = 'none';
  }

  el.historyCountNote.textContent = `${state.history.length} Total Orders Saved`;

  filtered.forEach(order => {
    let displayDate = order.date;
    if (displayDate && displayDate.includes('-')) {
      const parts = displayDate.split('-');
      displayDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>#${order.orderNo}</strong></td>
      <td>${displayDate}</td>
      <td>${order.company}</td>
      <td><code>${order.vehicle}</code></td>
      <td><strong>${order.quantity} ${order.unit || 'Bags'}</strong></td>
      <td>${order.cementType || '-'}</td>
      <td class="text-right">
        <div class="history-actions">
          <button type="button" class="hist-btn" data-load-id="${order.id}" title="Load & View Slip">
            <i data-lucide="eye"></i> View
          </button>
          <button type="button" class="hist-btn" data-delete-id="${order.id}" title="Delete Record">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    `;

    // Load Slip handler
    tr.querySelector('[data-load-id]').addEventListener('click', () => {
      loadOrderIntoSlip(order);
      el.modalHistory.style.display = 'none';
      showToast(`Loaded Order #${order.orderNo}`);
    });

    // Delete handler
    tr.querySelector('[data-delete-id]').addEventListener('click', () => {
      deleteOrderFromAtlas(order);
      state.history = state.history.filter(h => (h._id ? h._id !== order._id : h.id !== order.id));
      saveHistoryToStorage();
      renderHistoryTable(searchQuery);
      showToast('Order deleted', 'info');
    });

    el.historyTableBody.appendChild(tr);
  });

  initLucideIcons();
}

function loadOrderIntoSlip(order) {
  el.orderDate.value = order.date;
  el.orderNumber.value = order.orderNo;
  el.cementCompany.value = order.company;
  el.vehicleNumber.value = order.vehicle;
  el.orderQuantity.value = order.quantity;
  el.orderRemark.value = order.remark || '';
  
  if (order.unit) setUnitValue(order.unit);
  if (order.cementType) setCementTypeValue(order.cementType);
  else setCementTypeValue('');

  syncFormToState();
  updateSlipPreview();
  renderSavedTruckChips();
  updateCompanyChipsHighlight();
}

// =========================================================
// SETTINGS HANDLER
// =========================================================
function populateSettingsForm() {
  el.settingCompanyName.value = state.settings.companyName;
  el.settingOwnerName.value = state.settings.ownerName || '';
  el.settingMobile.value = state.settings.mobile || '';
  el.settingAddress.value = state.settings.address || '';
  if (el.settingFooterTags) {
    el.settingFooterTags.value = state.settings.footerTags || '★ CEMENT  ★  STEEL  ★  ASIANPAINTS';
  }
  if (el.settingAutoSignature) {
    el.settingAutoSignature.checked = state.settings.autoSignature !== false;
  }
  if (el.sigSettingThumb) {
    el.sigSettingThumb.src = state.settings.signatureUrl || DEFAULT_SIGNATURE_URL;
  }
  if (el.sigSettingPreviewBox) {
    el.sigSettingPreviewBox.style.display = (state.settings.autoSignature !== false) ? 'flex' : 'none';
  }
  el.settingPaperPreset.value = state.settings.paperPreset || 'billbook-small';
  el.settingPaperWidth.value = state.settings.paperWidth || 5.5;
  el.settingPaperHeight.value = state.settings.paperHeight || 4.25;
  el.settingSlipFont.value = state.settings.fontStyle || 'font-montserrat';
  el.settingAutoOrderNum.value = state.settings.nextOrderNum || 1;

  if (el.settingAuthUsername) el.settingAuthUsername.value = state.auth.username || 'admin';
  if (el.settingAuthPin) el.settingAuthPin.value = state.auth.pin || '1234';
  if (el.settingAuthPassword) el.settingAuthPassword.value = state.auth.password || 'kpn123';

  el.customDimensionsRow.style.display = (el.settingPaperPreset.value === 'custom') ? 'grid' : 'none';
}

function handleSaveSettings() {
  const compName = el.settingCompanyName.value.trim();

  if (!compName) {
    showToast('Company Name is required', 'danger');
    return;
  }

  state.settings.companyName = compName;
  state.settings.ownerName = el.settingOwnerName.value.trim();
  state.settings.mobile = el.settingMobile.value.trim();
  state.settings.address = el.settingAddress.value.trim();
  if (el.settingFooterTags) {
    state.settings.footerTags = el.settingFooterTags.value.trim() || '★ CEMENT  ★  STEEL  ★  ASIANPAINTS';
  }
  if (el.settingAutoSignature) {
    state.settings.autoSignature = el.settingAutoSignature.checked;
  }
  state.settings.paperPreset = el.settingPaperPreset.value;
  state.settings.fontStyle = el.settingSlipFont.value;
  state.settings.nextOrderNum = parseInt(el.settingAutoOrderNum.value, 10) || 1;

  // Save Credentials if provided
  if (el.settingAuthUsername && el.settingAuthUsername.value.trim()) {
    state.auth.username = el.settingAuthUsername.value.trim();
  }
  if (el.settingAuthPin && el.settingAuthPin.value.trim()) {
    state.auth.pin = el.settingAuthPin.value.trim();
  }
  if (el.settingAuthPassword && el.settingAuthPassword.value.trim()) {
    state.auth.password = el.settingAuthPassword.value.trim();
  }
  localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(state.auth));

  if (state.settings.paperPreset === 'billbook-small') {
    state.settings.paperWidth = 5.5;
    state.settings.paperHeight = 4.25;
  } else if (state.settings.paperPreset === 'billbook-tall') {
    state.settings.paperWidth = 4.5;
    state.settings.paperHeight = 6.5;
  } else if (state.settings.paperPreset === 'billbook-medium') {
    state.settings.paperWidth = 6.0;
    state.settings.paperHeight = 4.5;
  } else if (state.settings.paperPreset === 'thermal-80') {
    state.settings.paperWidth = 3.15;
    state.settings.paperHeight = 5.0;
  } else {
    state.settings.paperWidth = parseFloat(el.settingPaperWidth.value) || 5.5;
    state.settings.paperHeight = parseFloat(el.settingPaperHeight.value) || 4.25;
  }

  saveSettingsToStorage();
  applyPaperSizeStyles();
  updateSlipPreview();
  el.modalSettings.style.display = 'none';
  showToast('Settings & Security saved successfully!', 'success');
}

function applyPaperSizeStyles() {
  document.documentElement.style.setProperty('--slip-width', `${state.settings.paperWidth}in`);
  document.documentElement.style.setProperty('--slip-min-height', `${state.settings.paperHeight}in`);

  // Update badge
  if (el.sizeIndicatorBadge) {
    el.sizeIndicatorBadge.textContent = `${state.settings.paperWidth}" × ${state.settings.paperHeight}"`;
  }

  // Update font class
  el.billBookSlip.classList.remove('font-montserrat', 'font-sans', 'font-courier', 'font-mono');
  el.billBookSlip.classList.add(state.settings.fontStyle || 'font-montserrat');
}

// =========================================================
// UI HELPERS (MODALS, TOASTS, THEME)
// =========================================================
function openModal(modalEl, populateCallback) {
  if (populateCallback) populateCallback();
  modalEl.style.display = 'flex';
}

function showToast(message, type = 'default') {
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'danger' ? 'toast-danger' : ''}`;
  
  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle';
  if (type === 'danger') iconName = 'alert-triangle';

  toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
  el.toastContainer.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('theme-dark');
  if (isDark) {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    el.themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    el.themeIcon.setAttribute('data-lucide', 'sun');
  }
  initLucideIcons();
}
