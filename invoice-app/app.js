import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://rmvfrgpampxduldzfwxi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Y94dITMxDgGpH6ZnINbWjw_5w5KMW_c';
const PUBLIC_FORM_BASE = 'https://nijmegenguestrooms.com/guest-registration/';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const tr = {
  en: {
    pageTitle:'Guest & Invoice Admin',pageSubtitle:'Nijmegen Guest Rooms – Private administration',loginTitle:'Sign in',loginText:'Only authorized users can access the administration.',loginEmail:'Email',loginBtn:'Send verification code',loginCode:'Verification code',loginCodeIntro:'Enter the verification code sent to your email.',verifyLogin:'Verify & sign in',resendCode:'Resend code',changeEmail:'Use another email',codeSent:'Verification code sent. Check your email.',codeResent:'A new verification code has been sent.',invalidCode:'The verification code is invalid or has expired.',authRateTitle:'Too many codes requested',authRateText:'Please wait a little before requesting another verification code.',resendIn:'Resend code in {seconds}s',logout:'Log out',
    reservations:'Reservations',reservationsSubtitle:'Read-only overview from Airbnb and Booking.com calendars.',syncCalendars:'Sync calendars',syncingCalendars:'Syncing calendars…',syncedCalendars:'Calendars synced.',syncFailed:'Calendar sync failed',registrationNotCreated:'Registration not created',registrationLinkReady:'Registration link ready',registrationSubmitted:'Registration submitted',createRegistrationLink:'Create registration link',copyRegistrationLink:'Copy link',showQr:'Show QR code',qrTitle:'Scan to complete your guest registration',qrSubtitle:'Open your camera and scan the QR code.',qrCopy:'Copy registration link',completeManually:'Complete registration manually',printPaperForm:'Print prefilled paper form',manualFromReservation:'Manual registration linked to this reservation.',openGuest:'Open guest',openAirbnb:'Open in Airbnb ↗',moreActions:'More',lessActions:'Hide options',mobileGuests:'Guests',mobileInvoices:'Invoices',mobileMore:'More',mobileBack:'Back',mobileMoreSync:'Sync calendars',mobileMorePaper:'Add paper registration',mobileMoreLink:'Create manual guest link',mobileLanguage:'Language',mobileAccount:'Account',mobileSignOut:'Sign out',cancelShort:'Cancel',clearSearch:'Clear search',unsavedShort:'Unsaved changes',saveShort:'Save',savingShort:'Saving…',roomCozyShort:'Cozy room',roomSpaciousShort:'Spacious room',nightsWord:'nights',navReservations:'Reservations',navCalendar:'Calendar',calendarTitle:'Calendar',calendarSubtitle:'Both rooms, every reservation, one clear timeline.',calendarToday:'Today',calendarBlocked:'Blocked',calendarHint:'Tap a reservation for details.',calendarOpenReservation:'Open reservation',calendarClose:'Close',calendarRegistration:'Registration',calendarInvoice:'Invoice',calendarId:'ID',calendarSubmitted:'Submitted',calendarNotSubmitted:'Not submitted',calendarVerified:'Verified',calendarNotVerified:'Not verified',calendarNone:'None',calendarBookingReservation:'Booking.com reservation',calendarBothRooms:'Both rooms',calendarRoomHint:'Tap a booking to see its details.',calendarOpenRoom:'Open full month',calendarMonthView:'Month',calendarBothView:'Both',noReservations:'No reservations match this view.',reservationFilterUpcoming:'Upcoming',reservationFilterArrivingSoon:'Arriving soon',reservationFilterStaying:'Staying now',reservationFilterId:'ID to verify',reservationFilterInvoice:'Invoice to create',reservationFilterPast:'Past',reservationFilterRemoved:'Removed / cancelled',reservationFilterAll:'All',reservationRemoved:'Removed / cancelled',possibleExistingRegistration:'Possible existing registration',linkExistingGuest:'Link existing guest',linkSuggestedGuest:'Link {name}',selectExistingGuest:'Select an existing guest registration',confirmLinkGuest:'Link {name} to this reservation?',linkedExistingGuest:'Existing guest registration linked.',noUnlinkedGuests:'No unlinked guest registrations are available.',exactMatch:'Exact dates',registrations:'Guest registrations',registrationArchiveSubtitle:'Detailed guest administration and archive.',paper:'Add paper registration',manualInvite:'＋ Create manual guest link',invite:'Create manual guest link',manualInviteHint:'Use this only for a guest without an Airbnb or Booking.com reservation.',cancel:'Cancel',inviteBooking:'Booking reference (optional)',invitePlatform:'Booking platform',checkin:'Check-in',checkout:'Check-out',createLink:'Create secure link',copy:'Copy link',searchReg:'Search registrations',searchRegPh:'Search by name, email or booking reference',
    regEditor:'Guest registration',close:'Close',fullName:'Full name',city:'City',country:'Country',bookingRef:'Booking reference (optional)',bookingPlatform:'Booking platform',platformNotSelected:'Not selected',platformDirectOther:'Direct / Other',platformLinkedHint:'Automatically linked from the reservation.',invoiceRequested:'Invoice requested',invoiceType:'Invoice type',personal:'Personal',company:'Company',email:'Email',companyName:'Company name',companyAddress:'Company address',vat:'VAT number (optional)',guestOccupancy:'Stay occupancy',guestOccupancyHint:'Register only the number of overnight guests. No personal details are required for additional guests.',guestCount:'Number of guests',guestOne:'1 guest',guestTwo:'2 guests',regAdditionalGuestNights:'Additional guest nights',additionalGuestNightsHint:'Defaults to the main guest\'s full stay, but can be reduced.',regAdditionalGuestRate:'Additional guest fee (€ per night, incl. tourist tax)',regAdditionalGuestPayment:'Additional guest payment',regAdditionalGuestTotal:'Additional guest total',regAdditionalGuestPaid:'Additional guest fee paid',cash:'Cash',paypal:'PayPal',additionalGuestFee:'Additional overnight guest fee (€)',additionalGuestNights:'Additional guest nights',additionalGuestLine:'Additional overnight guest',additionalGuestPaidPayPal:'Paid via PayPal',additionalGuestPaidCash:'Paid in cash',identity:'Identification check – host only',idShown:'Identification shown',notSelected:'Not selected',passport:'Passport',idCard:'ID card',drivers:'Driver\'s licence',otherId:'Other valid ID',verified:'Identity verified',saveRegistration:'Save registration',useInvoice:'Use for invoice',deleteRegistration:'Delete registration',savedReg:'Registration saved.',deletedReg:'Registration deleted.',confirmDeleteReg:'Delete this guest registration? This cannot be undone.',quickDeleteReg:'Delete registration',quickDeleteInvoice:'Delete invoice',linkCreated:'Secure registration link created.',copied:'Link copied.',navRegistrations:'Guest registrations',navGuestDetails:'Guest details',navInvoiceDetails:'Invoice details',navSavedInvoices:'Saved invoices',
    formTitle:'Invoice Details',newInvoice:'New invoice',duplicate:'Duplicate invoice',invoiceNumber:'Invoice number',invoiceDate:'Invoice date',guestName:'Guest name',guestAddress:'Guest address',guestPostal:'Postal code',guestCity:'City',guestCountry:'Country',guestEmail:'Guest email (optional)',room:'Room name',customRoom:'Custom room name',nights:'Nights',guests:'Guests',accommodation:'Accommodation (€)',cleaning:'Cleaning fee (€)',tourist:'Tourist tax rate (€ per guest per night)',taxMode:'Tourist tax handling',taxIncluded:'Accommodation amount already includes tourist tax',taxExcluded:'Tourist tax should be added on top of accommodation',payment:'Payment',customPayment:'Custom payment method',saveInvoice:'Save invoice',deleteInvoice:'Delete invoice',print:'Print / Save as PDF',savedInvoices:'Saved Invoices',searchInvoices:'Search / filter invoices',searchInvoicePh:'Search by invoice number, guest name, company, email or booking reference',
    invoiceTitle:'INVOICE',labelInvoiceNumber:'Invoice number:',labelDate:'Date:',billed:'Billed to',labelVat:'VAT number:',labelBooking:'Booking reference:',stay:'Stay Details',labelRoom:'Room:',labelCheckin:'Check-in:',labelCheckout:'Check-out:',labelNights:'Nights:',labelGuests:'Guests:',descriptionTitle:'Description',description:'Accommodation in private room (shared home)',price:'Price Breakdown',labelAccommodation:'Accommodation',labelCleaning:'Cleaning fee',labelTaxRate:'Tourist tax rate',labelTaxIncluded:'Tourist tax included',labelTaxAdded:'Tourist tax added',labelTotal:'Total amount paid',paymentTitle:'Payment',note:'This is a private rental. VAT is not applicable.',
    cozy:'Cozy Room (Street Side)',spacious:'Spacious Room (Garden View)',customRoomOpt:'Custom room name...',booking:'Paid via Booking.com',airbnb:'Paid via Airbnb',customPayOpt:'Custom payment method...',checkEmail:'Check your email for the login link.',denied:'Access denied. This email address is not authorized.',savedInvoice:'Invoice saved.',deleted:'Invoice deleted.',duplicated:'Invoice duplicated. Save it as a new invoice.',required:'Please fill in all required invoice fields.',noRegs:'No guest registrations match this view.',noInvoices:'No invoices yet.',loading:'Loading…',backToTop:'Back to top',attentionTitle:'Needs attention',attentionSubtitle:'Quick overview of upcoming and unfinished guest tasks.',attentionArriving:'Arriving soon',attentionId:'ID to verify',attentionInvoices:'Invoices to create',attentionClear:'Nothing needs your attention',calendarUpdatedJustNow:'✓ Calendars updated just now',calendarUpdatedMinutes:'Calendars updated {minutes} min ago',calendarUpdatedHour:'Calendars updated 1 hour ago',calendarUpdatedHours:'Calendars updated {hours} hours ago',filterAll:'All',filterArrivingSoon:'Arriving soon',filterUpcoming:'Upcoming',filterStaying:'Staying now',filterPast:'Past',filterId:'ID to verify',filterInvoice:'Invoice to create',invoiceCreated:'Invoice created',invoicePending:'Invoice requested',openInvoice:'Open linked invoice',unsaved:'You have unsaved changes. Continue without saving?' 
  },
  nl: {
    pageTitle:'Gasten- & factuurbeheer',pageSubtitle:'Nijmegen Guest Rooms – Privé administratie',loginTitle:'Inloggen',loginText:'Alleen geautoriseerde gebruikers hebben toegang tot de administratie.',loginEmail:'E-mailadres',loginBtn:'Stuur verificatiecode',loginCode:'Verificatiecode',loginCodeIntro:'Vul de verificatiecode in die naar je e-mailadres is gestuurd.',verifyLogin:'Verifiëren & inloggen',resendCode:'Code opnieuw sturen',changeEmail:'Ander e-mailadres gebruiken',codeSent:'Verificatiecode verzonden. Controleer je e-mail.',codeResent:'Er is een nieuwe verificatiecode verzonden.',invalidCode:'De verificatiecode is ongeldig of verlopen.',authRateTitle:'Te veel codes aangevraagd',authRateText:'Wacht even voordat je opnieuw een verificatiecode aanvraagt.',resendIn:'Code opnieuw sturen over {seconds}s',logout:'Uitloggen',
    reservations:'Reserveringen',reservationsSubtitle:'Alleen-lezen overzicht uit de kalenders van Airbnb en Booking.com.',syncCalendars:'Kalenders synchroniseren',syncingCalendars:'Kalenders synchroniseren…',syncedCalendars:'Kalenders gesynchroniseerd.',syncFailed:'Kalendersynchronisatie mislukt',registrationNotCreated:'Registratie nog niet aangemaakt',registrationLinkReady:'Registratielink gereed',registrationSubmitted:'Registratie ingediend',createRegistrationLink:'Registratielink maken',copyRegistrationLink:'Link kopiëren',showQr:'Toon QR-code',qrTitle:'Scan om je gastenregistratie in te vullen',qrSubtitle:'Open de camera en scan de QR-code.',qrCopy:'Kopieer registratielink',completeManually:'Registratie handmatig voltooien',printPaperForm:'Vooringevuld papieren formulier printen',manualFromReservation:'Handmatige registratie gekoppeld aan deze reservering.',openGuest:'Gast openen',openAirbnb:'Openen in Airbnb ↗',moreActions:'Meer',lessActions:'Opties verbergen',mobileGuests:'Gasten',mobileInvoices:'Facturen',mobileMore:'Meer',mobileBack:'Terug',mobileMoreSync:'Kalenders synchroniseren',mobileMorePaper:'Papieren registratie toevoegen',mobileMoreLink:'Handmatige gastenlink maken',mobileLanguage:'Taal',mobileAccount:'Account',mobileSignOut:'Uitloggen',cancelShort:'Annuleren',clearSearch:'Zoekopdracht wissen',unsavedShort:'Niet-opgeslagen wijzigingen',saveShort:'Opslaan',savingShort:'Opslaan…',roomCozyShort:'Knusse kamer',roomSpaciousShort:'Ruime kamer',nightsWord:'nachten',navReservations:'Reserveringen',navCalendar:'Kalender',calendarTitle:'Kalender',calendarSubtitle:'Beide kamers, alle reserveringen, één duidelijk overzicht.',calendarToday:'Vandaag',calendarBlocked:'Geblokkeerd',calendarHint:'Tik op een reservering voor details.',calendarOpenReservation:'Reservering openen',calendarClose:'Sluiten',calendarRegistration:'Registratie',calendarInvoice:'Factuur',calendarId:'ID',calendarSubmitted:'Ingediend',calendarNotSubmitted:'Niet ingediend',calendarVerified:'Geverifieerd',calendarNotVerified:'Niet geverifieerd',calendarNone:'Geen',calendarBookingReservation:'Booking.com-reservering',calendarBothRooms:'Beide kamers',calendarRoomHint:'Tik op een boeking om de details te bekijken.',calendarOpenRoom:'Volledige maand openen',calendarMonthView:'Maand',calendarBothView:'Beide',noReservations:'Geen reserveringen in deze weergave.',reservationFilterUpcoming:'Aankomend',reservationFilterArrivingSoon:'Binnenkort',reservationFilterStaying:'Nu verblijvend',reservationFilterId:'ID nog controleren',reservationFilterInvoice:'Factuur te maken',reservationFilterPast:'Verleden',reservationFilterRemoved:'Verwijderd / geannuleerd',reservationFilterAll:'Alles',reservationRemoved:'Verwijderd / geannuleerd',possibleExistingRegistration:'Mogelijk bestaande registratie',linkExistingGuest:'Bestaande gast koppelen',linkSuggestedGuest:'Koppel {name}',selectExistingGuest:'Selecteer een bestaande gastenregistratie',confirmLinkGuest:'{name} aan deze reservering koppelen?',linkedExistingGuest:'Bestaande gastenregistratie gekoppeld.',noUnlinkedGuests:'Er zijn geen ongekoppelde gastenregistraties beschikbaar.',exactMatch:'Exacte data',registrations:'Gastenregistraties',registrationArchiveSubtitle:'Gedetailleerde gastenadministratie en archief.',paper:'Papieren registratie toevoegen',manualInvite:'＋ Handmatige gastenlink maken',invite:'Handmatige gastenlink maken',manualInviteHint:'Gebruik dit alleen voor een gast zonder Airbnb- of Booking.com-reservering.',cancel:'Annuleren',inviteBooking:'Boekingsreferentie (optioneel)',invitePlatform:'Boekingsplatform',checkin:'Inchecken',checkout:'Uitchecken',createLink:'Veilige link maken',copy:'Link kopiëren',searchReg:'Registraties zoeken',searchRegPh:'Zoek op naam, e-mail of boekingsreferentie',
    regEditor:'Gastenregistratie',close:'Sluiten',fullName:'Volledige naam',city:'Woonplaats',country:'Land',bookingRef:'Boekingsreferentie (optioneel)',bookingPlatform:'Boekingsplatform',platformNotSelected:'Niet geselecteerd',platformDirectOther:'Direct / Anders',platformLinkedHint:'Automatisch gekoppeld vanuit de reservering.',invoiceRequested:'Factuur aangevraagd',invoiceType:'Type factuur',personal:'Particulier',company:'Zakelijk',email:'E-mailadres',companyName:'Bedrijfsnaam',companyAddress:'Bedrijfsadres',vat:'Btw-identificatienummer (optioneel)',guestOccupancy:'Bezetting verblijf',guestOccupancyHint:'Registreer alleen het aantal overnachtende gasten. Van extra gasten zijn geen persoonsgegevens nodig.',guestCount:'Aantal gasten',guestOne:'1 gast',guestTwo:'2 gasten',regAdditionalGuestNights:'Nachten extra gast',additionalGuestNightsHint:'Standaard gelijk aan het volledige verblijf van de hoofdgast, maar kan worden verlaagd.',regAdditionalGuestRate:'Toeslag extra gast (€ per nacht, incl. toeristenbelasting)',regAdditionalGuestPayment:'Betaling extra gast',regAdditionalGuestTotal:'Totaal extra gast',regAdditionalGuestPaid:'Toeslag extra gast betaald',cash:'Contant',paypal:'PayPal',additionalGuestFee:'Toeslag extra overnachtende gast (€)',additionalGuestNights:'Extra gastnachten',additionalGuestLine:'Extra overnachtende gast',additionalGuestPaidPayPal:'Betaald via PayPal',additionalGuestPaidCash:'Contant betaald',identity:'Identiteitscontrole – alleen host',idShown:'Getoond identiteitsbewijs',notSelected:'Niet geselecteerd',passport:'Paspoort',idCard:'ID-kaart',drivers:'Rijbewijs',otherId:'Ander geldig ID',verified:'Identiteit gecontroleerd',saveRegistration:'Registratie opslaan',useInvoice:'Gebruiken voor factuur',deleteRegistration:'Registratie verwijderen',savedReg:'Registratie opgeslagen.',deletedReg:'Registratie verwijderd.',confirmDeleteReg:'Deze gastenregistratie verwijderen? Dit kan niet ongedaan worden gemaakt.',quickDeleteReg:'Registratie verwijderen',quickDeleteInvoice:'Factuur verwijderen',linkCreated:'Veilige registratielink aangemaakt.',copied:'Link gekopieerd.',navRegistrations:'Gastenregistraties',navGuestDetails:'Gastgegevens',navInvoiceDetails:'Factuurgegevens',navSavedInvoices:'Opgeslagen facturen',
    formTitle:'Factuurgegevens',newInvoice:'Nieuwe factuur',duplicate:'Factuur dupliceren',invoiceNumber:'Factuurnummer',invoiceDate:'Factuurdatum',guestName:'Naam gast',guestAddress:'Adres gast',guestPostal:'Postcode',guestCity:'Woonplaats',guestCountry:'Land',guestEmail:'E-mailadres gast (optioneel)',room:'Kamernaam',customRoom:'Aangepaste kamernaam',nights:'Aantal nachten',guests:'Aantal gasten',accommodation:'Verblijf (€)',cleaning:'Schoonmaakkosten (€)',tourist:'Toeristenbelasting (€ per gast per nacht)',taxMode:'Verwerking toeristenbelasting',taxIncluded:'Verblijfsbedrag is al inclusief toeristenbelasting',taxExcluded:'Toeristenbelasting moet bovenop het verblijfsbedrag komen',payment:'Betaling',customPayment:'Aangepaste betaalmethode',saveInvoice:'Factuur opslaan',deleteInvoice:'Factuur verwijderen',print:'Printen / Opslaan als PDF',savedInvoices:'Opgeslagen facturen',searchInvoices:'Facturen zoeken / filteren',searchInvoicePh:'Zoek op factuurnummer, gastnaam, bedrijf, e-mail of boekingsreferentie',
    invoiceTitle:'FACTUUR',labelInvoiceNumber:'Factuurnummer:',labelDate:'Datum:',billed:'Factureren aan',labelVat:'Btw-nummer:',labelBooking:'Boekingsreferentie:',stay:'Verblijfsgegevens',labelRoom:'Kamer:',labelCheckin:'Inchecken:',labelCheckout:'Uitchecken:',labelNights:'Aantal nachten:',labelGuests:'Aantal gasten:',descriptionTitle:'Omschrijving',description:'Verblijf in privékamer (gedeelde woning)',price:'Prijsopbouw',labelAccommodation:'Verblijf',labelCleaning:'Schoonmaakkosten',labelTaxRate:'Tarief toeristenbelasting',labelTaxIncluded:'Toeristenbelasting inbegrepen',labelTaxAdded:'Toeristenbelasting toegevoegd',labelTotal:'Totaal betaald',paymentTitle:'Betaling',note:'Dit betreft particuliere verhuur. Btw is niet van toepassing.',
    cozy:'Knusse kamer (straatzijde)',spacious:'Ruime kamer (tuinzijde)',customRoomOpt:'Aangepaste kamernaam...',booking:'Betaald via Booking.com',airbnb:'Betaald via Airbnb',customPayOpt:'Aangepaste betaalmethode...',checkEmail:'Controleer je e-mail voor de inloglink.',denied:'Toegang geweigerd. Dit e-mailadres is niet geautoriseerd.',savedInvoice:'Factuur opgeslagen.',deleted:'Factuur verwijderd.',duplicated:'Factuur gedupliceerd. Sla deze als nieuwe factuur op.',required:'Vul alle verplichte factuurvelden in.',noRegs:'Geen gastenregistraties in deze weergave.',noInvoices:'Nog geen facturen.',loading:'Laden…',backToTop:'Naar boven',attentionTitle:'Aandacht nodig',attentionSubtitle:'Snel overzicht van aankomende en openstaande gasttaken.',attentionArriving:'Binnenkort aankomst',attentionId:'ID nog controleren',attentionInvoices:'Facturen te maken',attentionClear:'Niets heeft je aandacht nodig',calendarUpdatedJustNow:'✓ Kalenders zojuist bijgewerkt',calendarUpdatedMinutes:'Kalenders {minutes} min geleden bijgewerkt',calendarUpdatedHour:'Kalenders 1 uur geleden bijgewerkt',calendarUpdatedHours:'Kalenders {hours} uur geleden bijgewerkt',filterAll:'Alles',filterArrivingSoon:'Binnenkort',filterUpcoming:'Aankomend',filterStaying:'Nu verblijvend',filterPast:'Verleden',filterId:'ID nog controleren',filterInvoice:'Factuur te maken',invoiceCreated:'Factuur gemaakt',invoicePending:'Factuur gevraagd',openInvoice:'Gekoppelde factuur openen',unsaved:'Je hebt niet-opgeslagen wijzigingen. Doorgaan zonder op te slaan?' 
  }
};

