import { $ } from './utils.js';

const THEME_KEY = 'tn_theme';

function applyTheme(isLight) {
  document.body.classList.toggle('light', isLight);
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function saveTheme(isLight) {
  try {
    localStorage.setItem(THEME_KEY, isLight ? '1' : '0');
  } catch {}
}

function initTheme() {
  const stored = loadTheme();
  const isLight = stored === '1';
  applyTheme(isLight);
  $('#theme-btn').addEventListener('click', () => {
    const nowLight = document.body.classList.contains('light');
    const nextLight = !nowLight;
    applyTheme(nextLight);
    saveTheme(nextLight);
  });
}

export { initTheme };
