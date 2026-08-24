const langButtons = document.querySelectorAll('.lang-btn');
const contents = document.querySelectorAll('.lang-content');
const whatsappBtn = document.getElementById('whatsappBtn');
const brandLink = document.getElementById('brandLink');
const navLinks = document.querySelectorAll('.nav a');
const heroGuideBtnEn = document.getElementById('heroGuideBtnEn');
const heroGuideBtnNl = document.getElementById('heroGuideBtnNl');
const menuToggle = document.getElementById('menuToggle');
const menuPanel = document.getElementById('menuPanel');

let currentLang = localStorage.getItem('preferredLanguage') || 'en';

const navConfig = {
  en: {
    labels: ["Rooms", "Your Stay", "Before Arrival", "Guest Guide", "FAQ", "Book"],
    hrefs: ["#rooms-en", "#stay-en", "#arrival-en", "#guide-en", "#faq-en", "#book-en"],
    brandHref: "#top-en",
    guideHref: "#guide-en"
  },
  nl: {
    labels: ["Kamers", "Je Verblijf", "Voor Aankomst", "Gastinformatie", "FAQ", "Boeken"],
    hrefs: ["#rooms-nl", "#stay-nl", "#arrival-nl", "#guide-nl", "#faq-nl", "#book-nl"],
    brandHref: "#top-nl",
    guideHref: "#guide-nl"
  }
};

const whatsappConfig = {
  en: {
    text: '💬 Message us',
    href: 'https://wa.me/31640565656?text=Hi,%20I%20have%20a%20question%20about%20Nijmegen%20Guest%20Rooms.'
  },
  nl: {
    text: '💬 Stuur ons een bericht',
    href: 'https://wa.me/31640565656?text=Hoi,%20ik%20heb%20een%20vraag%20over%20Nijmegen%20Guest%20Rooms.'
  }
};

const galleryCaptions = {
  cozy: {
    en: [
      'Cozy Room',
      'Cozy Room',
      'Cozy Room',
      'Cozy Room',
      'Cozy Room',
      'Free bicycle during your stay'
    ],
    nl: [
      'Knusse kamer',
      'Knusse kamer',
      'Knusse kamer',
      'Knusse kamer',
      'Knusse kamer',
      'Gratis fiets tijdens je verblijf'
    ]
  },
  spacious: {
    en: [
      'Spacious Room',
      'Spacious Room',
      'Spacious Room',
      'Spacious Room',
      'Spacious Room',
      'Spacious Room',
      'Spacious Room',
      'Free bicycle during your stay'
    ],
    nl: [
      'Ruime kamer',
      'Ruime kamer',
      'Ruime kamer',
      'Ruime kamer',
      'Ruime kamer',
      'Ruime kamer',
      'Ruime kamer',
      'Gratis fiets tijdens je verblijf'
    ]
  },
  kitchen: {
    en: [
      'Shared kitchen',
      'Shared kitchen',
      'Shared kitchen',
      'Shared kitchen',
      'Shared kitchen'
    ],
    nl: [
      'Gedeelde keuken',
      'Gedeelde keuken',
      'Gedeelde keuken',
      'Gedeelde keuken',
      'Gedeelde keuken'
    ]
  },
  bathroom: {
    en: [
      'Shared bathroom',
      'Shared bathroom',
      'Shared bathroom',
      'Shared bathroom'
    ],
    nl: [
      'Gedeelde badkamer',
      'Gedeelde badkamer',
      'Gedeelde badkamer',
      'Gedeelde badkamer'
    ]
  },
  misc: {
    en: [
      'Backyard with house view',
      'Backyard seating area',
      'Front of the house',
      'Lilly',
      'Shared home',
      'Shared home'
    ],
    nl: [
      'Achtertuin en uitzicht op het huis',
      'Achtertuin met zitplek',
      'Voorkant van het huis',
      'Lilly',
      'Gedeelde woning',
      'Gedeelde woning'
    ]
  }
};

