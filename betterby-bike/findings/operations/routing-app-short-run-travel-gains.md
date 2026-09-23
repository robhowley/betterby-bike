---
type: Finding
title: Marginal app rerouting improved short-run aggregate traffic metrics in ten US cities
description: Nonrandom daily switchbacks estimate about 2% faster targeted segments, 0.35% faster affected segments and 0.69% shorter affected trips.
tags: [congestion, routing, travel time, measurement]
sources:
  - id: arora2026
    resource: /sources/2026-routing-app-congestion-relief.md
    title: Urban congestion relief experiments through routing-app interventions
---

# Marginal app rerouting improved short-run aggregate traffic metrics in ten US cities

## In brief

- Across ten US cities, Google Maps daily treatment/control switchbacks estimate about **2% higher speeds
  on targeted congested segments**, but only **0.35% across all affected segments** (0.50% at peaks).
- A separate, shorter trip analysis estimates **0.69% less aggregate travel time** for observed trips using
  affected segments. Under 2% of observed trips received altered route recommendations.
- Assignment was nonrandom and estimates are model-dependent, short-run averages, not evidence that every
  road improved, induced demand was prevented or cycling benefited.[^arora2026]

## Intervention and measures

Approximately 100 segments per city were selected for congestion or bottlenecks. Added route-ranking costs
were active under congested conditions and capped to keep alternate predicted times within a few percentage
points of the baseline. Rerouted users' predicted alternatives averaged 30 seconds slower, distinct from
observed aggregate network savings. The comparator is the same geography with the intervention off, not
road widening or bike-lane construction.

Segment data span six months of weekdays, 07:00–20:00. Affected segments include routes diverted **from and
onto**, reportedly covering about 80% of traffic in each city. Speeds are total distance divided by total
travel time within segment sets, not simple averages of road speeds. Hierarchical Bayesian estimates pool
information across cities and hours; the posterior probability of a positive aggregate affected-segment
speed effect is 99.8%. Targeted gains vary, with medians of 3.30% in Atlanta and 4.56% in Los Angeles.

The trip analysis, added later, uses only the final two months owing to data retention limits and weights
trips equally. It addresses changing segment composition but is not the same measure or observation window
as segment speeds. The reported 0.69% is the cross-city median aggregate reduction, not a guaranteed
individual saving.[^arora2026]

## Limits and interpretation

Nonrandom assignment, app-user coverage, low-density-day exclusions and partial pooling qualify attribution
and transfer. No city-specific numerical uncertainty intervals are extracted from the plotted distributions;
the separate numerical supplement was not read. Confidential underlying data prevent independent assessment
here. The Discussion's separate 0.25%-of-trip-length savings statement is not reconciled with the 0.69%
trip result in the reviewed material.

The authors identify long-term induced demand as an open question. Network averages do not measure safety,
neighborhood traffic burdens, access or modal shift. The result supports testing small routing changes,
not promising durable congestion relief or assigning these effects to street redesigns.

## Related

- [Emissions uncertainty](routing-app-emissions-uncertainty.md): modeled environmental outcomes from the same
  experiment, not independent confirmation.
- [Street redesign outcomes](/topics/street-redesign-outcomes.md): distinguishes corridor, trip and broader welfare measures.

[^arora2026]: Arora et al. (2026), pp. 592–593, data, Table 1 and speed/trip results; p. 594, Figure 2;
    pp. 595–597, induced-demand discussion, route-cost caps and statistical methods; reporting summary p. 2.
