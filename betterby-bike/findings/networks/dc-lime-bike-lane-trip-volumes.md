---
type: Finding
title: DC lane installation was associated with more Lime segment trips
description: A matched difference-in-differences model estimates 1,804 additional summer trips per treated street segment, not net new citywide journeys.
tags: [micromobility, ridership, bike lanes, Washington-DC]
sources:
  - id: lime2024
    resource: /sources/2024-lime-mobility-insights.md
    title: Lessons from Lime Data
---

# DC lane installation was associated with more Lime segment trips

## In brief

- Washington, DC segments receiving painted or protected lanes in 2020–2023 had an estimated **1,804 additional
  June–August Lime trips** relative to matched untreated trends (95% CI **1,134–2,474**), approximately **20 per day**.
- This nonrandomized, combined-facility result measures use of street segments, not net new citywide trips, unique
  riders or a protected-versus-painted effect.[^lime2024]

## Evidence and methods

Lime GPS routes were counted when passing within 10 meters of an OpenStreetMap segment midpoint. The
2019–2024 linear difference-in-differences regression included year, before/after status, treatment group and
their interaction; installation-year observations were excluded. Controls had similar speed limits and lane
counts and were within one mile, but excluded nearby infrastructure to reduce immediate diversion effects.
The main methods specify over a quarter mile from any infrastructure; the appendix describes distance from
the treated lane. Table 1 reports p <0.001 for the interaction estimate.[^lime2024]

Across new-lane segments, reported 2019–2024 volume growth was 726%, versus 357% without lanes. A separate
2020-installation subset grew about 780%, versus 507% on its controls; these are not interchangeable samples.
The report interprets similar early trends in that subset as supporting treatment attribution. About 40% of
segment trip volumes occurred on the roughly 10% of DC segments with lanes.[^lime2024]

## Limits

Year effects account for broad shared changes, not necessarily localized fleet deployment, development or
other concurrent improvements. Permitted citywide shared vehicles increased from 3,600 to nearly 19,000;
these are not Lime-only fleet counts. Matching reduces some differences without proving parallel untreated
trends for every installation cohort. Table 1 does not give sample size or explain repeated-segment error
handling. One trip can contribute to multiple segments, and more use of treated streets can include diversion.
The result cannot quantify other operators' or private bicycles' additional trips.[^lime2024]

## Related

[Bloomington's corridor comparison](bloomington-lime-7-line-volumes.md) lacks the DC matching/model detail.
[Street redesign outcomes](/topics/street-redesign-outcomes.md) compares this with other route-count evidence.

[^lime2024]: Report pp. 9, 11–13, Figures 5–8; appendix pp. 31–33 and Table 1.
