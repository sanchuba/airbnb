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