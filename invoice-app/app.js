import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://rmvfrgpampxduldzfwxi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Y94dITMxDgGpH6ZnINbWjw_5w5KMW_c';
const PUBLIC_FORM_BASE = 'https://nijmegenguestrooms.com/guest-registration/';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const tr = {
  en: {
    pageTitle:'Guest & Invoice Admin',pageSubtitle:'Nijmegen Guest Rooms – Private administration',loginTitle:'Sign in',loginText:'Only authorized users can access the administration.',loginEmail:'Email',loginBtn:'Send verification code',loginCode:'Verification code',loginCodeIntro:'Enter the verification code sent to your email.',verifyLogin:'Verify & sign in',resendCode:'Resend code',changeEmail:'Use another email',codeSent:'Verification code sent. Check your email.',codeResent:'A new verification code has been sent.',invalidCode:'The verification code is invalid or has expired.',logout:'Log out',
    reservations:'Reservations',reservationsSubtitle:'Read-only overview from Airbnb and Booking.com calendars.',syncCalendars:'Sync calendars',syncingCalendars:'Syncing calendars…',syncedCalendars:'Calendars synced.',syncFailed:'Calendar sync failed',registrationNotCreated:'Registration not created',registrationLinkReady:'Registration link ready',registrationSubmitted:'Registration submitted',createRegistrationLink:'Create registration link',copyRegistrationLink:'Copy link',showQr:'Show QR code',qrTitle:'Scan to complete your guest registration',qrSubtitle:'Open your camera and scan the QR code.',qrCopy:'Copy registration link',completeManually:'Complete registration manually',printPaperForm:'Print prefilled paper form',manualFromReservation:'Manual registration linked to this reservation.',openGuest:'Open guest',openAirbnb:'Open in Airbnb ↗',roomCozyShort:'Cozy room',roomSpaciousShort:'Spacious room',nightsWord:'nights',navReservations:'Reservations',noReservations:'No reservations match this view.',reservationFilterUpcoming:'Upcoming',reservationFilterArrivingSoon:'Arriving soon',reservationFilterStaying:'Staying now',reservationFilterId:'ID to verify',reservationFilterInvoice:'Invoice to create',reservationFilterPast:'Past',reservationFilterRemoved:'Removed / cancelled',reservationFilterAll:'All',reservationRemoved:'Removed / cancelled',possibleExistingRegistration:'Possible existing registration',linkExistingGuest:'Link existing guest',linkSuggestedGuest:'Link {name}',selectExistingGuest:'Select an existing guest registration',confirmLinkGuest:'Link {name} to this reservation?',linkedExistingGuest:'Existing guest registration linked.',noUnlinkedGuests:'No unlinked guest registrations are available.',exactMatch:'Exact dates',registrations:'Guest registrations',registrationArchiveSubtitle:'Detailed guest administration and archive.',paper:'Add paper registration',manualInvite:'＋ Create manual guest link',invite:'Create manual guest link',manualInviteHint:'Use this only for a guest without an Airbnb or Booking.com reservation.',cancel:'Cancel',inviteBooking:'Booking reference (optional)',invitePlatform:'Booking platform',checkin:'Check-in',checkout:'Check-out',createLink:'Create secure link',copy:'Copy link',searchReg:'Search registrations',searchRegPh:'Search by name, email or booking reference',
    regEditor:'Guest registration',close:'Close',fullName:'Full name',homeAddress:'Home address',postal:'Postal code',city:'City',country:'Country',bookingRef:'Booking reference (optional)',bookingPlatform:'Booking platform',platformNotSelected:'Not selected',platformDirectOther:'Direct / Other',platformLinkedHint:'Automatically linked from the reservation.',invoiceRequested:'Invoice requested',invoiceType:'Invoice type',personal:'Personal',company:'Company',email:'Email',companyName:'Company name',companyAddress:'Company address',vat:'VAT number (optional)',overnightGuests:'Overnight guests',overnightSummaryOne:'1 registered guest',overnightSummaryMany:'{count} registered guests',addOvernightGuest:'+ Add overnight guest',overnightCity:'City / place of residence',overnightArrival:'Arrival',overnightDeparture:'Departure',overnightRate:'Additional guest fee (€ per night, incl. tourist tax)',overnightPayment:'Payment method',overnightPaid:'Fee paid',saveOvernight:'Save overnight guest',createOvernightQr:'Create QR registration',printOvernight:'Print paper form',cancelOvernight:'Cancel',deleteOvernight:'Delete',cash:'Cash',paypal:'PayPal',otherPayment:'Other',additionalGuestFee:'Additional overnight guest fee (€)',additionalGuestNights:'Additional guest nights',additionalGuestLine:'Additional overnight guest',overnightSaved:'Overnight guest saved.',overnightDeleted:'Overnight guest deleted.',overnightQrCreated:'QR registration created.',identity:'Identification check – host only',idShown:'Identification shown',notSelected:'Not selected',passport:'Passport',idCard:'ID card',drivers:'Driver\'s licence',otherId:'Other valid ID',verified:'Identity verified',saveRegistration:'Save registration',useInvoice:'Use for invoice',deleteRegistration:'Delete registration',savedReg:'Registration saved.',deletedReg:'Registration deleted.',confirmDeleteReg:'Delete this guest registration? This cannot be undone.',quickDeleteReg:'Delete registration',quickDeleteInvoice:'Delete invoice',linkCreated:'Secure registration link created.',copied:'Link copied.',navRegistrations:'Guest registrations',navGuestDetails:'Guest details',navInvoiceDetails:'Invoice details',navSavedInvoices:'Saved invoices',
    formTitle:'Invoice Details',newInvoice:'New invoice',duplicate:'Duplicate invoice',invoiceNumber:'Invoice number',invoiceDate:'Invoice date',guestName:'Guest name',guestAddress:'Guest address',guestPostal:'Postal code',guestCity:'City',guestCountry:'Country',guestEmail:'Guest email (optional)',room:'Room name',customRoom:'Custom room name',nights:'Nights',guests:'Guests',accommodation:'Accommodation (€)',cleaning:'Cleaning fee (€)',tourist:'Tourist tax rate (€ per guest per night)',taxMode:'Tourist tax handling',taxIncluded:'Accommodation amount already includes tourist tax',taxExcluded:'Tourist tax should be added on top of accommodation',payment:'Payment',customPayment:'Custom payment method',saveInvoice:'Save invoice',deleteInvoice:'Delete invoice',print:'Print / Save as PDF',savedInvoices:'Saved Invoices',searchInvoices:'Search / filter invoices',searchInvoicePh:'Search by invoice number, guest name, company, email or booking reference',
    invoiceTitle:'INVOICE',labelInvoiceNumber:'Invoice number:',labelDate:'Date:',billed:'Billed to',labelVat:'VAT number:',labelBooking:'Booking reference:',stay:'Stay Details',labelRoom:'Room:',labelCheckin:'Check-in:',labelCheckout:'Check-out:',labelNights:'Nights:',labelGuests:'Guests:',descriptionTitle:'Description',description:'Accommodation in private room (shared home)',price:'Price Breakdown',labelAccommodation:'Accommodation',labelCleaning:'Cleaning fee',labelTaxRate:'Tourist tax rate',labelTaxIncluded:'Tourist tax included',labelTaxAdded:'Tourist tax added',labelTotal:'Total amount paid',paymentTitle:'Payment',note:'This is a private rental. VAT is not applicable.',
    cozy:'Cozy Room (Street Side)',spacious:'Spacious Room (Garden View)',customRoomOpt:'Custom room name...',booking:'Paid via Booking.com',airbnb:'Paid via Airbnb',customPayOpt:'Custom payment method...',checkEmail:'Check your email for the login link.',denied:'Access denied. This email address is not authorized.',savedInvoice:'Invoice saved.',deleted:'Invoice deleted.',duplicated:'Invoice duplicated. Save it as a new invoice.',required:'Please fill in all required invoice fields.',noRegs:'No guest registrations match this view.',noInvoices:'No invoices yet.',loading:'Loading…',backToTop:'Back to top',attentionTitle:'Needs attention',attentionSubtitle:'Quick overview of upcoming and unfinished guest tasks.',attentionArriving:'Arriving soon',attentionId:'ID to verify',attentionInvoices:'Invoices to create',filterAll:'All',filterArrivingSoon:'Arriving soon',filterUpcoming:'Upcoming',filterStaying:'Staying now',filterPast:'Past',filterId:'ID to verify',filterInvoice:'Invoice to create',invoiceCreated:'Invoice created',invoicePending:'Invoice requested',openInvoice:'Open linked invoice',unsaved:'You have unsaved changes. Continue without saving?' 
  },
  nl: {
    pageTitle:'Gasten- & factuurbeheer',pageSubtitle:'Nijmegen Guest Rooms – Privé administratie',loginTitle:'Inloggen',loginText:'Alleen geautoriseerde gebruikers hebben toegang tot de administratie.',loginEmail:'E-mailadres',loginBtn:'Stuur verificatiecode',loginCode:'Verificatiecode',loginCodeIntro:'Vul de verificatiecode in die naar je e-mailadres is gestuurd.',verifyLogin:'Verifiëren & inloggen',resendCode:'Code opnieuw sturen',changeEmail:'Ander e-mailadres gebruiken',codeSent:'Verificatiecode verzonden. Controleer je e-mail.',codeResent:'Er is een nieuwe verificatiecode verzonden.',invalidCode:'De verificatiecode is ongeldig of verlopen.',logout:'Uitloggen',
    reservations:'Reserveringen',reservationsSubtitle:'Alleen-lezen overzicht uit de kalenders van Airbnb en Booking.com.',syncCalendars:'Kalenders synchroniseren',syncingCalendars:'Kalenders synchroniseren…',syncedCalendars:'Kalenders gesynchroniseerd.',syncFailed:'Kalendersynchronisatie mislukt',registrationNotCreated:'Registratie nog niet aangemaakt',registrationLinkReady:'Registratielink gereed',registrationSubmitted:'Registratie ingediend',createRegistrationLink:'Registratielink maken',copyRegistrationLink:'Link kopiëren',showQr:'Toon QR-code',qrTitle:'Scan om je gastenregistratie in te vullen',qrSubtitle:'Open de camera en scan de QR-code.',qrCopy:'Kopieer registratielink',completeManually:'Registratie handmatig voltooien',printPaperForm:'Vooringevuld papieren formulier printen',manualFromReservation:'Handmatige registratie gekoppeld aan deze reservering.',openGuest:'Gast openen',openAirbnb:'Openen in Airbnb ↗',roomCozyShort:'Knusse kamer',roomSpaciousShort:'Ruime kamer',nightsWord:'nachten',navReservations:'Reserveringen',noReservations:'Geen reserveringen in deze weergave.',reservationFilterUpcoming:'Aankomend',reservationFilterArrivingSoon:'Binnenkort',reservationFilterStaying:'Nu verblijvend',reservationFilterId:'ID nog controleren',reservationFilterInvoice:'Factuur te maken',reservationFilterPast:'Verleden',reservationFilterRemoved:'Verwijderd / geannuleerd',reservationFilterAll:'Alles',reservationRemoved:'Verwijderd / geannuleerd',possibleExistingRegistration:'Mogelijk bestaande registratie',linkExistingGuest:'Bestaande gast koppelen',linkSuggestedGuest:'Koppel {name}',selectExistingGuest:'Selecteer een bestaande gastenregistratie',confirmLinkGuest:'{name} aan deze reservering koppelen?',linkedExistingGuest:'Bestaande gastenregistratie gekoppeld.',noUnlinkedGuests:'Er zijn geen ongekoppelde gastenregistraties beschikbaar.',exactMatch:'Exacte data',registrations:'Gastenregistraties',registrationArchiveSubtitle:'Gedetailleerde gastenadministratie en archief.',paper:'Papieren registratie toevoegen',manualInvite:'＋ Handmatige gastenlink maken',invite:'Handmatige gastenlink maken',manualInviteHint:'Gebruik dit alleen voor een gast zonder Airbnb- of Booking.com-reservering.',cancel:'Annuleren',inviteBooking:'Boekingsreferentie (optioneel)',invitePlatform:'Boekingsplatform',checkin:'Inchecken',checkout:'Uitchecken',createLink:'Veilige link maken',copy:'Link kopiëren',searchReg:'Registraties zoeken',searchRegPh:'Zoek op naam, e-mail of boekingsreferentie',
    regEditor:'Gastenregistratie',close:'Sluiten',fullName:'Volledige naam',homeAddress:'Woonadres',postal:'Postcode',city:'Woonplaats',country:'Land',bookingRef:'Boekingsreferentie (optioneel)',bookingPlatform:'Boekingsplatform',platformNotSelected:'Niet geselecteerd',platformDirectOther:'Direct / Anders',platformLinkedHint:'Automatisch gekoppeld vanuit de reservering.',invoiceRequested:'Factuur aangevraagd',invoiceType:'Type factuur',personal:'Particulier',company:'Zakelijk',email:'E-mailadres',companyName:'Bedrijfsnaam',companyAddress:'Bedrijfsadres',vat:'Btw-identificatienummer (optioneel)',overnightGuests:'Overnachtende gasten',overnightSummaryOne:'1 geregistreerde gast',overnightSummaryMany:'{count} geregistreerde gasten',addOvernightGuest:'+ Overnachtende gast toevoegen',overnightCity:'Woonplaats',overnightArrival:'Aankomst',overnightDeparture:'Vertrek',overnightRate:'Toeslag extra gast (€ per nacht, incl. toeristenbelasting)',overnightPayment:'Betaalmethode',overnightPaid:'Toeslag betaald',saveOvernight:'Overnachtende gast opslaan',createOvernightQr:'QR-registratie maken',printOvernight:'Papieren formulier printen',cancelOvernight:'Annuleren',deleteOvernight:'Verwijderen',cash:'Contant',paypal:'PayPal',otherPayment:'Anders',additionalGuestFee:'Toeslag extra overnachtende gast (€)',additionalGuestNights:'Extra gastnachten',additionalGuestLine:'Extra overnachtende gast',overnightSaved:'Overnachtende gast opgeslagen.',overnightDeleted:'Overnachtende gast verwijderd.',overnightQrCreated:'QR-registratie aangemaakt.',identity:'Identiteitscontrole – alleen host',idShown:'Getoond identiteitsbewijs',notSelected:'Niet geselecteerd',passport:'Paspoort',idCard:'ID-kaart',drivers:'Rijbewijs',otherId:'Ander geldig ID',verified:'Identiteit gecontroleerd',saveRegistration:'Registratie opslaan',useInvoice:'Gebruiken voor factuur',deleteRegistration:'Registratie verwijderen',savedReg:'Registratie opgeslagen.',deletedReg:'Registratie verwijderd.',confirmDeleteReg:'Deze gastenregistratie verwijderen? Dit kan niet ongedaan worden gemaakt.',quickDeleteReg:'Registratie verwijderen',quickDeleteInvoice:'Factuur verwijderen',linkCreated:'Veilige registratielink aangemaakt.',copied:'Link gekopieerd.',navRegistrations:'Gastenregistraties',navGuestDetails:'Gastgegevens',navInvoiceDetails:'Factuurgegevens',navSavedInvoices:'Opgeslagen facturen',
    formTitle:'Factuurgegevens',newInvoice:'Nieuwe factuur',duplicate:'Factuur dupliceren',invoiceNumber:'Factuurnummer',invoiceDate:'Factuurdatum',guestName:'Naam gast',guestAddress:'Adres gast',guestPostal:'Postcode',guestCity:'Woonplaats',guestCountry:'Land',guestEmail:'E-mailadres gast (optioneel)',room:'Kamernaam',customRoom:'Aangepaste kamernaam',nights:'Aantal nachten',guests:'Aantal gasten',accommodation:'Verblijf (€)',cleaning:'Schoonmaakkosten (€)',tourist:'Toeristenbelasting (€ per gast per nacht)',taxMode:'Verwerking toeristenbelasting',taxIncluded:'Verblijfsbedrag is al inclusief toeristenbelasting',taxExcluded:'Toeristenbelasting moet bovenop het verblijfsbedrag komen',payment:'Betaling',customPayment:'Aangepaste betaalmethode',saveInvoice:'Factuur opslaan',deleteInvoice:'Factuur verwijderen',print:'Printen / Opslaan als PDF',savedInvoices:'Opgeslagen facturen',searchInvoices:'Facturen zoeken / filteren',searchInvoicePh:'Zoek op factuurnummer, gastnaam, bedrijf, e-mail of boekingsreferentie',
    invoiceTitle:'FACTUUR',labelInvoiceNumber:'Factuurnummer:',labelDate:'Datum:',billed:'Factureren aan',labelVat:'Btw-nummer:',labelBooking:'Boekingsreferentie:',stay:'Verblijfsgegevens',labelRoom:'Kamer:',labelCheckin:'Inchecken:',labelCheckout:'Uitchecken:',labelNights:'Aantal nachten:',labelGuests:'Aantal gasten:',descriptionTitle:'Omschrijving',description:'Verblijf in privékamer (gedeelde woning)',price:'Prijsopbouw',labelAccommodation:'Verblijf',labelCleaning:'Schoonmaakkosten',labelTaxRate:'Tarief toeristenbelasting',labelTaxIncluded:'Toeristenbelasting inbegrepen',labelTaxAdded:'Toeristenbelasting toegevoegd',labelTotal:'Totaal betaald',paymentTitle:'Betaling',note:'Dit betreft particuliere verhuur. Btw is niet van toepassing.',
    cozy:'Knusse kamer (straatzijde)',spacious:'Ruime kamer (tuinzijde)',customRoomOpt:'Aangepaste kamernaam...',booking:'Betaald via Booking.com',airbnb:'Betaald via Airbnb',customPayOpt:'Aangepaste betaalmethode...',checkEmail:'Controleer je e-mail voor de inloglink.',denied:'Toegang geweigerd. Dit e-mailadres is niet geautoriseerd.',savedInvoice:'Factuur opgeslagen.',deleted:'Factuur verwijderd.',duplicated:'Factuur gedupliceerd. Sla deze als nieuwe factuur op.',required:'Vul alle verplichte factuurvelden in.',noRegs:'Geen gastenregistraties in deze weergave.',noInvoices:'Nog geen facturen.',loading:'Laden…',backToTop:'Naar boven',attentionTitle:'Aandacht nodig',attentionSubtitle:'Snel overzicht van aankomende en openstaande gasttaken.',attentionArriving:'Binnenkort aankomst',attentionId:'ID nog controleren',attentionInvoices:'Facturen te maken',filterAll:'Alles',filterArrivingSoon:'Binnenkort',filterUpcoming:'Aankomend',filterStaying:'Nu verblijvend',filterPast:'Verleden',filterId:'ID nog controleren',filterInvoice:'Factuur te maken',invoiceCreated:'Factuur gemaakt',invoicePending:'Factuur gevraagd',openInvoice:'Gekoppelde factuur openen',unsaved:'Je hebt niet-opgeslagen wijzigingen. Doorgaan zonder op te slaan?' 
  }
};

