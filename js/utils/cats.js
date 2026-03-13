export const CATS = {
  'safety':       'var(--orange)',
  'business':     'var(--gold)',
  'environment':  'var(--green)',
  'myth busting': 'var(--purple)',
};

export function catColor(cats) {
  if (!cats || !cats.length) return 'var(--orange)';
  return CATS[cats[0].toLowerCase()] || 'var(--orange)';
}

export function catLabel(cats) {
  return (cats && cats.length) ? cats[0] : '';
}

export const TYPE_LABELS = {
  'study':      'Study',
  'gov-report': "Gov't Report",
  'news':       'News',
  'analysis':   'Analysis',
};
