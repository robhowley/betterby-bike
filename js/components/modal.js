import { parseMarkdown } from '../lib/markdown.js';
import { CATS } from '../utils/cats.js';
import { esc, fmtDate } from '../utils/dom.js';

export function showModal(title, date, cats, tags, content) {
  const ov = document.getElementById('ov');
  document.getElementById('mcats').innerHTML = (cats || []).map(c => {
    const col = CATS[c.toLowerCase()] || 'var(--orange)';
    return `<span class="mcat-badge" style="background:${col}22;color:${col}">${esc(c)}</span>`;
  }).join('');
  document.getElementById('mtitle').textContent = title;
  document.getElementById('mdate').textContent  = fmtDate(date);
  document.getElementById('mbd').innerHTML = `<div class="prose">${parseMarkdown(content || '')}</div>`;
  document.getElementById('mft').innerHTML = (tags || [])
    .map(t => `<span class="tag">${esc(t)}</span>`)
    .join('');
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  document.getElementById('ov').classList.remove('open');
  document.body.style.overflow = '';
}

export function openContact() {
  document.getElementById('contact-ov').classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeContact() {
  document.getElementById('contact-ov').classList.remove('open');
  document.body.style.overflow = '';
}

export function initModal(POSTS, MYTHS) {
  // Click-outside to close overlays
  document.getElementById('ov').addEventListener('click', e => {
    if (e.target === document.getElementById('ov')) closeModal();
  });
  document.getElementById('contact-ov').addEventListener('click', e => {
    if (e.target === document.getElementById('contact-ov')) closeContact();
  });

  // X buttons
  document.querySelector('#ov .xbtn').addEventListener('click', closeModal);
  document.querySelector('#contact-ov .xbtn').addEventListener('click', closeContact);

  // Contact link in nav
  document.getElementById('contact-link').addEventListener('click', openContact);

  // Grid card clicks — event delegation via data-post-id
  document.getElementById('grid').addEventListener('click', e => {
    const card = e.target.closest('[data-post-id]');
    if (!card) return;
    const p = POSTS.find(x => x.id === card.dataset.postId);
    if (p) showModal(p.title, p.date, p.categories, p.tags, p.content);
  });

  // Myth card clicks — event delegation via data-myth-id
  document.getElementById('myths-grid').addEventListener('click', e => {
    const card = e.target.closest('[data-myth-id]');
    if (!card) return;
    const m = MYTHS.find(x => x.id === card.dataset.mythId);
    if (m) showModal(m.title, '', ['Myth Busting'], [], m.content);
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeContact(); }
  });
}