let currentLang='en', currentRegistrationId=null, currentDraftReservationId=null, currentInvoiceId=null, registrations=[], invoices=[], reservations=[], reservationInvites=[], manualNights=false, registrationFilter='all', reservationFilter='upcoming', registrationDirty=false, invoiceDirty=false, suppressDirty=false;
let lastDirtyScope='registration';
const $=id=>document.getElementById(id);
function updateMobileSaveBar(){
  const bar=document.getElementById('mobileSaveBar');
  if(!bar)return;
  const dirty=registrationDirty||invoiceDirty;
  bar.classList.toggle('hidden',!dirty);
  document.body.classList.toggle('mobile-save-visible',dirty);
  const x=tr[currentLang];
  const status=document.getElementById('mobileSaveStatus');
  const btn=document.getElementById('mobileSaveBtn');
  if(status)status.textContent=x.unsavedShort;
  if(btn&&!btn.disabled)btn.textContent=x.saveShort;
}
function markRegistrationDirty(){
  if(suppressDirty)return;
  registrationDirty=true;
  lastDirtyScope='registration';
  updateMobileSaveBar();
}
function clearInvoiceFieldError(el){const field=el?.closest?.('.field');if(field&&String(el.value??'').trim())field.classList.remove('field-invalid');}
function markInvoiceDirty(){
  if(suppressDirty)return;
  invoiceDirty=true;
  lastDirtyScope='invoice';
  updateMobileSaveBar();
}


const rf={
  id:$('registrationId'),source:$('registrationSource'),name:$('regName'),city:$('regCity'),country:$('regCountry'),checkin:$('regCheckin'),checkout:$('regCheckout'),booking:$('regBookingReference'),platform:$('regBookingPlatform'),invoiceRequested:$('regInvoiceRequested'),invoiceType:$('regInvoiceType'),email:$('regEmail'),companyName:$('regCompanyName'),companyAddress:$('regCompanyAddress'),vat:$('regVat'),idType:$('regIdType'),idOther:$('regIdOther'),idVerified:$('regIdVerified'),guestCount:$('regGuestCount'),additionalGuestNights:$('regAdditionalGuestNights'),additionalGuestRate:$('regAdditionalGuestRate'),additionalGuestPayment:$('regAdditionalGuestPayment'),additionalGuestPaid:$('regAdditionalGuestPaid')
};
const f={
  registrationId:$('guestRegistrationId'),invoiceNumber:$('invoiceNumber'),invoiceDate:$('invoiceDate'),guestName:$('guestName'),guestAddress:$('guestAddress'),guestPostal:$('guestPostalCode'),guestCity:$('guestCity'),guestCountry:$('guestCountry'),companyName:$('companyName'),companyAddress:$('companyAddress'),vat:$('vatNumber'),email:$('guestEmail'),booking:$('bookingReference'),room:$('roomName'),customRoom:$('customRoomName'),checkin:$('checkinDate'),checkout:$('checkoutDate'),nights:$('nights'),guests:$('guests'),accommodation:$('accommodationAmount'),cleaning:$('cleaningFee'),additionalGuestFee:$('additionalGuestFee'),additionalGuestNights:$('additionalGuestNights'),tourist:$('touristTaxRate'),taxMode:$('taxMode'),payment:$('paymentMethod'),customPayment:$('customPaymentMethod')
};

const today=()=>new Date().toISOString().slice(0,10);
const euro=v=>'€'+Number(v||0).toFixed(2);
const fmt=d=>d?new Date(d+'T00:00:00').toLocaleDateString(currentLang==='nl'?'nl-NL':'en-GB',{day:'numeric',month:'long',year:'numeric'}):'—';
const invoiceNightsBetween=()=>{ if(!f.checkin.value||!f.checkout.value)return null; const n=Math.round((new Date(f.checkout.value)-new Date(f.checkin.value))/86400000); return n>0?n:null; };
const roomValue=()=>f.room.value==='custom'?(f.customRoom.value.trim()||tr[currentLang].customRoomOpt):f.room.value;
const paymentValue=()=>f.payment.value==='custom'?(f.customPayment.value.trim()||tr[currentLang].customPayOpt):f.payment.value;
const localToday=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
const addDaysIso=(iso,days)=>{const d=new Date(iso+'T12:00:00');d.setDate(d.getDate()+days);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
function guardUnsaved(scope='any'){
  const dirty=scope==='registration'?registrationDirty:scope==='invoice'?invoiceDirty:(registrationDirty||invoiceDirty);
  return !dirty || confirm(tr[currentLang].unsaved);
}
function linkedInvoiceForRegistration(regId){ return invoices.find(i=>i.guest_registration_id===regId)||null; }

function scrollActiveFilterIntoView(containerId,button){
  if(!button)return;
  const container=$(containerId); if(!container)return;
  requestAnimationFrame(()=>{
    if(window.matchMedia('(max-width:700px)').matches)button.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  });
}
function setRegistrationFilter(filter){ registrationFilter=filter;let active=null;document.querySelectorAll('[data-filter]').forEach(b=>{const on=b.dataset.filter===filter;b.classList.toggle('active',on);if(on)active=b;});renderRegs();scrollActiveFilterIntoView('registrationFilters',active); }
function registrationMatchesFilter(r,filter){
  const t=localToday(), invoice=linkedInvoiceForRegistration(r.id);
  if(filter==='upcoming') return r.checkin_date>t;
  if(filter==='staying') return r.checkin_date<=t && r.checkout_date>t;
  if(filter==='past') return r.checkout_date<=t;
  if(filter==='idToVerify') return registrationHasIdToVerify(r) && r.checkin_date<=t && r.checkout_date>t;
  if(filter==='invoiceToCreate') return !!r.invoice_requested && !invoice && r.checkout_date<=t;
  if(filter==='arrivingSoon') return r.checkin_date>=t && r.checkin_date<=addDaysIso(t,3);
  return true;
}

function roomLabel(key){ return key==='cozy'?tr[currentLang].roomCozyShort:tr[currentLang].roomSpaciousShort; }
function linkedReservationForRegistration(reg){
  if(!reg?.reservation_id)return null;
  return reservations.find(r=>r.id===reg.reservation_id)||null;
}
function effectiveRegistrationPlatform(reg){
  const reservation=linkedReservationForRegistration(reg);
  return reg?.booking_platform || reservation?.platform || '';
}
function platformDisplay(platform){
  if(platform==='airbnb')return 'Airbnb';
  if(platform==='booking')return 'Booking.com';
  if(platform==='direct_other')return currentLang==='nl'?'Direct / Anders':'Direct / Other';
  return '';
}
function applyRegistrationPlatformField(reg=null){
  const reservation=linkedReservationForRegistration(reg);
  const value=reg?.booking_platform || reservation?.platform || '';
  rf.platform.value=value;
  rf.platform.disabled=false;

  // Reservation-linked guests already have an authoritative platform and do not
  // need to see this field. Any unlinked guest (paper OR manual secure link)
  // can view/edit the stored platform.
  const isUnlinked = !reg || !reg.reservation_id;
  $('regPlatformField').classList.toggle('hidden',!isUnlinked);
}
function applyReservationRoomToInvoice(registrationId){
  if(!registrationId)return false;
  const reg=registrations.find(g=>g.id===registrationId);
  if(!reg?.reservation_id)return false;
  const reservation=reservations.find(r=>r.id===reg.reservation_id);
  if(!reservation)return false;
  if(reservation.room_key==='cozy') f.room.value=tr[currentLang].cozy;
  else if(reservation.room_key==='spacious') f.room.value=tr[currentLang].spacious;
  else return false;
  f.customRoom.value='';
  toggleInvoiceCustom();
  return true;
}
function applyReservationPaymentToInvoice(registrationId){
  if(!registrationId)return false;
  const reg=registrations.find(g=>g.id===registrationId);
  if(!reg)return false;
  const platform=effectiveRegistrationPlatform(reg);
  if(platform==='booking') f.payment.value=tr[currentLang].booking;
  else if(platform==='airbnb') f.payment.value=tr[currentLang].airbnb;
  else return false;
  f.customPayment.value='';
  toggleInvoiceCustom();
  return true;
}
function reservationRegistration(resId){ return registrations.find(r=>r.reservation_id===resId)||null; }
function reservationInvite(resId){ return reservationInvites.find(i=>i.reservation_id===resId && !i.used_at && new Date(i.expires_at)>new Date())||null; }
function reservationLink(inv){ return `${PUBLIC_FORM_BASE}?token=${encodeURIComponent(inv.token)}`; }
function unlinkedRegistrations(){ return registrations.filter(g=>!g.reservation_id); }
function exactReservationCandidates(reservation){
  return unlinkedRegistrations().filter(g=>g.checkin_date===reservation.checkin_date && g.checkout_date===reservation.checkout_date);
}
function candidateSortForReservation(reservation,a,b){
  const exactA=a.checkin_date===reservation.checkin_date && a.checkout_date===reservation.checkout_date;
  const exactB=b.checkin_date===reservation.checkin_date && b.checkout_date===reservation.checkout_date;
  if(exactA!==exactB) return exactA?-1:1;
  const target=new Date(reservation.checkin_date+'T12:00:00').getTime();
  const da=Math.abs(new Date(a.checkin_date+'T12:00:00').getTime()-target);
  const db=Math.abs(new Date(b.checkin_date+'T12:00:00').getTime()-target);
  return da-db || String(a.full_name||'').localeCompare(String(b.full_name||''));
}

function isRealReservation(r){
  if(!r||r.status!=='active')return false;
  if(r.platform==='booking')return true;
  return String(r.summary||'').trim().toLowerCase()==='reserved';
}
function isAirbnbBlock(r){return !!r&&r.status==='active'&&r.platform==='airbnb'&&!isRealReservation(r);}
function datesOverlap(a,b){return String(a.checkin_date||'')<String(b.checkout_date||'')&&String(b.checkin_date||'')<String(a.checkout_date||'');}
function calendarVisibleBlocks(){
  const booking=reservations.filter(r=>isRealReservation(r)&&r.platform==='booking');
  return reservations.filter(isAirbnbBlock).filter(block=>!booking.some(b=>b.room_key===block.room_key&&datesOverlap(block,b)));
}
let calendarCursor=new Date();calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth(),1);
let calendarRoomView=null;
let calendarHasVisited=false;
let calendarTimelineScrollLeft=0;
let calendarRoomScrollDate=null;
function isoLocalDate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function monthStartIso(){return isoLocalDate(new Date(calendarCursor.getFullYear(),calendarCursor.getMonth(),1));}
function nextMonthStartIso(){return isoLocalDate(new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,1));}
function calendarDaysInMonth(){return new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,0).getDate();}
function calendarEventName(r){
  if(isAirbnbBlock(r))return tr[currentLang].calendarBlocked;
  const reg=reservationRegistration(r.id);
  if(reg?.full_name)return reg.full_name;
  if(r.platform==='booking')return tr[currentLang].calendarBookingReservation;
  return r.reservation_code||'Airbnb';
}
function calendarMonthText(){return new Intl.DateTimeFormat(currentLang==='nl'?'nl-NL':'en-GB',{month:'long',year:'numeric'}).format(calendarCursor);}
function calendarEventStatusBadges(r){
  if(isAirbnbBlock(r))return '';
  const reg=reservationRegistration(r.id),invoice=reg?linkedInvoiceForRegistration(reg.id):null,x=tr[currentLang];
  let out=`<span class="calendar-mini-status ${reg?'good':'warn'}">${x.calendarRegistration}: ${reg?x.calendarSubmitted:x.calendarNotSubmitted}</span>`;
  if(reg)out+=`<span class="calendar-mini-status ${reg.id_verified?'good':'warn'}">${x.calendarId}: ${reg.id_verified?x.calendarVerified:x.calendarNotVerified}</span>`;
  if(reg?.invoice_requested)out+=`<span class="calendar-mini-status ${invoice?'good':'warn'}">${x.calendarInvoice}: ${invoice?escapeHtml(invoice.invoice_number):x.calendarNone}</span>`;
  return out;
}

