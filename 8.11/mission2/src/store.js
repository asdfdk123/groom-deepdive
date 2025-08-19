const STORAGE_KEY = 'tn_state_v1';

const defaultState = {
  items: [],
  filter: { q: '', selected: [], sort: 'recent' },
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    const items = Array.isArray(parsed.items) ? parsed.items : [];
    const q = typeof parsed?.filter?.q === 'string' ? parsed.filter.q : '';
    const selected = Array.isArray(parsed?.filter?.selected) ? parsed.filter.selected : [];
    const sort = ['recent', 'title', 'tags'].includes(parsed?.filter?.sort) ? parsed.filter.sort : 'recent';
    return { items, filter: { q, selected, sort } };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(state) {
  try {
    const serializable = {
      items: state.items,
      filter: {
        q: state.filter.q,
        selected: Array.from(state.filter.selected ?? []),
        sort: state.filter.sort,
      },
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch {}
}

export function createStore(initial = loadState()) {
  let state = {
    ...initial,
    filter: {
      ...initial.filter,
      selected: new Set(initial.filter.selected),
    },
  };
  const listeners = new Set();

  function get() {
    return state;
  }

  function set(updater) {
    const next = updater(state);
    if (next === state) return;
    state = {
      ...next,
      filter: {
        ...next.filter,
        selected: new Set(next.filter.selected),
      },
    };
    saveState({
      items: state.items,
      filter: { ...state.filter, selected: Array.from(state.filter.selected) },
    });
    listeners.forEach((fn) => fn(state));
  }

  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  return { get, set, subscribe };
}
