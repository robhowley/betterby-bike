// Uses a real HTTP server and one browser context to exercise an asset-cache upgrade.
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const repositoryRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(repositoryRoot, 'site');
const assetNames = ['styles.css', 'reader.js', 'search.js'];
const assetBodies = Object.fromEntries(assetNames.map(name => [name, fs.readFileSync(path.join(siteRoot, name))]));
const assetVersions = Object.fromEntries(assetNames.map(name => [name, crypto.createHash('sha256').update(assetBodies[name]).digest('hex').slice(0, 12)]));
const fixtureDocuments = JSON.stringify([
  {
    path: 'findings/green.md',
    markdown: '---\ntitle: Green research\n---\n\nGreen research results are visible after the versioned assets load.',
  },
]);

const oldStyles = '#results-view { display: none !important; }';
const oldReader = 'globalThis.BikeReader = { excerpt: () => "old excerpt", render: () => document.createDocumentFragment(), fragmentId: value => value };';
const oldSearch = `(() => {
  globalThis.oldAssetLoaded = true;
  document.getElementById('search-form')?.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('search-results').textContent = 'old cached results';
  });
})();`;
const fixtureMarkdownIt = `globalThis.markdownit = () => {
  const md = {
    renderer: { rules: {} },
    use() { return md; },
    parse(markdown) { return [{ type: 'paragraph_open' }, { type: 'inline', children: [{ type: 'text', content: markdown }] }, { type: 'paragraph_close' }]; },
    render(markdown) { return '<p>' + markdown.replace(/[&<>]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[character])) + '</p>'; },
  };
  return md;
};`;
const fixtureFootnote = 'globalThis.markdownitFootnote = () => {};';
const fixturePurify = 'globalThis.DOMPurify = { sanitize: value => value };';
const fixtureSearch = `globalThis.OkfMiniSearch = {
  createOkfSearch(documents) {
    return { search(query) {
      return documents.filter(document => document.markdown.toLowerCase().includes(query.toLowerCase())).map(document => ({
        path: document.path,
        title: 'Green research',
        headingPath: [],
      }));
    } };
  },
};`;

function fixtureHtml() {
  let html = fs.readFileSync(path.join(siteRoot, 'index.html'), 'utf8');
  html = html.replace(/^\s*<link rel="preconnect"[^>]*>\n/gm, '');
  html = html.replace(/^\s*<link\b[^>]*href="https:\/\/fonts\.googleapis\.com[^>]*>\n/gm, '');
  for (const [source, replacement] of [
    ['https://cdn.jsdelivr.net/npm/okf-minisearch@2.3.0', '/fixture/okf-minisearch.js'],
    ['https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js', '/fixture/markdown-it.js'],
    ['https://cdn.jsdelivr.net/npm/markdown-it-footnote@4.0.0/dist/markdown-it-footnote.min.js', '/fixture/markdown-it-footnote.js'],
    ['https://cdn.jsdelivr.net/npm/dompurify@3.4.15/dist/purify.min.js', '/fixture/purify.js'],
  ]) html = html.replaceAll(source, replacement);
  return html;
}

function oldFixtureHtml(currentHtml) {
  return assetNames.reduce(
    (html, name) => html.replace(`./${name}?v=${assetVersions[name]}`, `./${name}`),
    currentHtml,
  );
}

function send(response, body, type, cacheControl = 'no-store') {
  response.writeHead(200, { 'Cache-Control': cacheControl, 'Content-Type': type });
  response.end(body);
}

(async () => {
  const currentHtml = fixtureHtml();
  const oldHtml = oldFixtureHtml(currentHtml);
  const requests = [];
  const servedVersioned = [];
  let phase = 'old';
  const server = http.createServer((request, response) => {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    requests.push({ path: requestUrl.pathname, search: requestUrl.search });
    if (requestUrl.pathname === '/') return send(response, phase === 'old' ? oldHtml : currentHtml, 'text/html');
    if (requestUrl.pathname === '/styles.css') {
      const version = requestUrl.searchParams.get('v');
      if (version === assetVersions['styles.css']) {
        servedVersioned.push({ name: 'styles.css', body: assetBodies['styles.css'] });
        return send(response, assetBodies['styles.css'], 'text/css', 'public, max-age=31536000, immutable');
      }
      return send(response, oldStyles, 'text/css', 'public, max-age=31536000, immutable');
    }
    if (requestUrl.pathname === '/reader.js') {
      const version = requestUrl.searchParams.get('v');
      if (version === assetVersions['reader.js']) {
        servedVersioned.push({ name: 'reader.js', body: assetBodies['reader.js'] });
        return send(response, assetBodies['reader.js'], 'text/javascript', 'public, max-age=31536000, immutable');
      }
      return send(response, oldReader, 'text/javascript', 'public, max-age=31536000, immutable');
    }
    if (requestUrl.pathname === '/search.js') {
      const version = requestUrl.searchParams.get('v');
      if (version === assetVersions['search.js']) {
        servedVersioned.push({ name: 'search.js', body: assetBodies['search.js'] });
        return send(response, assetBodies['search.js'], 'text/javascript', 'public, max-age=31536000, immutable');
      }
      return send(response, oldSearch, 'text/javascript', 'public, max-age=31536000, immutable');
    }
    if (requestUrl.pathname === '/search-documents.json') return send(response, fixtureDocuments, 'application/json');
    const fixtures = {
      '/fixture/okf-minisearch.js': fixtureSearch,
      '/fixture/markdown-it.js': fixtureMarkdownIt,
      '/fixture/markdown-it-footnote.js': fixtureFootnote,
      '/fixture/purify.js': fixturePurify,
    };
    if (fixtures[requestUrl.pathname]) return send(response, fixtures[requestUrl.pathname], 'text/javascript');
    response.writeHead(404);
    response.end('not found');
  });

  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}/`;
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    assert.equal(await page.evaluate(() => globalThis.oldAssetLoaded), true);
    assert.ok(requests.some(request => request.path === '/styles.css' && request.search === ''));
    assert.ok(requests.some(request => request.path === '/reader.js' && request.search === ''));
    assert.ok(requests.some(request => request.path === '/search.js' && request.search === ''));

    // A second old document must reuse the cached assets without hitting the server.
    const oldAssetRequests = () => requests.filter(request => assetNames.includes(request.path.slice(1)) && request.search === '').length;
    const primedRequests = oldAssetRequests();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    assert.equal(await page.evaluate(() => globalThis.oldAssetLoaded), true);
    assert.equal(oldAssetRequests(), primedRequests);

    phase = 'new';
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    assert.deepEqual(pageErrors, []);
    assert.equal(await page.evaluate(() => globalThis.oldAssetLoaded), undefined);
    await page.waitForFunction(() => !document.querySelector('.search-submit').disabled);
    await page.locator('#search-input').fill('green');
    await page.locator('#search-input').press('Enter');
    await page.locator('#results-view').waitFor({ state: 'visible' });
    const results = page.locator('.result-link');
    assert.ok(await results.count() > 0 && await results.count() <= 24);
    assert.equal(await results.first().isVisible(), true);
    assert.equal(new URL(page.url()).searchParams.get('q'), 'green');

    assert.deepEqual(servedVersioned.map(asset => asset.name).sort(), assetNames.slice().sort());
    for (const asset of servedVersioned) {
      assert.equal(crypto.createHash('sha256').update(asset.body).digest('hex').slice(0, 12), assetVersions[asset.name]);
    }
    console.log('PASS: immutable unversioned fixture assets were primed, current versioned assets fetched over HTTP, and green results were visible.');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