function calendarRoomDisplay(roomKey){
  return roomKey==='cozy'?(currentLang==='nl'?'Knusse kamer':'Cozy room'):(currentLang==='nl'?'Ruime kamer':'Spacious room');
}
function calendarRoomSide(roomKey){
  return roomKey==='cozy'?(currentLang==='nl'?'Straatzijde':'Street side'):(currentLang==='nl'?'Tuinzijde':'Garden side');
}
function scrollCalendarToDate(iso,behavior='auto'){
  const scroller=$('calendarScroller'),root=$('calendarTimeline');if(!scroller||!root)return;
  const cell=root.querySelector(`.calendar-day-head[data-date="${iso}"]`);if(!cell)return;
  const stickyWidth=isMobileShell()?112:150;
  const target=Math.max(0,cell.offsetLeft-stickyWidth);
  scroller.scrollTo({left:target,behavior});calendarTimelineScrollLeft=target;
}
function scrollCalendarToTodayStart(behavior='auto'){
  const today=localToday();if(today.slice(0,7)!==monthStartIso().slice(0,7))return;
  requestAnimationFrame(()=>scrollCalendarToDate(today,behavior));
}
function updateCalendarViewSwitch(){
  const x=tr[currentLang],month=$('calendarViewMonthBtn'),both=$('calendarViewBothBtn');
  if(month){
    const roomSuffix=calendarRoomView?` · ${calendarRoomView==='cozy'?(currentLang==='nl'?'Knus':'Cozy'):(currentLang==='nl'?'Ruim':'Spacious')}`:'';
    month.textContent=x.calendarMonthView+roomSuffix;
    month.classList.toggle('active',!!calendarRoomView);month.setAttribute('aria-pressed',String(!!calendarRoomView));
  }
  if(both){both.textContent=x.calendarBothView;both.classList.toggle('active',!calendarRoomView);both.setAttribute('aria-pressed',String(!calendarRoomView));}
}
function updateCalendarRoomSwitcher(){
  const cozy=$('calendarRoomCozyBtn'),spacious=$('calendarRoomSpaciousBtn');
  if(cozy){cozy.textContent=calendarRoomDisplay('cozy');cozy.classList.toggle('active',calendarRoomView==='cozy');cozy.setAttribute('aria-pressed',String(calendarRoomView==='cozy'));}
  if(spacious){spacious.textContent=calendarRoomDisplay('spacious');spacious.classList.toggle('active',calendarRoomView==='spacious');spacious.setAttribute('aria-pressed',String(calendarRoomView==='spacious'));}
}
function setCalendarRoomView(roomKey,opts={}){
  calendarRoomView=roomKey||calendarRoomView||'cozy';
  calendarRoomScrollDate=opts.date||calendarRoomScrollDate||monthStartIso();
  renderCalendar();
  requestAnimationFrame(()=>scrollRoomMonthToDate(calendarRoomScrollDate,opts.behavior||'auto'));
}
function exitCalendarRoomView(opts={}){
  const date=calendarRoomScrollDate||monthStartIso();
  const d=new Date(date+'T12:00:00');calendarCursor=new Date(d.getFullYear(),d.getMonth(),1);
  calendarRoomView=null;renderCalendar();
  requestAnimationFrame(()=>{scrollCalendarToDate(date,opts.behavior||'auto');});
}
function roomMonthGridStart(cursor){
  const first=new Date(cursor.getFullYear(),cursor.getMonth(),1),offset=(first.getDay()+6)%7,d=new Date(first);d.setDate(first.getDate()-offset);return d;
}
function monthSectionId(cursor){return `room-month-${cursor.getFullYear()}-${String(cursor.getMonth()+1).padStart(2,'0')}`;}
function monthDateFromElement(el){return el?.dataset?.monthStart||null;}
function visibleRoomMonthDate(){
  const sections=[...document.querySelectorAll('.room-month-section')];if(!sections.length)return calendarRoomScrollDate||monthStartIso();
  const top=Math.max(0,document.querySelector('.mobile-app-header')?.getBoundingClientRect().bottom||0)+54;
  let best=sections[0],bestDist=Infinity;
  for(const sec of sections){const r=sec.getBoundingClientRect(),dist=Math.abs(r.top-top);if(r.bottom>top&&dist<bestDist){best=sec;bestDist=dist;}}
  return monthDateFromElement(best)||monthStartIso();
}
function scrollRoomMonthToDate(iso,behavior='auto'){
  const root=$('calendarRoomMonth');if(!root)return;
  const key=String(iso||monthStartIso()).slice(0,7),sec=root.querySelector(`[data-month-key="${key}"]`);if(!sec)return;
  calendarRoomScrollDate=sec.dataset.monthStart;
  const y=window.scrollY+sec.getBoundingClientRect().top-(isMobileShell()?116:18);
  window.scrollTo({top:Math.max(0,y),behavior});
}
function renderRoomMonthSection(roomKey,cursor,events,today){
  const locale=currentLang==='nl'?'nl-NL':'en-GB';
  const monthStart=isoLocalDate(new Date(cursor.getFullYear(),cursor.getMonth(),1));
  const monthEnd=isoLocalDate(new Date(cursor.getFullYear(),cursor.getMonth()+1,1));
  const daysInMonth=new Date(cursor.getFullYear(),cursor.getMonth()+1,0).getDate();
  const gridStart=roomMonthGridStart(cursor),offset=(new Date(cursor.getFullYear(),cursor.getMonth(),1).getDay()+6)%7,weeks=Math.ceil((offset+daysInMonth)/7);
  const section=document.createElement('section');section.className='room-month-section';section.id=monthSectionId(cursor);section.dataset.monthStart=monthStart;section.dataset.monthKey=monthStart.slice(0,7);
  const title=document.createElement('h3');title.className='room-month-title';title.textContent=new Intl.DateTimeFormat(locale,{month:'long',year:'numeric'}).format(cursor);section.appendChild(title);
  const monthEvents=events.filter(r=>r.checkin_date<monthEnd&&r.checkout_date>=monthStart);
  for(let w=0;w<weeks;w++){
    const week=document.createElement('div');week.className='room-month-week';
    const wsDate=new Date(gridStart);wsDate.setDate(gridStart.getDate()+w*7);const weDate=new Date(wsDate);weDate.setDate(wsDate.getDate()+7);
    const ws=isoLocalDate(wsDate),we=isoLocalDate(weDate);
    for(let i=0;i<7;i++){
      const d=new Date(wsDate);d.setDate(wsDate.getDate()+i);const iso=isoLocalDate(d),inMonth=d.getMonth()===cursor.getMonth();
      const cell=document.createElement('div');cell.className=`room-month-day ${inMonth?'':'outside'} ${iso===today?'today':''} ${iso<today?'past':''}`;
      cell.dataset.date=iso;cell.innerHTML=inMonth?`<span class="room-month-day-number">${d.getDate()}</span>`:'';week.appendChild(cell);
    }
    const layer=document.createElement('div');layer.className='room-month-event-layer';
    const diff=x=>(new Date(x+'T00:00:00')-new Date(ws+'T00:00:00'))/86400000;
    monthEvents.filter(r=>r.checkin_date<we&&r.checkout_date>=ws).forEach(r=>{
      // Airbnb-style turnover geometry: a stay starts 25% into check-in day and ends 25% into checkout day.
      // This lets an outgoing and incoming guest share one date cleanly with no overlap.
      let startPos=r.checkin_date<=monthStart?offset:diff(r.checkin_date)+0.25;
      let endPos=r.checkout_date>=monthEnd?offset+daysInMonth:diff(r.checkout_date)+0.25;
      startPos=Math.max(0,Math.min(7,startPos));endPos=Math.max(0,Math.min(7,endPos));
      if(endPos<=startPos)return;
      const bar=document.createElement('button');bar.type='button';bar.className=`room-month-event ${isAirbnbBlock(r)?'blocked':r.platform}`;
      bar.style.left=`calc(${startPos} * (100% / 7))`;bar.style.width=`calc(${endPos-startPos} * (100% / 7))`;
      bar.classList.toggle('continues-before',r.checkin_date<ws||r.checkin_date<monthStart);
      bar.classList.toggle('continues-after',r.checkout_date>=we||r.checkout_date>=monthEnd);
      bar.innerHTML=isAirbnbBlock(r)?`<span>${escapeHtml(tr[currentLang].calendarBlocked)}</span>`:`<span class="room-month-platform-dot ${r.platform}" aria-hidden="true"></span><span>${escapeHtml(calendarEventName(r))}</span>`;
      bar.onclick=e=>{e.stopPropagation();openCalendarDetail(r);};layer.appendChild(bar);
    });
    week.appendChild(layer);section.appendChild(week);
  }
  return section;
}
function renderRoomMonthCalendar(roomKey){
  const root=$('calendarRoomMonth');if(!root)return;root.innerHTML='';
  const locale=currentLang==='nl'?'nl-NL':'en-GB',today=localToday(),mobile=isMobileShell();
  root.classList.toggle('continuous-mobile',mobile);
  root.classList.toggle('single-month-desktop',!mobile);
  const sticky=document.createElement('div');sticky.className='room-month-weekdays';
  const weekdays=[],monday=new Date(2026,0,5);for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(d.getDate()+i);weekdays.push(new Intl.DateTimeFormat(locale,{weekday:'short'}).format(d).replace('.',''));}
  sticky.innerHTML=weekdays.map(w=>`<span>${escapeHtml(w)}</span>`).join('');root.appendChild(sticky);
  const events=[...reservations.filter(isRealReservation),...calendarVisibleBlocks()].filter(r=>r.room_key===roomKey);
  if(mobile){
    // Mobile keeps the Airbnb-style continuous vertical calendar.
    for(let delta=-2;delta<=21;delta++){
      const cursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+delta,1);
      root.appendChild(renderRoomMonthSection(roomKey,cursor,events,today));
    }
  }else{
    // Desktop intentionally uses the classic single-month calendar. Month navigation stays in the toolbar.
    root.appendChild(renderRoomMonthSection(roomKey,new Date(calendarCursor),events,today));
  }
  updateCalendarViewSwitch();updateCalendarRoomSwitcher();
}
function renderCalendar(){
  const root=$('calendarTimeline');if(!root)return;
  const start=monthStartIso(),end=nextMonthStartIso(),days=calendarDaysInMonth(),today=localToday();
  $('calendarMonthLabel').textContent=calendarMonthText();
  updateCalendarViewSwitch();

  const roomMode=!!calendarRoomView;
  $('calendarScroller').classList.toggle('hidden',roomMode);$('calendarRoomMonth').classList.toggle('hidden',!roomMode);$('calendarRoomViewHead').classList.toggle('hidden',!roomMode);
  if(roomMode){
    $('calendarRoomViewTitle').textContent=calendarRoomDisplay(calendarRoomView);
    if($('calendarRoomViewSubtitle'))$('calendarRoomViewSubtitle').textContent=calendarRoomSide(calendarRoomView);
    updateCalendarRoomSwitcher();
    $('calendarHint').textContent=tr[currentLang].calendarRoomHint;renderRoomMonthCalendar(calendarRoomView);return;
  }
  $('calendarHint').textContent=tr[currentLang].calendarHint;

  const weekdayFmt=new Intl.DateTimeFormat(currentLang==='nl'?'nl-NL':'en-GB',{weekday:'short'});
  const rooms=[['cozy',calendarRoomDisplay('cozy')],['spacious',calendarRoomDisplay('spacious')]];
  root.style.setProperty('--calendar-days',days);root.innerHTML='';
  const header=document.createElement('div');header.className='calendar-grid calendar-days-header';header.innerHTML='<div class="calendar-room-label calendar-corner"></div>';
  for(let day=1;day<=days;day++){const d=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth(),day),iso=isoLocalDate(d),past=iso<today;header.innerHTML+=`<div class="calendar-day-head ${iso===today?'today':''} ${past?'past':''}" data-date="${iso}"><span>${weekdayFmt.format(d).replace('.','')}</span><strong>${day}</strong></div>`;}
  root.appendChild(header);

  const events=[...reservations.filter(isRealReservation),...calendarVisibleBlocks()];
  rooms.forEach(([roomKey,label])=>{
    const row=document.createElement('div');row.className='calendar-grid calendar-room-row';
    row.innerHTML=`<button type="button" class="calendar-room-label calendar-room-open" title="${escapeHtml(tr[currentLang].calendarOpenRoom)}"><span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(calendarRoomSide(roomKey))}</small></span><b aria-hidden="true">›</b></button>`;
    for(let day=1;day<=days;day++){const iso=`${start.slice(0,8)}${String(day).padStart(2,'0')}`;row.innerHTML+=`<div class="calendar-day-cell ${iso===today?'today':''} ${iso<today?'past':''}"></div>`;}
    root.appendChild(row);row.querySelector('.calendar-room-open').onclick=()=>setCalendarRoomView(roomKey);
    const lane=document.createElement('div');lane.className='calendar-event-lane';row.appendChild(lane);
    events.filter(r=>r.room_key===roomKey&&r.checkin_date<end&&r.checkout_date>start).sort((a,b)=>a.checkin_date.localeCompare(b.checkin_date)).forEach(r=>{
      const visibleStart=r.checkin_date<start?start:r.checkin_date,visibleEnd=r.checkout_date>end?end:r.checkout_date;
      const diff=x=>Math.round((new Date(x+'T00:00:00')-new Date(start+'T00:00:00'))/86400000);
      const startDay=Math.max(0,diff(visibleStart)),endDay=Math.max(startDay+1,diff(visibleEnd));
      const bar=document.createElement('button');bar.type='button';bar.className=`calendar-event ${isAirbnbBlock(r)?'blocked':r.platform}`;
      const startPos=r.checkin_date<start?0:startDay+0.25,endPos=r.checkout_date>=end?days:endDay+0.25;
      bar.style.left=`calc(${startPos} * (100% / ${days}))`;bar.style.width=`calc(${Math.max(.05,endPos-startPos)} * (100% / ${days}))`;
      bar.classList.toggle('continues-before',r.checkin_date<start);bar.classList.toggle('continues-after',r.checkout_date>=end);
      bar.innerHTML=isAirbnbBlock(r)?`<span class="calendar-event-name">${escapeHtml(tr[currentLang].calendarBlocked)}</span>`:`<span class="calendar-platform-badge ${r.platform}">${r.platform==='airbnb'?'Airbnb':'Booking'}</span><span class="calendar-event-name">${escapeHtml(calendarEventName(r))}</span>`;
      bar.onclick=e=>{e.stopPropagation();openCalendarDetail(r);};lane.appendChild(bar);
    });
  });
}
function openCalendarDetail(r){
  const x=tr[currentLang],blocked=isAirbnbBlock(r);
  $('calendarDetailPlatform').innerHTML=blocked?`<span class="calendar-platform-badge blocked">${x.calendarBlocked}</span>`:`<span class="calendar-platform-badge ${r.platform}">${r.platform==='airbnb'?'Airbnb':'Booking.com'}</span>`;
  $('calendarDetailName').textContent=calendarEventName(r);
  $('calendarDetailMeta').innerHTML=`<strong>${escapeHtml(roomLabel(r.room_key))}</strong><span>${fmt(r.checkin_date)} → ${fmt(r.checkout_date)} · ${reservationNightsBetween(r.checkin_date,r.checkout_date)} ${escapeHtml(x.nightsWord)}</span>`;
  $('calendarDetailBadges').innerHTML=calendarEventStatusBadges(r);$('calendarDetailOpenBtn').classList.toggle('hidden',blocked);
  $('calendarDetailOpenBtn').onclick=()=>{closeCalendarDetail();openReservationFromCalendar(r.id);};
  $('calendarDetailBackdrop').classList.remove('hidden');$('calendarDetailSheet').classList.remove('hidden');
}
function closeCalendarDetail(){$('calendarDetailBackdrop')?.classList.add('hidden');$('calendarDetailSheet')?.classList.add('hidden');}
function openReservationFromCalendar(id){
  if(isMobileShell()){setMobileTab('reservations',{restore:false});}
  else document.querySelector('#navReservations')?.click();
  setReservationFilter('all');
  requestAnimationFrame(()=>{const card=document.querySelector(`[data-reservation-id="${CSS.escape(id)}"]`);card?.scrollIntoView({behavior:'smooth',block:'center'});card?.classList.add('calendar-target-flash');setTimeout(()=>card?.classList.remove('calendar-target-flash'),1800);});
}
function changeCalendarMonth(delta){calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+delta,1);calendarRoomScrollDate=monthStartIso();calendarTimelineScrollLeft=0;renderCalendar();if(!calendarRoomView&&$('calendarScroller'))$('calendarScroller').scrollLeft=0;}
function calendarToday(){const n=new Date();calendarCursor=new Date(n.getFullYear(),n.getMonth(),1);calendarRoomScrollDate=localToday();renderCalendar();if(calendarRoomView)requestAnimationFrame(()=>scrollRoomMonthToDate(localToday(),'smooth'));else scrollCalendarToTodayStart('smooth');}
function reservationNightsBetween(a,b){ const A=new Date(`${a}T12:00:00`),B=new Date(`${b}T12:00:00`); return Math.max(0,Math.round((B-A)/86400000)); }

async function loadReservations(){
  const [{data:r,error:re},{data:iv,error:ie}]=await Promise.all([
    supabaseClient.from('reservations').select('*').order('checkin_date',{ascending:true}).limit(300),
    supabaseClient.from('guest_registration_invites').select('id,token,reservation_id,used_at,expires_at').not('reservation_id','is',null).order('created_at',{ascending:false}).limit(300)
  ]);
  if(re){ $('reservationList').innerHTML=`<p class="muted">${escapeHtml(re.message)}</p>`; return; }
  reservations=r||[]; reservationInvites=ie?[]:(iv||[]); renderReservations(); renderAttention(); renderCalendar();
}

function setReservationFilter(filter){
  reservationFilter=filter;
  let active=null;
  document.querySelectorAll('[data-reservation-filter]').forEach(b=>{const on=b.dataset.reservationFilter===filter;b.classList.toggle('active',on);if(on)active=b;});
  renderReservations();
  scrollActiveFilterIntoView('reservationFilters',active);
}
function reservationMatchesFilter(r,filter){
  const t=localToday(), reg=reservationRegistration(r.id), invoice=reg?linkedInvoiceForRegistration(reg.id):null;
  if(filter==='upcoming') return r.status==='active' && r.checkin_date>t;
  if(filter==='arrivingSoon') return r.status==='active' && r.checkin_date>=t && r.checkin_date<=addDaysIso(t,3);
  if(filter==='staying') return r.status==='active' && r.checkin_date<=t && r.checkout_date>t;
  if(filter==='idToVerify') return r.status==='active' && !!reg && !reg.id_verified && r.checkin_date<=t && r.checkout_date>t;
  if(filter==='invoiceToCreate') return r.status==='active' && !!reg && !!reg.invoice_requested && !invoice && r.checkout_date<=t;
  if(filter==='past') return r.status==='active' && r.checkout_date<=t;
  if(filter==='removed') return r.status!=='active';
  return true;
}
function reservationGuestBadges(reg){
  if(!reg)return '';
  const x=tr[currentLang], linked=linkedInvoiceForRegistration(reg.id), guestCount=registrationGuestCount(reg);
  const idText=registrationIdStatusText(reg);
  const idClass=reg.id_verified?'good':'warn';
  const invoiceHtml=linked
    ? `<button type="button" class="badge invoice-created reservation-invoice-badge" title="${escapeHtml(x.openInvoice)}">${escapeHtml(x.invoiceCreated)} · ${escapeHtml(linked.invoice_number)}</button>`
    : (reg.invoice_requested?`<span class="badge invoice-pending">${escapeHtml(x.invoicePending)}</span>`:'');
  return `<div class="reservation-guest-badges"><span class="badge good">${escapeHtml(x.registrationSubmitted)}</span>${guestCount>1?`<span class="badge">👤 ${guestCount} ${currentLang==='nl'?'gasten':'guests'}</span>`:''}<span class="badge ${idClass}">${escapeHtml(idText)}</span>${invoiceHtml}</div>`;
}


function reservationBookingReference(reservation){
  return reservation?.reservation_code || '';
}

function beginManualRegistrationForReservation(reservation){clearAdminValidationState('registration');
  if(!guardUnsaved('registration'))return;
  suppressDirty=true;
  currentRegistrationId=null;
  currentDraftReservationId=reservation.id;
  rf.id.value='';
  rf.source.value='paper_manual';
  for(const k of ['name','city','country','email','companyName','companyAddress','vat','idOther']) rf[k].value='';
  populateCountries(rf.country,'');
  rf.checkin.value=reservation.checkin_date||'';
  rf.checkout.value=reservation.checkout_date||'';
  rf.booking.value=reservationBookingReference(reservation);
  rf.platform.value=reservation.platform||'';
  rf.invoiceRequested.checked=false;
  rf.invoiceType.value='personal';
  rf.idType.value='';
  rf.idVerified.checked=false;
  rf.guestCount.value='1';rf.additionalGuestNights.value=0;rf.additionalGuestRate.value='20.00';rf.additionalGuestPayment.value='';rf.additionalGuestPaid.checked=false;toggleGuestOccupancy();
  toggleRegInvoice();
  toggleIdOther();
  // This registration is reservation-linked, so platform is authoritative and hidden.
  $('regPlatformField').classList.add('hidden');
  $('deleteRegistrationBtn').classList.add('hidden');
  $('registrationEditor').classList.remove('hidden');
  $('registrationMessage').textContent=tr[currentLang].manualFromReservation;
  registrationDirty=false;
  suppressDirty=false;
  updateMobileSaveBar();if(isMobileShell()){openMobileDetail('guest',mobileShellState.tab);return;}
  requestAnimationFrame(()=>{
    const heading=$('registrationEditorTitle')||$('registrationEditor');
    heading.scrollIntoView({behavior:'smooth',block:'start'});
  });
}

