import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://rmvfrgpampxduldzfwxi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Y94dITMxDgGpH6ZnINbWjw_5w5KMW_c';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const translations = {
  en: {
    pageTitle: 'Invoice Generator',
    pageSubtitle: 'Nijmegen Guest Rooms – Private Invoice Admin',
    loginTitle: 'Sign in',
    loginText: 'Only authorized users can access the invoice system.',
    loginEmail: 'Email',
    loginBtn: 'Send login link',
    logout: 'Log out',
    formTitle: 'Invoice Details',
    newInvoice: 'New invoice',
    invoiceNumber: 'Invoice number',
    invoiceDate: 'Invoice date',
    guestName: 'Guest name',
    guestEmail: 'Guest email (optional)',
    roomName: 'Room name',
    customRoomName: 'Custom room name',
    checkin: 'Check-in',
    checkout: 'Check-out',
    nights: 'Nights',
    guests: 'Guests',
    accommodation: 'Accommodation (€)',
    cleaning: 'Cleaning fee (€)',
    touristTaxRate: 'Tourist tax rate (€ per guest per night)',
    taxMode: 'Tourist tax handling',
    taxModeIncluded: 'Accommodation amount already includes tourist tax',
    taxModeExcluded: 'Tourist tax should be added on top of accommodation',
    paymentMethod: 'Payment',
    customPayment: 'Custom payment method',
    save: 'Save invoice',
    print: 'Print / Save as PDF',
    savedInvoices: 'Saved Invoices',
    invoiceTitle: 'INVOICE',
    labelInvoiceNumber: 'Invoice number:',
    labelDate: 'Date:',
    sectionGuest: 'Guest',
    sectionStay: 'Stay Details',
    labelRoom: 'Room:',
    labelCheckin: 'Check-in:',
    labelCheckout: 'Check-out:',
    labelNights: 'Nights:',
    labelGuests: 'Guests:',
    sectionDescription: 'Description',
    description: 'Accommodation in private room (shared home)',
    sectionPrice: 'Price Breakdown',
    labelAccommodation: 'Accommodation',
    labelCleaning: 'Cleaning fee',
    labelTaxRate: 'Tourist tax rate',
    labelTaxIncluded: 'Tourist tax included',
    labelTaxAdded: 'Tourist tax added',
    labelTotal: 'Total amount paid',
    sectionPayment: 'Payment',
    note: 'This is a private rental. No VAT is applicable.',
    roomOption1: 'Spacious Room (Garden View)',
    roomOption2: 'Cozy Room (Street Side)',
    roomOptionCustom: 'Custom room name...',
    payBooking: 'Paid via Booking.com',
    payAirbnb: 'Paid via Airbnb',
    payCustom: 'Custom payment method...',
    noInvoices: 'No invoices yet.',
    loading: 'Loading...',
    checkEmail: 'Check your email for the login link.',
    enterEmail: 'Enter your email address.',
    notLoggedIn: 'You are not logged in.',
    saved: 'Invoice saved.'
  },
  nl: {
    pageTitle: 'Factuurgenerator',
    pageSubtitle: 'Nijmegen Guest Rooms – Privé factuurbeheer',
    loginTitle: 'Inloggen',
    loginText: 'Alleen geautoriseerde gebruikers hebben toegang tot het factuursysteem.',
    loginEmail: 'E-mailadres',
    loginBtn: 'Stuur inloglink',
    logout: 'Uitloggen',
    formTitle: 'Factuurgegevens',
    newInvoice: 'Nieuwe factuur',
    invoiceNumber: 'Factuurnummer',
    invoiceDate: 'Factuurdatum',
    guestName: 'Naam gast',
    guestEmail: 'E-mailadres gast (optioneel)',
    roomName: 'Kamernaam',
    customRoomName: 'Aangepaste kamernaam',
    checkin: 'Inchecken',
    checkout: 'Uitchecken',
    nights: 'Aantal nachten',
    guests: 'Aantal gasten',
    accommodation: 'Verblijf (€)',
    cleaning: 'Schoonmaakkosten (€)',
    touristTaxRate: 'Toeristenbelasting (€ per gast per nacht)',
    taxMode: 'Verwerking toeristenbelasting',
    taxModeIncluded: 'Verblijfsbedrag is al inclusief toeristenbelasting',
    taxModeExcluded: 'Toeristenbelasting moet bovenop het verblijfsbedrag komen',
    paymentMethod: 'Betaling',
    customPayment: 'Aangepaste betaalmethode',
    save: 'Factuur opslaan',
    print: 'Printen / Opslaan als PDF',
    savedInvoices: 'Opgeslagen facturen',
    invoiceTitle: 'FACTUUR',
    labelInvoiceNumber: 'Factuurnummer:',
    labelDate: 'Datum:',
    sectionGuest: 'Gast',
    sectionStay: 'Verblijfsgegevens',
    labelRoom: 'Kamer:',
    labelCheckin: 'Inchecken:',
    labelCheckout: 'Uitchecken:',
    labelNights: 'Aantal nachten:',
    labelGuests: 'Aantal gasten:',
    sectionDescription: 'Omschrijving',
    description: 'Verblijf in privékamer (gedeelde woning)',
    sectionPrice: 'Prijsopbouw',
    labelAccommodation: 'Verblijf',
    labelCleaning: 'Schoonmaakkosten',
    labelTaxRate: 'Tarief toeristenbelasting',
    labelTaxIncluded: 'Toeristenbelasting inbegrepen',
    labelTaxAdded: 'Toeristenbelasting toegevoegd',
    labelTotal: 'Totaal betaald',
    sectionPayment: 'Betaling',
    note: 'Dit betreft particuliere verhuur. Er is geen btw van toepassing.',
    roomOption1: 'Ruime kamer (tuinzijde)',
    roomOption2: 'Knusse kamer (straatzijde)',
    roomOptionCustom: 'Aangepaste kamernaam...',
    payBooking: 'Betaald via Booking.com',
    payAirbnb: 'Betaald via Airbnb',
    payCustom: 'Aangepaste betaalmethode...',
    noInvoices: 'Nog geen facturen.',
    loading: 'Laden...',
    checkEmail: 'Controleer je e-mail voor de inloglink.',
    enterEmail: 'Voer je e-mailadres in.',
    notLoggedIn: 'Je bent niet ingelogd.',
    saved: 'Factuur opgeslagen.'
  }
};

