import { $ } from './utils.js';

let count = 0;
let el = null;

function ensure() {
  if (!el) {
    const header = document.querySelector('.bar');
    el = document.createElement('span');
    el.id = 'sync-indicator';
    el.className = 'muted';
    el.style.marginLeft = '8px';
    el.style.fontSize = '12px';
    if (header) header.appendChild(el);
  }
}

function render() {
  ensure();
  if (!el) return;
  el.textContent = count > 0 ? '동기화 중' : '';
}

export function startSync() {
  count += 1;
  render();
}

export function stopSync() {
  count = Math.max(0, count - 1);
  render();
}

export function delay(ms = 600) {
  return new Promise((r) => setTimeout(r, ms));
}
