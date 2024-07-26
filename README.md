# Life is better by bike

Simple website providing a curated and summarized set of research helpful to bike advocates.

Live site: [betterby.bike](https://betterby.bike)

## Stack

Runs on [git pages](https://pages.github.com/) using [jekyll](https://jekyllrb.com/docs/github-pages/) for styling. Keeping things as lightweight as possible.

## Local dev

Can run locally using docker compose. Run

```
docker compose up
```

and go to [localhost:4000](http://localhost:4000/). Changes to the _content_ will live reload.

_Note_: changes to the `_config.yml`, e.g. theme, or the `Gemfile` will require restarting the container.