function printPrefilledRegistrationForm(reservation){
  const platform=reservation.platform==='airbnb'?'Airbnb':'Booking.com';
  const room=roomLabel(reservation.room_key);
  const ref=reservationBookingReference(reservation);
  const lang=currentLang;
  const nl=lang==='nl';
  const title=nl?'Gastenregistratie':'Guest registration';
  const w=window.open('','_blank');
  if(!w){ alert(nl?'Sta pop-ups toe om het formulier te printen.':'Allow pop-ups to print the form.'); return; }
  try { w.opener=null; } catch(e) {}
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const date=d=>esc(fmt(d));
  const html=`<!doctype html><html lang="${nl?'nl':'en'}"><head><meta charset="utf-8">
  <title>${esc(title)}</title>
  <style>
    @page{size:A4;margin:16mm}
    *{box-sizing:border-box} body{font-family:Arial,Helvetica,sans-serif;color:#1e293b;margin:0;font-size:11pt}
    .brand{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #243b53;padding-bottom:12px;margin-bottom:20px}
    h1{font-size:22pt;margin:0;color:#243b53} .sub{color:#64748b;margin-top:4px}
    .booking{background:#f8fafc;border:1px solid #dbe4ee;border-radius:10px;padding:14px 16px;margin-bottom:22px}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 26px}.row strong{display:block;font-size:8.5pt;text-transform:uppercase;letter-spacing:.04em;color:#64748b;margin-bottom:2px}
    h2{font-size:13pt;color:#243b53;margin:22px 0 12px}.line{height:30px;border-bottom:1px solid #64748b;margin-bottom:13px}
    .inline{display:grid;grid-template-columns:1fr 1fr;gap:28px}.checks{margin:10px 0 18px}.box{display:inline-block;width:15px;height:15px;border:1.5px solid #334155;vertical-align:-2px;margin-right:6px}
    .declaration{margin-top:22px;padding-top:14px;border-top:1px solid #cbd5e1;font-size:9.5pt;line-height:1.45;color:#475569}
    .sig{display:grid;grid-template-columns:1fr 1fr;gap:35px;margin-top:30px}.sigline{border-top:1px solid #64748b;padding-top:5px;color:#64748b;font-size:9pt}
    .host{margin-top:26px;background:#f8fafc;border-radius:8px;padding:12px}.host h2{margin:0 0 10px}
    .no-print{position:fixed;right:18px;top:18px;padding:10px 16px;border:0;border-radius:8px;background:#243b53;color:white;font-weight:700;cursor:pointer}
    @media print{.no-print{display:none}}
  </style></head><body>
  <button class="no-print" onclick="window.print()">${nl?'Printen':'Print'}</button>
  <div class="brand"><div><h1>${esc(title)}</h1><div class="sub">Nijmegen Guest Rooms</div></div><div>${esc(platform)}</div></div>
  <div class="booking"><div class="grid">
    <div class="row"><strong>${nl?'Boekingsplatform':'Booking platform'}</strong>${esc(platform)}</div>
    <div class="row"><strong>${nl?'Kamer':'Room'}</strong>${esc(room)}</div>
    <div class="row"><strong>${nl?'Inchecken':'Check-in'}</strong>${date(reservation.checkin_date)}</div>
    <div class="row"><strong>${nl?'Uitchecken':'Check-out'}</strong>${date(reservation.checkout_date)}</div>
    ${ref?`<div class="row"><strong>${nl?'Boekingsreferentie':'Booking reference'}</strong>${esc(ref)}</div>`:''}
  </div></div>
  <h2>${nl?'Gastgegevens':'Guest information'}</h2>
  <div><strong>${nl?'Volledige naam':'Full name'}</strong><div class="line"></div></div>
  <div class="inline">
    <div><strong>${nl?'Woonplaats':'City / place of residence'}</strong><div class="line"></div></div>
    <div><strong>${nl?'Land':'Country'}</strong><div class="line"></div></div>
  </div>
  <h2>${nl?'Factuur':'Invoice'}</h2>
  <div class="checks">
    <span class="box"></span>${nl?'Geen factuur':'No invoice'} &nbsp;&nbsp;&nbsp;
    <span class="box"></span>${nl?'Persoonlijke factuur':'Personal invoice'} &nbsp;&nbsp;&nbsp;
    <span class="box"></span>${nl?'Zakelijke factuur':'Company invoice'}
  </div>
  <div><strong>${nl?'E-mailadres (alleen bij factuur)':'Email address (invoice only)'}</strong><div class="line"></div></div>
  <div class="company-print-section">
    <div><strong>${nl?'Bedrijfsnaam (verplicht bij zakelijke factuur)':'Company name (required for company invoice)'}</strong><div class="line"></div></div>
    <div><strong>${nl?'Bedrijfsadres (optioneel)':'Company address (optional)'}</strong><div class="line"></div></div>
    <div><strong>${nl?'Btw-nummer (optioneel)':'VAT number (optional)'}</strong><div class="line"></div></div>
  </div>
  <div class="declaration">${nl
    ? 'Ik verklaar dat de hierboven verstrekte gegevens volledig en naar waarheid zijn ingevuld.'
    : 'I confirm that the information provided above is complete and truthful.'}</div>
  <div class="sig">
    <div><div class="sigline">${nl?'Datum':'Date'}</div></div>
    <div><div class="sigline">${nl?'Handtekening gast':'Guest signature'}</div></div>
  </div>
  <div class="host"><h2>${nl?'Alleen voor host':'Host use only'}</h2>
    <div class="checks"><span class="box"></span>${nl?'ID gecontroleerd':'ID verified'} &nbsp;&nbsp;&nbsp;
      <span class="box"></span>${nl?'Paspoort':'Passport'} &nbsp;
      <span class="box"></span>${nl?'ID-kaart':'ID card'} &nbsp;
      <span class="box"></span>${nl?'Rijbewijs':'Driver’s licence'}
    </div>
  </div>
  <script>window.addEventListener('load',()=>setTimeout(()=>window.print(),350));<\/script></body></html>`;
  w.document.open(); w.document.write(html); w.document.close();
}


function appendReservationMoreMenu(actions,controls){
  const usable=controls.filter(Boolean);
  if(!usable.length)return;
  const group=document.createElement('div');
  group.className='reservation-more-group';
  const toggle=document.createElement('button');
  toggle.type='button';
  toggle.className='action-btn secondary reservation-more-toggle';
  toggle.textContent=tr[currentLang].moreActions;
  toggle.setAttribute('aria-expanded','false');
  const menu=document.createElement('div');
  menu.className='reservation-more-menu';
  usable.forEach(control=>menu.appendChild(control));
  toggle.onclick=e=>{
    e.stopPropagation();
    const open=group.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?tr[currentLang].lessActions:tr[currentLang].moreActions;
  };
  group.append(toggle,menu);
  actions.appendChild(group);
}

function renderReservations(){
  const x=tr[currentLang];
  const rows=reservations.filter(isRealReservation).filter(r=>reservationMatchesFilter(r,reservationFilter)).sort((a,b)=>{
    const aIn=String(a.checkin_date||''),bIn=String(b.checkin_date||''),aOut=String(a.checkout_date||''),bOut=String(b.checkout_date||'');
    if(reservationFilter==='past') return bOut.localeCompare(aOut);               // most recent checkout first
    if(reservationFilter==='invoiceToCreate') return aOut.localeCompare(bOut);    // furthest-past/oldest checkout first
    if(reservationFilter==='all') return bIn.localeCompare(aIn);                 // most recent/latest check-in first
    return aIn.localeCompare(bIn);                                                // operational filters: nearest upcoming/current first
  });
  const box=$('reservationList'); if(!box)return; box.innerHTML='';
  if(!rows.length){ box.innerHTML=`<p class="muted">${x.noReservations}</p>`; return; }
  rows.forEach(r=>{
    const reg=reservationRegistration(r.id), inv=reservationInvite(r.id), n=reservationNightsBetween(r.checkin_date,r.checkout_date);
    const exactCandidates=!reg && r.status==='active' ? exactReservationCandidates(r) : [];
    const d=document.createElement('div'); d.className='reservation-item'+(r.status!=='active'?' removed':''); d.dataset.reservationId=r.id;
    const platformClass=r.platform==='airbnb'?'airbnb':'booking';
    const platformLabel=r.platform==='airbnb'?'Airbnb':'Booking.com';
    const status=r.status!=='active'
      ? `<span class="reservation-status removed-status">${escapeHtml(x.reservationRemoved)}</span>`
      : reg
        ? `<span class="reservation-status done">${escapeHtml(x.registrationSubmitted)}</span>`
        : exactCandidates.length
          ? `<span class="reservation-status match">${escapeHtml(x.possibleExistingRegistration)}</span>`
          : inv
            ? `<span class="reservation-status pending">${escapeHtml(x.registrationLinkReady)}</span>`
            : `<span class="reservation-status">${escapeHtml(x.registrationNotCreated)}</span>`;
    const displayName=reg?.full_name||r.reservation_code||platformLabel;
    d.innerHTML=`<div class="reservation-top"><div><div class="reservation-title"><span class="platform-pill ${platformClass}">${platformLabel}</span><strong>${escapeHtml(displayName)}</strong></div><div class="reservation-meta">${escapeHtml(roomLabel(r.room_key))}<br>${fmt(r.checkin_date)} → ${fmt(r.checkout_date)} · ${n} ${escapeHtml(x.nightsWord)}</div></div>${status}</div>${reservationGuestBadges(reg)}<div class="reservation-actions"></div>`;
    const actions=d.querySelector('.reservation-actions');
    const secondaryControls=[];
    actions.addEventListener('click',e=>e.stopPropagation());
    if(reg){
      d.classList.add('clickable');
      d.setAttribute('role','button');
      d.setAttribute('tabindex','0');
      d.setAttribute('aria-label',`${x.openGuest}: ${reg.full_name}`);
      d.onclick=()=>loadReg(reg,'heading');
      d.onkeydown=e=>{
        if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button,a,input,select')){
          e.preventDefault(); loadReg(reg,'heading');
        }
      };
    }
    if(reg){
      const b=document.createElement('button'); b.className='action-btn secondary'; b.textContent=x.openGuest; b.onclick=()=>loadReg(reg,'heading'); secondaryControls.push(b);
      const invoiceBadge=d.querySelector('.reservation-invoice-badge');
      if(invoiceBadge){ const linked=linkedInvoiceForRegistration(reg.id); invoiceBadge.onclick=e=>{ e.stopPropagation(); const opened=loadInvoice(linked); if(opened) requestAnimationFrame(()=>$('invoiceDetailsCard').scrollIntoView({behavior:'smooth',block:'start'})); }; }
    } else if(r.status==='active') {
      if(exactCandidates.length===1){ const candidate=exactCandidates[0]; const b=document.createElement('button'); b.className='action-btn primary'; b.textContent=x.linkSuggestedGuest.replace('{name}',candidate.full_name); b.onclick=()=>linkExistingRegistration(r,candidate); actions.appendChild(b); }
      else if(exactCandidates.length>1){ const b=document.createElement('button'); b.className='action-btn primary'; b.textContent=x.linkExistingGuest; b.onclick=()=>showExistingRegistrationPicker(r,d,true); actions.appendChild(b); }
      if(!inv){
        const create=document.createElement('button'); create.className=exactCandidates.length?'action-btn secondary':'action-btn primary'; create.textContent=x.createRegistrationLink; create.onclick=()=>createReservationInvite(r,create,d); actions.appendChild(create);
      }
      const complete=document.createElement('button'); complete.className='action-btn secondary'; complete.textContent=x.completeManually; complete.onclick=()=>beginManualRegistrationForReservation(r); secondaryControls.push(complete);
      const print=document.createElement('button'); print.className='action-btn secondary'; print.textContent=x.printPaperForm; print.onclick=()=>printPrefilledRegistrationForm(r); secondaryControls.push(print);
      const linkableGuests=unlinkedRegistrations();
      if(linkableGuests.length){
        const manual=document.createElement('button'); manual.className='action-btn secondary'; manual.textContent=x.linkExistingGuest; manual.onclick=()=>showExistingRegistrationPicker(r,d,false); secondaryControls.push(manual);
      }
      if(inv) addReservationLinkBox(actions,inv,r);
    }
    if(r.platform==='airbnb'&&r.reservation_url){ const a=document.createElement('a'); a.className='action-btn secondary'; a.href=r.reservation_url; a.target='_blank'; a.rel='noopener'; a.textContent=x.openAirbnb; a.onclick=e=>e.stopPropagation(); secondaryControls.push(a); }
    appendReservationMoreMenu(actions,secondaryControls);
    box.appendChild(d);
  });
}

function showExistingRegistrationPicker(reservation,item,exactOnly=false){
  const x=tr[currentLang];
  const old=item.querySelector('.existing-registration-picker'); if(old){ old.remove(); return; }
  let candidates=exactOnly?exactReservationCandidates(reservation):unlinkedRegistrations().slice().sort((a,b)=>candidateSortForReservation(reservation,a,b));
  if(!candidates.length){ alert(x.noUnlinkedGuests); return; }
  const wrap=document.createElement('div'); wrap.className='existing-registration-picker';
  const select=document.createElement('select'); select.setAttribute('aria-label',x.selectExistingGuest);
  const placeholder=document.createElement('option'); placeholder.value=''; placeholder.textContent=x.selectExistingGuest; select.appendChild(placeholder);
  candidates.forEach(g=>{
    const opt=document.createElement('option'); opt.value=g.id;
    const exact=g.checkin_date===reservation.checkin_date && g.checkout_date===reservation.checkout_date;
    opt.textContent=`${exact?'★ '+x.exactMatch+' · ':''}${g.full_name} · ${fmt(g.checkin_date)} → ${fmt(g.checkout_date)}`;
    select.appendChild(opt);
  });
  const link=document.createElement('button'); link.type='button'; link.className='action-btn primary'; link.textContent=x.linkExistingGuest; link.disabled=true;
  select.onchange=()=>{ link.disabled=!select.value; };
  link.onclick=()=>{ const guest=candidates.find(g=>g.id===select.value); if(guest) linkExistingRegistration(reservation,guest); };
  wrap.append(select,link); item.appendChild(wrap);
}

async function linkExistingRegistration(reservation,guest){
  const x=tr[currentLang];
  if(!guest||guest.reservation_id)return;
  if(!confirm(x.confirmLinkGuest.replace('{name}',guest.full_name)))return;
  const {data,error}=await supabaseClient.from('guest_registrations').update({reservation_id:reservation.id,booking_platform:reservation.platform||null}).eq('id',guest.id).is('reservation_id',null).select('id').maybeSingle();
  if(error){ alert(error.message); return; }
  if(!data){ alert(currentLang==='nl'?'Deze registratie is inmiddels al aan een reservering gekoppeld.':'This registration has already been linked to a reservation.'); await loadRegs(); return; }
  // Invalidate any still-unused reservation link so it cannot create a duplicate registration later.
  await supabaseClient.from('guest_registration_invites').delete().eq('reservation_id',reservation.id).is('used_at',null);
  await loadRegs();
}


let qrWakeLock=null;
async function showRegistrationQr(inv,reservation=null){
  const x=tr[currentLang], url=reservationLink(inv);
  $('qrModalTitle').textContent=x.qrTitle;
  $('qrModalSubtitle').textContent=x.qrSubtitle;
  $('copyQrLinkBtn').textContent=x.qrCopy;
  const info=[];
  if(reservation){
    info.push(reservation.platform==='airbnb'?'Airbnb':'Booking.com');
    info.push(roomLabel(reservation.room_key));
    info.push(`${fmt(reservation.checkin_date)} → ${fmt(reservation.checkout_date)}`);
  }
  $('qrReservationInfo').textContent=info.join(' · ');
  const container=$('qrCodeContainer'); container.innerHTML='';
  if(typeof window.QRCode!=='function'){
    alert(currentLang==='nl'?'De QR-codebibliotheek kon niet worden geladen. Gebruik voorlopig de kopieerlink.':'The QR-code library could not be loaded. Please use the copy-link option for now.');
    return;
  }
  new window.QRCode(container,{
    text:url,
    width:300,
    height:300,
    colorDark:'#000000',
    colorLight:'#ffffff',
    correctLevel:window.QRCode.CorrectLevel.M
  });
  $('copyQrLinkBtn').onclick=async()=>{
    const btn=$('copyQrLinkBtn');
    await navigator.clipboard.writeText(url);
    btn.textContent=x.copied;
    window.clearTimeout(btn._copyResetTimer);
    btn._copyResetTimer=window.setTimeout(()=>{btn.textContent=x.copy;},2500);
  };
  $('qrModal').classList.remove('hidden');
  document.documentElement.classList.add('qr-modal-open');
  document.body.classList.add('qr-modal-open');
  try{
    if(navigator.wakeLock?.request) qrWakeLock=await navigator.wakeLock.request('screen');
  }catch(e){}
  try{
    if($('qrModal').requestFullscreen) await $('qrModal').requestFullscreen();
  }catch(e){}
}
async function closeRegistrationQr(){
  $('qrModal').classList.add('hidden');
  document.documentElement.classList.remove('qr-modal-open');
  document.body.classList.remove('qr-modal-open');
  try{ if(document.fullscreenElement) await document.exitFullscreen(); }catch(e){}
  try{ if(qrWakeLock){ await qrWakeLock.release(); qrWakeLock=null; } }catch(e){}
}
$('closeQrModalBtn').onclick=closeRegistrationQr;
$('qrModal').addEventListener('click',e=>{ if(e.target===$('qrModal')) closeRegistrationQr(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!$('qrModal').classList.contains('hidden')) closeRegistrationQr(); });

function addReservationLinkBox(parent,inv,reservation=null){
  const old=parent.querySelector('.reservation-link-box'); if(old)old.remove();
  const wrap=document.createElement('div'); wrap.className='reservation-link-box'; const url=reservationLink(inv);
  wrap.innerHTML=`<input readonly value="${escapeHtml(url)}"><button type="button" class="action-btn secondary copy-link-btn">${escapeHtml(tr[currentLang].copyRegistrationLink)}</button><button type="button" class="action-btn primary qr-link-btn">${escapeHtml(tr[currentLang].showQr)}</button>`;
  wrap.querySelector('.copy-link-btn').onclick=async e=>{e.stopPropagation();const btn=wrap.querySelector('.copy-link-btn');await navigator.clipboard.writeText(url);btn.textContent=tr[currentLang].copied;window.clearTimeout(btn._copyResetTimer);btn._copyResetTimer=window.setTimeout(()=>{btn.textContent=tr[currentLang].copy;},2500);};
  wrap.querySelector('.qr-link-btn').onclick=e=>{e.stopPropagation();showRegistrationQr(inv,reservation);};
  parent.appendChild(wrap);
}
async function createReservationInvite(reservation,button,item){
  button.disabled=true; const old=button.textContent; button.textContent=tr[currentLang].loading;
  const {data,error}=await supabaseClient.rpc('create_guest_registration_invite_for_reservation',{p_reservation_id:reservation.id,p_valid_days:30});
  button.disabled=false; button.textContent=old;
  if(error){ alert(error.message); return; }
  const inv=Array.isArray(data)?data[0]:data; if(!inv)return;
  await loadReservations();
}
let calendarStatusMode='relative';
function renderCalendarSyncAge(){
  const status=$('calendarSyncStatus');if(!status||calendarStatusMode!=='relative')return;
  const last=Number(localStorage.getItem('ngrLastIcalSync')||0);
  if(!last){status.textContent='';return;}
  const mins=Math.max(0,Math.floor((Date.now()-last)/60000)),x=tr[currentLang];
  if(mins<1)status.textContent=x.calendarUpdatedJustNow;
  else if(mins<60)status.textContent=x.calendarUpdatedMinutes.replace('{minutes}',mins);
  else{const hours=Math.floor(mins/60);status.textContent=hours===1?x.calendarUpdatedHour:x.calendarUpdatedHours.replace('{hours}',hours);}
}
async function syncCalendars(showFeedback=true){
  const btn=$('syncCalendarsBtn'),status=$('calendarSyncStatus'); if(btn)btn.disabled=true;
  calendarStatusMode='syncing';if(status)status.textContent=tr[currentLang].syncingCalendars;
  const {data,error}=await supabaseClient.functions.invoke('sync-ical');
  if(btn)btn.disabled=false;
  if(error){calendarStatusMode='error';if(status)status.textContent=`${tr[currentLang].syncFailed}: ${error.message}`;return false;}
  localStorage.setItem('ngrLastIcalSync',String(Date.now()));
  calendarStatusMode='relative';renderCalendarSyncAge();
  await loadReservations();return true;
}
async function autoSyncCalendars(){const last=Number(localStorage.getItem('ngrLastIcalSync')||0);renderCalendarSyncAge();if(Date.now()-last>15*60*1000)await syncCalendars(false);}
setInterval(renderCalendarSyncAge,30000);

function renderAttention(){
  const t=localToday();
  const active=reservations.filter(isRealReservation);
  const arriving=active.filter(r=>r.checkin_date>=t&&r.checkin_date<=addDaysIso(t,3)).length;
  const ids=active.filter(r=>{ const reg=reservationRegistration(r.id); return !!reg && registrationHasIdToVerify(reg) && r.checkin_date<=t && r.checkout_date>t; }).length;
  const inv=active.filter(r=>{ const reg=reservationRegistration(r.id); return !!reg && !!reg.invoice_requested && !linkedInvoiceForRegistration(reg.id) && r.checkout_date<=t; }).length;
  const values={arrivingSoon:arriving,idToVerify:ids,invoiceToCreate:inv};
  if($('attentionArrivingCount'))$('attentionArrivingCount').textContent=arriving;
  if($('attentionIdCount'))$('attentionIdCount').textContent=ids;
  if($('attentionInvoiceCount'))$('attentionInvoiceCount').textContent=inv;
  const any=arriving+ids+inv>0;
  document.querySelectorAll('[data-reservation-attention]').forEach(card=>card.classList.toggle('hidden',!values[card.dataset.reservationAttention]));
  $('attentionClearState')?.classList.toggle('hidden',any);
  $('attentionSubtitle')?.classList.toggle('hidden',!any);
}

