import { matches } from '../state.js';
import { catColor, TYPE_LABELS } from '../utils/cats.js';
import { esc, fmtDate } from '../utils/dom.js';

let _POSTS = [];

export function initGrid(posts) {
  _POSTS = posts;
}

export function renderGrid() {
  const grid = document.getElementById('grid');
  const items = _POSTS.filter(matches);
  if (!items.length) {
    grid.innerHTML = '<div class="empty">No posts found.</div>';
    return;
  }
  grid.innerHTML = items.map((post, i) => {
    const color     = catColor(post.categories);
    const label     = (post.categories && post.categories.length) ? post.categories[0] : '';
    const typeLabel = TYPE_LABELS[post.type] || '';
    const delay     = (Math.min(i, 9) * 0.04).toFixed(2);
    const tags      = (post.tags || []).slice(0, 4)
      .map(t => `<span class="tag">${esc(t)}</span>`)
      .join('');
    return (
      `<article class="card" style="--cc:${color};animation-delay:${delay}s" data-post-id="${esc(post.id)}">` +
        `<div class="card-top">` +
          `<div class="card-meta">` +
            `<span class="card-cat">${esc(label)}</span>` +
            (typeLabel ? `<span class="card-type">${esc(typeLabel)}</span>` : '') +
          `</div>` +
          `<span class="card-date">${esc(fmtDate(post.date))}</span>` +
        `</div>` +
        `<h2 class="card-title">${esc(post.title)}</h2>` +
        (post.excerpt ? `<p class="card-exc">${esc(post.excerpt)}</p>` : '') +
        (tags ? `<div class="card-tags">${tags}</div>` : '') +
      `</article>`
    );
  }).join('');
}