let currentLang='en', currentRegistrationId=null, currentDraftReservationId=null, currentInvoiceId=null, registrations=[], invoices=[], reservations=[], reservationInvites=[], overnightGuests=[], overnightInvites=[], manualNights=false, registrationFilter='all', reservationFilter='upcoming', registrationDirty=false, invoiceDirty=false, suppressDirty=false;
const $=id=>document.getElementById(id);

const rf={
  id:$('registrationId'),source:$('registrationSource'),name:$('regName'),city:$('regCity'),country:$('regCountry'),checkin:$('regCheckin'),checkout:$('regCheckout'),booking:$('regBookingReference'),platform:$('regBookingPlatform'),invoiceRequested:$('regInvoiceRequested'),invoiceType:$('regInvoiceType'),email:$('regEmail'),companyName:$('regCompanyName'),companyAddress:$('regCompanyAddress'),vat:$('regVat'),idType:$('regIdType'),idOther:$('regIdOther'),idVerified:$('regIdVerified')
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
function setRegistrationFilter(filter){ registrationFilter=filter; document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter)); renderRegs(); }
function registrationMatchesFilter(r,filter){
  const t=localToday(), invoice=linkedInvoiceForRegistration(r.id);
  if(filter==='upcoming') return r.checkin_date>t;
  if(filter==='staying') return r.checkin_date<=t && r.checkout_date>t;
  if(filter==='past') return r.checkout_date<=t;
  if(filter==='idToVerify') return !r.id_verified && r.checkin_date<=t && r.checkout_date>t;
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
function reservationNightsBetween(a,b){ const A=new Date(`${a}T12:00:00`),B=new Date(`${b}T12:00:00`); return Math.max(0,Math.round((B-A)/86400000)); }

async function loadReservations(){
  const [{data:r,error:re},{data:iv,error:ie}]=await Promise.all([
    supabaseClient.from('reservations').select('*').order('checkin_date',{ascending:true}).limit(300),
    supabaseClient.from('guest_registration_invites').select('id,token,reservation_id,used_at,expires_at').not('reservation_id','is',null).order('created_at',{ascending:false}).limit(300)
  ]);
  if(re){ $('reservationList').innerHTML=`<p class="muted">${escapeHtml(re.message)}</p>`; return; }
  reservations=r||[]; reservationInvites=ie?[]:(iv||[]); renderReservations(); renderAttention();
}

function setReservationFilter(filter){
  reservationFilter=filter;
  document.querySelectorAll('[data-reservation-filter]').forEach(b=>b.classList.toggle('active',b.dataset.reservationFilter===filter));
  renderReservations();
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
  const x=tr[currentLang], linked=linkedInvoiceForRegistration(reg.id), guestCount=overnightSummaryCount(reg.id);
  const idText=reg.id_verified?(currentLang==='nl'?'ID gecontroleerd':'ID verified'):(currentLang==='nl'?'ID nog controleren':'ID to verify');
  const idClass=reg.id_verified?'good':'warn';
  const invoiceHtml=linked
    ? `<button type="button" class="badge invoice-created reservation-invoice-badge" title="${escapeHtml(x.openInvoice)}">${escapeHtml(x.invoiceCreated)} · ${escapeHtml(linked.invoice_number)}</button>`
    : (reg.invoice_requested?`<span class="badge invoice-pending">${escapeHtml(x.invoicePending)}</span>`:'');
  return `<div class="reservation-guest-badges"><span class="badge good">${escapeHtml(x.registrationSubmitted)}</span>${guestCount>1?`<span class="badge">👤 ${guestCount} ${currentLang==='nl'?'gasten':'guests'}</span>`:''}<span class="badge ${idClass}">${escapeHtml(idText)}</span>${invoiceHtml}</div>`;
}


function reservationBookingReference(reservation){
  return reservation?.reservation_code || '';
}

function beginManualRegistrationForReservation(reservation){
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
  toggleRegInvoice();
  toggleIdOther();
  // This registration is reservation-linked, so platform is authoritative and hidden.
  $('regPlatformField').classList.add('hidden');
  $('deleteRegistrationBtn').classList.add('hidden');
  $('registrationEditor').classList.remove('hidden');
  $('registrationMessage').textContent=tr[currentLang].manualFromReservation;
  registrationDirty=false;
  suppressDirty=false;
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

function renderReservations(){
  const x=tr[currentLang];
  const rows=reservations.filter(r=>reservationMatchesFilter(r,reservationFilter)).sort((a,b)=>{
    if(reservationFilter==='past') return b.checkout_date.localeCompare(a.checkout_date);
    return a.checkin_date.localeCompare(b.checkin_date);
  });
  const box=$('reservationList'); if(!box)return; box.innerHTML='';
  if(!rows.length){ box.innerHTML=`<p class="muted">${x.noReservations}</p>`; return; }
  rows.forEach(r=>{
    const reg=reservationRegistration(r.id), inv=reservationInvite(r.id), n=reservationNightsBetween(r.checkin_date,r.checkout_date);
    const exactCandidates=!reg && r.status==='active' ? exactReservationCandidates(r) : [];
    const d=document.createElement('div'); d.className='reservation-item'+(r.status!=='active'?' removed':'');
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
      const b=document.createElement('button'); b.className='action-btn secondary'; b.textContent=x.openGuest; b.onclick=()=>loadReg(reg,'heading'); actions.appendChild(b);
      const invoiceBadge=d.querySelector('.reservation-invoice-badge');
      if(invoiceBadge){ const linked=linkedInvoiceForRegistration(reg.id); invoiceBadge.onclick=e=>{ e.stopPropagation(); const opened=loadInvoice(linked); if(opened) requestAnimationFrame(()=>$('invoiceDetailsCard').scrollIntoView({behavior:'smooth',block:'start'})); }; }
    } else if(r.status==='active') {
      if(exactCandidates.length===1){ const candidate=exactCandidates[0]; const b=document.createElement('button'); b.className='action-btn primary'; b.textContent=x.linkSuggestedGuest.replace('{name}',candidate.full_name); b.onclick=()=>linkExistingRegistration(r,candidate); actions.appendChild(b); }
      else if(exactCandidates.length>1){ const b=document.createElement('button'); b.className='action-btn primary'; b.textContent=x.linkExistingGuest; b.onclick=()=>showExistingRegistrationPicker(r,d,true); actions.appendChild(b); }
      if(!inv){
        const create=document.createElement('button'); create.className=exactCandidates.length?'action-btn secondary':'action-btn primary'; create.textContent=x.createRegistrationLink; create.onclick=()=>createReservationInvite(r,create,d); actions.appendChild(create);
      }
      const complete=document.createElement('button'); complete.className='action-btn secondary'; complete.textContent=x.completeManually; complete.onclick=()=>beginManualRegistrationForReservation(r); actions.appendChild(complete);
      const print=document.createElement('button'); print.className='action-btn secondary'; print.textContent=x.printPaperForm; print.onclick=()=>printPrefilledRegistrationForm(r); actions.appendChild(print);
      const linkableGuests=unlinkedRegistrations();
      if(linkableGuests.length){
        const manual=document.createElement('button'); manual.className='action-btn secondary'; manual.textContent=x.linkExistingGuest; manual.onclick=()=>showExistingRegistrationPicker(r,d,false); actions.appendChild(manual);
      }
      if(inv) addReservationLinkBox(actions,inv,r);
    }
    if(r.platform==='airbnb'&&r.reservation_url){ const a=document.createElement('a'); a.className='action-btn secondary'; a.href=r.reservation_url; a.target='_blank'; a.rel='noopener'; a.textContent=x.openAirbnb; a.onclick=e=>e.stopPropagation(); actions.appendChild(a); }
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
    await navigator.clipboard.writeText(url);
    $('copyQrLinkBtn').textContent=x.copied;
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
  wrap.querySelector('.copy-link-btn').onclick=async e=>{e.stopPropagation();await navigator.clipboard.writeText(url); wrap.querySelector('.copy-link-btn').textContent=tr[currentLang].copied;};
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
async function syncCalendars(showFeedback=true){
  const btn=$('syncCalendarsBtn'),status=$('calendarSyncStatus'); if(btn)btn.disabled=true;
  if(status)status.textContent=tr[currentLang].syncingCalendars;
  const {data,error}=await supabaseClient.functions.invoke('sync-ical');
  if(btn)btn.disabled=false;
  if(error){ if(status)status.textContent=`${tr[currentLang].syncFailed}: ${error.message}`; return false; }
  if(status)status.textContent=`${tr[currentLang].syncedCalendars}${data?.imported!=null?' '+data.imported:''}`;
  localStorage.setItem('ngrLastIcalSync',String(Date.now())); await loadReservations(); return true;
}
async function autoSyncCalendars(){ const last=Number(localStorage.getItem('ngrLastIcalSync')||0); if(Date.now()-last>15*60*1000) await syncCalendars(false); }

function renderAttention(){
  const t=localToday();
  const active=reservations.filter(r=>r.status==='active');
  const arriving=active.filter(r=>r.checkin_date>=t&&r.checkin_date<=addDaysIso(t,3)).length;
  const ids=active.filter(r=>{ const reg=reservationRegistration(r.id); return !!reg && !reg.id_verified && r.checkin_date<=t && r.checkout_date>t; }).length;
  const inv=active.filter(r=>{ const reg=reservationRegistration(r.id); return !!reg && !!reg.invoice_requested && !linkedInvoiceForRegistration(reg.id) && r.checkout_date<=t; }).length;
  if($('attentionArrivingCount'))$('attentionArrivingCount').textContent=arriving;
  if($('attentionIdCount'))$('attentionIdCount').textContent=ids;
  if($('attentionInvoiceCount'))$('attentionInvoiceCount').textContent=inv;
}

async function session(){ return (await supabaseClient.auth.getSession()).data.session; }
async function allowed(){ const {data,error}=await supabaseClient.rpc('is_allowed_user'); return !error&&data===true; }
let pendingLoginEmail='';

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
  requestAnimationFrame(()=>$('loginCode').focus());
}

async function login(email,resend=false){
  $('loginMessage').textContent='';
  $('loginBtn').disabled=true;
  $('resendLoginCodeBtn').disabled=true;
  const {error}=await supabaseClient.auth.signInWithOtp({email});
  $('loginBtn').disabled=false;
  $('resendLoginCodeBtn').disabled=false;
  if(error){ $('loginMessage').textContent=error.message; return; }
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
async function logout(){ if(!guardUnsaved())return; registrationDirty=false; invoiceDirty=false; await supabaseClient.auth.signOut(); location.reload(); }

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


function setTexts(){
  const x=tr[currentLang]; document.documentElement.lang=currentLang;
  document.querySelectorAll('[data-reservation-filter]').forEach(b=>b.onclick=()=>setReservationFilter(b.dataset.reservationFilter));
document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===currentLang));
  const map={reservations:'reservationsTitle',reservationsSubtitle:'reservationsSubtitle',syncCalendars:'syncCalendarsBtn',navReservations:'navReservations',reservationFilterUpcoming:'reservationFilterUpcoming',reservationFilterArrivingSoon:'reservationFilterArrivingSoon',reservationFilterStaying:'reservationFilterStaying',reservationFilterId:'reservationFilterId',reservationFilterInvoice:'reservationFilterInvoice',reservationFilterPast:'reservationFilterPast',reservationFilterRemoved:'reservationFilterRemoved',reservationFilterAll:'reservationFilterAll',pageTitle:'pageTitle',pageSubtitle:'pageSubtitle',loginTitle:'loginTitle',loginText:'loginText',loginEmail:'labelLoginEmail',loginBtn:'loginBtn',loginCode:'labelLoginCode',loginCodeIntro:'loginCodeIntro',verifyLogin:'verifyLoginBtn',resendCode:'resendLoginCodeBtn',changeEmail:'changeLoginEmailBtn',logout:'logoutBtn',registrations:'registrationTitle',registrationArchiveSubtitle:'registrationArchiveSubtitle',paper:'newPaperBtn',manualInvite:'manualInviteToggleBtn',invite:'inviteTitle',manualInviteHint:'manualInviteHint',cancel:'closeManualInviteBtn',inviteBooking:'labelInviteBooking',invitePlatform:'labelInvitePlatform',checkin:'labelInviteCheckin',checkout:'labelInviteCheckout',createLink:'createInviteBtn',copy:'copyInviteBtn',searchReg:'labelRegistrationSearch',regEditor:'registrationEditorTitle',close:'closeRegistrationBtn',fullName:'labelRegName',city:'labelRegCity',country:'labelRegCountry',bookingRef:'labelRegBooking',bookingPlatform:'labelRegPlatform',invoiceRequested:'regInvoiceRequestedText',invoiceType:'labelRegInvoiceType',email:'labelRegEmail',companyName:'labelRegCompanyName',companyAddress:'labelRegCompanyAddress',vat:'labelRegVat',overnightGuests:'overnightGuestsTitle',addOvernightGuest:'addOvernightGuestBtn',overnightCity:'labelOvernightCity',overnightArrival:'labelOvernightCheckin',overnightDeparture:'labelOvernightCheckout',overnightRate:'labelOvernightRate',overnightPayment:'labelOvernightPayment',overnightPaid:'overnightPaidText',saveOvernight:'saveOvernightGuestBtn',createOvernightQr:'createOvernightQrBtn',printOvernight:'printOvernightFormBtn',cancelOvernight:'cancelOvernightGuestBtn',deleteOvernight:'deleteOvernightGuestBtn',additionalGuestFee:'labelAdditionalGuestFee',additionalGuestNights:'labelAdditionalGuestNights',identity:'identityTitle',idShown:'labelIdType',verified:'idVerifiedText',saveRegistration:'saveRegistrationBtn',useInvoice:'useForInvoiceBtn',deleteRegistration:'deleteRegistrationBtn',formTitle:'formTitle',newInvoice:'newInvoiceBtn',duplicate:'duplicateBtn',invoiceNumber:'labelInvoiceNumber',invoiceDate:'labelInvoiceDate',guestName:'labelGuestName',guestAddress:'labelGuestAddress',guestPostal:'labelGuestPostal',guestCity:'labelGuestCity',guestCountry:'labelGuestCountry',guestEmail:'labelGuestEmail',room:'labelRoomName',customRoom:'labelCustomRoomName',nights:'labelNights',guests:'labelGuests',accommodation:'labelAccommodation',cleaning:'labelCleaning',tourist:'labelTouristTaxRate',taxMode:'labelTaxMode',payment:'labelPaymentMethod',customPayment:'labelCustomPayment',saveInvoice:'saveBtn',deleteInvoice:'deleteBtn',print:'printBtn',savedInvoices:'savedInvoicesTitle',searchInvoices:'labelSearchInvoices',navRegistrations:'navRegistrations',navGuestDetails:'navGuestDetails',navInvoiceDetails:'navInvoiceDetails',navSavedInvoices:'navSavedInvoices'};
  for(const [k,id] of Object.entries(map)) if($(id)) $(id).textContent=x[k];
  if($('attentionTitle')) $('attentionTitle').textContent=x.attentionTitle;
  if($('attentionSubtitle')) $('attentionSubtitle').textContent=x.attentionSubtitle;
  if($('attentionArrivingLabel')) $('attentionArrivingLabel').textContent=x.attentionArriving;
  if($('attentionIdLabel')) $('attentionIdLabel').textContent=x.attentionId;
  if($('attentionInvoiceLabel')) $('attentionInvoiceLabel').textContent=x.attentionInvoices;
  if($('mobileNavReservations')) $('mobileNavReservations').textContent=x.navReservations;
  if($('mobileNavRegistrations')) $('mobileNavRegistrations').textContent=x.navRegistrations;
  if($('mobileNavGuestDetails')) $('mobileNavGuestDetails').textContent=x.navGuestDetails;
  if($('mobileNavInvoiceDetails')) $('mobileNavInvoiceDetails').textContent=x.navInvoiceDetails;
  if($('mobileNavSavedInvoices')) $('mobileNavSavedInvoices').textContent=x.navSavedInvoices;
  if($('backToTopBtn')) { $('backToTopBtn').setAttribute('aria-label',x.backToTop); $('backToTopBtn').title=x.backToTop; }
  $('labelCompanyName').textContent=x.companyName+' ('+(currentLang==='nl'?'optioneel':'optional')+')'; $('labelCompanyAddress').textContent=x.companyAddress+' ('+(currentLang==='nl'?'optioneel':'optional')+')'; $('labelVatNumber').textContent=x.vat;
  $('labelBookingReference').textContent=x.bookingRef; $('labelCheckin').textContent=x.checkin; $('labelCheckout').textContent=x.checkout;
  $('registrationSearch').placeholder=x.searchRegPh; $('searchInvoices').placeholder=x.searchInvoicePh;
  rf.invoiceType.options[0].text=x.personal; rf.invoiceType.options[1].text=x.company;
  rf.platform.options[0].text=x.platformNotSelected; $('overnightPayment').options[0].text=x.notSelected;$('overnightPayment').options[1].text=x.cash;$('overnightPayment').options[2].text=x.paypal;$('overnightPayment').options[3].text=x.otherPayment; rf.platform.options[1].text='Airbnb'; rf.platform.options[2].text='Booking.com'; rf.platform.options[3].text=x.platformDirectOther;
  $('inviteBookingPlatform').options[0].text=x.platformNotSelected; $('inviteBookingPlatform').options[1].text='Airbnb'; $('inviteBookingPlatform').options[2].text='Booking.com'; $('inviteBookingPlatform').options[3].text=x.platformDirectOther;
  rf.idType.options[0].text=x.notSelected; rf.idType.options[1].text=x.passport; rf.idType.options[2].text=x.idCard; rf.idType.options[3].text=x.drivers; rf.idType.options[4].text=x.otherId; $('labelIdOther').textContent=x.otherId;
  const currentRoom=f.room.value; f.room.innerHTML=`<option value="${x.cozy}">${x.cozy}</option><option value="${x.spacious}">${x.spacious}</option><option value="custom">${x.customRoomOpt}</option>`; if(currentRoom==='custom')f.room.value='custom'; else if(currentRoom.includes('Cozy')||currentRoom.includes('Knusse'))f.room.value=x.cozy; else f.room.value=x.spacious;
  const currentPay=f.payment.value; f.payment.innerHTML=`<option value="${x.booking}">${x.booking}</option><option value="${x.airbnb}">${x.airbnb}</option><option value="custom">${x.customPayOpt}</option>`; if(currentPay==='custom')f.payment.value='custom'; else if(currentPay.includes('Booking'))f.payment.value=x.booking; else if(currentPay.includes('Airbnb'))f.payment.value=x.airbnb;
  f.taxMode.innerHTML=`<option value="included">${x.taxIncluded}</option><option value="excluded">${x.taxExcluded}</option>`;
  if($('attentionTitle')) $('attentionTitle').textContent=x.attentionTitle;
  if($('attentionSubtitle')) $('attentionSubtitle').textContent=x.attentionSubtitle;
  if($('attentionArrivingLabel')) $('attentionArrivingLabel').textContent=x.attentionArriving;
  if($('attentionIdLabel')) $('attentionIdLabel').textContent=x.attentionId;
  if($('attentionInvoiceLabel')) $('attentionInvoiceLabel').textContent=x.attentionInvoices;
  if($('filterAll')) $('filterAll').textContent=x.filterAll;
  if($('filterArrivingSoon')) $('filterArrivingSoon').textContent=x.filterArrivingSoon;
  if($('filterUpcoming')) $('filterUpcoming').textContent=x.filterUpcoming;
  if($('filterStaying')) $('filterStaying').textContent=x.filterStaying;
  if($('filterPast')) $('filterPast').textContent=x.filterPast;
  if($('filterId')) $('filterId').textContent=x.filterId;
  if($('filterInvoice')) $('filterInvoice').textContent=x.filterInvoice;
  populateCountries(rf.country,rf.country.value);
  renderAttention(); renderRegs(); renderInvoices(); updatePreview();
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

function blankRegistration(){
  if(!guardUnsaved('registration'))return;
  suppressDirty=true;
  currentRegistrationId=null; currentDraftReservationId=null; rf.id.value=''; rf.source.value='paper_manual'; for(const k of ['name','city','country','checkin','checkout','booking','email','companyName','companyAddress','vat','idOther'])rf[k].value=''; populateCountries(rf.country,''); applyRegistrationPlatformField(null); rf.invoiceRequested.checked=false; rf.invoiceType.value='personal'; rf.idType.value=''; rf.idVerified.checked=false; toggleRegInvoice();toggleIdOther(); $('deleteRegistrationBtn').classList.add('hidden'); $('registrationEditor').classList.remove('hidden'); $('registrationMessage').textContent='';
  registrationDirty=false; suppressDirty=false; renderOvernightGuests();
  requestAnimationFrame(()=>{
    const heading=$('registrationEditorTitle')||$('registrationEditor');
    heading.scrollIntoView({behavior:'smooth',block:'start'});
  });
}
function loadReg(r,scrollMode='default'){
  if(!guardUnsaved('registration'))return;
  suppressDirty=true;
  currentRegistrationId=r.id;currentDraftReservationId=null;rf.id.value=r.id;rf.source.value=r.source||'digital';rf.name.value=r.full_name||'';rf.city.value=r.city||'';populateCountries(rf.country,r.country||'');rf.checkin.value=r.checkin_date||'';rf.checkout.value=r.checkout_date||'';rf.booking.value=r.booking_reference||'';applyRegistrationPlatformField(r);rf.invoiceRequested.checked=!!r.invoice_requested;rf.invoiceType.value=r.invoice_type||'personal';rf.email.value=r.email||'';rf.companyName.value=r.company_name||'';rf.companyAddress.value=r.company_address||'';rf.vat.value=r.vat_number||'';rf.idType.value=r.id_type||'';rf.idOther.value=r.id_other||'';rf.idVerified.checked=!!r.id_verified;toggleRegInvoice();toggleIdOther();$('deleteRegistrationBtn').classList.remove('hidden');$('registrationEditor').classList.remove('hidden');$('registrationMessage').textContent='';
  registrationDirty=false; suppressDirty=false; renderOvernightGuests();
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
  if(!rf.name.value.trim()||!rf.city.value.trim()||!rf.country.value.trim()||!rf.checkin.value||!rf.checkout.value){$('registrationMessage').textContent=currentLang==='nl'?'Vul alle gastgegevens en verblijfsdata in.':'Complete all guest information and stay dates.';return;}
  const s=await session(); const draftReservation=currentDraftReservationId?reservations.find(r=>r.id===currentDraftReservationId):null; const payload={full_name:rf.name.value.trim(),home_address:null,postal_code:null,city:rf.city.value.trim(),country:rf.country.value.trim(),checkin_date:rf.checkin.value,checkout_date:rf.checkout.value,booking_reference:rf.booking.value.trim()||null,booking_platform:(draftReservation?.platform||rf.platform.value||null),reservation_id:(draftReservation?.id||undefined),invoice_requested:rf.invoiceRequested.checked,invoice_type:rf.invoiceRequested.checked?rf.invoiceType.value:null,email:rf.invoiceRequested.checked?rf.email.value.trim()||null:null,company_name:rf.invoiceRequested.checked&&rf.invoiceType.value==='company'?rf.companyName.value.trim()||null:null,company_address:rf.invoiceRequested.checked&&rf.invoiceType.value==='company'?rf.companyAddress.value.trim()||null:null,vat_number:rf.invoiceRequested.checked&&rf.invoiceType.value==='company'?rf.vat.value.trim()||null:null,declaration_accepted:true,source:rf.source.value||'paper_manual',id_type:rf.idType.value||null,id_other:rf.idType.value==='other'?rf.idOther.value.trim()||null:null,id_verified:rf.idVerified.checked,id_verified_at:rf.idVerified.checked?new Date().toISOString():null,id_verified_by:rf.idVerified.checked?s.user.id:null};
  let q=currentRegistrationId?supabaseClient.from('guest_registrations').update(payload).eq('id',currentRegistrationId).select().single():supabaseClient.from('guest_registrations').insert([{...payload,submitted_at:new Date().toISOString()}]).select().single();
  const {data,error}=await q;if(error){$('registrationMessage').textContent=error.message;return;}
  if(currentDraftReservationId){
    await supabaseClient.from('guest_registration_invites').delete().eq('reservation_id',currentDraftReservationId).is('used_at',null);
  }
  currentRegistrationId=data.id; currentDraftReservationId=null; rf.id.value=data.id; registrationDirty=false; $('deleteRegistrationBtn').classList.remove('hidden'); $('registrationMessage').textContent=tr[currentLang].savedReg; await loadRegs();
}

const ADDITIONAL_GUEST_FORM_BASE='https://nijmegenguestrooms.com/additional-guest-registration/';
function overnightNights(g){
  if(!g?.checkin_date||!g?.checkout_date)return 0;
  return reservationNightsBetween(g.checkin_date,g.checkout_date);
}
function overnightFeeTotal(g){ return overnightNights(g)*Number(g?.fee_per_night||0); }
function overnightForRegistration(regId){ return overnightGuests.filter(g=>g.guest_registration_id===regId).sort((a,b)=>String(a.checkin_date).localeCompare(String(b.checkin_date))); }
function paidOvernightForRegistration(regId){ return overnightForRegistration(regId).filter(g=>g.fee_paid); }
function overnightSummaryCount(regId){ return 1 + overnightForRegistration(regId).length; }

async function loadOvernightGuests(){
  const [{data:g,error:ge},{data:i,error:ie}]=await Promise.all([
    supabaseClient.from('additional_overnight_guests').select('*').order('checkin_date',{ascending:true}).limit(500),
    supabaseClient.from('additional_guest_invites').select('*').is('used_at',null).order('created_at',{ascending:false}).limit(300)
  ]);
  overnightGuests=ge?[]:(g||[]);
  overnightInvites=ie?[]:(i||[]);
  renderOvernightGuests();
  renderRegs(); renderReservations();
}

function clearOvernightEditor(){
  $('overnightGuestId').value='';
  for(const id of ['overnightName','overnightCity']) $(id).value='';
  populateCountries($('overnightCountry'),'');
  $('overnightCheckin').value=rf.checkin.value||'';
  $('overnightCheckout').value=rf.checkout.value||'';
  $('overnightRate').value='20.00';
  $('overnightPayment').value='';
  $('overnightPaid').checked=false;
  $('deleteOvernightGuestBtn').classList.add('hidden');
  $('overnightGuestMessage').textContent='';
}

function openOvernightEditor(g=null){
  if(!currentRegistrationId){ $('registrationMessage').textContent=currentLang==='nl'?'Sla eerst de hoofdgastregistratie op.':'Save the primary guest registration first.'; return; }
  $('overnightGuestEditor').classList.remove('hidden');
  if(!g){ clearOvernightEditor(); }
  else{
    $('overnightGuestId').value=g.id;
    $('overnightName').value=g.full_name||'';
    $('overnightCity').value=g.city||'';
    populateCountries($('overnightCountry'),g.country||'');
    $('overnightCheckin').value=g.checkin_date||rf.checkin.value||'';
    $('overnightCheckout').value=g.checkout_date||rf.checkout.value||'';
    $('overnightRate').value=Number(g.fee_per_night||20).toFixed(2);
    $('overnightPayment').value=g.payment_method||'';
    $('overnightPaid').checked=!!g.fee_paid;
    $('deleteOvernightGuestBtn').classList.remove('hidden');
    $('overnightGuestMessage').textContent='';
  }
  requestAnimationFrame(()=>$('overnightGuestEditor').scrollIntoView({behavior:'smooth',block:'nearest'}));
}

function renderOvernightGuests(){
  const list=$('overnightGuestList'); if(!list)return;
  list.innerHTML='';
  if(!currentRegistrationId){ $('overnightGuestsSummary').textContent=tr[currentLang].overnightSummaryOne; return; }
  const rows=overnightForRegistration(currentRegistrationId);
  const total=1+rows.length;
  $('overnightGuestsSummary').textContent=total===1?tr[currentLang].overnightSummaryOne:tr[currentLang].overnightSummaryMany.replace('{count}',total);
  rows.forEach(g=>{
    const d=document.createElement('button'); d.type='button'; d.className='overnight-guest-row';
    const paid=g.fee_paid?`<span class="badge good">${currentLang==='nl'?'Betaald':'Paid'}</span>`:`<span class="badge warn">${currentLang==='nl'?'Nog te betalen':'Payment due'}</span>`;
    d.innerHTML=`<span><strong>${escapeHtml(g.full_name||((currentLang==='nl')?'Registratie nog niet ingevuld':'Registration not completed'))}</strong><small>${fmt(g.checkin_date)} → ${fmt(g.checkout_date)} · ${overnightNights(g)} ${escapeHtml(tr[currentLang].nightsWord)}</small></span><span>${paid}</span>`;
    d.onclick=()=>openOvernightEditor(g);
    list.appendChild(d);
  });
}

async function saveOvernightGuest(){
  if(!currentRegistrationId)return;
  const name=$('overnightName').value.trim(), city=$('overnightCity').value.trim(), country=$('overnightCountry').value.trim();
  const ci=$('overnightCheckin').value,co=$('overnightCheckout').value;
  if(!name||!city||!country||!ci||!co||co<=ci){$('overnightGuestMessage').textContent=currentLang==='nl'?'Vul naam, woonplaats, land en geldige verblijfsdata in.':'Enter name, city, country and valid stay dates.';return;}
  const payload={guest_registration_id:currentRegistrationId,full_name:name,city,country,checkin_date:ci,checkout_date:co,fee_per_night:Number($('overnightRate').value||20),fee_includes_tourist_tax:true,payment_method:$('overnightPayment').value||null,fee_paid:$('overnightPaid').checked,source:'manual'};
  const id=$('overnightGuestId').value;
  const q=id?supabaseClient.from('additional_overnight_guests').update(payload).eq('id',id).select().single():supabaseClient.from('additional_overnight_guests').insert([payload]).select().single();
  const {data,error}=await q;
  if(error){$('overnightGuestMessage').textContent=error.message;return;}
  $('overnightGuestId').value=data.id; $('deleteOvernightGuestBtn').classList.remove('hidden'); $('overnightGuestMessage').textContent=tr[currentLang].overnightSaved;
  await loadOvernightGuests();
}

async function deleteOvernightGuest(){
  const id=$('overnightGuestId').value;if(!id)return;
  if(!confirm(currentLang==='nl'?'Deze overnachtende gast verwijderen?':'Delete this overnight guest?'))return;
  const {error}=await supabaseClient.from('additional_overnight_guests').delete().eq('id',id);
  if(error){$('overnightGuestMessage').textContent=error.message;return;}
  $('overnightGuestEditor').classList.add('hidden'); await loadOvernightGuests();
}

async function createOvernightGuestInvite(){
  if(!currentRegistrationId)return;
  const ci=$('overnightCheckin').value||rf.checkin.value,co=$('overnightCheckout').value||rf.checkout.value;
  if(!ci||!co||co<=ci){$('overnightGuestMessage').textContent=currentLang==='nl'?'Vul eerst geldige verblijfsdata in.':'Enter valid stay dates first.';return;}
  const {data,error}=await supabaseClient.rpc('create_additional_guest_invite',{p_guest_registration_id:currentRegistrationId,p_checkin_date:ci,p_checkout_date:co,p_fee_per_night:Number($('overnightRate').value||20),p_valid_days:7});
  if(error){$('overnightGuestMessage').textContent=error.message;return;}
  const row=Array.isArray(data)?data[0]:data;
  const url=`${ADDITIONAL_GUEST_FORM_BASE}?token=${encodeURIComponent(row.token)}`;
  showGenericQr(url,currentLang==='nl'?'Scan om extra gast te registreren':'Scan to register additional guest',`${fmt(ci)} → ${fmt(co)}`);
  $('overnightGuestMessage').textContent=tr[currentLang].overnightQrCreated;
}

function printOvernightGuestForm(){
  const ci=$('overnightCheckin').value||rf.checkin.value,co=$('overnightCheckout').value||rf.checkout.value;
  const nl=currentLang==='nl',w=window.open('','_blank');if(!w)return;
  const title=nl?'Registratie overnachtende gast':'Additional overnight guest registration';
  const platform=platformDisplay(effectiveRegistrationPlatform(registrations.find(r=>r.id===currentRegistrationId)))||'—';
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>@page{size:A4;margin:18mm}body{font-family:Arial;color:#263238;font-size:11pt}h1{color:#4f3627}.meta{padding:14px;background:#f6f1eb;border-radius:10px;margin:18px 0}.line{height:30px;border-bottom:1px solid #666;margin-bottom:15px}.box{display:inline-block;width:15px;height:15px;border:1px solid #333;vertical-align:-2px;margin-right:6px}.sig{margin-top:40px;border-top:1px solid #666;padding-top:6px;width:45%}</style></head><body><h1>${title}</h1><div>Nijmegen Guest Rooms</div><div class="meta"><b>${nl?'Boekingsplatform':'Booking platform'}:</b> ${platform}<br><b>${nl?'Aankomst':'Arrival'}:</b> ${fmt(ci)}<br><b>${nl?'Vertrek':'Departure'}:</b> ${fmt(co)}<br><b>${nl?'Toeslag':'Additional guest fee'}:</b> €${Number($('overnightRate').value||20).toFixed(2)} ${nl?'per nacht, incl. toeristenbelasting':'per night, incl. tourist tax'}</div><b>${nl?'Volledige naam':'Full name'}</b><div class="line"></div><b>${nl?'Woonplaats':'City / place of residence'}</b><div class="line"></div><b>${nl?'Land':'Country'}</b><div class="line"></div><p><span class="box"></span>${nl?'Ik verklaar dat deze gegevens volledig en juist zijn.':'I confirm that this information is complete and correct.'}</p><div class="sig">${nl?'Handtekening gast':'Guest signature'}</div><script>window.onload=()=>setTimeout(()=>window.print(),250)<\/script></body></html>`);
  w.document.close();
}

function showGenericQr(url,title,subtitle=''){
  const container=$('qrCodeContainer');container.innerHTML='';
  $('qrModalTitle').textContent=title;$('qrModalSubtitle').textContent=subtitle;
  $('qrReservationInfo').textContent='';
  $('copyQrLinkBtn').textContent=tr[currentLang].qrCopy;
  if(typeof window.QRCode!=='function'){alert('QR library unavailable');return;}
  new window.QRCode(container,{text:url,width:300,height:300,colorDark:'#000000',colorLight:'#ffffff',correctLevel:window.QRCode.CorrectLevel.M});
  $('copyQrLinkBtn').onclick=async()=>{await navigator.clipboard.writeText(url);$('copyQrLinkBtn').textContent=tr[currentLang].copied;};
  $('qrModal').classList.remove('hidden');document.documentElement.classList.add('qr-modal-open');document.body.classList.add('qr-modal-open');
}

async function loadRegs(){const {data,error}=await supabaseClient.from('guest_registrations').select('*').order('checkin_date',{ascending:false}).limit(250);if(error){$('registrationList').innerHTML=`<p class="muted">${error.message}</p>`;return;}registrations=data||[];renderAttention();renderRegs();renderReservations(); if(!overnightGuests.length) loadOvernightGuests(); else renderOvernightGuests();}
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
  const rows=registrations.filter(r=>registrationMatchesFilter(r,registrationFilter)).filter(r=>[r.full_name,r.email,r.booking_reference,r.company_name,r.city,platformDisplay(effectiveRegistrationPlatform(r))].filter(Boolean).some(v=>String(v).toLowerCase().includes(q)));
  $('registrationList').innerHTML='';
  document.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.filter===registrationFilter));
  if(!rows.length){$('registrationList').innerHTML=`<p class="muted">${x.noRegs}</p>`;return;}
  rows.forEach(r=>{
    const linked=linkedInvoiceForRegistration(r.id);
    const invoiceBadge=linked
      ? `<button type="button" class="badge invoice-created linked-invoice-badge" title="${escapeHtml(x.openInvoice)}">${escapeHtml(x.invoiceCreated)} · ${escapeHtml(linked.invoice_number)}</button>`
      : (r.invoice_requested?`<span class="badge invoice-pending">${escapeHtml(x.invoicePending)}</span>`:'');
    const guestCount=overnightSummaryCount(r.id), guestCountBadge=guestCount>1?`<span class="badge">👤 ${guestCount} ${currentLang==='nl'?'gasten':'guests'}</span>`:''; const platform=effectiveRegistrationPlatform(r), platformBadge=platform?`<span class="badge platform-archive ${platform==='airbnb'?'airbnb':platform==='booking'?'booking':''}">${escapeHtml(platformDisplay(platform))}</span>`:'';
    const d=document.createElement('div'); d.className='registration-item list-item-with-action';
    d.innerHTML=`<div class="list-item-content"><strong>${escapeHtml(r.full_name)}</strong><span class="muted">${fmt(r.checkin_date)} → ${fmt(r.checkout_date)}</span><div class="registration-badges">${platformBadge}${guestCountBadge}<span class="badge ${r.id_verified?'good':'warn'}">${r.id_verified?(currentLang==='nl'?'ID gecontroleerd':'ID verified'):(currentLang==='nl'?'ID nog controleren':'ID to verify')}</span>${invoiceBadge}<span class="badge">${r.source==='paper_manual'?(currentLang==='nl'?'Papier':'Paper'):(currentLang==='nl'?'Digitaal':'Digital')}</span></div></div><button type="button" class="quick-delete-btn" title="${escapeHtml(x.quickDeleteReg)}" aria-label="${escapeHtml(x.quickDeleteReg)}">🗑</button>`;
    d.querySelector('.list-item-content').onclick=(e)=>{ if(e.target.closest('.linked-invoice-badge'))return; loadReg(r,'heading'); };
    const badge=d.querySelector('.linked-invoice-badge'); if(badge) badge.onclick=e=>{e.stopPropagation();const opened=loadInvoice(linked);if(opened&&window.innerWidth>1000){requestAnimationFrame(()=>$('invoiceDetailsCard').scrollIntoView({behavior:'smooth',block:'start'}));}};
    d.querySelector('.quick-delete-btn').onclick=e=>{e.stopPropagation();quickDeleteRegistration(r);};
    $('registrationList').appendChild(d);
  });
}
function escapeHtml(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

function useRegistrationForInvoice(){
  const linked=currentRegistrationId?linkedInvoiceForRegistration(currentRegistrationId):null;
  if(linked){ loadInvoice(linked); return; }
  if(!guardUnsaved('invoice'))return;
  suppressDirty=true;
  currentInvoiceId=null;
  f.registrationId.value=currentRegistrationId||'';f.guestName.value=rf.name.value;f.guestAddress.value='';f.guestPostal.value='';f.guestCity.value=rf.city.value;f.guestCountry.value=rf.country.value;f.companyName.value=rf.invoiceType.value==='company'?rf.companyName.value:'';f.companyAddress.value=rf.invoiceType.value==='company'?rf.companyAddress.value:'';f.vat.value=rf.invoiceType.value==='company'?rf.vat.value:'';f.email.value=rf.email.value;f.booking.value=rf.booking.value;f.checkin.value=rf.checkin.value;f.checkout.value=rf.checkout.value;applyReservationRoomToInvoice(currentRegistrationId);applyReservationPaymentToInvoice(currentRegistrationId);
  const extras=paidOvernightForRegistration(currentRegistrationId);
  const extraFee=extras.reduce((sum,g)=>sum+overnightFeeTotal(g),0);
  const extraNights=extras.reduce((sum,g)=>sum+overnightNights(g),0);
  f.additionalGuestFee.value=extraFee.toFixed(2);f.additionalGuestNights.value=extraNights;f.guests.value=extras.length?2:1;
  $('additionalGuestInvoiceFields').classList.toggle('hidden',!extras.length);
  if(extras.length){
    const methods=[...new Set(extras.map(g=>g.payment_method).filter(Boolean))];
    if(methods.length){f.payment.value='custom';f.customPayment.value=`${paymentValue().replace(tr[currentLang].customPayOpt,'')} + ${methods.map(m=>m==='cash'?(currentLang==='nl'?'contant':'cash'):m==='paypal'?'PayPal':m).join(' / ')}`.replace(/^ \+ /,'');}
  }
  manualNights=false;autoNights();$('deleteBtn').classList.add('hidden');$('duplicateBtn').classList.add('hidden');updatePreview();invoiceDirty=true;suppressDirty=false;document.querySelector('.form-card').scrollIntoView({behavior:'smooth'});
}

async function nextInvoice(){const y=new Date(f.invoiceDate.value||today()).getFullYear();const {data}=await supabaseClient.from('invoices').select('invoice_sequence').eq('invoice_year',y).order('invoice_sequence',{ascending:false}).limit(1);const n=data?.length?data[0].invoice_sequence+1:1;return `${y}-${String(n).padStart(3,'0')}`;}
function autoNights(){if(manualNights)return;const n=invoiceNightsBetween();if(n)f.nights.value=n;}
async function newInvoice(force=false){if(!force&&!guardUnsaved('invoice'))return; suppressDirty=true;currentInvoiceId=null;manualNights=false;f.registrationId.value='';f.invoiceDate.value=today();f.invoiceNumber.value=await nextInvoice();for(const k of ['guestName','guestAddress','guestPostal','guestCity','guestCountry','companyName','companyAddress','vat','email','booking','customRoom','checkin','checkout','nights','accommodation','customPayment'])f[k].value='';f.guests.value=1;f.cleaning.value='5.00';f.additionalGuestFee.value='0.00';f.additionalGuestNights.value='0';$('additionalGuestInvoiceFields').classList.add('hidden');f.tourist.value='3.71';f.taxMode.value='included';f.room.value=tr[currentLang].cozy;f.payment.value=tr[currentLang].booking;$('deleteBtn').classList.add('hidden');$('duplicateBtn').classList.add('hidden');toggleInvoiceCustom();updatePreview();$('saveMessage').textContent='';invoiceDirty=false;suppressDirty=false;}
function validateInvoice(){for(const k of ['invoiceNumber','invoiceDate','guestName','room','checkin','checkout','nights','guests','accommodation','cleaning','tourist','taxMode','payment'])if(!String(f[k].value??'').trim())return false;if(f.room.value==='custom'&&!f.customRoom.value.trim())return false;if(f.payment.value==='custom'&&!f.customPayment.value.trim())return false;return Number(f.nights.value)>0&&Number(f.guests.value)>0;}
async function saveInvoice(){if(!validateInvoice()){$('saveMessage').textContent=tr[currentLang].required;return;}const s=await session();const [year,seq]=f.invoiceNumber.value.split('-');const n=Number(f.nights.value),g=Number(f.guests.value),a=Number(f.accommodation.value||0),c=Number(f.cleaning.value||0),extraFee=Number(f.additionalGuestFee.value||0),extraNights=Number(f.additionalGuestNights.value||0),rate=Number(f.tourist.value||0),baseGuests=extraNights>0?Math.max(1,g-1):g,baseTax=n*baseGuests*rate,extraTax=extraNights*rate,tax=baseTax+extraTax,total=f.taxMode.value==='included'?a+c+extraFee:a+c+baseTax+extraFee;const payload={invoice_number:f.invoiceNumber.value,invoice_year:Number(year),invoice_sequence:Number(seq),invoice_date:f.invoiceDate.value,guest_name:f.guestName.value.trim(),guest_email:f.email.value.trim(),booking_reference:f.booking.value.trim(),guest_address:f.guestAddress.value.trim(),guest_postal_code:f.guestPostal.value.trim(),guest_city:f.guestCity.value.trim(),guest_country:f.guestCountry.value.trim(),company_name:f.companyName.value.trim(),company_address:f.companyAddress.value.trim(),vat_number:f.vat.value.trim(),guest_registration_id:f.registrationId.value||null,room_name:roomValue(),checkin_date:f.checkin.value,checkout_date:f.checkout.value,nights:n,guests:g,accommodation_amount:a,cleaning_fee:c,additional_guest_fee:extraFee,additional_guest_nights:extraNights,tourist_tax_rate:rate,tourist_tax_total:tax,tax_mode:f.taxMode.value,total_paid:total,payment_method:paymentValue(),created_by:s.user.id};const q=currentInvoiceId?supabaseClient.from('invoices').update(payload).eq('id',currentInvoiceId).select().single():supabaseClient.from('invoices').insert([payload]).select().single();const {data,error}=await q;if(error){$('saveMessage').textContent=error.message;return;}currentInvoiceId=data.id;invoiceDirty=false;$('deleteBtn').classList.remove('hidden');$('duplicateBtn').classList.remove('hidden');$('saveMessage').textContent=tr[currentLang].savedInvoice;await loadInvoices();renderAttention();renderRegs();}
async function loadInvoices(){const {data,error}=await supabaseClient.from('invoices').select('*').order('invoice_year',{ascending:false}).order('invoice_sequence',{ascending:false}).limit(300);if(error){$('invoiceList').innerHTML=`<p class="muted">${error.message}</p>`;return;}invoices=data||[];renderInvoices();renderAttention();renderRegs();renderReservations();}
async function quickDeleteInvoice(i){
  if(!confirm(currentLang==='nl'?`Factuur ${i.invoice_number} verwijderen? Dit kan niet ongedaan worden gemaakt.`:`Delete invoice ${i.invoice_number}? This cannot be undone.`))return;
  const {error}=await supabaseClient.from('invoices').delete().eq('id',i.id);
  if(error){alert(error.message);return;}
  if(currentInvoiceId===i.id)await newInvoice(true);
  await loadInvoices();
}
function renderInvoices(){const x=tr[currentLang],q=($('searchInvoices').value||'').toLowerCase(),rows=invoices.filter(i=>[i.invoice_number,i.guest_name,i.company_name,i.guest_email,i.booking_reference].filter(Boolean).some(v=>String(v).toLowerCase().includes(q)));$('invoiceList').innerHTML='';if(!rows.length){$('invoiceList').innerHTML=`<p class="muted">${x.noInvoices}</p>`;return;}rows.forEach(i=>{const d=document.createElement('div');d.className='invoice-item list-item-with-action';d.innerHTML=`<div class="list-item-content"><strong>${escapeHtml(i.invoice_number)}</strong><span>${escapeHtml(i.company_name?i.company_name+' — ':'')}${escapeHtml(i.guest_name)}</span><br><span class="muted">${fmt(i.invoice_date)} · €${Number(i.total_paid).toFixed(2)}</span></div><button type="button" class="quick-delete-btn" title="${escapeHtml(x.quickDeleteInvoice)}" aria-label="${escapeHtml(x.quickDeleteInvoice)}">🗑</button>`;d.querySelector('.list-item-content').onclick=()=>loadInvoice(i);d.querySelector('.quick-delete-btn').onclick=e=>{e.stopPropagation();quickDeleteInvoice(i);};$('invoiceList').appendChild(d);});}
function loadInvoice(i){if(!guardUnsaved('invoice'))return false; suppressDirty=true;currentInvoiceId=i.id;manualNights=true;f.registrationId.value=i.guest_registration_id||'';f.invoiceNumber.value=i.invoice_number;f.invoiceDate.value=i.invoice_date;f.guestName.value=i.guest_name||'';f.guestAddress.value=i.guest_address||'';f.guestPostal.value=i.guest_postal_code||'';f.guestCity.value=i.guest_city||'';f.guestCountry.value=i.guest_country||'';f.companyName.value=i.company_name||'';f.companyAddress.value=i.company_address||'';f.vat.value=i.vat_number||'';f.email.value=i.guest_email||'';f.booking.value=i.booking_reference||'';f.checkin.value=i.checkin_date||'';f.checkout.value=i.checkout_date||'';f.nights.value=i.nights;f.guests.value=i.guests;f.accommodation.value=i.accommodation_amount;f.cleaning.value=i.cleaning_fee;f.additionalGuestFee.value=Number(i.additional_guest_fee||0).toFixed(2);f.additionalGuestNights.value=i.additional_guest_nights||0;$('additionalGuestInvoiceFields').classList.toggle('hidden',!Number(i.additional_guest_fee||0));f.tourist.value=i.tourist_tax_rate;f.taxMode.value=i.tax_mode;const room=i.room_name||'';if(room.includes('Cozy')||room.includes('Knusse'))f.room.value=tr[currentLang].cozy;else if(room.includes('Spacious')||room.includes('Ruime'))f.room.value=tr[currentLang].spacious;else{f.room.value='custom';f.customRoom.value=room;}const pay=i.payment_method||'';if(pay.includes('Booking'))f.payment.value=tr[currentLang].booking;else if(pay.includes('Airbnb'))f.payment.value=tr[currentLang].airbnb;else{f.payment.value='custom';f.customPayment.value=pay;}$('deleteBtn').classList.remove('hidden');$('duplicateBtn').classList.remove('hidden');toggleInvoiceCustom();updatePreview();invoiceDirty=false;suppressDirty=false;if(window.innerWidth<=1000){ requestAnimationFrame(()=>document.querySelector('.form-card').scrollIntoView({behavior:'smooth',block:'start'})); }return true;}
async function deleteInvoice(){if(!currentInvoiceId||!confirm(currentLang==='nl'?'Factuur verwijderen?':'Delete this invoice?'))return;const {error}=await supabaseClient.from('invoices').delete().eq('id',currentInvoiceId);if(error){$('saveMessage').textContent=error.message;return;}invoiceDirty=false;$('saveMessage').textContent=tr[currentLang].deleted;await newInvoice(true);await loadInvoices();}
async function duplicateInvoice(){currentInvoiceId=null;f.invoiceDate.value=today();f.invoiceNumber.value=await nextInvoice();$('deleteBtn').classList.add('hidden');$('duplicateBtn').classList.add('hidden');$('saveMessage').textContent=tr[currentLang].duplicated;updatePreview();invoiceDirty=true;}

function updatePreview(){const x=tr[currentLang];autoNights();const n=Number(f.nights.value||0),g=Number(f.guests.value||1),a=Number(f.accommodation.value||0),c=Number(f.cleaning.value||0),extraFee=Number(f.additionalGuestFee.value||0),extraNights=Number(f.additionalGuestNights.value||0),rate=Number(f.tourist.value||0),baseGuests=extraNights>0?Math.max(1,g-1):g,baseTax=n*baseGuests*rate,extraTax=extraNights*rate,tax=baseTax+extraTax,total=f.taxMode.value==='included'?a+c+extraFee:a+c+baseTax+extraFee;
  const labels={previewInvoiceTitle:x.invoiceTitle,previewLabelInvoiceNumber:x.labelInvoiceNumber,previewLabelInvoiceDate:x.labelDate,previewSectionGuest:x.billed,previewLabelVatNumber:x.labelVat,previewLabelBookingReference:x.labelBooking,previewSectionStay:x.stay,previewLabelRoom:x.labelRoom,previewLabelCheckin2:x.labelCheckin,previewLabelCheckout2:x.labelCheckout,previewLabelNights2:x.labelNights,previewLabelGuests2:x.labelGuests,previewSectionDescription:x.descriptionTitle,previewDescription:x.description,previewSectionPrice:x.price,previewLabelAccommodation:x.labelAccommodation,previewLabelCleaning:x.labelCleaning,previewLabelTaxRate:x.labelTaxRate,previewLabelTotal:x.labelTotal,previewSectionPayment:x.paymentTitle,previewNote:x.note};for(const [id,v] of Object.entries(labels))$(id).textContent=v;$('previewLabelTaxTotal').textContent=f.taxMode.value==='included'?x.labelTaxIncluded:x.labelTaxAdded;
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
$('changeLoginEmailBtn').onclick=()=>{pendingLoginEmail='';showLoginEmailStep();};
$('loginCode').addEventListener('input',()=>{$('loginCode').value=$('loginCode').value.replace(/\D/g,'').slice(0,8);});
$('logoutBtn').onclick=logout;$('manualInviteToggleBtn').onclick=()=>setManualInviteOpen($('manualInvitePanel').classList.contains('hidden'));$('closeManualInviteBtn').onclick=()=>setManualInviteOpen(false);$('createInviteBtn').onclick=createInvite;$('copyInviteBtn').onclick=async()=>{await navigator.clipboard.writeText($('inviteUrl').value);$('inviteMessage').textContent=tr[currentLang].copied;};$('newPaperBtn').onclick=blankRegistration;$('closeRegistrationBtn').onclick=()=>{if(!guardUnsaved('registration'))return;registrationDirty=false;currentDraftReservationId=null;$('registrationEditor').classList.add('hidden');};$('saveRegistrationBtn').onclick=saveReg;$('addOvernightGuestBtn').onclick=()=>openOvernightEditor();$('saveOvernightGuestBtn').onclick=saveOvernightGuest;$('createOvernightQrBtn').onclick=createOvernightGuestInvite;$('printOvernightFormBtn').onclick=printOvernightGuestForm;$('cancelOvernightGuestBtn').onclick=()=>{$('overnightGuestEditor').classList.add('hidden');};$('deleteOvernightGuestBtn').onclick=deleteOvernightGuest;$('useForInvoiceBtn').onclick=useRegistrationForInvoice;$('deleteRegistrationBtn').onclick=deleteRegistration;$('registrationSearch').oninput=renderRegs;rf.invoiceRequested.onchange=toggleRegInvoice;rf.invoiceType.onchange=toggleRegInvoice;rf.idType.onchange=toggleIdOther;
document.querySelectorAll('.filter-pill').forEach(b=>b.onclick=()=>setRegistrationFilter(b.dataset.filter));
document.querySelectorAll('[data-reservation-attention]').forEach(b=>b.onclick=()=>{setReservationFilter(b.dataset.reservationAttention);$('reservationsOverview').scrollIntoView({behavior:'smooth',block:'start'});});
$('saveBtn').onclick=saveInvoice;$('deleteBtn').onclick=deleteInvoice;$('duplicateBtn').onclick=duplicateInvoice;$('newInvoiceBtn').onclick=()=>newInvoice();$('printBtn').onclick=()=>{if(validateInvoice())window.print();else $('saveMessage').textContent=tr[currentLang].required;};$('searchInvoices').oninput=renderInvoices;f.room.onchange=()=>{toggleInvoiceCustom();updatePreview()};f.payment.onchange=()=>{toggleInvoiceCustom();updatePreview()};f.taxMode.onchange=()=>updatePreview();f.checkin.onchange=()=>{manualNights=false;autoNights();updatePreview()};f.checkout.onchange=()=>{manualNights=false;autoNights();updatePreview()};f.nights.oninput=()=>{manualNights=true;updatePreview()};
Object.values(f).filter(v=>v&&v.tagName!=='SELECT').forEach(v=>{if(v.type!=='hidden')v.addEventListener('input',updatePreview)});
Object.values(rf).forEach(v=>{if(!v||v.type==='hidden')return; const ev=(v.tagName==='SELECT'||v.type==='checkbox')?'change':'input'; v.addEventListener(ev,()=>{if(!suppressDirty)registrationDirty=true;});});
Object.values(f).forEach(v=>{if(!v||v.type==='hidden')return; const ev=(v.tagName==='SELECT'||v.type==='checkbox')?'change':'input'; v.addEventListener(ev,()=>{if(!suppressDirty)invoiceDirty=true;});});
document.querySelectorAll('[data-reservation-filter]').forEach(b=>b.onclick=()=>setReservationFilter(b.dataset.reservationFilter));
document.querySelectorAll('.lang-btn').forEach(b=>b.onclick=()=>{currentLang=b.dataset.lang;setTexts();toggleRegInvoice();toggleIdOther();toggleInvoiceCustom();renderReservations();});

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

async function init(){setTexts();toggleRegInvoice();toggleIdOther();toggleInvoiceCustom();const s=await session();if(!s){$('loginView').classList.remove('hidden');$('appView').classList.add('hidden');return;}if(!(await allowed())){await supabaseClient.auth.signOut();$('loginMessage').textContent=tr[currentLang].denied;return;}$('loginView').classList.add('hidden');$('appView').classList.remove('hidden');$('logoutBtn').classList.remove('hidden');await Promise.all([loadRegs(),loadInvoices(),loadReservations(),newInvoice(true)]); await autoSyncCalendars();}
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
