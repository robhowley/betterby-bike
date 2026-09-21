# Life is better by bike

Simple website providing a curated and summarized set of research helpful to bike advocates.

Live site: [betterby.bike](https://betterby.bike)

## Run locally

From the repository root, with Python 3 installed:

```sh
python3 scripts/build-search-documents.py
python3 -m http.server 8000 --bind 127.0.0.1 --directory site
```

Open <http://127.0.0.1:8000>. Search and reading require an internet connection to load browser libraries.
After changing Markdown under `betterby-bike/`, rerun the generator and reload the page.
The generated `site/search-documents.json` is ignored; do not edit it directly.

## Check changes

With Python 3 and Node.js installed:

```sh
python3 -m unittest discover -s tests -p 'test_*.py'
node --check site/search.js
node --check site/reader.js
```

See [Contributing](CONTRIBUTING.md) for browser tests, asset updates, and publishing.

## Commit checks

Install [pre-commit](https://pre-commit.com/#install), then run once per clone:

```sh
pre-commit install
pre-commit run --all-files
```

Commits check staged files for Markdown lint, trailing whitespace and final newlines.
If a hook fixes files, review and stage those changes before retrying the commit.