let currentLang = 'en';
let currentInvoiceId = null;
let manualNightsOverride = false;

const loginView = document.getElementById('loginView');
const appView = document.getElementById('appView');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginEmail = document.getElementById('loginEmail');
const loginMessage = document.getElementById('loginMessage');
const saveBtn = document.getElementById('saveBtn');
const saveMessage = document.getElementById('saveMessage');
const printBtn = document.getElementById('printBtn');
const invoiceList = document.getElementById('invoiceList');
const newInvoiceBtn = document.getElementById('newInvoiceBtn');

const fields = {
  invoiceNumber: document.getElementById('invoiceNumber'),
  invoiceDate: document.getElementById('invoiceDate'),
  guestName: document.getElementById('guestName'),
  guestEmail: document.getElementById('guestEmail'),
  roomName: document.getElementById('roomName'),
  customRoomName: document.getElementById('customRoomName'),
  checkinDate: document.getElementById('checkinDate'),
  checkoutDate: document.getElementById('checkoutDate'),
  nights: document.getElementById('nights'),
  guests: document.getElementById('guests'),
  accommodationAmount: document.getElementById('accommodationAmount'),
  cleaningFee: document.getElementById('cleaningFee'),
  touristTaxRate: document.getElementById('touristTaxRate'),
  taxMode: document.getElementById('taxMode'),
  paymentMethod: document.getElementById('paymentMethod'),
  customPaymentMethod: document.getElementById('customPaymentMethod')
};

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

function formatEuro(value) {
  const number = Number(value || 0);
  return '€' + number.toFixed(2);
}

