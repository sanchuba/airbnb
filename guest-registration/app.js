import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://rmvfrgpampxduldzfwxi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Y94dITMxDgGpH6ZnINbWjw_5w5KMW_c';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const t = {
  en: {
    pageTitle: 'Guest Information', intro: 'Please complete your guest information before arrival.',
    loading: 'Loading your registration form…', invalid: 'This registration link is invalid, expired, or has already been used. Please contact your hosts for a new link.',
    already: 'This registration has already been submitted. Thank you!', success: 'Thank you! Your guest information has been submitted successfully. We look forward to welcoming you to Nijmegen Guest Rooms.',
    guestInfo: 'Guest information', fullName: 'Full name', city: 'City', country: 'Country', checkin: 'Check-in date', checkout: 'Check-out date',
    invoice: 'Invoice', wantInvoice: 'I would like to receive an invoice by email.', personal: 'Personal invoice', company: 'Company invoice', email: 'Email address', companyName: 'Company name', companyAddress: 'Company address', vat: 'VAT number (if applicable)',
    declaration: 'Guest declaration', declarationText: 'I confirm that the information I have provided is complete and correct.', privacy: 'Your information is used for guest registration and administration. Invoice details are used only when an invoice is requested.',
    submit: 'Submit guest information', required: 'Please complete all required fields.', invoiceEmail: 'Please enter the email address where the invoice should be sent.', companyRequired: 'Please enter the company name.', declarationRequired: 'Please confirm that the information is complete and correct.', submitting: 'Submitting…', homeButton: 'Visit Nijmegen Guest Rooms'
  },
  nl: {
    pageTitle: 'Gasteninformatie', intro: 'Vul je gastgegevens vóór aankomst in.',
    loading: 'Je registratieformulier wordt geladen…', invalid: 'Deze registratielink is ongeldig, verlopen of al gebruikt. Neem contact op met je hosts voor een nieuwe link.',
    already: 'Deze registratie is al ingevuld. Bedankt!', success: 'Bedankt! Je gastgegevens zijn succesvol verzonden. We kijken ernaar uit je te verwelkomen bij Nijmegen Guest Rooms.',
    guestInfo: 'Gastgegevens', fullName: 'Volledige naam', city: 'Woonplaats', country: 'Land', checkin: 'Incheckdatum', checkout: 'Uitcheckdatum',
    invoice: 'Factuur', wantInvoice: 'Ik wil graag een factuur per e-mail ontvangen.', personal: 'Particuliere factuur', company: 'Zakelijke factuur', email: 'E-mailadres', companyName: 'Bedrijfsnaam', companyAddress: 'Bedrijfsadres', vat: 'Btw-identificatienummer (indien van toepassing)',
    declaration: 'Verklaring van de gast', declarationText: 'Ik bevestig dat de door mij ingevulde gegevens volledig en correct zijn.', privacy: 'Je gegevens worden gebruikt voor gastenregistratie en administratieve doeleinden. Factuurgegevens worden alleen gebruikt wanneer een factuur wordt aangevraagd.',
    submit: 'Gastgegevens verzenden', required: 'Vul alle verplichte velden in.', invoiceEmail: 'Vul het e-mailadres in waar de factuur naartoe moet.', companyRequired: 'Vul de bedrijfsnaam in.', declarationRequired: 'Bevestig dat de gegevens volledig en correct zijn.', submitting: 'Verzenden…', homeButton: 'Naar Nijmegen Guest Rooms'
  }
};

let currentLang = localStorage.getItem('guestRegistrationLanguage') || 'en';
let token = new URLSearchParams(window.location.search).get('token');

const el = id => document.getElementById(id);
const form = el('guestForm');
const fields = {
  fullName: el('fullName'), city: el('city'), country: el('country'),
  checkinDate: el('checkinDate'), checkoutDate: el('checkoutDate'), invoiceRequested: el('invoiceRequested'), email: el('email'),
  companyName: el('companyName'), companyAddress: el('companyAddress'), vatNumber: el('vatNumber'), declarationAccepted: el('declarationAccepted')
};