async function session(){ return (await supabaseClient.auth.getSession()).data.session; }
async function allowed(){ const {data,error}=await supabaseClient.rpc('is_allowed_user'); return !error&&data===true; }
let pendingLoginEmail='';
let otpCooldownTimer=null;
const OTP_COOLDOWN_MS=60*1000;

function friendlyAuthError(error){
  const x=tr[currentLang], raw=String(error?.message||error||'').toLowerCase();
  if(raw.includes('rate limit')||raw.includes('rate_limit')||raw.includes('too many')||raw.includes('over_email_send_rate_limit')){
    return `${x.authRateTitle}. ${x.authRateText}`;
  }
  return error?.message||String(error||'');
}
function otpCooldownKey(email){ return `ngrOtpCooldown:${String(email||'').toLowerCase()}`; }
function getOtpCooldownUntil(email){ return Number(sessionStorage.getItem(otpCooldownKey(email))||0); }
function setOtpCooldown(email,ms=OTP_COOLDOWN_MS){
  sessionStorage.setItem(otpCooldownKey(email),String(Date.now()+ms));
  startOtpCooldown(email);
}
function startOtpCooldown(email){
  if(otpCooldownTimer){clearInterval(otpCooldownTimer);otpCooldownTimer=null;}
  const btn=$('resendLoginCodeBtn'); if(!btn)return;
  const update=()=>{
    const remaining=Math.ceil((getOtpCooldownUntil(email)-Date.now())/1000);
    if(remaining>0){
      btn.disabled=true;
      btn.textContent=tr[currentLang].resendIn.replace('{seconds}',remaining);
    }else{
      btn.disabled=false;
      btn.textContent=tr[currentLang].resendCode;
      sessionStorage.removeItem(otpCooldownKey(email));
      if(otpCooldownTimer){clearInterval(otpCooldownTimer);otpCooldownTimer=null;}
    }
  };
  update();
  if(getOtpCooldownUntil(email)>Date.now())otpCooldownTimer=setInterval(update,1000);
}


function showLoginEmailStep(){
  $('loginEmailStep').classList.remove('hidden');
  $('loginCodeStep').classList.add('hidden');
  $('loginCode').value='';
  $('loginMessage').textContent='';
  requestAnimationFrame(()=>$('loginEmail').focus());
}

function showLoginCodeStep(email,messageKey='codeSent'){
  pendingLoginEmail=email;
  $('loginEmailStep').classList.add('hidden');
  $('loginCodeStep').classList.remove('hidden');
  $('loginMessage').textContent=tr[currentLang][messageKey];
  startOtpCooldown(email);
  requestAnimationFrame(()=>$('loginCode').focus());
}

async function login(email,resend=false){
  $('loginMessage').textContent='';
  $('loginBtn').disabled=true;
  $('resendLoginCodeBtn').disabled=true;
  const {error}=await supabaseClient.auth.signInWithOtp({email});
  $('loginBtn').disabled=false;
  if(error){
    $('loginMessage').textContent=friendlyAuthError(error);
    if(String(error?.message||'').toLowerCase().includes('rate'))setOtpCooldown(email);
    else startOtpCooldown(email);
    return;
  }
  setOtpCooldown(email);
  showLoginCodeStep(email,resend?'codeResent':'codeSent');
}

async function verifyLoginCode(){
  const email=pendingLoginEmail||$('loginEmail').value.trim();
  const token=$('loginCode').value.replace(/\s+/g,'').trim();
  if(!email||!token)return;
  $('verifyLoginBtn').disabled=true;
  $('loginMessage').textContent='';
  const {error}=await supabaseClient.auth.verifyOtp({email,token,type:'email'});
  $('verifyLoginBtn').disabled=false;
  if(error){
    $('loginMessage').textContent=tr[currentLang].invalidCode;
    $('loginCode').select();
    return;
  }
  if(!(await allowed())){
    await supabaseClient.auth.signOut();
    $('loginMessage').textContent=tr[currentLang].denied;
    return;
  }
  await init();
}
async function logout(){ if(!guardUnsaved())return; registrationDirty=false; invoiceDirty=false; document.body.classList.remove('mobile-app-active'); await supabaseClient.auth.signOut(); location.reload(); }

function toggleRegInvoice(){ $('regInvoiceFields').classList.toggle('hidden',!rf.invoiceRequested.checked); $('regCompanyFields').classList.toggle('hidden',!rf.invoiceRequested.checked||rf.invoiceType.value!=='company'); }
function toggleIdOther(){ $('otherIdField').classList.toggle('hidden',rf.idType.value!=='other'); }
function toggleInvoiceCustom(){ $('customRoomField').classList.toggle('hidden',f.room.value!=='custom'); $('customPaymentField').classList.toggle('hidden',f.payment.value!=='custom'); }

const COUNTRY_CODES=['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];
function populateCountries(select, selected=''){
  const dn=new Intl.DisplayNames([currentLang==='nl'?'nl':'en'],{type:'region'});
  const placeholder=currentLang==='nl'?'Selecteer een land':'Select a country';
  const items=COUNTRY_CODES.map(code=>({code,name:dn.of(code)})).sort((a,b)=>a.name.localeCompare(b.name,currentLang));
  select.innerHTML='<option value="">'+placeholder+'</option>'+items.map(i=>'<option value="'+i.code+'">'+i.name+'</option>').join('');
  if(selected){ select.value=selected; if(!select.value){const o=document.createElement('option');o.value=selected;o.textContent=selected;select.appendChild(o);select.value=selected;} }
}



function applyRequiredFieldIndicators(){
  const invoiceIds=['labelInvoiceNumber','labelInvoiceDate','labelGuestName','labelRoomName','labelCheckin','labelCheckout','labelNights','labelGuests','labelAccommodation','labelCleaning','labelTouristTaxRate','labelTaxMode','labelPaymentMethod'];
  const registrationIds=['labelRegName','labelRegCity','labelRegCountry','labelRegCheckin','labelRegCheckout'];
  [...invoiceIds,...registrationIds].forEach(id=>{
    const label=$(id);if(!label)return;
    label.querySelectorAll('.required-star').forEach(s=>s.remove());
    const star=document.createElement('span');star.className='required-star';star.textContent=' *';star.setAttribute('aria-hidden','true');label.appendChild(star);
  });
}
function clearAdminValidationState(scope){
  const root=scope==='registration'?$('registrationEditor'):scope==='invoice'?$('invoiceDetailsCard'):null;
  if(!root)return;
  root.querySelectorAll('.field-invalid,.field.invalid').forEach(el=>el.classList.remove('field-invalid','invalid'));
  root.querySelectorAll('.invalid-control').forEach(el=>{el.classList.remove('invalid-control');el.removeAttribute('aria-invalid');});
  if(scope==='registration'&&$('registrationMessage'))$('registrationMessage').textContent='';
  if(scope==='invoice'&&$('saveMessage'))$('saveMessage').textContent='';
}
function focusFirstInvalid(fields){
  const first=fields.find(Boolean);if(!first)return;
  requestAnimationFrame(()=>{
    first.scrollIntoView({behavior:'smooth',block:'center'});
    setTimeout(()=>{try{first.focus({preventScroll:true});}catch(e){first.focus();}},300);
  });
}
function setTexts(){
  const x=tr[currentLang]; document.documentElement.lang=currentLang;
  document.querySelectorAll('[data-reservation-filter]').forEach(b=>b.onclick=()=>setReservationFilter(b.dataset.reservationFilter));
document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===currentLang));
  const map={reservations:'reservationsTitle',reservationsSubtitle:'reservationsSubtitle',syncCalendars:'syncCalendarsBtn',navReservations:'navReservations',reservationFilterUpcoming:'reservationFilterUpcoming',reservationFilterArrivingSoon:'reservationFilterArrivingSoon',reservationFilterStaying:'reservationFilterStaying',reservationFilterId:'reservationFilterId',reservationFilterInvoice:'reservationFilterInvoice',reservationFilterPast:'reservationFilterPast',reservationFilterRemoved:'reservationFilterRemoved',reservationFilterAll:'reservationFilterAll',pageTitle:'pageTitle',pageSubtitle:'pageSubtitle',loginTitle:'loginTitle',loginText:'loginText',loginEmail:'labelLoginEmail',loginBtn:'loginBtn',loginCode:'labelLoginCode',loginCodeIntro:'loginCodeIntro',verifyLogin:'verifyLoginBtn',resendCode:'resendLoginCodeBtn',changeEmail:'changeLoginEmailBtn',logout:'logoutBtn',registrations:'registrationTitle',registrationArchiveSubtitle:'registrationArchiveSubtitle',paper:'newPaperBtn',manualInvite:'manualInviteToggleBtn',invite:'inviteTitle',manualInviteHint:'manualInviteHint',cancel:'closeManualInviteBtn',inviteBooking:'labelInviteBooking',invitePlatform:'labelInvitePlatform',checkin:'labelInviteCheckin',checkout:'labelInviteCheckout',createLink:'createInviteBtn',copy:'copyInviteBtn',searchReg:'labelRegistrationSearch',regEditor:'registrationEditorTitle',close:'closeRegistrationBtn',fullName:'labelRegName',city:'labelRegCity',country:'labelRegCountry',bookingRef:'labelRegBooking',bookingPlatform:'labelRegPlatform',invoiceRequested:'regInvoiceRequestedText',invoiceType:'labelRegInvoiceType',email:'labelRegEmail',companyName:'labelRegCompanyName',companyAddress:'labelRegCompanyAddress',vat:'labelRegVat',additionalGuestFee:'labelAdditionalGuestFee',additionalGuestNights:'labelAdditionalGuestNights',guestOccupancy:'guestOccupancyTitle',guestOccupancyHint:'guestOccupancyHint',guestCount:'labelGuestCount',regAdditionalGuestNights:'labelRegAdditionalGuestNights',regAdditionalGuestRate:'labelRegAdditionalGuestRate',regAdditionalGuestPayment:'labelRegAdditionalGuestPayment',regAdditionalGuestTotal:'labelRegAdditionalGuestTotal',regAdditionalGuestPaid:'regAdditionalGuestPaidText',identity:'identityTitle',idShown:'labelIdType',verified:'idVerifiedText',saveRegistration:'saveRegistrationBtn',useInvoice:'useForInvoiceBtn',deleteRegistration:'deleteRegistrationBtn',formTitle:'formTitle',newInvoice:'newInvoiceBtn',duplicate:'duplicateBtn',invoiceNumber:'labelInvoiceNumber',invoiceDate:'labelInvoiceDate',guestName:'labelGuestName',guestAddress:'labelGuestAddress',guestPostal:'labelGuestPostal',guestCity:'labelGuestCity',guestCountry:'labelGuestCountry',guestEmail:'labelGuestEmail',room:'labelRoomName',customRoom:'labelCustomRoomName',nights:'labelNights',guests:'labelGuests',accommodation:'labelAccommodation',cleaning:'labelCleaning',tourist:'labelTouristTaxRate',taxMode:'labelTaxMode',payment:'labelPaymentMethod',customPayment:'labelCustomPayment',saveInvoice:'saveBtn',deleteInvoice:'deleteBtn',print:'printBtn',savedInvoices:'savedInvoicesTitle',searchInvoices:'labelSearchInvoices',navRegistrations:'navRegistrations',navGuestDetails:'navGuestDetails',navInvoiceDetails:'navInvoiceDetails',navSavedInvoices:'navSavedInvoices'};
  for(const [k,id] of Object.entries(map)) if($(id)) $(id).textContent=x[k];if($('attentionTitle')) $('attentionTitle').textContent=x.attentionTitle;
  if($('attentionSubtitle')) $('attentionSubtitle').textContent=x.attentionSubtitle;
  if($('attentionArrivingLabel')) $('attentionArrivingLabel').textContent=x.attentionArriving;
  if($('attentionIdLabel')) $('attentionIdLabel').textContent=x.attentionId;
  if($('attentionInvoiceLabel')) $('attentionInvoiceLabel').textContent=x.attentionInvoices;
  if($('attentionClearText')) $('attentionClearText').textContent=x.attentionClear;
  if($('mobileNavReservations')) $('mobileNavReservations').textContent=x.navReservations;
  if($('mobileNavRegistrations')) $('mobileNavRegistrations').textContent=x.navRegistrations;
  if($('mobileNavGuestDetails')) $('mobileNavGuestDetails').textContent=x.navGuestDetails;
  if($('mobileNavInvoiceDetails')) $('mobileNavInvoiceDetails').textContent=x.navInvoiceDetails;
  if($('mobileNavSavedInvoices')) $('mobileNavSavedInvoices').textContent=x.navSavedInvoices;
  if($('backToTopBtn')) { $('backToTopBtn').setAttribute('aria-label',x.backToTop); $('backToTopBtn').title=x.backToTop; }
  $('labelCompanyName').textContent=x.companyName+' ('+(currentLang==='nl'?'optioneel':'optional')+')'; $('labelCompanyAddress').textContent=x.companyAddress+' ('+(currentLang==='nl'?'optioneel':'optional')+')'; $('labelVatNumber').textContent=x.vat;
  $('labelBookingReference').textContent=x.bookingRef; $('labelCheckin').textContent=x.checkin; $('labelCheckout').textContent=x.checkout;
  $('registrationSearch').placeholder=x.searchRegPh; $('searchInvoices').placeholder=x.searchInvoicePh; $('clearRegistrationSearch').setAttribute('aria-label',x.clearSearch);$('clearInvoiceSearch').setAttribute('aria-label',x.clearSearch);
  rf.invoiceType.options[0].text=x.personal; rf.invoiceType.options[1].text=x.company;
  rf.platform.options[0].text=x.platformNotSelected; rf.platform.options[1].text='Airbnb'; rf.platform.options[2].text='Booking.com'; rf.platform.options[3].text=x.platformDirectOther;
  $('inviteBookingPlatform').options[0].text=x.platformNotSelected; $('inviteBookingPlatform').options[1].text='Airbnb'; $('inviteBookingPlatform').options[2].text='Booking.com'; $('inviteBookingPlatform').options[3].text=x.platformDirectOther;
  rf.idType.options[0].text=x.notSelected; rf.idType.options[1].text=x.passport; rf.idType.options[2].text=x.idCard; rf.idType.options[3].text=x.drivers; rf.idType.options[4].text=x.otherId; $('labelIdOther').textContent=x.otherId;
  $('regGuestCount').options[0].text=x.guestOne; $('regGuestCount').options[1].text=x.guestTwo;
  $('regAdditionalGuestPayment').options[0].text=x.notSelected; $('regAdditionalGuestPayment').options[1].text=x.cash; $('regAdditionalGuestPayment').options[2].text=x.paypal; $('regAdditionalGuestPayment').options[3].text='Airbnb';
  $('additionalGuestNightsHint').textContent=x.additionalGuestNightsHint;
  const currentRoom=f.room.value; f.room.innerHTML=`<option value="${x.cozy}">${x.cozy}</option><option value="${x.spacious}">${x.spacious}</option><option value="custom">${x.customRoomOpt}</option>`; if(currentRoom==='custom')f.room.value='custom'; else if(currentRoom.includes('Cozy')||currentRoom.includes('Knusse'))f.room.value=x.cozy; else f.room.value=x.spacious;
  const currentPay=f.payment.value; f.payment.innerHTML=`<option value="${x.booking}">${x.booking}</option><option value="${x.airbnb}">${x.airbnb}</option><option value="custom">${x.customPayOpt}</option>`; if(currentPay==='custom')f.payment.value='custom'; else if(currentPay.includes('Booking'))f.payment.value=x.booking; else if(currentPay.includes('Airbnb'))f.payment.value=x.airbnb;
  f.taxMode.innerHTML=`<option value="included">${x.taxIncluded}</option><option value="excluded">${x.taxExcluded}</option>`;
  if($('attentionTitle')) $('attentionTitle').textContent=x.attentionTitle;
  if($('attentionSubtitle')) $('attentionSubtitle').textContent=x.attentionSubtitle;
  if($('attentionArrivingLabel')) $('attentionArrivingLabel').textContent=x.attentionArriving;
  if($('attentionIdLabel')) $('attentionIdLabel').textContent=x.attentionId;
  if($('attentionInvoiceLabel')) $('attentionInvoiceLabel').textContent=x.attentionInvoices;
  if($('attentionClearText')) $('attentionClearText').textContent=x.attentionClear;
  if($('filterAll')) $('filterAll').textContent=x.filterAll;
  if($('filterArrivingSoon')) $('filterArrivingSoon').textContent=x.filterArrivingSoon;
  if($('filterUpcoming')) $('filterUpcoming').textContent=x.filterUpcoming;
  if($('filterStaying')) $('filterStaying').textContent=x.filterStaying;
  if($('filterPast')) $('filterPast').textContent=x.filterPast;
  if($('filterId')) $('filterId').textContent=x.filterId;
  if($('filterInvoice')) $('filterInvoice').textContent=x.filterInvoice;
  populateCountries(rf.country,rf.country.value);
  renderAttention(); renderRegs(); renderInvoices(); updatePreview();  if($('navCalendar'))$('navCalendar').textContent=x.navCalendar;
  if($('calendarTitle'))$('calendarTitle').textContent=x.calendarTitle;
  if($('calendarSubtitle'))$('calendarSubtitle').textContent=x.calendarSubtitle;
  if($('calendarTodayBtn'))$('calendarTodayBtn').textContent=x.calendarToday;
  if($('calendarBlockedLegend'))$('calendarBlockedLegend').textContent=x.calendarBlocked;
  if($('calendarHint'))$('calendarHint').textContent=x.calendarHint;
  if($('calendarDetailOpenBtn'))$('calendarDetailOpenBtn').textContent=x.calendarOpenReservation;
  if($('calendarDetailCloseBtn'))$('calendarDetailCloseBtn').setAttribute('aria-label',x.calendarClose);
  if($('calendarRoomBackBtn'))$('calendarRoomBackBtn').textContent=`‹ ${x.calendarBothRooms}`;
  updateCalendarViewSwitch();
  applyRequiredFieldIndicators();
}

function syncGuestDetailsNav(){
  const editor=$('registrationEditor');
  if(!editor)return;
  const hidden=editor.classList.contains('hidden');
  const desktopBtn=$('navGuestDetails');
  const mobileBtn=$('mobileNavGuestDetails');
  if(desktopBtn) desktopBtn.classList.toggle('hidden',hidden);
  if(mobileBtn) mobileBtn.classList.toggle('hidden',hidden);
}

function scrollToAdminSection(targetId){
  const target=$(targetId);
  if(!target || target.classList.contains('hidden')) return;
  target.scrollIntoView({behavior:'smooth',block:'start'});
}


