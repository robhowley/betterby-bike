import { esc } from '../utils/dom.js';

let _MYTHS = [];

export function initMyths(myths) {
  _MYTHS = myths;
}

export function renderMyths() {
  const g = document.getElementById('myths-grid');
  g.innerHTML = _MYTHS.map(m => {
    const sub = m.title.replace(/^Myth:\s*/i, '');
    let fact = '';
    const lines = (m.content || '').split('\n');
    for (let i = 0; i < lines.length; i++) {
      const l = lines[i].replace(/[*_]/g, '').trim();
      if (l.length > 10) { fact = l; break; }
    }
    return (
      `<div class="mcard" data-myth-id="${esc(m.id)}">` +
        `<div class="mbar"><span class="mlbl">Myth</span><span class="mx">&#x2715;</span></div>` +
        `<div class="mbody">` +
          `<p class="mq">&ldquo;${esc(sub)}&rdquo;</p>` +
          `<p class="mf">${esc(fact)}</p>` +
        `</div>` +
      `</div>`
    );
  }).join('');
}
