---
type: Finding
title: Cedar Rapids response rates use inferred routes and alarm-to-arrival times
description: Whole-trip alarm-to-arrival rates, assumed station origins and inconsistent printed totals limit interpretation of the Cedar Rapids road-diet analysis.
tags: [road diets, emergency response, measurement, Iowa]
sources:
  - id: corcoran2024
    resource: /sources/2024-07-road-diets-ems.md
    title: Impact of 4-to-3 lane conversions on emergency response
---

# Cedar Rapids response rates use inferred routes and alarm-to-arrival times

## In brief

- Cedar Rapids' 2014–2020 analysis cannot determine driving delay on converted streets. It measures alarm-to-arrival
  minutes per inferred kilometre, assumes station origins and includes time before departure.[^corcoran2024]
- Converted streets made up about one-fifth of inferred trip distance. The [null adjusted result](cedar-rapids-road-diet-response-rates.md)
  for whole trips could miss segment delays and does not prove no emergency trip was delayed.[^corcoran2024]
- Printed trip totals and confidence bounds conflict. Keep table-specific attribution rather than treating one
  version as independently verified.[^corcoran2024]

## What was measured and assumed

- **Origins and routes:** records lacked actual trip origins and paths. Researchers assumed departure from the assigned
  fire station and travel on its shortest route to the incident. This determines both conversion exposure and distance.
- **Timing:** analyzed response times ranged from two to 21 minutes. The fire department advised that shorter trips
  typically originated in the field and longer times likely reflected errors. Alarm-to-arrival includes pre-departure
  activity; the department considered alarm-to-dispatch variation negligible, but driving time was not independently
  available.
- **Exposure:** only inferred routes traveling along converted sites were included, excluding trips merely crossing
  them and trips in the conversion calendar year. Converted segments averaged **20.77% of before-trip distance and
  19.99% after** (Table 6), so whole-trip rates need not reveal segment-specific delay.
- **Comparison:** adequate records were available for only one of ten survey cities. Four sites remained, with uneven
  before/after observations and no non-converted road controls. Missing granular traffic and land-use changes leave
  possible time-varying confounding; the model is not a controlled causal or equivalence test.[^corcoran2024]

## Printed discrepancies remain unresolved

| Item | Conflicting source statements | Treatment in this bundle |
| --- | --- | --- |
| Survey sample | Abstract: 170; section 2.2.1 and Tables 2–3: 167 | Use 167 eligible responses, identifying the discrepancy. |
| Incident sample | Section 3.2.1: 3,872; Table 6: 3,867, comprising 1,202 before and 2,665 after | Attribute counts to Table 6, not an independently verified model sample. |
| Before/after Wald 95% CI | Table 7: 0.992–1.056; p. 8 prose: 0.922–1.056 | Attribute 0.992–1.056 to Table 7; both include one. |

Table 6 labels raw mean response rates **5.35 before and 5.43 after min/km**; Table 7 instead estimates an adjusted
before/after ratio of 1.024. Raw means, adjusted rates and their ratios are different quantities. Neither should be
converted into a seconds-per-call saving or reversed without preserving the comparator and units.[^corcoran2024]

The confidential incident dataset was not available for independent reanalysis. The reporting differences cannot be
resolved by choosing the value most favorable to a road-diet argument. Separate survey denominator issues are retained
in [Iowa responder perceptions](iowa-road-diet-responder-perceptions.md).

## Related

- [Source summary](/sources/2024-07-road-diets-ems.md).
- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md): contrasts these quantitative records
  with FHWA's responder accounts and ordinary traffic measurements.

[^corcoran2024]: Corcoran et al. (2024), p. 1 abstract; p. 3 section 2.2.1 and Tables 2–3;
    pp. 5–7, sections 3.1–3.2 and Tables 6–7; p. 8, model interpretation and limitations; p. 9, data availability.