function formatDateForLang(dateString, lang) {
  if (!dateString) return '—';
  const date = new Date(dateString + 'T00:00:00');
  if (isNaN(date)) return dateString;

  return date.toLocaleDateString(
    lang === 'nl' ? 'nl-NL' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
}

function calculateNightsFromDates() {
  const checkin = fields.checkinDate.value;
  const checkout = fields.checkoutDate.value;
  if (!checkin || !checkout) return null;

  const start = new Date(checkin + 'T00:00:00');
  const end = new Date(checkout + 'T00:00:00');
  const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : null;
}

function autoUpdateNights() {
  if (manualNightsOverride) return;
  const calculated = calculateNightsFromDates();
  if (calculated !== null) fields.nights.value = calculated;
}

function getRoomValue() {
  return fields.roomName.value === 'custom'
    ? (fields.customRoomName.value.trim() || (currentLang === 'nl' ? 'Aangepaste kamer' : 'Custom Room'))
    : fields.roomName.value;
}

function getPaymentValue() {
  return fields.paymentMethod.value === 'custom'
    ? (fields.customPaymentMethod.value.trim() || (currentLang === 'nl' ? 'Aangepaste betaalmethode' : 'Custom payment method'))
    : fields.paymentMethod.value;
}

function toggleCustomFields() {
  document.getElementById('customRoomField').classList.toggle('hidden', fields.roomName.value !== 'custom');
  document.getElementById('customPaymentField').classList.toggle('hidden', fields.paymentMethod.value !== 'custom');
}

async function getSession() {
  const { data } = await supabaseClient.auth.getSession();
  return data.session;
}

async function sendMagicLink(email) {
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'https://nijmegenguestrooms.com/invoice-app/'
    }
  });

  loginMessage.textContent = error ? error.message : translations[currentLang].checkEmail;
}

async function signOut() {
  await supabaseClient.auth.signOut();
  showLogin();
}

function showLogin() {
  loginView.classList.remove('hidden');
  appView.classList.add('hidden');
  logoutBtn.classList.add('hidden');
}

function showApp() {
  loginView.classList.add('hidden');
  appView.classList.remove('hidden');
  logoutBtn.classList.remove('hidden');
}

function clearForm() {
  currentInvoiceId = null;
  manualNightsOverride = false;
  fields.invoiceDate.value = todayISO();
  fields.guestName.value = '';
  fields.guestEmail.value = '';
  fields.roomName.value = currentLang === 'nl' ? translations.nl.roomOption1 : translations.en.roomOption1;
  fields.customRoomName.value = '';
  fields.checkinDate.value = '';
  fields.checkoutDate.value = '';
  fields.nights.value = '';
  fields.guests.value = 1;
  fields.accommodationAmount.value = '';
  fields.cleaningFee.value = '5.00';
  fields.touristTaxRate.value = '3.71';
  fields.taxMode.value = 'included';
  fields.paymentMethod.value = currentLang === 'nl' ? translations.nl.payBooking : translations.en.payBooking;
  fields.customPaymentMethod.value = '';
  toggleCustomFields();
  updatePreview();
}

async function getNextInvoiceNumber() {
  const year = new Date(fields.invoiceDate.value || todayISO()).getFullYear();

  const { data, error } = await supabaseClient
    .from('invoices')
    .select('invoice_sequence')
    .eq('invoice_year', year)
    .order('invoice_sequence', { ascending: false })
    .limit(1);

  if (error || !data) return `${year}-001`;

  const nextSequence = data.length ? data[0].invoice_sequence + 1 : 1;
  return `${year}-${String(nextSequence).padStart(3, '0')}`;
}

function parseInvoiceNumber(invoiceNumber) {
  const [yearStr, seqStr] = invoiceNumber.split('-');
  return {
    invoice_year: Number(yearStr),
    invoice_sequence: Number(seqStr)
  };
}

async function saveInvoice() {
  saveMessage.textContent = '';

  const session = await getSession();
  if (!session) {
    saveMessage.textContent = translations[currentLang].notLoggedIn;
    return;
  }

  const invoiceNumber = fields.invoiceNumber.value.trim();
  const { invoice_year, invoice_sequence } = parseInvoiceNumber(invoiceNumber);

  const nights = Number(fields.nights.value || 0);
  const guests = Number(fields.guests.value || 1);
  const accommodation_amount = Number(fields.accommodationAmount.value || 0);
  const cleaning_fee = Number(fields.cleaningFee.value || 0);
  const tourist_tax_rate = Number(fields.touristTaxRate.value || 0);
  const tourist_tax_total = nights * guests * tourist_tax_rate;
  const tax_mode = fields.taxMode.value;
  const total_paid = tax_mode === 'included'
    ? accommodation_amount + cleaning_fee
    : accommodation_amount + cleaning_fee + tourist_tax_total;

  const payload = {
    invoice_number: invoiceNumber,
    invoice_year,
    invoice_sequence,
    invoice_date: fields.invoiceDate.value,
    guest_name: fields.guestName.value.trim(),
    guest_email: fields.guestEmail.value.trim(),
    room_name: getRoomValue(),
    checkin_date: fields.checkinDate.value,
    checkout_date: fields.checkoutDate.value,
    nights,
    guests,
    accommodation_amount,
    cleaning_fee,
    tourist_tax_rate,
    tourist_tax_total,
    tax_mode,
    total_paid,
    payment_method: getPaymentValue(),
    created_by: session.user.id
  };

  let result;
  if (currentInvoiceId) {
    result = await supabaseClient
      .from('invoices')
      .update(payload)
      .eq('id', currentInvoiceId)
      .select()
      .single();
  } else {
    result = await supabaseClient
      .from('invoices')
      .insert([payload])
      .select()
      .single();
  }

  if (result.error) {
    saveMessage.textContent = result.error.message;
    return;
  }

  currentInvoiceId = result.data.id;
  saveMessage.textContent = translations[currentLang].saved;
  await loadInvoices();
}

