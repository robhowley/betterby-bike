# PDF sort integration summary

Completed 2026-09-22T03:14:59.213840Z. All 394 inventory items were independently integrated, reviewed, and accounted for.

## Counts

- News moved: 13
- Research moved: 37
- Other unchanged in source: 344
- Total audit records: 394
- Preexisting destination files snapshotted and unchanged: 36

## Corrections

- `pdf-0234`: other -> research. The rendered Findings page contains NYCDOT comparison data and analysis
  of green-painted versus typical bicycle lanes.
- `pdf-0374`: other -> research. The rendered conclusion page contains research design, difference-in-differences
  methods, controls, and an 18% AADT result for Green Line LRT effects.

Substantive research/news excerpts were retained when rendered evidence supported research or journalism.
Isolated headers, fragments, figures, tables, slides, maps, and unreadable material remained other.
Substantive analytical book excerpts were retained as research where the page itself contained research evidence
and analysis.

## Naming and duplicates

- Accepted files use lowercase hyphenated PDF names. Collision handling appends a short source SHA-256, then the ID if needed.
- Collision resolutions: 0.
- No byte-identical duplicate source hashes were present in the inventory. Every input path was handled individually
  and no destination was overwritten.

## Uncertainty

- Low-confidence records reviewed: `pdf-0301`, `pdf-0303`, `pdf-0358`.
- Medium-confidence records reviewed: 28, mostly isolated excerpts or screenshots with missing publication metadata.
- `pdf-0358` remains unreadable from the available render and stays other. No move or byte-validation issue remains unresolved.

## Durable artifacts

- Audit CSV: `/Users/roberthowley/src/github.com/betterby-bike/raw-sources/pdf-sort-2026-09-22.csv`
- Audit JSON: `/Users/roberthowley/src/github.com/betterby-bike/raw-sources/pdf-sort-2026-09-22.json`
- Original inventory copy: `/Users/roberthowley/src/github.com/betterby-bike/raw-sources/pdf-sort-2026-09-22-original-inventory.json`
- Preexisting destination snapshot: `/Users/roberthowley/src/github.com/betterby-bike/raw-sources/pdf-sort-2026-09-22-preexisting-destination-snapshot.json`
- Planned mapping: `/Users/roberthowley/src/github.com/betterby-bike/raw-sources/pdf-sort-2026-09-22-planned-mapping.json`
- Move journal: `/Users/roberthowley/src/github.com/betterby-bike/raw-sources/pdf-sort-2026-09-22-move-journal.jsonl`
