---
name: okf-structure
description: Read and edit OKF bundles using the standard document structure, frontmatter fields, source citations, links, indexes, and logs.
---

# OKF structure

Format reference for OKF v0.2. Bundle-specific skills define document
types, content requirements, and maintenance workflows.

## Authoring rules

Read the bundle's index and representative documents before editing.
Follow its established conventions.

Use optional fields when useful, not as a completion checklist.
Never invent identities, timestamps, source details, or verification.
Preserve custom fields and unrelated content. Do not add administrative
files, validation steps, or schema migrations unless requested.

## Documents

A bundle is a directory tree. Folders organize documents; they do not
determine types.

Except for reserved index.md and log.md files, every Markdown file is
a concept: UTF-8 Markdown with YAML frontmatter delimited by ---.
Body sections are unrestricted.

Keep skills and other non-concept Markdown outside the bundle.

## Concept frontmatter

Only type is universally required. Additional producer-defined fields
are allowed; this is not a closed allowlist.

| Field | Shape | Meaning |
|---|---|---|
| type | Non-empty string | Producer-defined concept kind |
| title | String | Display title |
| description | String | One-sentence summary |
| resource | URI or path | Asset described |
| tags | String list | Cross-cutting categories |
| sources | Source-entry list | Materials used |
| generated | {by, at?} | Content production |
| verified | {by, at} list | Verification events; one mapping also accepted |
| status | draft / stable / deprecated | Lifecycle; omitted means stable |
| stale_after | Datetime | Stale at or after this instant |
| usage_window | {from, to} | Shared interval for source usage counts |

### Nested fields

The following is shape notation, not literal YAML. ? means optional.

    SourceEntry {
      resource: URI | path | scope-description
      id?: string
      title?: string
      author?: Actor
      usage_count?: count
      last_modified?: Datetime
      usage_window?: Window
    }

    generated { by: Actor, at?: Datetime }
    verified  [{ by: Actor, at: Datetime }]
    Window    { from: Datetime, to: Datetime }

Actor: <producer>/<version>, human:<id>, or process:<id>.
Datetime: ISO 8601 with an explicit offset, such as
2026-09-18T14:00:00Z.

generated.at describes the last meaningful content change;
sources[].last_modified describes the source's change.
A source-level usage_window overrides the shared interval.

Do not confuse resource (what a concept describes) with sources
(what supports it). The sources field does not require a Source
document type.

## Claim citations

Match each [^id] footnote to sources[].id. Keep IDs stable.
Use footnote text for useful locators.

Example only:

```markdown
---
type: Reference
title: Example concept
sources:
  - id: report
    resource: https://example.org/report
    title: Example report
---

A supported claim.[^report]

[^report]: Example report, section 2.
```

Cite material actually reviewed. Keep contextual qualifications next
to the claim rather than hiding them in provenance fields.

## Links and identity

Use standard Markdown links:
- /folder/concept.md resolves from the bundle root.
- ./concept.md and ../concept.md resolve from the current file.

Path-valued frontmatter also accepts URLs and these path forms.
A concept's ID is its bundle-relative path without .md.

Preserve existing paths. When a move is explicitly requested, update
affected links and references. Explain relationships in surrounding
prose; a link alone does not explain their meaning.

## index.md

Optional at any directory level. List linked documents and
subdirectories with short descriptions, grouped under headings.

No frontmatter except optional okf_version: "0.2" in the root index.

When updating navigation, follow existing grouping and reuse document
descriptions where helpful. Use descriptive links and concise
explanations that help readers choose what to read next. Keep the
index navigational; leave subject synthesis to the linked documents.

## log.md

Optional at any directory level. Group changes under YYYY-MM-DD
headings, newest first. Reuse the date heading when it already exists.

Explain what changed in the knowledge: new material, new evidence,
revised conclusions, or corrected claims. Link to the affected
documents. Describe the substantive change, not every file edit.

Preserve historical entries. Formatting-only and navigation-only
edits do not need an entry. No substantive change means no entry.

## Specialized concepts and reference

Attested Computation has additional fields: runtime, parameters,
computation, executor, and attester. Consult section 10 before editing
that contract; do not infer it from this general reference.

Specification:
https://raw.githubusercontent.com/GoogleCloudPlatform/open-knowledge-format/main/SPEC.md
