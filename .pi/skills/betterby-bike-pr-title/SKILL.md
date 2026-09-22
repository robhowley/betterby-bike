---
name: betterby-bike-pr-title
description: >-
  Choose release-aware Conventional Commit titles for Better by Bike pull requests. Use whenever creating,
  opening, renaming, or preparing to merge a PR in this repository, including requests to release the bundle.
---

# Better by Bike PR titles

Use `<type>: <short description>` for PR titles. Describe the substantive change, not the workflow used to make it.
An optional scope is allowed, for example `feat(bundle): add pedestrian safety evidence`; it is not required.

## Choose the type

- `feat:` for new bundle knowledge: ingested publications, new Findings, or substantive new Topic coverage.
- `fix:` for corrections to existing bundle claims, citations, links, or other defects.
- `docs:` for repository documentation or skill instructions without a substantive bundle change.
- `chore:`, `ci:`, `test:`, or `refactor:` for maintenance of that kind without new bundle knowledge or a bundle fix.

Do not classify an ingestion PR as `docs:` merely because the bundle is Markdown. The knowledge is the product.
For mixed changes, title the PR after its substantive bundle addition or correction, not incidental formatting.
Do not add `feat:` solely to force a release for unrelated maintenance. Reserve `!` or `BREAKING CHANGE:` for an
actual breaking change, not a large ingestion batch.

Examples:

- New papers and findings: `feat: ingest remaining raw-source publications into the bundle`
- Corrected injury-rate denominator: `fix: correct cycling injury exposure denominator`
- Project skill only: `docs: document release-aware PR titles`
- Lint workflow only: `ci: align Markdown lint checks`

## Preserve the release signal

Read `.github/workflows/release.yml` from the repository root before promising release behavior. It currently runs
Release Please on pushes to `main`, with `release-type: simple` and `path: betterby-bike`.

Release Please reads merged commit messages, not the PR title by itself. Prefer squash merging and preserve the
Conventional Commit PR title as the squash commit subject. If rebase merging instead, the relevant individual
commits must carry the release signal; renaming the PR will not rewrite them.

For commits included in the bundle release, `feat:` normally requests a minor release and `fix:` a patch release.
Other types above do not normally trigger a release. A scope does not replace the configured path selection:
changes outside `betterby-bike/` alone should not be promised a bundle release.

Creating or renaming a PR does not publish an archive. After the change reaches `main`, Release Please creates or
updates a release PR. Merging that release PR creates the release, and the workflow uploads the bundle archive.

When opening or renaming a PR, apply the chosen title and confirm it with `gh pr view --json title,url` for the
intended PR. Do not merge, retitle another PR, or edit release configuration unless the user requested it.
