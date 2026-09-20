# Contributing

Start with the [local setup and checks](README.md#run-locally).

## Update site assets

After editing `site/styles.css`, `site/reader.js`, or `site/search.js`, refresh its versioned URL in
`site/index.html` so browsers fetch the new file rather than reuse a cached copy.
Print the replacement URLs from the repository root:

```sh
python3 - <<'PY'
import hashlib
from pathlib import Path
for name in ("styles.css", "reader.js", "search.js"):
    digest = hashlib.sha256((Path("site") / name).read_bytes()).hexdigest()
    print(f"./{name}?v={digest[:12]}")
PY
```

Replace the corresponding `?v=` values in `site/index.html`, then run the Python tests.
`tests/test_site_assets.py` checks that each version matches the file's contents.

## Run browser tests

Use an existing Playwright installation and Chromium browser.
Start the local server as described in the README, then run:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/node_modules/playwright \
CHROME_PATH=/absolute/path/to/chromium \
node tests/check_site_browser.cjs
```

Omit `CHROME_PATH` if Playwright's Chromium is installed. Set `SITE_URL` to test a server other than
`http://127.0.0.1:8000/`.

The test covers search, reader navigation, tables, footnotes, link safety, mobile layout, and startup failures.
Screenshots are written to `/tmp/bbb-real-*.png`.

To check that updated asset URLs bypass cached old files, run the separate fixture:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/node_modules/playwright \
CHROME_PATH=/absolute/path/to/chromium \
node tests/check_site_asset_upgrade.cjs
```

This fixture starts its own temporary server. Browser tests are optional local checks, not part of the Pages workflow.

## Publish the site

The [Pages workflow](.github/workflows/pages.yaml) checks pull requests to `main` without deploying them.
Pushes to `main` also generate the search data and deploy `site/` as the website root.

For initial setup, select **GitHub Actions** under **Settings > Pages > Build and deployment > Source**.
Keep the custom domain `betterby.bike` and HTTPS enforcement enabled.

PDF links in generated data point to `main/raw-sources/` on GitHub. Newly added or moved PDFs become available
at those URLs after merging to `main`.