const mobileShellState={tab:'reservations',detail:null,detailSource:'reservations',scroll:{reservations:0,calendar:0,guests:0,invoices:0},initialized:false};
function isMobileShell(){return window.matchMedia('(max-width:700px)').matches;}
function mobileTabElement(tab){return tab==='reservations'?$('reservationsOverview'):tab==='calendar'?$('calendarOverview'):tab==='guests'?$('registrationOverview'):tab==='invoices'?$('savedInvoicesCard'):null;}
function mobileMainElements(){return [$('reservationsOverview'),$('calendarOverview'),$('registrationOverview'),$('registrationEditor'),$('invoiceDetailsCard'),$('savedInvoicesCard'),$('previewWrapper')].filter(Boolean);}
function updateMobileShellText(){
  const x=tr[currentLang];
  $('mobileTabReservationsLabel').textContent=x.navReservations;$('mobileTabCalendarLabel').textContent=x.navCalendar;$('mobileTabGuestsLabel').textContent=x.mobileGuests;$('mobileTabInvoicesLabel').textContent=x.mobileInvoices;$('mobileTabMoreLabel').textContent=x.mobileMore;
  $('mobileMoreTitle').textContent=x.mobileMore;$('mobileMoreSyncBtn').textContent=x.mobileMoreSync;$('mobileMorePaperBtn').textContent=x.mobileMorePaper;$('mobileMoreLinkBtn').textContent=x.mobileMoreLink;$('mobileMoreLanguageLabel').textContent=x.mobileLanguage;$('mobileMoreAccountLabel').textContent=x.mobileAccount;$('mobileMoreLogoutBtn').textContent=x.mobileSignOut;$('mobileNewInvoiceBtn').textContent=x.newInvoice;$('mobileDetailBackBtn').setAttribute('aria-label',x.mobileBack);
  const en=$('mobileMoreEnglishBtn'),nl=$('mobileMoreDutchBtn');en.classList.toggle('selected',currentLang==='en');nl.classList.toggle('selected',currentLang==='nl');en.setAttribute('aria-pressed',String(currentLang==='en'));nl.setAttribute('aria-pressed',String(currentLang==='nl'));if($('mobileCancelBtn'))$('mobileCancelBtn').textContent=x.cancelShort;
}
function closeMobileMore(){$('mobileMoreSheet').classList.add('hidden');$('mobileMoreBackdrop').classList.add('hidden');$('mobileTabMore').classList.remove('active');}
function openMobileMore(){if(!isMobileShell())return;$('mobileMoreSheet').classList.remove('hidden');$('mobileMoreBackdrop').classList.remove('hidden');$('mobileTabMore').classList.add('active');}
function setMobileTab(tab,{restore=true,replaceHistory=true}={}){
  if(!isMobileShell())return;if(mobileShellState.detail)return;
  if(mobileShellState.tab){
    mobileShellState.scroll[mobileShellState.tab]=window.scrollY;
    if(mobileShellState.tab==='calendar'&&!calendarRoomView&&$('calendarScroller'))calendarTimelineScrollLeft=$('calendarScroller').scrollLeft;
  }
  const enteringCalendar=tab==='calendar'&&mobileShellState.tab!=='calendar';
  mobileShellState.tab=tab;closeMobileMore();mobileMainElements().forEach(el=>el.classList.add('mobile-shell-hidden'));mobileTabElement(tab)?.classList.remove('mobile-shell-hidden');
  document.querySelectorAll('.mobile-bottom-tab').forEach(b=>b.classList.toggle('active',b.dataset.mobileTab===tab));$('mobileBottomNav').classList.remove('hidden');$('mobileDetailBar').classList.add('hidden');document.body.classList.remove('mobile-detail-open');
  if(replaceHistory)history.replaceState({ngrMobile:true,tab,detail:null},'');
  requestAnimationFrame(()=>{
    window.scrollTo({top:restore?(mobileShellState.scroll[tab]||0):0,behavior:'auto'});
    if(enteringCalendar&&!calendarRoomView){
      if(!calendarHasVisited){calendarHasVisited=true;scrollCalendarToTodayStart('auto');}
      else if($('calendarScroller'))$('calendarScroller').scrollLeft=calendarTimelineScrollLeft;
    }
  });
}
function openMobileDetail(type,sourceTab=mobileShellState.tab,push=true){
  if(!isMobileShell())return false;const alreadyOpen=mobileShellState.detail===type;if(alreadyOpen)push=false;if(!mobileShellState.detail)mobileShellState.scroll[sourceTab]=window.scrollY;
  mobileShellState.detail=type;mobileShellState.detailSource=sourceTab;closeMobileMore();mobileMainElements().forEach(el=>el.classList.add('mobile-shell-hidden'));
  if(type==='guest')$('registrationEditor').classList.remove('mobile-shell-hidden');if(type==='invoice'){$('invoiceDetailsCard').classList.remove('mobile-shell-hidden');$('previewWrapper').classList.remove('mobile-shell-hidden');}
  $('mobileBottomNav').classList.add('hidden');$('mobileDetailBar').classList.remove('hidden');$('mobileDetailTitle').textContent=type==='guest'?tr[currentLang].navGuestDetails:tr[currentLang].navInvoiceDetails;document.body.classList.add('mobile-detail-open');
  if(push)history.pushState({ngrMobile:true,tab:sourceTab,detail:type},'');requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'auto'}));return true;
}
function closeMobileDetail({fromPop=false}={}){
  if(!isMobileShell()||!mobileShellState.detail)return;const source=mobileShellState.detailSource||'reservations';mobileShellState.detail=null;
  if(!fromPop){history.back();return;}setMobileTab(source,{restore:true,replaceHistory:false});
}
function initMobileAppShell(){
  document.body.classList.toggle('mobile-app-active',isMobileShell());
  if(mobileShellState.initialized){updateMobileShellText();return;}mobileShellState.initialized=true;updateMobileShellText();
  document.querySelectorAll('.mobile-bottom-tab').forEach(btn=>btn.addEventListener('click',()=>{const tab=btn.dataset.mobileTab;if(tab==='more'){openMobileMore();return;}if(mobileShellState.detail)mobileShellState.detail=null;setMobileTab(tab);}));
  $('mobileMoreCloseBtn').onclick=closeMobileMore;$('mobileMoreBackdrop').onclick=closeMobileMore;$('mobileDetailBackBtn').onclick=()=>closeMobileDetail();
  $('mobileNewInvoiceBtn').onclick=async()=>{await newInvoice();openMobileDetail('invoice','invoices');};$('mobileMoreSyncBtn').onclick=async()=>{closeMobileMore();setMobileTab('reservations');await syncCalendars(true);};
  $('mobileMorePaperBtn').onclick=()=>{closeMobileMore();setMobileTab('guests',{restore:false});blankRegistration();};
  $('mobileMoreLinkBtn').onclick=()=>{closeMobileMore();setMobileTab('guests',{restore:false});setManualInviteOpen(true);requestAnimationFrame(()=>$('manualInvitePanel')?.scrollIntoView({block:'start'}));};
  $('mobileMoreEnglishBtn').onclick=()=>document.querySelector('.lang-btn[data-lang="en"]')?.click();$('mobileMoreDutchBtn').onclick=()=>document.querySelector('.lang-btn[data-lang="nl"]')?.click();$('mobileMoreLogoutBtn').onclick=()=>$('logoutBtn')?.click();
  window.addEventListener('popstate',e=>{if(!isMobileShell())return;if(mobileShellState.detail){closeMobileDetail({fromPop:true});return;}if(e.state?.ngrMobile)setMobileTab(e.state.tab||'reservations',{restore:true,replaceHistory:false});});
  window.addEventListener('resize',()=>{document.body.classList.toggle('mobile-app-active',isMobileShell());if(isMobileShell()){if(!mobileShellState.detail)setMobileTab(mobileShellState.tab,{restore:true,replaceHistory:true});}else{mobileMainElements().forEach(el=>el.classList.remove('mobile-shell-hidden'));closeMobileMore();}});
  if(isMobileShell()){history.replaceState({ngrMobile:true,tab:'reservations',detail:null},'');setMobileTab('reservations',{restore:false,replaceHistory:false});}
}
function initAdminNav(){
  const desktopButtons=[...document.querySelectorAll('.admin-nav-btn')];
  const mobileButtons=[...document.querySelectorAll('.mobile-nav-btn')];
  const allNavButtons=[...desktopButtons,...mobileButtons];
  const menuToggle=$('mobileMenuToggle');
  const menuPanel=$('mobileMenuPanel');

  const closeMobileMenu=()=>{
    if(!menuToggle||!menuPanel)return;
    menuToggle.classList.remove('active');
    menuPanel.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  };
  const toggleMobileMenu=()=>{
    if(!menuToggle||!menuPanel)return;
    const open=menuPanel.classList.toggle('open');
    menuToggle.classList.toggle('active',open);
    menuToggle.setAttribute('aria-expanded',String(open));
  };

  allNavButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      scrollToAdminSection(btn.dataset.target);
      closeMobileMenu();
    });
  });
  if(menuToggle) menuToggle.addEventListener('click',(e)=>{ e.stopPropagation(); toggleMobileMenu(); });
  if(menuPanel) menuPanel.addEventListener('click',e=>e.stopPropagation());
  document.addEventListener('click',closeMobileMenu);
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMobileMenu(); });

  syncGuestDetailsNav();
  const editor=$('registrationEditor');
  if(editor) new MutationObserver(syncGuestDetailsNav).observe(editor,{attributes:true,attributeFilter:['class']});

  const updateActive=()=>{
    const visibleDesktop=desktopButtons.filter(b=>!b.classList.contains('hidden'));
    if(!visibleDesktop.length)return;
    const markerY=window.innerWidth<=700 ? 80 : 120;
    let best=null,bestDistance=Infinity;
    for(const btn of visibleDesktop){
      const el=$(btn.dataset.target);
      if(!el||el.classList.contains('hidden'))continue;
      const rect=el.getBoundingClientRect();
      const distance=rect.top<=markerY ? Math.abs(markerY-rect.top) : rect.top-markerY+400;
      if(distance<bestDistance){bestDistance=distance;best=btn;}
    }
    if(best){
      const target=best.dataset.target;
      desktopButtons.forEach(b=>b.classList.toggle('active',b.dataset.target===target));
      mobileButtons.forEach(b=>b.classList.toggle('active',b.dataset.target===target));
      if(window.innerWidth>700) best.scrollIntoView({behavior:'smooth',block:'nearest',inline:'nearest'});
    }
  };
  window.addEventListener('scroll',updateActive,{passive:true});
  window.addEventListener('resize',()=>{ updateActive(); if(window.innerWidth>700) closeMobileMenu(); });
  updateActive();
}

function setManualInviteOpen(open){
  const panel=$('manualInvitePanel');
  const toggle=$('manualInviteToggleBtn');
  panel.classList.toggle('hidden',!open);
  toggle.setAttribute('aria-expanded',open?'true':'false');
  if(open){
    requestAnimationFrame(()=>panel.scrollIntoView({behavior:'smooth',block:'nearest'}));
  }
}

async function createInvite(){
  $('inviteMessage').textContent=''; const ci=$('inviteCheckin').value,co=$('inviteCheckout').value;
  if(!ci||!co||co<=ci){$('inviteMessage').textContent=currentLang==='nl'?'Vul geldige in- en uitcheckdata in.':'Enter valid check-in and check-out dates.';return;}
  const {data,error}=await supabaseClient.rpc('create_guest_registration_invite_with_platform',{p_booking_reference:$('inviteBookingReference').value.trim()||null,p_booking_platform:$('inviteBookingPlatform').value||null,p_checkin_date:ci,p_checkout_date:co,p_valid_days:30});
  if(error){$('inviteMessage').textContent=error.message;return;}
  const row=Array.isArray(data)?data[0]:data; const url=`${PUBLIC_FORM_BASE}?token=${row.token}`; $('inviteUrl').value=url; $('inviteResult').classList.remove('hidden'); $('inviteMessage').textContent=tr[currentLang].linkCreated;
}

function blankRegistration(){clearAdminValidationState('registration');
  if(!guardUnsaved('registration'))return;
  suppressDirty=true;
  currentRegistrationId=null; currentDraftReservationId=null; rf.id.value=''; rf.source.value='paper_manual'; for(const k of ['name','city','country','checkin','checkout','booking','email','companyName','companyAddress','vat','idOther'])rf[k].value=''; populateCountries(rf.country,''); applyRegistrationPlatformField(null); rf.invoiceRequested.checked=false; rf.invoiceType.value='personal'; rf.idType.value=''; rf.idVerified.checked=false; rf.guestCount.value='1';rf.additionalGuestNights.value=0;rf.additionalGuestRate.value='20.00';rf.additionalGuestPayment.value='';rf.additionalGuestPaid.checked=false;toggleGuestOccupancy(); toggleRegInvoice();toggleIdOther(); $('deleteRegistrationBtn').classList.add('hidden'); $('registrationEditor').classList.remove('hidden'); $('registrationMessage').textContent='';
  registrationDirty=false; suppressDirty=false;
  updateMobileSaveBar();if(isMobileShell()){openMobileDetail('guest',mobileShellState.tab);return;}
  requestAnimationFrame(()=>{
    const heading=$('registrationEditorTitle')||$('registrationEditor');
    heading.scrollIntoView({behavior:'smooth',block:'start'});
  });
}
function loadReg(r,scrollMode='default'){clearAdminValidationState('registration');
  if(!guardUnsaved('registration'))return;
  suppressDirty=true;
  currentRegistrationId=r.id;currentDraftReservationId=null;rf.id.value=r.id;rf.source.value=r.source||'digital';rf.name.value=r.full_name||'';rf.city.value=r.city||'';populateCountries(rf.country,r.country||'');rf.checkin.value=r.checkin_date||'';rf.checkout.value=r.checkout_date||'';rf.booking.value=r.booking_reference||'';applyRegistrationPlatformField(r);rf.invoiceRequested.checked=!!r.invoice_requested;rf.invoiceType.value=r.invoice_type||'personal';rf.email.value=r.email||'';rf.companyName.value=r.company_name||'';rf.companyAddress.value=r.company_address||'';rf.vat.value=r.vat_number||'';rf.idType.value=r.id_type||'';rf.idOther.value=r.id_other||'';rf.idVerified.checked=!!r.id_verified;rf.guestCount.value=String(registrationGuestCount(r));rf.additionalGuestNights.value=r.additional_guest_nights||0;rf.additionalGuestRate.value=Number(r.additional_guest_fee_per_night||20).toFixed(2);rf.additionalGuestPayment.value=r.additional_guest_payment_method||'';rf.additionalGuestPaid.checked=!!r.additional_guest_fee_paid;toggleGuestOccupancy();toggleRegInvoice();toggleIdOther();$('deleteRegistrationBtn').classList.remove('hidden');$('registrationEditor').classList.remove('hidden');$('registrationMessage').textContent='';
  registrationDirty=false; suppressDirty=false;updateMobileSaveBar();
  if(isMobileShell()){openMobileDetail('guest',mobileShellState.tab);return;}
  requestAnimationFrame(()=>{
    if(scrollMode==='heading'){
      const heading=$('registrationEditorTitle')||$('registrationEditor');
      heading.scrollIntoView({behavior:'smooth',block:'start'});
    } else if(window.innerWidth>1000){
      $('registrationEditor').scrollIntoView({behavior:'smooth',block:'end'});
    } else {
      $('registrationEditor').scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
}
async function saveReg(){
  const requiredReg=[rf.name,rf.city,rf.country,rf.checkin,rf.checkout];
  requiredReg.forEach(el=>{const field=el.closest('.field');field?.classList.remove('field-invalid','invalid');el.classList.remove('invalid-control');el.removeAttribute('aria-invalid');});
  const invalidReg=requiredReg.filter(el=>!String(el.value||'').trim());
  invalidReg.forEach(el=>{const field=el.closest('.field');field?.classList.add('field-invalid','invalid');el.classList.add('invalid-control');el.setAttribute('aria-invalid','true');});
  if(invalidReg.length){$('registrationMessage').textContent=currentLang==='nl'?'Vul alle verplichte velden in.':'Complete all required fields.';focusFirstInvalid(invalidReg);return;}
  const mainNights=mainStayNights(), guestCount=Number(rf.guestCount.value||1), extraNights=guestCount>1?Number(rf.additionalGuestNights.value||0):0;
  if(guestCount>1 && (!extraNights || extraNights<1 || extraNights>mainNights)){ $('registrationMessage').textContent=currentLang==='nl'?'Het aantal nachten van de extra gast moet tussen 1 en het aantal nachten van de hoofdgast liggen.':'Additional guest nights must be between 1 and the main guest stay length.'; return; }
  const s=await session(); const draftReservation=currentDraftReservationId?reservations.find(r=>r.id===currentDraftReservationId):null; const payload={full_name:rf.name.value.trim(),home_address:null,postal_code:null,city:rf.city.value.trim(),country:rf.country.value.trim(),checkin_date:rf.checkin.value,checkout_date:rf.checkout.value,booking_reference:rf.booking.value.trim()||null,booking_platform:(draftReservation?.platform||rf.platform.value||null),reservation_id:(draftReservation?.id||undefined),invoice_requested:rf.invoiceRequested.checked,invoice_type:rf.invoiceRequested.checked?rf.invoiceType.value:null,email:rf.invoiceRequested.checked?rf.email.value.trim()||null:null,company_name:rf.invoiceRequested.checked&&rf.invoiceType.value==='company'?rf.companyName.value.trim()||null:null,company_address:rf.invoiceRequested.checked&&rf.invoiceType.value==='company'?rf.companyAddress.value.trim()||null:null,vat_number:rf.invoiceRequested.checked&&rf.invoiceType.value==='company'?rf.vat.value.trim()||null:null,declaration_accepted:true,source:rf.source.value||'paper_manual',id_type:rf.idType.value||null,id_other:rf.idType.value==='other'?rf.idOther.value.trim()||null:null,id_verified:rf.idVerified.checked,id_verified_at:rf.idVerified.checked?new Date().toISOString():null,id_verified_by:rf.idVerified.checked?s.user.id:null,guest_count:guestCount,additional_guest_nights:extraNights,additional_guest_fee_per_night:guestCount>1?Number(rf.additionalGuestRate.value||20):20,additional_guest_payment_method:guestCount>1?(rf.additionalGuestPayment.value||null):null,additional_guest_fee_paid:guestCount>1?rf.additionalGuestPaid.checked:false};
  let q=currentRegistrationId?supabaseClient.from('guest_registrations').update(payload).eq('id',currentRegistrationId).select().single():supabaseClient.from('guest_registrations').insert([{...payload,submitted_at:new Date().toISOString()}]).select().single();
  const {data,error}=await q;if(error){$('registrationMessage').textContent=error.message;return;}
  if(currentDraftReservationId){
    await supabaseClient.from('guest_registration_invites').delete().eq('reservation_id',currentDraftReservationId).is('used_at',null);
  }
  currentRegistrationId=data.id; currentDraftReservationId=null; rf.id.value=data.id; registrationDirty=false; $('deleteRegistrationBtn').classList.remove('hidden'); $('registrationMessage').textContent=tr[currentLang].savedReg; await loadRegs();
}

function mainStayNights(){
  if(!rf.checkin.value||!rf.checkout.value)return 0;
  return Math.max(0,reservationNightsBetween(rf.checkin.value,rf.checkout.value));
}
function registrationGuestCount(reg){ return Math.max(1,Number(reg?.guest_count||1)); }
function registrationHasIdToVerify(reg){ return !!reg && !reg.id_verified; }
function registrationIdStatusText(reg){
  if(currentLang==='nl') return reg?.id_verified?'ID gecontroleerd':'ID nog controleren';
  return reg?.id_verified?'ID verified':'ID to verify';
}
function additionalGuestTotalFromRegistration(reg){
  if(!reg || registrationGuestCount(reg)<2)return 0;
  return Number(reg.additional_guest_nights||0)*Number(reg.additional_guest_fee_per_night||20);
}
function additionalPaymentLabel(method){
  if(method==='cash')return currentLang==='nl'?'Contant':'Cash';
  if(method==='paypal')return 'PayPal';
  if(method==='airbnb')return 'Airbnb';
  return '';
}
function toggleGuestOccupancy(resetNights=false){
  const hasExtra=Number(rf.guestCount.value||1)>1;
  $('additionalGuestStayFields').classList.toggle('hidden',!hasExtra);
  const maxNights=mainStayNights();
  rf.additionalGuestNights.max=maxNights||'';
  if(hasExtra){
    if(resetNights || !Number(rf.additionalGuestNights.value) || Number(rf.additionalGuestNights.value)>maxNights){
      rf.additionalGuestNights.value=maxNights||1;
    }
  }else{
    rf.additionalGuestNights.value=0;
    rf.additionalGuestPayment.value='';
    rf.additionalGuestPaid.checked=false;
  }
  updateAdditionalGuestTotal();
}
function updateAdditionalGuestTotal(){
  const nights=Number(rf.additionalGuestNights.value||0);
  const rate=Number(rf.additionalGuestRate.value||0);
  $('regAdditionalGuestTotal').textContent=euro(nights*rate);
}

async function loadRegs(){const {data,error}=await supabaseClient.from('guest_registrations').select('*').order('checkin_date',{ascending:false}).limit(250);if(error){$('registrationList').innerHTML=`<p class="muted">${error.message}</p>`;return;}registrations=data||[];renderAttention();renderRegs();renderReservations();}
async function deleteRegistration(){
  if(!currentRegistrationId)return;
  if(!confirm(tr[currentLang].confirmDeleteReg))return;
  const {error}=await supabaseClient.from('guest_registrations').delete().eq('id',currentRegistrationId);
  if(error){$('registrationMessage').textContent=error.message;return;}
  currentRegistrationId=null; currentDraftReservationId=null; registrationDirty=false;
  rf.id.value='';
  $('registrationEditor').classList.add('hidden');
  $('deleteRegistrationBtn').classList.add('hidden');
  await loadRegs();
}
async function quickDeleteRegistration(r){
  if(!confirm(tr[currentLang].confirmDeleteReg))return;
  const {error}=await supabaseClient.from('guest_registrations').delete().eq('id',r.id);
  if(error){alert(error.message);return;}
  if(currentRegistrationId===r.id){currentRegistrationId=null;registrationDirty=false;rf.id.value='';$('registrationEditor').classList.add('hidden');$('deleteRegistrationBtn').classList.add('hidden');}
  await loadRegs();
}
function renderRegs(){
  const x=tr[currentLang],q=($('registrationSearch').value||'').toLowerCase();
  const rows=registrations
    .filter(r=>registrationMatchesFilter(r,registrationFilter))
    .filter(r=>[r.full_name,r.email,r.booking_reference,r.company_name,r.city,platformDisplay(effectiveRegistrationPlatform(r))].filter(Boolean).some(v=>String(v).toLowerCase().includes(q)))
    .sort((a,b)=>{
      const aIn=Date.parse(a.checkin_date||'1970-01-01'),bIn=Date.parse(b.checkin_date||'1970-01-01');
      const aOut=Date.parse(a.checkout_date||'1970-01-01'),bOut=Date.parse(b.checkout_date||'1970-01-01');
      if(registrationFilter==='past') return bOut-aOut;               // most recent checkout first
      if(registrationFilter==='invoiceToCreate') return aOut-bOut;    // furthest-past/oldest checkout first
      return bIn-aIn;                                                  // most recent/latest check-in first
    });
  $('registrationList').innerHTML='';
  document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter===registrationFilter));
  if(!rows.length){$('registrationList').innerHTML=`<p class="muted">${x.noRegs}</p>`;return;}
  rows.forEach(r=>{
    const linked=linkedInvoiceForRegistration(r.id);
    const invoiceBadge=linked
      ? `<button type="button" class="badge invoice-created linked-invoice-badge" title="${escapeHtml(x.openInvoice)}">${escapeHtml(x.invoiceCreated)} · ${escapeHtml(linked.invoice_number)}</button>`
      : (r.invoice_requested?`<span class="badge invoice-pending">${escapeHtml(x.invoicePending)}</span>`:'');
    const guestCount=registrationGuestCount(r), guestCountBadge=guestCount>1?`<span class="badge">👤 ${guestCount} ${currentLang==='nl'?'gasten':'guests'}</span>`:''; const platform=effectiveRegistrationPlatform(r), platformBadge=platform?`<span class="badge platform-archive ${platform==='airbnb'?'airbnb':platform==='booking'?'booking':''}">${escapeHtml(platformDisplay(platform))}</span>`:'';
    const d=document.createElement('div'); d.className='registration-item list-item-with-action';
    d.innerHTML=`<div class="list-item-content"><strong>${escapeHtml(r.full_name)}</strong><span class="muted">${fmt(r.checkin_date)} → ${fmt(r.checkout_date)}</span><div class="registration-badges">${platformBadge}${guestCountBadge}<span class="badge ${r.id_verified?'good':'warn'}">${escapeHtml(registrationIdStatusText(r))}</span>${invoiceBadge}<span class="badge">${r.source==='paper_manual'?(currentLang==='nl'?'Papier':'Paper'):(currentLang==='nl'?'Digitaal':'Digital')}</span></div></div><div class="item-menu"><button type="button" class="item-menu-toggle" aria-label="${escapeHtml(x.moreActions)}" aria-expanded="false">⋯</button><div class="item-menu-popover"><button type="button" class="item-delete-action">${escapeHtml(x.quickDeleteReg)}</button></div></div>`;
    d.classList.add('clickable-list-card');
    d.setAttribute('role','button');
    d.setAttribute('tabindex','0');
    d.onclick=e=>{if(e.target.closest('button,a,input,select'))return;loadReg(r,'heading');};
    d.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button,a,input,select')){e.preventDefault();loadReg(r,'heading');}};
    const badge=d.querySelector('.linked-invoice-badge'); if(badge) badge.onclick=e=>{e.stopPropagation();const opened=loadInvoice(linked);if(opened&&window.innerWidth>1000){requestAnimationFrame(()=>$('invoiceDetailsCard').scrollIntoView({behavior:'smooth',block:'start'}));}};
    const menuToggle=d.querySelector('.item-menu-toggle'),menu=d.querySelector('.item-menu');
    menuToggle.onclick=e=>{e.stopPropagation();const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));};
    d.querySelector('.item-delete-action').onclick=e=>{e.stopPropagation();menu.classList.remove('open');quickDeleteRegistration(r);};
    $('registrationList').appendChild(d);
  });
}
function escapeHtml(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}


