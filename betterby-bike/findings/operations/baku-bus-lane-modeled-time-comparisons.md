---
type: Finding
title: Baku-informed bus-lane examples give mixed modeled travel-time comparisons
description: >-
  Two illustrative two-lane scenarios favor and disfavor reserving a bus lane, without measuring installation effects or
  establishing transferable thresholds.
tags: [bus lanes, simulation, travel time]
sources:
  - id: dashdamirov2026
    resource: /sources/2026-bus-lane-implementation-expediency-different-lane-numbers.md
    title: Evaluation of Bus Lane Implementation Expediency on Streets with Different Lane Numbers
---

# Mixed modeled bus-lane travel-time comparisons

## In brief

- A Baku-informed two-lane model reports aggregate time falling from **58.6 to 57.909 hours** in one
  bus-lane scenario but rising from **36.4 to 39.7 hours** in another, relative to mixed traffic.
- These are illustrative simulation-based calculations, not observed installation effects. The measure mixes
  bus passenger-hours and other vehicle-hours, and the adverse example extrapolates below the tested bus frequency.

## Scenarios and comparison

Dashdamirov and Verdiyev fit speed equations to PTV VISSIM simulations, then compare buses sharing two lanes
with one lane reserved for buses and one remaining for other vehicles. For the 800 m modeled section, the
worked examples use the following hourly inputs and reported totals:[^dashdamirov2026]

| Scenario | Bus passengers/hour | Other vehicles/hour | Buses/hour | Mixed traffic total | Bus lane total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Favorable | 2,000 | 1,800 | 90 | 58.6 h | 57.909 h |
| Adverse | 1,350 | 1,200 | 60 | 36.4 h | 39.7 h |

The totals sum time over the hourly traffic cohort; they are not each traveler's journey duration or hours
of delay above free-flow travel. All three inputs change between scenarios, so the contrast does not isolate
a bus-frequency or occupancy threshold. The authors propose hourly screening and consideration of temporary
lanes when the all-day time criterion fails. They do not demonstrate the performance of those alternatives.

## Limits

The simulations specify 80–240 buses/hour, making the 60-bus example an extrapolation. Section 3 refers to
real-condition inputs, but section 7 supplies no identifiable street, observation date or observed outcome
comparison. No interval quantifies uncertainty around the small favorable difference. Recomputing the printed
equations at 0.8 km gives 58.597 to 57.920 hours and 36.396 to 39.713 hours, approximately reproducing the
reported direction but not the first after value exactly. These ingestion checks are not new traffic evidence.

[Accounting and model limitations](baku-bus-lane-model-measurement-limits.md) prevent treating these totals as
validated all-person delay or a general bus-lane decision rule. There is no measured cycling, safety, emissions
or citywide congestion effect.

## Related

- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md): keep modeled trade-offs separate from
  observed corridor changes.

[^dashdamirov2026]: D6, simulation conditions; D8–D9, Equations 3 and 5–14; D9–D10, discussion and conclusion.