const galleries = {
  cozy: [
    { src: './assets/room-cozy-1.jpg' },
    { src: './assets/room-cozy-2.jpg' },
    { src: './assets/room-cozy-3.jpg' },
    { src: './assets/room-cozy-4.jpg' },
    { src: './assets/room-cozy-5.jpg' },
    { src: './assets/room-cozy-bike.jpg' }
  ],
  spacious: [
    { src: './assets/room-spacious-1.jpg' },
    { src: './assets/room-spacious-2.jpg' },
    { src: './assets/room-spacious-3.jpg' },
    { src: './assets/room-spacious-4.jpg' },
    { src: './assets/room-spacious-5.jpg' },
    { src: './assets/room-spacious-6.jpg' },
    { src: './assets/room-spacious-7.jpg' },
    { src: './assets/room-spacious-bike.jpg' }
  ],
  kitchen: [
    { src: './assets/kitchen-1.jpg' },
    { src: './assets/kitchen-2.jpg' },
    { src: './assets/kitchen-3.jpg' },
    { src: './assets/kitchen-4.jpg' },
    { src: './assets/kitchen-5.jpg' }
  ],
  bathroom: [
    { src: './assets/bathroom-1.jpg' },
    { src: './assets/bathroom-2.jpg' },
    { src: './assets/bathroom-3.jpg' },
    { src: './assets/bathroom-4.jpg' }
  ],
  misc: [
    { src: './assets/backyard-1.jpg' },
    { src: './assets/backyard-2.jpg' },
    { src: './assets/front-house.jpg' },
    { src: './assets/lilly.jpg' },
    { src: './assets/misc-1.jpg' },
    { src: './assets/misc-2.jpg' }
  ]
};

const lightbox = document.getElementById('lightbox');
const lightboxInner = lightbox.querySelector('.lightbox-inner');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentGalleryName = null;
let currentIndex = 0;
let lockedScrollY = 0;

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function openMenu() {
  if (!menuToggle || !menuPanel) return;
  menuToggle.classList.add('active');
  menuPanel.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (!menuToggle || !menuPanel) return;
  menuToggle.classList.remove('active');
  menuPanel.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  if (!menuPanel) return;
  if (menuPanel.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  contents.forEach(content => {
    content.classList.toggle('active', content.id === `content-${lang}`);
  });

  whatsappBtn.textContent = whatsappConfig[lang].text;
  whatsappBtn.href = whatsappConfig[lang].href;

  navLinks.forEach((link, index) => {
    link.textContent = navConfig[lang].labels[index];
    link.href = navConfig[lang].hrefs[index];
  });

  brandLink.href = navConfig[lang].brandHref;
  heroGuideBtnEn.href = navConfig[lang].guideHref;
  heroGuideBtnNl.href = navConfig[lang].guideHref;

  if (lightbox.classList.contains('open')) {
    renderLightbox();
  }

  localStorage.setItem('preferredLanguage', lang);
  closeMenu();
}

function getCaption(galleryName, index) {
  const group = galleryCaptions[galleryName];
  if (!group) return '';
  const captions = group[currentLang] || group.en || [];
  return captions[index] || '';
}

function renderLightbox() {
  if (!currentGalleryName || !galleries[currentGalleryName]) return;

  const items = galleries[currentGalleryName];
  const item = items[currentIndex];
  const caption = getCaption(currentGalleryName, currentIndex);

  lightboxImage.src = item.src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = `${caption} (${currentIndex + 1}/${items.length})`;
}

function lockBodyScroll() {
  lockedScrollY = window.scrollY || window.pageYOffset;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function unlockBodyScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.overflow = '';

  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, lockedScrollY);

  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousScrollBehavior || '';
  });
}

function openLightbox(galleryName, startIndex = 0) {
  if (!galleries[galleryName] || !galleries[galleryName].length) return;

  currentGalleryName = galleryName;
  currentIndex = Math.max(0, Math.min(startIndex, galleries[galleryName].length - 1));
  renderLightbox();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  lockBodyScroll();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  unlockBodyScroll();
}

