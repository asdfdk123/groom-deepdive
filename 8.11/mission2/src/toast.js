import { $ } from './utils.js';

class Toast {
  constructor(rootSel = '#toast-root') {
    this.root = $(rootSel);
    this.show = this.show.bind(this);
  }
  show(message, duration = 2200) {
    if (!this.root) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    this.root.prepend(el);
    setTimeout(() => el.remove(), duration);
  }
}

export const toast = new Toast();
