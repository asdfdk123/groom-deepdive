import { createStore } from './store.js';
import { initTheme } from './theme.js';
import { render } from './render.js';
import { initEvents } from './events.js';

const store = createStore();

function renderRoot(state) {
  render(state);          
}

store.subscribe(renderRoot);
renderRoot(store.get());        

initTheme();
initEvents(store);
