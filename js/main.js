import { POSTS, MYTHS }         from './data.js';
import { initGrid, renderGrid } from './components/grid.js';
import { initMyths, renderMyths } from './components/myths.js';
import { initModal }             from './components/modal.js';
import { initNav }               from './components/nav.js';
import { setCounts, setFilter, setSearch } from './state.js';

// ─── Bootstrap ────────────────────────────────────────────────────────────────
initGrid(POSTS);
initMyths(MYTHS);
initNav();
initModal(POSTS, MYTHS);

// ─── Filter tab clicks ────────────────────────────────────────────────────────
document.querySelectorAll('.fbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    setFilter(btn.dataset.f);
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    renderGrid();
  });
});

// ─── Hero pill clicks ─────────────────────────────────────────────────────────
document.querySelectorAll('.pill[data-f]').forEach(btn => {
  btn.addEventListener('click', () => {
    setFilter(btn.dataset.f);
    document.querySelectorAll('.fbtn').forEach(b => {
      b.classList.toggle('on', b.dataset.f === btn.dataset.f);
    });
    renderGrid();
    setTimeout(() => {
      document.getElementById('posts-anchor').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  });
});

// ─── Search ───────────────────────────────────────────────────────────────────
const srch = document.getElementById('srch');
if (srch) {
  srch.addEventListener('input', () => {
    setSearch(srch.value.trim());
    renderGrid();
  });
}

// ─── Init render ──────────────────────────────────────────────────────────────
setCounts(POSTS);
renderGrid();
renderMyths();
