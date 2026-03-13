export const CATS = {
  'safety':       'var(--orange)',
  'business':     'var(--gold)',
  'environment':  'var(--green)',
  'in the news':  'var(--blue)',
  'myth busting': 'var(--purple)',
};

export function catColor(cats) {
  if (!cats || !cats.length) return 'var(--orange)';
  return CATS[cats[0].toLowerCase()] || 'var(--orange)';
}

export function catLabel(cats) {
  return (cats && cats.length) ? cats[0] : '';
}
