const MONTHS = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');

export function fmtDate(d) {
  if (!d) return '';
  const p = d.split('-');
  if (p.length < 3) return d;
  return MONTHS[parseInt(p[1]) - 1] + ' ' + parseInt(p[2]) + ', ' + p[0];
}

export function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