function showPrev() {
  if (!currentGalleryName) return;
  const items = galleries[currentGalleryName];
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  renderLightbox();
}

function showNext() {
  if (!currentGalleryName) return;
  const items = galleries[currentGalleryName];
  currentIndex = (currentIndex + 1) % items.length;
  renderLightbox();
}

function openFaqIfHash() {
  const hash = window.location.hash;

  if (hash === '#faq-en' || hash === '#faq-nl') {
    const section = document.querySelector(hash);
    if (!section) return;

    const details = section.querySelector('details');
    if (details) {
      details.open = true;
    }
  }
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.querySelectorAll('[data-gallery]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const galleryName = trigger.dataset.gallery;
    const startIndex = Number(trigger.dataset.start || 0);
    openLightbox(galleryName, startIndex);
  });
});

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
}

document.addEventListener('click', (event) => {
  if (!menuPanel || !menuToggle) return;
  if (window.innerWidth > 620) return;

  const clickedInsidePanel = menuPanel.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);

  if (!clickedInsidePanel && !clickedToggle) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 620) {
    closeMenu();
  }
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (lightbox.classList.contains('open')) {
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showPrev();
    if (event.key === 'ArrowRight') showNext();
    return;
  }

  if (event.key === 'Escape') {
    closeMenu();
  }
});

lightboxInner.addEventListener('touchstart', (event) => {
  if (!lightbox.classList.contains('open')) return;

  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

lightboxInner.addEventListener('touchend', (event) => {
  if (!lightbox.classList.contains('open')) return;

  const touch = event.changedTouches[0];
  touchEndX = touch.clientX;
  touchEndY = touch.clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) {
      showNext();
    } else {
      showPrev();
    }
  }
}, { passive: true });

