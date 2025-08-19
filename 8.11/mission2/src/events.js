import { $, debounce, genId, parseTags } from './utils.js';
import { toast } from './toast.js';

export function initEvents(store) {
  const form = $('#add-form');
  const titleEl = $('#title');
  const urlEl = $('#url');
  const tagsEl = $('#tags');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleEl.value.trim();
    if (!title) return;
    const url = urlEl.value.trim();
    const tags = parseTags(tagsEl.value);
    const item = { id: genId(), title, url, tags, createdAt: Date.now() };
    store.set((s) => ({ ...s, items: [item, ...s.items] }));
    form.reset();
    toast.show('추가완료');
  });

  const qEl = $('#q');
  const onSearch = debounce(() => {
    const q = qEl.value;
    store.set((s) => ({ ...s, filter: { ...s.filter, q } }));
  }, 300);
  qEl.addEventListener('input', onSearch);

  const sortEl = $('#sort');
  sortEl.addEventListener('change', () => {
    const sort = sortEl.value;
    store.set((s) => ({ ...s, filter: { ...s.filter, sort } }));
  });

  const clearBtn = $('#clear-filters');
  clearBtn.addEventListener('click', () => {
    store.set((s) => ({ ...s, filter: { ...s.filter, q: '', selected: [], sort: 'recent' } }));
    qEl.value = '';
    sortEl.value = 'recent';
  });
  $('#list').addEventListener('click', (e) => {
    const delBtn = e.target.closest('[data-act="delete"]');
    if (delBtn) {
      const id = Number(delBtn.dataset.id);
      store.set((s) => ({
        ...s,
        items: s.items.filter((it) => it.id !== id),
      }));
      toast.show('삭제 완료');
      return;
    }

    const tagEl = e.target.closest('.tag[data-tag]');
    if (tagEl) {
      const tag = tagEl.dataset.tag;
      store.set((s) => {
        const selected = new Set(s.filter.selected);
        if (selected.has(tag)) {
          selected.delete(tag);
        } else {
          selected.add(tag);
        }
        return { ...s, filter: { ...s.filter, selected } };
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      qEl.focus();
    } else if (e.key === 'Escape') {
      store.set((s) => ({
        ...s,
        filter: { ...s.filter, q: '', selected: [], sort: 'recent' },
      }));
      qEl.value = '';
      sortEl.value = 'recent';
    }
  });

  titleEl.focus();
}
