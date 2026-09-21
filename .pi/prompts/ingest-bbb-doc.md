---
description: Ingest a document into the Better by Bike OKF bundle, commit, and push
argument-hint: "<relative-document-path>"
---
# Ingest a Better by Bike document

Ingest the document at `$1` (relative to the project root) into the Better by Bike OKF bundle
using the betterby-bike-ingest skill. If no path is provided, ask for one.

Validate the changes, then commit only this ingestion's changes and push.
Use a commit message like `Ingest <short colloquial reference to the document>`.
