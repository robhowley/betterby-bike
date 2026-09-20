// Requires an existing Playwright installation and Chromium, no project npm install.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const url = process.env.SITE_URL || 'http://127.0.0.1:8000/';
(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    let payloads = 0;
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => { if (request.url().endsWith('/search-documents.json')) payloads++; });
    await page.goto(new URL('#search-results', url).href);
    await page.waitForFunction(() => !document.querySelector('.search-submit').disabled);
    assert.equal(await page.locator('#results-view').isVisible(), false);
    await page.locator('#search-input').fill('green');
    await page.locator('#search-input').press('Enter');
    const results = page.locator('.result-link');
    const resultCount = await results.count();
    assert.ok(resultCount > 0 && resultCount <= 24);
    assert.equal(await page.locator('#results-view').isVisible(), true);
    assert.equal(await results.first().isVisible(), true);
    const firstResultBounds = await results.first().boundingBox();
    assert.ok(firstResultBounds && firstResultBounds.width > 0 && firstResultBounds.height > 0);
    const resultUrl = new URL(page.url());
    assert.equal(resultUrl.searchParams.get('q'), 'green');
    assert.equal(resultUrl.hash, '');
    assert.equal(await page.locator('.skip-link').evaluate(element => getComputedStyle(element).position), 'absolute');
    const paths = await results.evaluateAll(links => links.map(link => link.dataset.document));
    assert.equal(new Set(paths).size, paths.length);
    assert.doesNotMatch((await page.locator('.result-snippet').allTextContents()).join(' '), /\[\^|https?:\/\/|\.md\b|\*\*/);
    await page.screenshot({ path: '/tmp/bbb-real-results-desktop.png', fullPage: true });
    await results.first().focus();
    await results.first().press('Enter');
    await page.locator('#reading-view').waitFor({ state: 'visible' });
    assert.ok(await page.locator('#reading-content h1').count());
    const docUrl = page.url();
    await page.screenshot({ path: '/tmp/bbb-real-reader-desktop.png', fullPage: true });
    await page.goBack();
    assert.equal(await page.locator('#reading-view').isVisible(), false);
    assert.equal(await page.locator('.result-link:focus').count(), 1);
    await page.goForward();
    assert.equal(await page.locator('#reading-view').isVisible(), true);
    await page.goBack();
    await results.nth(5).scrollIntoViewIfNeeded();
    const savedScroll = await page.evaluate(() => scrollY);
    await results.nth(5).click();
    await page.locator('#back-to-results').click();
    assert.equal(await page.locator('.result-link:focus').getAttribute('data-document'), paths[5]);
    assert.ok(Math.abs(await page.evaluate(() => scrollY) - savedScroll) < 2);
    await page.goBack();
    await page.goBack();
    await results.first().click();
    await page.reload();
    await page.locator('#reading-view').waitFor({ state: 'visible' });
    assert.equal(page.url(), docUrl);
    await page.goto(url + '?q=montreal&doc=findings%2Fsafety%2Fmontreal-cycle-track-relative-injury-risk.md');
    await page.locator('#reading-view').waitFor({ state: 'visible' });
    assert.ok(await page.locator('#reading-content table').count());
    const footnote = page.locator('.footnote-ref a').first();
    const footnoteHref = await footnote.getAttribute('href');
    assert.ok(await page.locator(`[id="${footnoteHref.slice(1)}"]`).count());
    await footnote.click();
    assert.ok(page.url().includes('#user-content-fn'));
    await page.locator('.footnote-backref').first().click();
    await page.locator('#reading-content a[data-document^="sources/"]').first().click();
    assert.ok(new URL(page.url()).searchParams.get('doc').startsWith('sources/'));
    assert.ok(await page.locator('#reading-content a[href^="https://"]').count());
    const externalPdfLinks = page.locator('#reading-content a[href$=".pdf"]');
    assert.ok(await externalPdfLinks.count() > 0);
    assert.ok(await externalPdfLinks.evaluateAll(links => links.every(link => link.href.startsWith('https://'))));
    await page.goto(url + '?doc=sources/protected-bike-lanes-mean-business.md');
    await page.locator('#reading-view').waitFor({ state: 'visible' });
    const protectedBikeLanesPdf = page.locator('#reading-content a[href^="https://raw.githubusercontent.com/robhowley/betterby-bike/main/raw-sources/"]');
    assert.equal(await protectedBikeLanesPdf.count(), 1);
    assert.equal(await protectedBikeLanesPdf.first().textContent(), 'Original report (PDF)');
    assert.doesNotMatch(await page.locator('#reading-content').textContent(), /local PDF unavailable/);
    await page.goto(url + '?doc=sources/2011-montreal-cycle-track-injury-risk.md');
    await page.locator('#reading-view').waitFor({ state: 'visible' });
    await page.setViewportSize({ width: 390, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: '/tmp/bbb-real-reader-mobile.png', fullPage: true });
    await page.locator('#back-to-results').click();
    await page.locator('#search-input').fill('xylophone');
    await page.locator('#search-input').press('Enter');
    assert.match(await page.locator('#search-status').textContent(), /No research documents matched/);
    await page.locator('#search-clear').click();
    assert.equal(new URL(page.url()).search, '');
    assert.equal(await page.locator('#search-input').inputValue(), '');
    await page.goto(url + '?q=cycling&doc=missing.md');
    await page.waitForFunction(() => document.querySelector('#search-status').textContent.includes('not available'));
    assert.equal(await page.locator('#reading-view').isVisible(), false);
    assert.deepEqual(errors, []);
    // Each full page load requests the payload once; in-page navigation does not refetch.
    assert.equal(payloads, 6);
    for (const [name, response, message] of [
      ['empty', { json: [] }, 'No research documents are available'],
      ['invalid', { json: {} }, 'Search is unavailable'],
      ['HTTP failure', { status: 503, body: 'unavailable' }, 'Search is unavailable'],
    ]) {
      await page.route('**/search-documents.json', route => route.fulfill(response));
      await page.goto(url);
      await page.waitForFunction(text => document.querySelector('#search-status').textContent.includes(text), message);
      assert.equal(await page.locator('.result-link').count(), 0, name);
      await page.unroute('**/search-documents.json');
    }
    await page.goto(url);
    await page.waitForFunction(() => !document.querySelector('.search-submit').disabled);
    const safety = await page.evaluate(() => {
      const source = '---\ntitle: Hidden metadata\n---\n# Safe heading\n\nText **with emphasis**.[^note]\n\n[Root](/topics/test.md#safe-heading) [Relative](../topics/test.md) [Bare](next.md) [PDF](../../raw-sources/test.pdf) [Unknown](missing.md) [Protocol relative](//evil.test/path)\n\n![Image](https://evil.test/image.png)\n\n<script>alert(1)</script>\n\n[^note]: Footnote text.';
      const docs = new Map([['topics/test.md', source], ['sources/next.md', source]]);
      const fragment = BikeReader.render(source, 'sources/current.md', docs, path => '?doc=' + path);
      const host = document.createElement('div'); host.append(fragment);
      return { links: host.querySelectorAll('a[data-document]').length, unsafe: host.querySelectorAll('img,script,[name],a[href^="//"]').length, pdf: host.textContent.includes('local PDF unavailable'), metadata: host.textContent.includes('Hidden metadata'), footnote: Boolean(host.querySelector('#user-content-fn1')), heading: Boolean(host.querySelector('#reader-heading-safe-heading')) };
    });
    assert.deepEqual(safety, { links: 3, unsafe: 0, pdf: true, metadata: false, footnote: true, heading: true });
    console.log('PASS: search, clean excerpts, keyboard open, history, reload, tables, footnotes, root/relative/bare links, external links, mobile, clear, missing document, startup failures and renderer safety.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