window.addEventListener('scroll', () => {
  const btn = document.getElementById('topBtn');
  btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

window.addEventListener('hashchange', openFaqIfHash);
window.addEventListener('load', openFaqIfHash);

setLanguage(currentLang);

// vNext — Booking.com-first availability powered by anonymous iCal ranges.
const AVAILABILITY_ENDPOINT = 'https://rmvfrgpampxduldzfwxi.supabase.co/functions/v1/public-availability';
const BOOKING_PROPERTY_URL = 'https://www.booking.com/hotel/nl/nijmegen-knusse-kamers.html';
let publicAvailability = null;
let publicAvailabilityFailed = false;

function isoTodayLocal() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseIsoDate(value) {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function nightsBetween(checkin, checkout) {
  const start = parseIsoDate(checkin);
  const end = parseIsoDate(checkout);
  if (!start || !end) return 0;
  return Math.round((end - start) / 86400000);
}

function rangesOverlap(stayStart, stayEnd, blockStart, blockEnd) {
  // iCal DTEND and guest checkout are both exclusive: back-to-back stays remain possible.
  return stayStart < blockEnd && stayEnd > blockStart;
}

function roomLooksAvailable(roomKey, checkin, checkout) {
  const blocks = publicAvailability?.rooms?.[roomKey] || [];
  return !blocks.some(block => rangesOverlap(checkin, checkout, block.start, block.end));
}

function setPill(row, state, lang) {
  const pill = row?.querySelector('.availability-pill');
  if (!pill) return;
  const labels = {
    en: { neutral: 'Select dates', available: 'Looks available', unavailable: 'Unavailable', unknown: 'Check on Booking.com' },
    nl: { neutral: 'Kies data', available: 'Lijkt beschikbaar', unavailable: 'Niet beschikbaar', unknown: 'Controleer op Booking.com' }
  };
  pill.className = `availability-pill ${state}`;
  pill.textContent = labels[lang][state];
}

function updateAvailabilityUi(lang) {
  const cap = lang === 'en' ? 'En' : 'Nl';
  const checkin = document.getElementById(`checkin${cap}`)?.value;
  const checkout = document.getElementById(`checkout${cap}`)?.value;
  const rows = document.querySelectorAll(`[data-room-status][data-lang="${lang}"]`);
  const valid = checkin && checkout && nightsBetween(checkin, checkout) > 0;

  rows.forEach(row => {
    if (!valid) return setPill(row, 'neutral', lang);
    if (!publicAvailability || publicAvailabilityFailed) return setPill(row, 'unknown', lang);
    const key = row.dataset.roomStatus;
    setPill(row, roomLooksAvailable(key, checkin, checkout) ? 'available' : 'unavailable', lang);
  });
}

function formatFeedTime(iso, lang) {
  if (!iso) return lang === 'en' ? 'Calendars loaded' : 'Kalenders geladen';
  const dt = new Date(iso);
  if (Number.isNaN(dt.getTime())) return lang === 'en' ? 'Calendars loaded' : 'Kalenders geladen';
  return (lang === 'en' ? 'Checked ' : 'Gecontroleerd ') + dt.toLocaleTimeString(lang === 'en' ? 'en-GB' : 'nl-NL', { hour: '2-digit', minute: '2-digit' });
}

function renderAvailabilitySyncState() {
  ['en', 'nl'].forEach(lang => {
    const el = document.getElementById(`availabilitySync${lang === 'en' ? 'En' : 'Nl'}`);
    if (!el) return;
    if (publicAvailabilityFailed) {
      el.textContent = lang === 'en' ? 'Estimate temporarily unavailable' : 'Schatting tijdelijk niet beschikbaar';
    } else if (publicAvailability) {
      el.textContent = formatFeedTime(publicAvailability.generatedAt, lang);
    }
    updateAvailabilityUi(lang);
  });
}

async function loadPublicAvailability() {
  try {
    const response = await fetch(AVAILABILITY_ENDPOINT, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Availability HTTP ${response.status}`);
    const data = await response.json();
    if (!data?.rooms?.cozy || !data?.rooms?.spacious) throw new Error('Invalid availability response');
    publicAvailability = data;
    publicAvailabilityFailed = false;
  } catch (error) {
    console.warn('Estimated availability could not be loaded:', error);
    publicAvailabilityFailed = true;
  }
  renderAvailabilitySyncState();
}

function buildBookingUrl(checkin, checkout) {
  const url = new URL(BOOKING_PROPERTY_URL);
  url.searchParams.set('checkin', checkin);
  url.searchParams.set('checkout', checkout);
  url.searchParams.set('group_adults', '1');
  url.searchParams.set('no_rooms', '1');
  url.searchParams.set('group_children', '0');
  return url.toString();
}

function setupAvailabilityForm(lang) {
  const cap = lang === 'en' ? 'En' : 'Nl';
  const form = document.getElementById(`availabilityForm${cap}`);
  const checkin = document.getElementById(`checkin${cap}`);
  const checkout = document.getElementById(`checkout${cap}`);
  if (!form || !checkin || !checkout) return;

  const today = isoTodayLocal();
  checkin.min = today;
  checkout.min = today;

  function syncDates(source) {
    if (source === checkin && checkin.value) {
      checkout.min = checkin.value;
      if (checkout.value && checkout.value <= checkin.value) checkout.value = '';
    }
    updateAvailabilityUi(lang);
  }

  checkin.addEventListener('change', () => syncDates(checkin));
  checkout.addEventListener('change', () => syncDates(checkout));

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.availability-error')?.remove();
    const inDate = checkin.value;
    const outDate = checkout.value;
    const nights = nightsBetween(inDate, outDate);
    if (!inDate || !outDate || nights < 1) {
      const p = document.createElement('p');
      p.className = 'availability-error';
      p.textContent = lang === 'en' ? 'Please choose a valid check-in and check-out date.' : 'Kies een geldige incheck- en uitcheckdatum.';
      form.appendChild(p);
      return;
    }
    window.open(buildBookingUrl(inDate, outDate), '_blank', 'noopener,noreferrer');
  });
}

setupAvailabilityForm('en');
setupAvailabilityForm('nl');
loadPublicAvailability();
