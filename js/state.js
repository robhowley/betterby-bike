export let filter = 'all';
export let search = '';

export function setFilter(f) { filter = f; }
export function setSearch(s) { search = s; }

export function matches(post) {
  const cats = (post.categories || []).map(c => c.toLowerCase());
  let ok = false;
  if (filter === 'all')          ok = true;
  else if (filter === 'safety')      ok = cats.includes('safety');
  else if (filter === 'business')    ok = cats.includes('business');
  else if (filter === 'environment') ok = cats.includes('environment');
  else if (filter === 'news')        ok = cats.includes('in the news');
  if (!ok) return false;
  if (!search) return true;
  const q = search.toLowerCase();
  return [post.title, post.excerpt]
    .concat(post.tags || [])
    .concat(post.categories || [])
    .some(f => f && f.toLowerCase().includes(q));
}

export function setCounts(POSTS) {
  const c = { all: 0, safety: 0, business: 0, environment: 0, news: 0 };
  POSTS.forEach(p => {
    c.all++;
    (p.categories || []).forEach(cat => {
      const lc = cat.toLowerCase();
      if (lc === 'safety')      c.safety++;
      if (lc === 'business')    c.business++;
      if (lc === 'environment') c.environment++;
      if (lc === 'in the news') c.news++;
    });
  });
  Object.keys(c).forEach(k => {
    const el = document.getElementById('cnt-' + k);
    if (el) el.textContent = c[k];
  });
}