async function loadInvoices() {
  invoiceList.innerHTML = `<p class="muted">${translations[currentLang].loading}</p>`;

  const { data, error } = await supabaseClient
    .from('invoices')
    .select('*')
    .order('invoice_year', { ascending: false })
    .order('invoice_sequence', { ascending: false });

  if (error) {
    invoiceList.innerHTML = `<p class="muted">${error.message}</p>`;
    return;
  }

  if (!data.length) {
    invoiceList.innerHTML = `<p class="muted">${translations[currentLang].noInvoices}</p>`;
    return;
  }

  invoiceList.innerHTML = '';
  data.forEach(invoice => {
    const item = document.createElement('div');
    item.className = 'invoice-item';
    item.innerHTML = `
      <strong>${invoice.invoice_number}</strong>
      <span>${invoice.guest_name}</span><br>
      <span class="muted">${formatDateForLang(invoice.invoice_date, currentLang)} · €${Number(invoice.total_paid).toFixed(2)}</span>
    `;
    item.addEventListener('click', () => loadInvoiceIntoForm(invoice));
    invoiceList.appendChild(item);
  });
}

function loadInvoiceIntoForm(invoice) {
  currentInvoiceId = invoice.id;
  manualNightsOverride = true;

  fields.invoiceNumber.value = invoice.invoice_number;
  fields.invoiceDate.value = invoice.invoice_date;
  fields.guestName.value = invoice.guest_name || '';
  fields.guestEmail.value = invoice.guest_email || '';

  const knownRooms = [
    translations.en.roomOption1, translations.en.roomOption2,
    translations.nl.roomOption1, translations.nl.roomOption2
  ];

  if (knownRooms.includes(invoice.room_name)) {
    if (invoice.room_name === translations.en.roomOption1 || invoice.room_name === translations.nl.roomOption1) {
      fields.roomName.value = currentLang === 'nl' ? translations.nl.roomOption1 : translations.en.roomOption1;
    } else {
      fields.roomName.value = currentLang === 'nl' ? translations.nl.roomOption2 : translations.en.roomOption2;
    }
    fields.customRoomName.value = '';
  } else {
    fields.roomName.value = 'custom';
    fields.customRoomName.value = invoice.room_name || '';
  }

  fields.checkinDate.value = invoice.checkin_date;
  fields.checkoutDate.value = invoice.checkout_date;
  fields.nights.value = invoice.nights;
  fields.guests.value = invoice.guests;
  fields.accommodationAmount.value = invoice.accommodation_amount;
  fields.cleaningFee.value = invoice.cleaning_fee;
  fields.touristTaxRate.value = invoice.tourist_tax_rate;
  fields.taxMode.value = invoice.tax_mode;

  const knownPayments = [
    translations.en.payBooking, translations.en.payAirbnb,
    translations.nl.payBooking, translations.nl.payAirbnb
  ];

  if (knownPayments.includes(invoice.payment_method)) {
    if (invoice.payment_method === translations.en.payBooking || invoice.payment_method === translations.nl.payBooking) {
      fields.paymentMethod.value = currentLang === 'nl' ? translations.nl.payBooking : translations.en.payBooking;
    } else {
      fields.paymentMethod.value = currentLang === 'nl' ? translations.nl.payAirbnb : translations.en.payAirbnb;
    }
    fields.customPaymentMethod.value = '';
  } else {
    fields.paymentMethod.value = 'custom';
    fields.customPaymentMethod.value = invoice.payment_method || '';
  }

  toggleCustomFields();
  updatePreview();
  saveMessage.textContent = '';
}

