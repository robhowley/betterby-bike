# Life is better by bike

Simple website providing a curated and summarized set of research helpful to bike advocates.

Live site: [betterby.bike](https://betterby.bike)

## Commit checks

Install [pre-commit](https://pre-commit.com/#install), then run once per clone:

```sh
pre-commit install
pre-commit run --all-files
```

Commits check staged files for Markdown lint, trailing whitespace and final newlines.
If a hook fixes files, review and stage those changes before retrying the commit.