function mainPaymentForRegistration(registrationId){
  const reg=registrations.find(g=>g.id===registrationId);
  if(!reg)return '';
  const platform=effectiveRegistrationPlatform(reg);
  if(platform==='booking')return tr[currentLang].booking;
  if(platform==='airbnb')return tr[currentLang].airbnb;
  return '';
}
function buildInvoicePaymentText(registrationId){
  const reg=registrations.find(g=>g.id===registrationId);
  if(!reg)return '';
  const main=mainPaymentForRegistration(registrationId);
  const hasExtra=registrationGuestCount(reg)>1 && Number(reg.additional_guest_nights||0)>0;
  const method=hasExtra?(reg.additional_guest_payment_method||''):'';
  if(!hasExtra || !method)return main;
  if(main===tr[currentLang].airbnb && method==='airbnb')return tr[currentLang].airbnb;
  const mainText=main?`${currentLang==='nl'?'Accommodatie':'Accommodation'}: ${main}`:'';
  let extraText='';
  if(method==='airbnb') extraText=`${tr[currentLang].additionalGuestLine}: ${tr[currentLang].airbnb}`;
  if(method==='paypal') extraText=`${tr[currentLang].additionalGuestLine}: ${tr[currentLang].additionalGuestPaidPayPal}`;
  if(method==='cash') extraText=`${tr[currentLang].additionalGuestLine}: ${tr[currentLang].additionalGuestPaidCash}`;
  return [mainText,extraText].filter(Boolean).join('  •  ');
}
function applyCombinedPaymentToInvoice(registrationId){
  const text=buildInvoicePaymentText(registrationId);
  if(!text)return false;
  if(text===tr[currentLang].booking){f.payment.value=tr[currentLang].booking;f.customPayment.value='';}
  else if(text===tr[currentLang].airbnb){f.payment.value=tr[currentLang].airbnb;f.customPayment.value='';}
  else{f.payment.value='custom';f.customPayment.value=text;}
  toggleInvoiceCustom(); return true;
}

function useRegistrationForInvoice(){
  const linked=currentRegistrationId?linkedInvoiceForRegistration(currentRegistrationId):null;
  if(linked){ loadInvoice(linked); return; }
  if(!guardUnsaved('invoice'))return;
  suppressDirty=true;
  currentInvoiceId=null;
  f.registrationId.value=currentRegistrationId||'';f.guestName.value=rf.name.value;f.guestAddress.value='';f.guestPostal.value='';f.guestCity.value=rf.city.value;f.guestCountry.value=rf.country.value;f.companyName.value=rf.invoiceType.value==='company'?rf.companyName.value:'';f.companyAddress.value=rf.invoiceType.value==='company'?rf.companyAddress.value:'';f.vat.value=rf.invoiceType.value==='company'?rf.vat.value:'';f.email.value=rf.email.value;f.booking.value=rf.booking.value;f.checkin.value=rf.checkin.value;f.checkout.value=rf.checkout.value;applyReservationRoomToInvoice(currentRegistrationId);applyReservationPaymentToInvoice(currentRegistrationId);
  const reg=registrations.find(g=>g.id===currentRegistrationId);
  const hasExtra=registrationGuestCount(reg)>1 && Number(reg?.additional_guest_nights||0)>0;
  const extraNights=hasExtra?Number(reg.additional_guest_nights||0):0;
  const extraFee=hasExtra?additionalGuestTotalFromRegistration(reg):0;
  f.additionalGuestFee.value=extraFee.toFixed(2);f.additionalGuestNights.value=extraNights;f.guests.value=registrationGuestCount(reg);
  $('additionalGuestInvoiceFields').classList.toggle('hidden',!hasExtra);
  applyCombinedPaymentToInvoice(currentRegistrationId);
  manualNights=false;autoNights();$('deleteBtn').classList.add('hidden');$('duplicateBtn').classList.add('hidden');updatePreview();markInvoiceDirty();suppressDirty=false;if(isMobileShell()){openMobileDetail('invoice',mobileShellState.tab);return;}document.querySelector('.form-card').scrollIntoView({behavior:'smooth'});
}

