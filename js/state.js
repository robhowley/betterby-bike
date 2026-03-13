export let filter     = 'all';
export let typeFilter = 'all';
export let search     = '';

export function setFilter(f)     { filter = f; }
export function setTypeFilter(t) { typeFilter = t; }
export function setSearch(s)     { search = s; }

export function matches(post) {
  // Category filter
  const cats = (post.categories || []).map(c => c.toLowerCase());
  let ok = false;
  if (filter === 'all')          ok = true;
  else if (filter === 'safety')      ok = cats.includes('safety');
  else if (filter === 'business')    ok = cats.includes('business');
  else if (filter === 'environment') ok = cats.includes('environment');
  if (!ok) return false;

  // Type filter
  if (typeFilter !== 'all' && post.type !== typeFilter) return false;

  // Search
  if (!search) return true;
  const q = search.toLowerCase();
  return [post.title, post.excerpt]
    .concat(post.tags || [])
    .concat(post.categories || [])
    .some(f => f && f.toLowerCase().includes(q));
}

export function setCounts(POSTS) {
  const c = { all: 0, safety: 0, business: 0, environment: 0 };
  POSTS.forEach(p => {
    c.all++;
    (p.categories || []).forEach(cat => {
      const lc = cat.toLowerCase();
      if (lc === 'safety')      c.safety++;
      if (lc === 'business')    c.business++;
      if (lc === 'environment') c.environment++;
    });
  });
  Object.keys(c).forEach(k => {
    const el = document.getElementById('cnt-' + k);
    if (el) el.textContent = c[k];
  });
}
