
const buttons = document.querySelectorAll('.lang-btn');
const contents = document.querySelectorAll('.lang-content');

function setGuideLanguage(lang) {
  document.documentElement.lang = lang;
  contents.forEach(c => c.classList.toggle('active', c.id === `content-${lang}`));
  buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const home = document.querySelector('[data-i18n-home]');
  if (home) home.textContent = lang === 'nl' ? 'Terug naar website' : 'Back to website';
  localStorage.setItem('preferredLanguage', lang);
}
buttons.forEach(btn => btn.addEventListener('click', () => setGuideLanguage(btn.dataset.lang)));
const queryLang = new URLSearchParams(location.search).get('lang');
setGuideLanguage(queryLang === 'nl' ? 'nl' : (localStorage.getItem('preferredLanguage') || 'en'));