async function nextInvoice(){const y=new Date(f.invoiceDate.value||today()).getFullYear();const {data}=await supabaseClient.from('invoices').select('invoice_sequence').eq('invoice_year',y).order('invoice_sequence',{ascending:false}).limit(1);const n=data?.length?data[0].invoice_sequence+1:1;return `${y}-${String(n).padStart(3,'0')}`;}
function autoNights(){if(manualNights)return;const n=invoiceNightsBetween();if(n)f.nights.value=n;}
async function newInvoice(force=false){clearAdminValidationState('invoice');if(!force&&!guardUnsaved('invoice'))return; suppressDirty=true;currentInvoiceId=null;manualNights=false;f.registrationId.value='';f.invoiceDate.value=today();f.invoiceNumber.value=await nextInvoice();for(const k of ['guestName','guestAddress','guestPostal','guestCity','guestCountry','companyName','companyAddress','vat','email','booking','customRoom','checkin','checkout','nights','accommodation','customPayment'])f[k].value='';f.guests.value=1;f.cleaning.value='5.00';f.additionalGuestFee.value='0.00';f.additionalGuestNights.value='0';$('additionalGuestInvoiceFields').classList.add('hidden');f.tourist.value='3.71';f.taxMode.value='included';f.room.value=tr[currentLang].cozy;f.payment.value=tr[currentLang].booking;$('deleteBtn').classList.add('hidden');$('duplicateBtn').classList.add('hidden');toggleInvoiceCustom();updatePreview();$('saveMessage').textContent='';invoiceDirty=false;suppressDirty=false;updateMobileSaveBar();}
function validateInvoice(showErrors=false){const keys=['invoiceNumber','invoiceDate','guestName','room','checkin','checkout','nights','guests','accommodation','cleaning','tourist','taxMode','payment'],invalid=[];keys.forEach(k=>{const el=f[k],empty=!String(el.value??'').trim(),badNum=(k==='nights'||k==='guests')&&Number(el.value)<=0;if(empty||badNum)invalid.push(el);});if(f.room.value==='custom'&&!f.customRoom.value.trim())invalid.push(f.customRoom);if(f.payment.value==='custom'&&!f.customPayment.value.trim())invalid.push(f.customPayment);document.querySelectorAll('#invoiceDetailsCard .field-invalid').forEach(el=>el.classList.remove('field-invalid'));invalid.forEach(el=>el.closest('.field')?.classList.add('field-invalid'));if(showErrors&&invalid.length){const first=invalid[0];requestAnimationFrame(()=>{first.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>first.focus({preventScroll:true}),300);});}return invalid.length===0;}
async function saveInvoice(){if(!validateInvoice(true)){$('saveMessage').textContent=tr[currentLang].required;return;}const s=await session();const [year,seq]=f.invoiceNumber.value.split('-');const n=Number(f.nights.value),g=Number(f.guests.value),a=Number(f.accommodation.value||0),c=Number(f.cleaning.value||0),extraFee=Number(f.additionalGuestFee.value||0),extraNights=Number(f.additionalGuestNights.value||0),rate=Number(f.tourist.value||0),baseGuests=extraNights>0?Math.max(1,g-1):g,baseTax=n*baseGuests*rate,extraTax=extraNights*rate,tax=baseTax+extraTax,total=f.taxMode.value==='included'?a+c+extraFee:a+c+baseTax+extraFee;const payload={invoice_number:f.invoiceNumber.value,invoice_year:Number(year),invoice_sequence:Number(seq),invoice_date:f.invoiceDate.value,guest_name:f.guestName.value.trim(),guest_email:f.email.value.trim(),booking_reference:f.booking.value.trim(),guest_address:f.guestAddress.value.trim(),guest_postal_code:f.guestPostal.value.trim(),guest_city:f.guestCity.value.trim(),guest_country:f.guestCountry.value.trim(),company_name:f.companyName.value.trim(),company_address:f.companyAddress.value.trim(),vat_number:f.vat.value.trim(),guest_registration_id:f.registrationId.value||null,room_name:roomValue(),checkin_date:f.checkin.value,checkout_date:f.checkout.value,nights:n,guests:g,accommodation_amount:a,cleaning_fee:c,additional_guest_fee:extraFee,additional_guest_nights:extraNights,tourist_tax_rate:rate,tourist_tax_total:tax,tax_mode:f.taxMode.value,total_paid:total,payment_method:paymentValue(),created_by:s.user.id};const q=currentInvoiceId?supabaseClient.from('invoices').update(payload).eq('id',currentInvoiceId).select().single():supabaseClient.from('invoices').insert([payload]).select().single();const {data,error}=await q;if(error){$('saveMessage').textContent=error.message;return;}currentInvoiceId=data.id;invoiceDirty=false;clearAdminValidationState('invoice');$('deleteBtn').classList.remove('hidden');$('duplicateBtn').classList.remove('hidden');$('saveMessage').textContent=tr[currentLang].savedInvoice;await loadInvoices();renderAttention();renderRegs();}
async function loadInvoices(){const {data,error}=await supabaseClient.from('invoices').select('*').order('invoice_year',{ascending:false}).order('invoice_sequence',{ascending:false}).limit(300);if(error){$('invoiceList').innerHTML=`<p class="muted">${error.message}</p>`;return;}invoices=data||[];renderInvoices();renderAttention();renderRegs();renderReservations();}
async function quickDeleteInvoice(i){
  if(!confirm(currentLang==='nl'?`Factuur ${i.invoice_number} verwijderen? Dit kan niet ongedaan worden gemaakt.`:`Delete invoice ${i.invoice_number}? This cannot be undone.`))return;
  const {error}=await supabaseClient.from('invoices').delete().eq('id',i.id);
  if(error){alert(error.message);return;}
  if(currentInvoiceId===i.id)await newInvoice(true);
  await loadInvoices();
}
function renderInvoices(){const x=tr[currentLang],q=($('searchInvoices').value||'').toLowerCase(),rows=invoices.filter(i=>[i.invoice_number,i.guest_name,i.company_name,i.guest_email,i.booking_reference].filter(Boolean).some(v=>String(v).toLowerCase().includes(q)));$('invoiceList').innerHTML='';if(!rows.length){$('invoiceList').innerHTML=`<p class="muted">${x.noInvoices}</p>`;return;}rows.forEach(i=>{const d=document.createElement('div');d.className='invoice-item list-item-with-action clickable-list-card';d.setAttribute('role','button');d.setAttribute('tabindex','0');d.innerHTML=`<div class="list-item-content"><strong>${escapeHtml(i.invoice_number)}</strong><span>${escapeHtml(i.company_name?i.company_name+' — ':'')}${escapeHtml(i.guest_name)}</span><br><span class="muted">${fmt(i.invoice_date)} · €${Number(i.total_paid).toFixed(2)}</span></div><div class="item-menu"><button type="button" class="item-menu-toggle" aria-label="${escapeHtml(x.moreActions)}" aria-expanded="false">⋯</button><div class="item-menu-popover"><button type="button" class="item-delete-action">${escapeHtml(x.quickDeleteInvoice)}</button></div></div>`;d.onclick=e=>{if(e.target.closest('button,a,input,select'))return;loadInvoice(i);};d.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button,a,input,select')){e.preventDefault();loadInvoice(i);}};const menuToggle=d.querySelector('.item-menu-toggle'),menu=d.querySelector('.item-menu');menuToggle.onclick=e=>{e.stopPropagation();const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));};d.querySelector('.item-delete-action').onclick=e=>{e.stopPropagation();menu.classList.remove('open');quickDeleteInvoice(i);};$('invoiceList').appendChild(d);});}
function loadInvoice(i){clearAdminValidationState('invoice');if(!guardUnsaved('invoice'))return false; suppressDirty=true;currentInvoiceId=i.id;manualNights=true;f.registrationId.value=i.guest_registration_id||'';f.invoiceNumber.value=i.invoice_number;f.invoiceDate.value=i.invoice_date;f.guestName.value=i.guest_name||'';f.guestAddress.value=i.guest_address||'';f.guestPostal.value=i.guest_postal_code||'';f.guestCity.value=i.guest_city||'';f.guestCountry.value=i.guest_country||'';f.companyName.value=i.company_name||'';f.companyAddress.value=i.company_address||'';f.vat.value=i.vat_number||'';f.email.value=i.guest_email||'';f.booking.value=i.booking_reference||'';f.checkin.value=i.checkin_date||'';f.checkout.value=i.checkout_date||'';f.nights.value=i.nights;f.guests.value=i.guests;f.accommodation.value=i.accommodation_amount;f.cleaning.value=i.cleaning_fee;f.additionalGuestFee.value=Number(i.additional_guest_fee||0).toFixed(2);f.additionalGuestNights.value=i.additional_guest_nights||0;$('additionalGuestInvoiceFields').classList.toggle('hidden',!Number(i.additional_guest_fee||0));f.tourist.value=i.tourist_tax_rate;f.taxMode.value=i.tax_mode;const room=i.room_name||'';if(room.includes('Cozy')||room.includes('Knusse'))f.room.value=tr[currentLang].cozy;else if(room.includes('Spacious')||room.includes('Ruime'))f.room.value=tr[currentLang].spacious;else{f.room.value='custom';f.customRoom.value=room;}const pay=i.payment_method||'';if(pay.includes('Booking'))f.payment.value=tr[currentLang].booking;else if(pay.includes('Airbnb'))f.payment.value=tr[currentLang].airbnb;else{f.payment.value='custom';f.customPayment.value=pay;}$('deleteBtn').classList.remove('hidden');$('duplicateBtn').classList.remove('hidden');toggleInvoiceCustom();updatePreview();invoiceDirty=false;suppressDirty=false;updateMobileSaveBar();if(isMobileShell()){openMobileDetail('invoice',mobileShellState.tab);return true;}if(window.innerWidth<=1000){ requestAnimationFrame(()=>document.querySelector('.form-card').scrollIntoView({behavior:'smooth',block:'start'})); }return true;}
async function deleteInvoice(){if(!currentInvoiceId||!confirm(currentLang==='nl'?'Factuur verwijderen?':'Delete this invoice?'))return;const {error}=await supabaseClient.from('invoices').delete().eq('id',currentInvoiceId);if(error){$('saveMessage').textContent=error.message;return;}invoiceDirty=false;$('saveMessage').textContent=tr[currentLang].deleted;await newInvoice(true);await loadInvoices();}
async function duplicateInvoice(){currentInvoiceId=null;f.invoiceDate.value=today();f.invoiceNumber.value=await nextInvoice();$('deleteBtn').classList.add('hidden');$('duplicateBtn').classList.add('hidden');$('saveMessage').textContent=tr[currentLang].duplicated;updatePreview();markInvoiceDirty();}

function updatePreview(){const x=tr[currentLang];autoNights();const n=Number(f.nights.value||0),g=Number(f.guests.value||1),a=Number(f.accommodation.value||0),c=Number(f.cleaning.value||0),extraFee=Number(f.additionalGuestFee.value||0),extraNights=Number(f.additionalGuestNights.value||0),rate=Number(f.tourist.value||0),baseGuests=extraNights>0?Math.max(1,g-1):g,baseTax=n*baseGuests*rate,extraTax=extraNights*rate,tax=baseTax+extraTax,total=f.taxMode.value==='included'?a+c+extraFee:a+c+baseTax+extraFee;
  const labels={previewInvoiceTitle:x.invoiceTitle,previewLabelInvoiceNumber:x.labelInvoiceNumber,previewLabelInvoiceDate:x.labelDate,previewSectionGuest:x.billed,previewLabelVatNumber:x.labelVat,previewLabelBookingReference:x.labelBooking,previewSectionStay:x.stay,previewLabelRoom:x.labelRoom,previewLabelCheckin2:x.labelCheckin,previewLabelCheckout2:x.labelCheckout,previewLabelNights2:x.labelNights,previewLabelGuests2:x.labelGuests,previewSectionDescription:x.descriptionTitle,previewDescription:x.description,previewSectionPrice:x.price,previewLabelAccommodation:x.labelAccommodation,previewLabelAdditionalGuest:x.additionalGuestLine,previewLabelCleaning:x.labelCleaning,previewLabelTaxRate:x.labelTaxRate,previewLabelTotal:x.labelTotal,previewSectionPayment:x.paymentTitle,previewNote:x.note};for(const [id,v] of Object.entries(labels))$(id).textContent=v;$('previewLabelTaxTotal').textContent=f.taxMode.value==='included'?x.labelTaxIncluded:x.labelTaxAdded;
  $('previewInvoiceNumber').textContent=f.invoiceNumber.value||'—';$('previewInvoiceDate').textContent=fmt(f.invoiceDate.value);
  // Invoice recipient layout: personal invoices show only the guest name. Company invoices
  // show company details (plus VAT when supplied). Personal home-address data remains
  // stored in the admin/database, but is deliberately not rendered on the invoice/PDF.
  const company=f.companyName.value.trim();
  const isCompanyInvoice=Boolean(company);
  $('previewCompanyName').textContent=company;
  $('previewCompanyName').classList.toggle('hidden',!isCompanyInvoice);
  $('previewCompanyName').style.fontWeight='700';
  $('previewGuestName').textContent=f.guestName.value.trim()||'—';
  $('previewGuestName').classList.toggle('hidden',isCompanyInvoice);
  $('previewAddress').textContent='';
  $('previewAddress').classList.add('hidden');
  $('previewCityCountry').textContent='';
  $('previewCityCountry').classList.add('hidden');
  const ca=f.companyAddress.value.trim();
  $('previewCompanyAddress').textContent=ca;
  $('previewCompanyAddress').classList.toggle('hidden',!isCompanyInvoice||!ca);
  $('previewVatNumber').textContent=f.vat.value.trim();
  $('previewVatNumberWrap').classList.toggle('hidden',!isCompanyInvoice||!f.vat.value.trim());
  $('previewGuestEmail').textContent=f.email.value.trim();
  $('previewGuestEmail').style.display=f.email.value.trim()?'block':'none';
  $('previewBookingReference').textContent=f.booking.value.trim();
  $('previewBookingReferenceWrap').classList.toggle('hidden',!f.booking.value.trim());
  $('previewRoomName').textContent=roomValue()||'—';$('previewCheckin').textContent=fmt(f.checkin.value);$('previewCheckout').textContent=fmt(f.checkout.value);$('previewNights').textContent=n||'—';$('previewGuests').textContent=g;$('previewAccommodation').textContent=euro(a);$('previewCleaning').textContent=euro(c);$('previewAdditionalGuestRow').classList.toggle('hidden',!extraFee);$('previewAdditionalGuest').textContent=euro(extraFee);$('previewTouristTaxRate').textContent=extraNights?`${euro(rate)} × ${baseGuests} × ${n} + ${euro(rate)} × 1 × ${extraNights}`:`${euro(rate)} × ${g} × ${n}`;$('previewTouristTax').textContent=euro(tax);$('previewTotal').textContent=euro(total);$('previewPaymentMethod').textContent=paymentValue()||'—';}

$('syncCalendarsBtn').onclick=()=>syncCalendars(true);
$('loginEmailForm').addEventListener('submit',e=>{
  e.preventDefault();
  const email=$('loginEmail').value.trim();
  if(email) login(email);
});
$('loginCodeForm').addEventListener('submit',e=>{
  e.preventDefault();
  verifyLoginCode();
});
$('resendLoginCodeBtn').onclick=()=>{if(pendingLoginEmail)login(pendingLoginEmail,true)};
$('changeLoginEmailBtn').onclick=()=>{pendingLoginEmail='';if(otpCooldownTimer){clearInterval(otpCooldownTimer);otpCooldownTimer=null;}$('resendLoginCodeBtn').disabled=false;$('resendLoginCodeBtn').textContent=tr[currentLang].resendCode;showLoginEmailStep();};
$('loginCode').addEventListener('input',()=>{$('loginCode').value=$('loginCode').value.replace(/\D/g,'').slice(0,8);});
$('logoutBtn').onclick=logout;$('manualInviteToggleBtn').onclick=()=>setManualInviteOpen($('manualInvitePanel').classList.contains('hidden'));$('closeManualInviteBtn').onclick=()=>setManualInviteOpen(false);$('createInviteBtn').onclick=createInvite;$('copyInviteBtn').onclick=async()=>{
  const btn=$('copyInviteBtn');await navigator.clipboard.writeText($('inviteUrl').value);
  $('inviteMessage').textContent='';btn.textContent=tr[currentLang].copied;
  clearTimeout(btn._copyResetTimer);btn._copyResetTimer=setTimeout(()=>{btn.textContent=tr[currentLang].copy;},2500);
};$('newPaperBtn').onclick=blankRegistration;$('closeRegistrationBtn').onclick=()=>{if(!guardUnsaved('registration'))return;registrationDirty=false;currentDraftReservationId=null;updateMobileSaveBar();if(isMobileShell()){closeMobileDetail();return;}$('registrationEditor').classList.add('hidden');};$('saveRegistrationBtn').onclick=async()=>{await saveReg();updateMobileSaveBar();};
$('regGuestCount').onchange=()=>{toggleGuestOccupancy(true);markRegistrationDirty();};
$('regCheckin').addEventListener('change',()=>toggleGuestOccupancy());$('regCheckout').addEventListener('change',()=>toggleGuestOccupancy());
$('regAdditionalGuestNights').oninput=()=>{const max=mainStayNights();if(Number(rf.additionalGuestNights.value)>max)rf.additionalGuestNights.value=max;updateAdditionalGuestTotal();markRegistrationDirty();};
$('regAdditionalGuestRate').oninput=()=>{updateAdditionalGuestTotal();markRegistrationDirty();};
$('regAdditionalGuestPayment').onchange=()=>{markRegistrationDirty();};
$('regAdditionalGuestPaid').onchange=()=>{markRegistrationDirty();};$('useForInvoiceBtn').onclick=useRegistrationForInvoice;$('deleteRegistrationBtn').onclick=deleteRegistration;function updateSearchClearButtons(){$('clearRegistrationSearch').classList.toggle('hidden',!$('registrationSearch').value);$('clearInvoiceSearch').classList.toggle('hidden',!$('searchInvoices').value);}
$('registrationSearch').oninput=()=>{updateSearchClearButtons();renderRegs();};$('clearRegistrationSearch').onclick=()=>{$('registrationSearch').value='';updateSearchClearButtons();renderRegs();$('registrationSearch').focus();};rf.invoiceRequested.onchange=toggleRegInvoice;rf.invoiceType.onchange=toggleRegInvoice;rf.idType.onchange=toggleIdOther;
document.querySelectorAll('.filter-pill').forEach(b=>b.onclick=()=>setRegistrationFilter(b.dataset.filter));
document.querySelectorAll('[data-reservation-attention]').forEach(b=>b.onclick=()=>{setReservationFilter(b.dataset.reservationAttention);$('reservationsOverview').scrollIntoView({behavior:'smooth',block:'start'});});
$('saveBtn').onclick=async()=>{await saveInvoice();updateMobileSaveBar();};$('deleteBtn').onclick=deleteInvoice;$('duplicateBtn').onclick=duplicateInvoice;$('newInvoiceBtn').onclick=()=>newInvoice();$('printBtn').onclick=()=>{if(validateInvoice(true))window.print();else $('saveMessage').textContent=tr[currentLang].required;};$('searchInvoices').oninput=()=>{updateSearchClearButtons();renderInvoices();};$('clearInvoiceSearch').onclick=()=>{$('searchInvoices').value='';updateSearchClearButtons();renderInvoices();$('searchInvoices').focus();};f.room.onchange=()=>{toggleInvoiceCustom();updatePreview()};f.payment.onchange=()=>{toggleInvoiceCustom();updatePreview()};f.taxMode.onchange=()=>updatePreview();f.checkin.onchange=()=>{manualNights=false;autoNights();updatePreview()};f.checkout.onchange=()=>{manualNights=false;autoNights();updatePreview()};f.nights.oninput=()=>{manualNights=true;updatePreview()};
Object.values(f).filter(v=>v&&v.tagName!=='SELECT').forEach(v=>{if(v.type!=='hidden')v.addEventListener('input',updatePreview)});
Object.values(rf).forEach(v=>{if(!v||v.type==='hidden')return; const ev=(v.tagName==='SELECT'||v.type==='checkbox')?'change':'input'; v.addEventListener(ev,markRegistrationDirty);v.addEventListener('input',()=>{if(String(v.value||'').trim()){v.closest('.field')?.classList.remove('field-invalid','invalid');v.classList.remove('invalid-control');v.removeAttribute('aria-invalid');}});v.addEventListener('change',()=>{if(String(v.value||'').trim()){v.closest('.field')?.classList.remove('field-invalid','invalid');v.classList.remove('invalid-control');v.removeAttribute('aria-invalid');}});});
Object.values(f).forEach(v=>{if(!v||v.type==='hidden')return; const ev=(v.tagName==='SELECT'||v.type==='checkbox')?'change':'input'; v.addEventListener(ev,markInvoiceDirty);});
document.querySelectorAll('#invoiceDetailsCard input,#invoiceDetailsCard select,#invoiceDetailsCard textarea').forEach(el=>{el.addEventListener('input',()=>clearInvoiceFieldError(el));el.addEventListener('change',()=>clearInvoiceFieldError(el));});
document.querySelectorAll('[data-reservation-filter]').forEach(b=>b.onclick=()=>setReservationFilter(b.dataset.reservationFilter));
document.querySelectorAll('.lang-btn').forEach(b=>b.onclick=()=>{currentLang=b.dataset.lang;setTexts();toggleRegInvoice();toggleIdOther();toggleInvoiceCustom();renderReservations();updateMobileSaveBar();renderCalendarSyncAge();renderCalendar();updateMobileShellText();if(pendingLoginEmail)startOtpCooldown(pendingLoginEmail);});


$('calendarViewMonthBtn').onclick=()=>setCalendarRoomView(calendarRoomView||'cozy',{date:calendarRoomView?visibleRoomMonthDate():monthStartIso(),behavior:'smooth'});
$('calendarViewBothBtn').onclick=()=>exitCalendarRoomView({behavior:'smooth'});
$('calendarRoomCozyBtn').onclick=()=>setCalendarRoomView('cozy',{date:isMobileShell()?visibleRoomMonthDate():monthStartIso(),behavior:'auto'});
$('calendarRoomSpaciousBtn').onclick=()=>setCalendarRoomView('spacious',{date:isMobileShell()?visibleRoomMonthDate():monthStartIso(),behavior:'auto'});

// Horizontal swipe changes view without stealing vertical month scrolling.
// In the horizontal Both view, an edge-swipe from the far-left opens Month view so normal date panning still works.
let calendarSwipeStart=null;
$('calendarRoomMonth').addEventListener('touchstart',e=>{const t=e.touches[0];calendarSwipeStart={x:t.clientX,y:t.clientY,mode:'month'};},{passive:true});
$('calendarRoomMonth').addEventListener('touchend',e=>{if(!calendarSwipeStart)return;const t=e.changedTouches[0],dx=t.clientX-calendarSwipeStart.x,dy=t.clientY-calendarSwipeStart.y;calendarSwipeStart=null;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.35)exitCalendarRoomView({behavior:'auto'});},{passive:true});
$('calendarScroller').addEventListener('touchstart',e=>{const t=e.touches[0];calendarSwipeStart={x:t.clientX,y:t.clientY,mode:'both',atLeft:$('calendarScroller').scrollLeft<4};},{passive:true});
$('calendarScroller').addEventListener('touchend',e=>{if(!calendarSwipeStart||calendarSwipeStart.mode!=='both')return;const t=e.changedTouches[0],dx=t.clientX-calendarSwipeStart.x,dy=t.clientY-calendarSwipeStart.y,atLeft=calendarSwipeStart.atLeft;calendarSwipeStart=null;if(atLeft&&dx>85&&Math.abs(dx)>Math.abs(dy)*1.4)setCalendarRoomView('cozy',{date:monthStartIso(),behavior:'auto'});},{passive:true});

window.addEventListener('scroll',()=>{if(calendarRoomView&&mobileShellState.tab==='calendar')calendarRoomScrollDate=visibleRoomMonthDate();},{passive:true});

$('calendarRoomBackBtn').onclick=exitCalendarRoomView;
$('calendarScroller').addEventListener('scroll',()=>{if(mobileShellState.tab==='calendar'&&!calendarRoomView)calendarTimelineScrollLeft=$('calendarScroller').scrollLeft;},{passive:true});
$('calendarPrevBtn').onclick=()=>changeCalendarMonth(-1);
$('calendarNextBtn').onclick=()=>changeCalendarMonth(1);
$('calendarTodayBtn').onclick=calendarToday;
$('calendarDetailCloseBtn').onclick=closeCalendarDetail;
$('calendarDetailBackdrop').onclick=closeCalendarDetail;

document.addEventListener('click',e=>{
  document.querySelectorAll('.item-menu.open').forEach(menu=>{
    if(!menu.contains(e.target)){menu.classList.remove('open');menu.querySelector('.item-menu-toggle')?.setAttribute('aria-expanded','false');}
  });
});


async function cancelMobileEdits(){
  if(lastDirtyScope==='registration'&&registrationDirty){
    if(currentRegistrationId){
      const existing=registrations.find(r=>r.id===currentRegistrationId);
      registrationDirty=false;updateMobileSaveBar();
      if(existing)loadReg(existing,'default');
    }else{
      registrationDirty=false;currentDraftReservationId=null;updateMobileSaveBar();
      if(isMobileShell()&&mobileShellState.detail==='guest')closeMobileDetail();
      else $('registrationEditor').classList.add('hidden');
    }
    return;
  }
  if(lastDirtyScope==='invoice'&&invoiceDirty){
    if(currentInvoiceId){
      const existing=invoices.find(i=>i.id===currentInvoiceId);
      invoiceDirty=false;updateMobileSaveBar();
      if(existing)loadInvoice(existing);
    }else{
      invoiceDirty=false;updateMobileSaveBar();await newInvoice(true);
      if(isMobileShell()&&mobileShellState.detail==='invoice')closeMobileDetail();
    }
    return;
  }
  if(registrationDirty){lastDirtyScope='registration';return cancelMobileEdits();}
  if(invoiceDirty){lastDirtyScope='invoice';return cancelMobileEdits();}
}
const mobileCancelBtn=$('mobileCancelBtn');
if(mobileCancelBtn)mobileCancelBtn.onclick=cancelMobileEdits;

const mobileSaveBtn=$('mobileSaveBtn');
if(mobileSaveBtn){
  mobileSaveBtn.onclick=async()=>{
    const x=tr[currentLang];
    mobileSaveBtn.disabled=true;
    mobileSaveBtn.textContent=x.savingShort;
    try{
      if(lastDirtyScope==='registration'&&registrationDirty)await saveReg();
      else if(lastDirtyScope==='invoice'&&invoiceDirty)await saveInvoice();
      else if(registrationDirty)await saveReg();
      else if(invoiceDirty)await saveInvoice();
    }finally{
      mobileSaveBtn.disabled=false;
      updateMobileSaveBar();
    }
  };
}

const backToTopBtn=$('backToTopBtn');
if(backToTopBtn){
  const updateBackToTop=()=>{
    const appVisible=!$('appView').classList.contains('hidden');
    backToTopBtn.classList.toggle('visible',appVisible && window.scrollY>420);
  };
  backToTopBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  window.addEventListener('scroll',updateBackToTop,{passive:true});
  window.addEventListener('resize',updateBackToTop);
  updateBackToTop();
}

window.addEventListener('beforeunload',e=>{if(registrationDirty||invoiceDirty){e.preventDefault();e.returnValue='';}});
initAdminNav();

async function init(){setTexts();setReservationFilter(reservationFilter);toggleRegInvoice();toggleIdOther();toggleInvoiceCustom();const s=await session();if(!s){document.body.classList.remove('mobile-app-active');$('loginView').classList.remove('hidden');$('appView').classList.add('hidden');return;}if(!(await allowed())){await supabaseClient.auth.signOut();$('loginMessage').textContent=tr[currentLang].denied;return;}$('loginView').classList.add('hidden');$('appView').classList.remove('hidden');$('logoutBtn').classList.remove('hidden');initMobileAppShell();await Promise.all([loadRegs(),loadInvoices(),loadReservations(),newInvoice(true)]); setReservationFilter(reservationFilter||'upcoming'); await autoSyncCalendars();}
init().catch(err=>{
  console.error('Admin initialization failed:', err);
  const msg=document.getElementById('loginMessage');
  if(msg) msg.textContent='The admin app could not start. Please refresh the page. If this continues, check the browser console.';
});


// Refresh the complete admin page when the title/logo is clicked.
const refreshTitle = document.getElementById('pageTitle');
if (refreshTitle) {
  refreshTitle.setAttribute('role', 'button');
  refreshTitle.setAttribute('tabindex', '0');
  refreshTitle.addEventListener('click', () => { if(guardUnsaved()) { registrationDirty=false; invoiceDirty=false; window.location.reload(); } });
  refreshTitle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if(guardUnsaved()){ registrationDirty=false; invoiceDirty=false; window.location.reload(); }
    }
  });
}