function updateTexts() {
  const t = translations[currentLang];

  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  document.getElementById('pageTitle').textContent = t.pageTitle;
  document.getElementById('pageSubtitle').textContent = t.pageSubtitle;
  document.getElementById('loginTitle').textContent = t.loginTitle;
  document.getElementById('loginText').textContent = t.loginText;
  document.getElementById('labelLoginEmail').textContent = t.loginEmail;
  document.getElementById('loginBtn').textContent = t.loginBtn;
  document.getElementById('logoutBtn').textContent = t.logout;
  document.getElementById('formTitle').textContent = t.formTitle;
  document.getElementById('newInvoiceBtn').textContent = t.newInvoice;
  document.getElementById('labelInvoiceNumber').textContent = t.invoiceNumber;
  document.getElementById('labelInvoiceDate').textContent = t.invoiceDate;
  document.getElementById('labelGuestName').textContent = t.guestName;
  document.getElementById('labelGuestEmail').textContent = t.guestEmail;
  document.getElementById('labelRoomName').textContent = t.roomName;
  document.getElementById('labelCustomRoomName').textContent = t.customRoomName;
  document.getElementById('labelCheckin').textContent = t.checkin;
  document.getElementById('labelCheckout').textContent = t.checkout;
  document.getElementById('labelNights').textContent = t.nights;
  document.getElementById('labelGuests').textContent = t.guests;
  document.getElementById('labelAccommodation').textContent = t.accommodation;
  document.getElementById('labelCleaning').textContent = t.cleaning;
  document.getElementById('labelTouristTaxRate').textContent = t.touristTaxRate;
  document.getElementById('labelTaxMode').textContent = t.taxMode;
  document.getElementById('labelPaymentMethod').textContent = t.paymentMethod;
  document.getElementById('labelCustomPayment').textContent = t.customPayment;
  document.getElementById('saveBtn').textContent = t.save;
  document.getElementById('printBtn').textContent = t.print;
  document.getElementById('savedInvoicesTitle').textContent = t.savedInvoices;

  const currentRoom = fields.roomName.value;
  fields.roomName.innerHTML = `
    <option value="${t.roomOption1}">${t.roomOption1}</option>
    <option value="${t.roomOption2}">${t.roomOption2}</option>
    <option value="custom">${t.roomOptionCustom}</option>
  `;
  if (currentRoom === 'custom') {
    fields.roomName.value = 'custom';
  }

  const currentPayment = fields.paymentMethod.value;
  fields.paymentMethod.innerHTML = `
    <option value="${t.payBooking}">${t.payBooking}</option>
    <option value="${t.payAirbnb}">${t.payAirbnb}</option>
    <option value="custom">${t.payCustom}</option>
  `;
  if (currentPayment === 'custom') {
    fields.paymentMethod.value = 'custom';
  }

  fields.taxMode.innerHTML = `
    <option value="included">${t.taxModeIncluded}</option>
    <option value="excluded">${t.taxModeExcluded}</option>
  `;
}

