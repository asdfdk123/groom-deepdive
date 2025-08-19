import { $, escapeHTML } from './utils.js';

function pipe(state) {
  const q = state.filter.q.trim().toLowerCase();
  const selected = state.filter.selected;
  const sort = state.filter.sort;

  let list = state.items.slice();

  if (q) {
    list = list.filter((it) => {
      const inTitle = it.title.toLowerCase().includes(q);
      const inTags = it.tags.some((t) => t.toLowerCase().includes(q));
      return inTitle || inTags;
    });
  }

  if (selected && selected.size > 0) {
    list = list.filter((it) => it.tags.some((t) => selected.has(t)));
  }

  if (sort === 'recent') {
    list.sort((a, b) => b.createdAt - a.createdAt);
  } else if (sort === 'title') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === 'tags') {
    list.sort((a, b) => b.tags.length - a.tags.length);
  }

  return list;
}

function renderList(list) {
  const html = list.map((it) => {
    const title = escapeHTML(it.title);
    const url = it.url ? escapeHTML(it.url) : '';
    const tags = it.tags.map((t) => `<span class="tag" data-tag="${escapeHTML(t)}">#${escapeHTML(t)}</span>`).join(' ');
    const link = url
      ? (url.startsWith('http://') || url.startsWith('https://'))
        ? `<a href="${url}" target="_blank" rel="noreferrer">${url}</a>`
        : `<span class="muted">${url}</span>`
      : '';
    return `
      <article class="card" data-id="${it.id}">
        <h3>${title}</h3>
        <div class="muted">${link}</div>
        <div class="tags">${tags}</div>
        <div class="actions">
          <button data-act="delete" data-id="${it.id}">삭제</button>
        </div>
      </article>
    `;
  }).join('');
  $('#list').innerHTML = html || `<div class="muted">항목이 없습니다.</div>`;
}

function computeTopTags(items, topN = 5) {
  const map = new Map();
  items.forEach((it) => {
    it.tags.forEach((t) => {
      map.set(t, (map.get(t) || 0) + 1);
    });
  });
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);
}

function renderStats(state, visibleList) {
  const total = state.items.length;
  const selected = state.filter.selected;
  const selectedView = selected && selected.size > 0
    ? `선택 태그: ${[...selected].map((t) => `#${escapeHTML(t)}`).join(', ')}`
    : '선택 태그: 없음';
  const topTags = computeTopTags(state.items)
    .map(([t, c]) => `#${escapeHTML(t)}(${c})`)
    .join(' ');
  const html = `
    <span>총 ${total}개</span>
    <span>${selectedView}</span>
    <span>TOP 태그: ${topTags || '없음'}</span>
    <span>표시 중: ${visibleList.length}개</span>
  `;
  $('#stats').innerHTML = html;
}

export function render(state) {
  const visible = pipe(state);
  renderList(visible);
  renderStats(state, visible);
}
