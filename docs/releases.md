# Bundle releases

Pushes to `main` run release-please for `betterby-bike/`. It opens a release pull request, then a human merge
creates the tag and GitHub release. The same run checks out the returned tag, archives `betterby-bike/` and all of
`raw-sources/`, and uploads the tag-matched `.tar.gz` asset.

## Commit and path rules

- Use Conventional Commit subjects. `feat(bundle):` and `fix(bundle):` are useful conventions for bundle changes.
- The configured path, not the commit scope, controls tracking. Changes under `betterby-bike/` are considered; a
  website-only change is ignored even when its subject uses `feat` or `fix`.
- A raw-PDF-only change under `raw-sources/` does not trigger this package. Change the related source record under
  `betterby-bike/` in the same commit when the raw source needs a release.
- The initial workflow/bootstrap commit needs a release-please-recognized `feat` or `fix` affecting `betterby-bike/`,
  or a later bundle-scoped change must provide that first release input. `version.txt` starts at `0.0.0`; the simple
  strategy's first release defaults to `1.0.0` and creates or updates `betterby-bike/CHANGELOG.md`.

## Recovery

If a release exists without its asset, recreate the archive from its tag and upload it with replacement enabled:

```sh
TAG=v1.0.0
git archive --format=tar.gz --output="betterby-bike-${TAG}.tar.gz" "$TAG" betterby-bike raw-sources
gh release upload "$TAG" "betterby-bike-${TAG}.tar.gz" --clobber
```

The archive keeps both top-level directories, so links such as `../../raw-sources/...` resolve after extraction.