function updatePreview() {
  const t = translations[currentLang];
  autoUpdateNights();

  const nights = Number(fields.nights.value || 0);
  const guests = Number(fields.guests.value || 1);
  const accommodation = Number(fields.accommodationAmount.value || 0);
  const cleaning = Number(fields.cleaningFee.value || 0);
  const touristTaxRate = Number(fields.touristTaxRate.value || 0);
  const touristTaxTotal = nights * guests * touristTaxRate;
  const total = fields.taxMode.value === 'included'
    ? accommodation + cleaning
    : accommodation + cleaning + touristTaxTotal;

  document.getElementById('previewInvoiceTitle').textContent = t.invoiceTitle;
  document.getElementById('previewLabelInvoiceNumber').textContent = t.labelInvoiceNumber;
  document.getElementById('previewLabelInvoiceDate').textContent = t.labelDate;
  document.getElementById('previewSectionGuest').textContent = t.sectionGuest;
  document.getElementById('previewSectionStay').textContent = t.sectionStay;
  document.getElementById('previewLabelRoom').textContent = t.labelRoom;
  document.getElementById('previewLabelCheckin2').textContent = t.labelCheckin;
  document.getElementById('previewLabelCheckout2').textContent = t.labelCheckout;
  document.getElementById('previewLabelNights2').textContent = t.labelNights;
  document.getElementById('previewLabelGuests2').textContent = t.labelGuests;
  document.getElementById('previewSectionDescription').textContent = t.sectionDescription;
  document.getElementById('previewDescription').textContent = t.description;
  document.getElementById('previewSectionPrice').textContent = t.sectionPrice;
  document.getElementById('previewLabelAccommodation').textContent = t.labelAccommodation;
  document.getElementById('previewLabelCleaning').textContent = t.labelCleaning;
  document.getElementById('previewLabelTaxRate').textContent = t.labelTaxRate;
  document.getElementById('previewLabelTaxTotal').textContent =
    fields.taxMode.value === 'included' ? t.labelTaxIncluded : t.labelTaxAdded;
  document.getElementById('previewLabelTotal').textContent = t.labelTotal;
  document.getElementById('previewSectionPayment').textContent = t.sectionPayment;
  document.getElementById('previewNote').textContent = t.note;

  document.getElementById('previewInvoiceNumber').textContent = fields.invoiceNumber.value || '—';
  document.getElementById('previewInvoiceDate').textContent = formatDateForLang(fields.invoiceDate.value, currentLang);
  document.getElementById('previewGuestName').textContent = fields.guestName.value || '—';
  document.getElementById('previewGuestEmail').textContent = fields.guestEmail.value || '';
  document.getElementById('previewGuestEmail').style.display = fields.guestEmail.value ? 'block' : 'none';

  document.getElementById('previewRoomName').textContent = getRoomValue() || '—';
  document.getElementById('previewCheckin').textContent = formatDateForLang(fields.checkinDate.value, currentLang);
  document.getElementById('previewCheckout').textContent = formatDateForLang(fields.checkoutDate.value, currentLang);
  document.getElementById('previewNights').textContent = nights || '—';
  document.getElementById('previewGuests').textContent = guests;

  document.getElementById('previewAccommodation').textContent = formatEuro(accommodation);
  document.getElementById('previewCleaning').textContent = formatEuro(cleaning);
  document.getElementById('previewTouristTaxRate').textContent = `${formatEuro(touristTaxRate)} × ${guests} × ${nights}`;
  document.getElementById('previewTouristTax').textContent = formatEuro(touristTaxTotal);
  document.getElementById('previewTotal').textContent = formatEuro(total);
  document.getElementById('previewPaymentMethod').textContent = getPaymentValue() || '—';
}

async function prepareNewInvoice() {
  clearForm();
  fields.invoiceDate.value = todayISO();
  fields.invoiceNumber.value = await getNextInvoiceNumber();
  updatePreview();
  saveMessage.textContent = '';
}

loginBtn.addEventListener('click', async () => {
  const email = loginEmail.value.trim();
  if (!email) {
    loginMessage.textContent = translations[currentLang].enterEmail;
    return;
  }
  await sendMagicLink(email);
});

logoutBtn.addEventListener('click', signOut);
saveBtn.addEventListener('click', saveInvoice);
printBtn.addEventListener('click', () => window.print());
newInvoiceBtn.addEventListener('click', prepareNewInvoice);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    updateTexts();
    toggleCustomFields();
    updatePreview();
    loadInvoices();
  });
});

fields.roomName.addEventListener('change', () => {
  toggleCustomFields();
  updatePreview();
});

fields.paymentMethod.addEventListener('change', () => {
  toggleCustomFields();
  updatePreview();
});

fields.checkinDate.addEventListener('change', () => {
  manualNightsOverride = false;
  autoUpdateNights();
  updatePreview();
});

fields.checkoutDate.addEventListener('change', () => {
  manualNightsOverride = false;
  autoUpdateNights();
  updatePreview();
});

fields.nights.addEventListener('input', () => {
  manualNightsOverride = true;
  updatePreview();
});

[
  'invoiceNumber', 'invoiceDate', 'guestName', 'guestEmail', 'customRoomName',
  'guests', 'accommodationAmount', 'cleaningFee', 'touristTaxRate',
  'taxMode', 'customPaymentMethod'
].forEach(id => {
  fields[id].addEventListener('input', updatePreview);
  fields[id].addEventListener('change', updatePreview);
});

async function init() {
  updateTexts();
  toggleCustomFields();

  const session = await getSession();
  if (!session) {
    showLogin();
    return;
  }

  showApp();
  await prepareNewInvoice();
  await loadInvoices();
}

init();