const COUNTRY_CODES=['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN', 'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM', 'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IR', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MR', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NZ', 'OM', 'PA', 'PE', 'PG', 'PH', 'PK', 'PL', 'PS', 'PT', 'PW', 'PY', 'QA', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SI', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SY', 'SZ', 'TD', 'TG', 'TH', 'TJ', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VN', 'VU', 'WS', 'YE', 'ZA', 'ZM', 'ZW'];
function populateCountries(select, selected=''){
  const dn=new Intl.DisplayNames([currentLang==='nl'?'nl':'en'],{type:'region'});
  const placeholder=currentLang==='nl'?'Selecteer een land':'Select a country';
  const items=COUNTRY_CODES.map(code=>({code,name:dn.of(code)})).sort((a,b)=>a.name.localeCompare(b.name,currentLang));
  select.innerHTML='<option value="">'+placeholder+'</option>'+items.map(i=>'<option value="'+i.code+'">'+i.name+'</option>').join('');
  if(selected) select.value=selected;
}

function invoiceType() {
  return document.querySelector('input[name="invoiceType"]:checked')?.value || 'personal';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('guestRegistrationLanguage', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const x = t[lang];
  el('pageTitle').textContent=x.pageTitle; el('pageIntro').textContent=x.intro;
  el('guestInfoTitle').textContent=x.guestInfo; el('labelFullName').textContent=x.fullName;
  el('labelCity').textContent=x.city; el('labelCountry').textContent=x.country; populateCountries(fields.country, fields.country.value);
  el('labelCheckin').textContent=x.checkin; el('labelCheckout').textContent=x.checkout;
  el('invoiceTitle').textContent=x.invoice; el('invoiceRequestedText').textContent=x.wantInvoice; el('personalInvoiceText').textContent=x.personal; el('companyInvoiceText').textContent=x.company;
  el('labelEmail').textContent=x.email; el('labelCompanyName').textContent=x.companyName; el('labelCompanyAddress').textContent=x.companyAddress; el('labelVatNumber').textContent=x.vat;
  el('declarationTitle').textContent=x.declaration; el('declarationText').textContent=x.declarationText; el('privacyText').textContent=x.privacy; el('submitBtn').textContent=x.submit; el('successHomeBtn').textContent=x.homeButton;
  if (!form.classList.contains('hidden')) return;
  if (!el('loadingState').classList.contains('hidden')) el('loadingState').textContent=x.loading;
}

function toggleInvoiceFields() {
  el('invoiceFields').classList.toggle('hidden', !fields.invoiceRequested.checked);
  el('companyFields').classList.toggle('hidden', !fields.invoiceRequested.checked || invoiceType() !== 'company');
}

function clearInvalid() { document.querySelectorAll('.invalid').forEach(n => n.classList.remove('invalid')); }
function markInvalid(input) { input.closest('.field')?.classList.add('invalid'); }

function validate() {
  clearInvalid();
  const x=t[currentLang];
  for (const f of [fields.fullName,fields.city,fields.country]) {
    if (!f.value.trim()) { markInvalid(f); return x.required; }
  }
  if (fields.invoiceRequested.checked) {
    if (!fields.email.value.trim() || !fields.email.validity.valid) { markInvalid(fields.email); return x.invoiceEmail; }
    if (invoiceType()==='company' && !fields.companyName.value.trim()) { markInvalid(fields.companyName); return x.companyRequired; }
  }
  if (!fields.declarationAccepted.checked) return x.declarationRequired;
  return null;
}

async function loadInvite() {
  const x=t[currentLang];
  if (!token) {
    el('loadingState').classList.add('hidden'); el('invalidState').textContent=x.invalid; el('invalidState').classList.remove('hidden'); return;
  }
  const { data, error } = await supabaseClient.rpc('get_guest_registration_invite', { p_token: token });
  el('loadingState').classList.add('hidden');
  const invite = Array.isArray(data) ? data[0] : null;
  if (error || !invite) { el('invalidState').textContent=x.invalid; el('invalidState').classList.remove('hidden'); return; }
  if (invite.already_submitted) { el('successText').textContent=x.already; el('successState').classList.remove('hidden'); return; }
  if (!invite.valid) { el('invalidState').textContent=x.invalid; el('invalidState').classList.remove('hidden'); return; }
  fields.checkinDate.value = invite.checkin_date || '';
  fields.checkoutDate.value = invite.checkout_date || '';
  form.classList.remove('hidden');
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const validation = validate();
  if (validation) { el('formMessage').textContent=validation; return; }
  const x=t[currentLang];
  el('formMessage').textContent=''; el('submitBtn').disabled=true; el('submitBtn').textContent=x.submitting;
  const params = {
    p_token: token,
    p_full_name: fields.fullName.value.trim(), p_home_address: '', p_postal_code: '',
    p_city: fields.city.value.trim(), p_country: fields.country.value.trim(), p_invoice_requested: fields.invoiceRequested.checked,
    p_invoice_type: fields.invoiceRequested.checked ? invoiceType() : null,
    p_email: fields.invoiceRequested.checked ? fields.email.value.trim() : null,
    p_company_name: fields.invoiceRequested.checked && invoiceType()==='company' ? fields.companyName.value.trim() : null,
    p_company_address: fields.invoiceRequested.checked && invoiceType()==='company' ? fields.companyAddress.value.trim() : null,
    p_vat_number: fields.invoiceRequested.checked && invoiceType()==='company' ? fields.vatNumber.value.trim() : null,
    p_declaration_accepted: fields.declarationAccepted.checked
  };
  const { error } = await supabaseClient.rpc('submit_guest_registration', params);
  if (error) {
    el('formMessage').textContent=error.message; el('submitBtn').disabled=false; el('submitBtn').textContent=x.submit; return;
  }
  form.classList.add('hidden'); el('successText').textContent=x.success; el('successState').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
});

fields.invoiceRequested.addEventListener('change',toggleInvoiceFields);
document.querySelectorAll('input[name="invoiceType"]').forEach(r=>r.addEventListener('change',toggleInvoiceFields));
document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
Object.values(fields).forEach(f=>f?.addEventListener('input',()=>{ f.closest('.field')?.classList.remove('invalid'); el('formMessage').textContent=''; }));

setLanguage(currentLang);
toggleInvoiceFields();
loadInvite();
