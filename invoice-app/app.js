import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://rmvfrgpampxduldzfwxi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Y94dITMxDgGpH6ZnINbWjw_5w5KMW_c';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

const roomName = document.getElementById('roomName');
const customRoomWrap = document.getElementById('customRoomWrap');
const paymentMethod = document.getElementById('paymentMethod');
const customPaymentWrap = document.getElementById('customPaymentWrap');

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

let currentInvoiceId = null;

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

function getRoomValue() {
  return fields.roomName.value === 'Custom'
    ? fields.customRoomName.value.trim()
    : fields.roomName.value;
}

function getPaymentValue() {
  return fields.paymentMethod.value === 'Custom'
    ? fields.customPaymentMethod.value.trim()
    : fields.paymentMethod.value;
}

function calculateNights() {
  const checkin = fields.checkinDate.value;
  const checkout = fields.checkoutDate.value;
  if (!checkin || !checkout) return;

  const start = new Date(checkin + 'T00:00:00');
  const end = new Date(checkout + 'T00:00:00');
  const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
  if (diff > 0) fields.nights.value = diff;
}

function toggleCustomFields() {
  customRoomWrap.classList.toggle('hidden', fields.roomName.value !== 'Custom');
  customPaymentWrap.classList.toggle('hidden', fields.paymentMethod.value !== 'Custom');
}

function clearForm() {
  currentInvoiceId = null;
  fields.invoiceDate.value = todayISO();
  fields.guestName.value = '';
  fields.guestEmail.value = '';
  fields.roomName.value = 'Spacious Room (Garden View)';
  fields.customRoomName.value = '';
  fields.checkinDate.value = '';
  fields.checkoutDate.value = '';
  fields.nights.value = '';
  fields.guests.value = 1;
  fields.accommodationAmount.value = '';
  fields.cleaningFee.value = '5.00';
  fields.touristTaxRate.value = '3.71';
  fields.taxMode.value = 'included';
  fields.paymentMethod.value = 'Paid via Booking.com';
  fields.customPaymentMethod.value = '';
  toggleCustomFields();
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

  if (error) {
    loginMessage.textContent = error.message;
  } else {
    loginMessage.textContent = 'Check your email for the login link.';
  }
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

async function getNextInvoiceNumber() {
  const year = new Date(fields.invoiceDate.value || todayISO()).getFullYear();

  const { data, error } = await supabaseClient
    .from('invoices')
    .select('invoice_sequence')
    .eq('invoice_year', year)
    .order('invoice_sequence', { ascending: false })
    .limit(1);

  if (error || !data) {
    return `${year}-001`;
  }

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
    saveMessage.textContent = 'You are not logged in.';
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
  const total_paid =
    tax_mode === 'included'
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
  saveMessage.textContent = 'Invoice saved.';
  await loadInvoices();
}

async function loadInvoices() {
  invoiceList.innerHTML = 'Loading...';

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
    invoiceList.innerHTML = `<p class="muted">No invoices yet.</p>`;
    return;
  }

  invoiceList.innerHTML = '';
  data.forEach(invoice => {
    const item = document.createElement('div');
    item.className = 'invoice-item';
    item.innerHTML = `
      <strong>${invoice.invoice_number}</strong>
      <span>${invoice.guest_name}</span><br>
      <span class="muted">${invoice.invoice_date} · €${Number(invoice.total_paid).toFixed(2)}</span>
    `;
    item.addEventListener('click', () => loadInvoiceIntoForm(invoice));
    invoiceList.appendChild(item);
  });
}

function loadInvoiceIntoForm(invoice) {
  currentInvoiceId = invoice.id;
  fields.invoiceNumber.value = invoice.invoice_number;
  fields.invoiceDate.value = invoice.invoice_date;
  fields.guestName.value = invoice.guest_name || '';
  fields.guestEmail.value = invoice.guest_email || '';

  if (invoice.room_name === 'Spacious Room (Garden View)' || invoice.room_name === 'Cozy Room (Street Side)') {
    fields.roomName.value = invoice.room_name;
    fields.customRoomName.value = '';
  } else {
    fields.roomName.value = 'Custom';
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

  if (invoice.payment_method === 'Paid via Booking.com' || invoice.payment_method === 'Paid via Airbnb') {
    fields.paymentMethod.value = invoice.payment_method;
    fields.customPaymentMethod.value = '';
  } else {
    fields.paymentMethod.value = 'Custom';
    fields.customPaymentMethod.value = invoice.payment_method || '';
  }

  toggleCustomFields();
  saveMessage.textContent = '';
}

async function prepareNewInvoice() {
  clearForm();
  fields.invoiceDate.value = todayISO();
  fields.invoiceNumber.value = await getNextInvoiceNumber();
  saveMessage.textContent = '';
}

loginBtn.addEventListener('click', async () => {
  const email = loginEmail.value.trim();
  if (!email) {
    loginMessage.textContent = 'Enter your email address.';
    return;
  }
  await sendMagicLink(email);
});

logoutBtn.addEventListener('click', signOut);
saveBtn.addEventListener('click', saveInvoice);
printBtn.addEventListener('click', () => window.print());
newInvoiceBtn.addEventListener('click', prepareNewInvoice);

roomName.addEventListener('change', toggleCustomFields);
paymentMethod.addEventListener('change', toggleCustomFields);
fields.checkinDate.addEventListener('change', calculateNights);
fields.checkoutDate.addEventListener('change', calculateNights);

async function init() {
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
