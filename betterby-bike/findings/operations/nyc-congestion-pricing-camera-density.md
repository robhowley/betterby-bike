---
type: Finding
title: NYC congestion-pricing camera estimates show lower vehicle density, not measured trip substitution
description: Boundary estimates show fewer cars and trucks and more pedestrians and bicycles per snapshot, with sparse bicycle detections and only nine post-policy weeks.
tags: [congestion pricing, traffic, cycling, walking, measurement, New York City]
sources:
  - id: chikish2026
    resource: /sources/2026-nyc-congestion-pricing-ems.md
    title: "Congestion Pricing and Emergency Medical Service Response: Evidence from New York City"
---

# NYC congestion-pricing camera estimates show lower vehicle density, not measured trip substitution

## In brief

- Near Manhattan's 60th Street pricing boundary, a working paper estimates **20.6% lower passenger-vehicle
  density and 18.1% lower truck density** after January 5, 2025, relative to pre-policy means in a boundary comparison.
- Estimated pedestrian and bicycle density rise **13.5% and 19.8%**, but bicycles average only **0.0054 per
  snapshot** before treatment. These are local camera detections, not citywide trips, mode shares or proven switching.
- Cameras cover only about **nine post-policy weeks**. Uneven coverage, discarded viewpoints, sparse bicycle
  observations and inconsistent reported observation totals limit interpretation.[^chikish2026]

## Measurement and estimates

C2Smart classifies objects in NYC traffic-camera snapshots taken every 15 minutes. It retains each camera's
most common viewpoint and discards other views, leaving some periods without usable observations. Fixed camera
coordinates allow mode-specific network distances to the boundary. The difference-in-discontinuities model
compares changes across the boundary while removing pre-existing spatial differences; standard errors cluster
by sensor. It does not count all road users passing during each fifteen-minute interval.[^chikish2026]

Table 3 reports changes in average visible objects per snapshot:

| Road-user type | Estimated change | Standard error | Pre-treatment mean | Reported percentage |
| --- | --- | --- | --- | --- |
| Passenger vehicles | −0.7846 | 0.0224 | 3.8008 | −20.6% |
| Trucks | −0.0779 | 0.0041 | 0.4308 | −18.1% |
| Pedestrians | +0.4148 | 0.0192 | 3.0752 | +13.5% |
| Bicycles | +0.0011 | 0.0004 | 0.0054 | +19.8% |

Percentages are retained as reported, not recomputed from rounded coefficients. Table 3 marks each estimate
p<0.01 and gives 2,360,613 observations per outcome. Table 2 instead reports 871,357 inside-zone and 348,679
outside-zone camera observations (1,220,036 combined); the difference is not reconciled in the reviewed text.

The paper itself says the very low bicycle density makes cycling difficult to capture meaningfully (p. 16),
yet later interprets the percentage increase as substantial substitution. Sparse detections and no linked traveler
histories make that stronger interpretation uncertain. Simultaneously falling vehicle and rising active-mode
counts do not establish that the same people changed modes or that total travel changed by those percentages.

## Scope and relationships

Vehicle density reductions are larger on weekends than weekdays in Table 4. The authors' spatial description
notes modest traffic increases just north of the boundary, so these estimates are not proof of zero diversion.
Their cumulative camera windows stop at nine weeks, unlike the full-year 2025 EMS follow-up; annual persistence
of the traffic mechanism is not measured here. Camera density is also not a direct measure of speed or delay.

The [ambulance travel Finding](nyc-congestion-pricing-ems-travel.md) is consistent with reduced competing traffic,
not proof that increased cycling improves or impedes emergency travel. Proposed pedestrian/cyclist intersection
friction is an author explanation, not a separately estimated effect. These distinctions extend
[street-outcomes synthesis](/topics/street-redesign-outcomes.md) without treating this pricing study as a lane evaluation.

[^chikish2026]: Chikish et al. (August 2026 revision), printed pp. 10–16, camera methods, viewpoint footnote,
    Table 2 and bicycle-measurement caution; Table 3 pp. 20–21; Table 4 p. 23; footnotes 8 and 12 pp. 19, 29;
    spatial interpretation p. 31. Figures not visually reviewed; no camera data or algorithm review.
