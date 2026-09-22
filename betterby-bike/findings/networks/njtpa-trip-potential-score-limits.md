---
type: Finding
title: NJTPA trip-potential scores rank planning conditions, not predicted trips
description: >-
  The June 2023 revised analysis maps relative spatial indicators; its 0–100 scores and broader bicycle catchments do
  not measure travel, route usability or equitable benefits.
tags: [trip potential, measurement, planning, New Jersey, access]
sources:
  - id: njtpa
    resource: /sources/2023-njtpa-trip-potential-analysis.md
    title: NJTPA Trip Potential Analysis, final revised June 2023
---

# NJTPA trip-potential scores rank planning conditions, not predicted trips

## In brief

- NJTPA's June 2023 revised analysis assigns **0–100 walking and cycling potential scores** to 500-foot hexagons
  using weighted land-use and socioeconomic indicators, including 2019 population and jobs. These are not trip
  counts, mode shares or probabilities, and the memo reports no validation against observed trips.
- Phillipsburg falls in the **90–100 band for both modes**, but its bicycle high-score area extends farther than
  its pedestrian area because bicycle inputs generally use a **one-mile buffer versus a quarter mile** for walking.
  This modeled difference does not show higher observed cycling or a more usable bicycle network.[^njtpa]

## What the scores describe

The broad mapped pattern favors the urbanized eastern region. Much of Sussex, Warren and Hunterdon counties has
low pedestrian potential, often below 10, but towns such as Newton, Hackettstown and Phillipsburg score higher
than their surroundings. County-level generalizations therefore miss smaller centers. Figures 1–3 illustrate
composite potential, not counts of people willing or able to make trips.[^njtpa]

Table 1 weights pedestrian population, employment, intersections, poverty, no-vehicle households, transit and
land-use mix at 30, 20, 10, 10, 10, 10 and 20. Bicycle weights are 30, 20, 0, 15, 15, 10 and 20.
Both total 110, not 100; the memo calls the composite a weighted average. Its p. 7 claim of identical variables
and weights across modes is inconsistent with the table. Bicycle transit also excludes local bus stops, unlike
pedestrian transit. The table specifies only the pedestrian transit search distance, although the narrative
generally describes one-mile bicycle searches.[^njtpa]

Land-use mix is the balance among five percentile-scaled categories, not absolute destination abundance.
Equal nonzero percentiles across retail, large employment locations, community health/welfare, residential area
and parks receive the maximum mix score even if those percentiles are low. Population and employment contribute
separately to the overall score. The printed entropy equation is normalized, while the prose describes a 0–100
scale without explicitly showing the multiplication by 100.[^njtpa]

## What cannot be inferred

The memo does not report fitted trip-generation rates, observed-use calibration, prediction error or sensitivity
to alternative weights. The 500-foot output grid does not make block-group source data equally fine-grained:
population, jobs and household inputs are proportionally allocated using overlaps with buffers. The scores should
not be converted into expected daily trips or interpreted as a measured increase caused by infrastructure.

Poverty and lack of vehicle access increase the score by construction. They do not demonstrate safe routes,
satisfied travel preferences or equitable distribution of investment benefits. Buffer proximity does not establish
network accessibility. The project team separately compared potential with barriers, safety screening and
environmental-justice data as a starting point for a conceptual network, without evaluating delivered outcomes.[^njtpa]

## Related

- [Who walks and bikes to work?](/topics/active-commuting-and-access.md): distinguishes observed travel, potential and
  usable access.
- [Washington mileage-method comparison](king-county-travel-mile-estimation.md): attempted travel-volume estimation
  differs from this spatial planning score.
- [Los Angeles library proximity](/findings/access/los-angeles-library-protected-bike-proximity.md): another proximity
  measure that cannot establish connected routes.

[^njtpa]: [Source summary](/sources/2023-njtpa-trip-potential-analysis.md), PDF pp. 1–4, Tables 1–2 and equations 1–2;
    pp. 4–8, spatial results and Figures 1–3; p. 9, Next Steps. Composite maps were visually reviewed; appendix variable maps were not.
