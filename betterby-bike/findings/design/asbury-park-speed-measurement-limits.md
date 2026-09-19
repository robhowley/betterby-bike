---
type: Finding
title: Asbury Park speed measures and vehicle totals need qualification
description: The pilot's top speed is a within-vehicle percentile, not a traffic percentile; inconsistent sample totals and temporary conditions limit reuse.
tags: [speed, measurement, traffic calming, Asbury Park]
sources:
  - id: younes2024
    resource: /sources/2024-rutgers-bike-lane-car-speed.md
    title: The Traffic Calming Effect of Delineated Bicycle Lanes
---

# Asbury Park speed measures and vehicle totals need qualification

Younes et al.'s March–April 2022 Asbury Park pilot estimates **each vehicle's mean and 95th-percentile speed across
its observed trajectory**. Calling the second measure “maximum” or “top” speed does not make it an absolute maximum,
a percentile across drivers, an impact speed or a whole-trip travel-time measure.[^younes2024]

Video at 12 frames/second was mapped to LiDAR-calibrated 3D trajectories; frame-to-frame distances produced speeds,
smoothed with a Gaussian filter. The algorithm classified a vehicle as stopping/restarting if speed was below
1 m/s (2.24 mph) for three consecutive frames. That threshold is not a verified complete stop or an estimate of
right-on-red compliance. The paper discusses that concern but does not report a compliance effect.[^younes2024]

## Sample totals do not reconcile

- The introduction states **9,575 vehicles**.
- Tables 5–6 each give six directional sample sizes, **2,655 + 1,799 + 2,928 + 787 + 1,406 + 1,029 = 10,604**
  (sum calculated from the published tables). These are the same samples for two outcomes, not 21,208 vehicles.
- Table 1's ten daily counts sum to **12,340** (calculated). The analysis selects six of eleven possible movements
  and excludes unusual traffic, including one closure hour, but does not reconcile all totals, particularly the
  introduction's lower total versus the model sum.[^younes2024]

Use the explicit directional model denominators rather than silently adopting one overall total. The scheduled
four hours on each of ten days amounts to 40 hours; exclusion of the April 2, 8–9 am closure hour explains the
discussion's **39 hours**. This timing difference is explained, unlike the vehicle totals.[^younes2024]

## Treatment and safety interpretation

Cones were sometimes displaced by wind or buses. An endnote describes a day counted as delineated despite missing
turn delineators because Cookman still had cones. On April 23 and 30, signals flashed yellow for Asbury and red
for Cookman/Kingsley; the models include a signal-function indicator. Three no-lane, five delineated and two
paint-only dates do not provide randomized or stable long-term treatment exposure.[^younes2024]

The pilot narrowed lanes and altered turning geometry as well as adding markings/delineators. Unobserved vehicle
type, nearby bicycles and one off-season intersection limit attribution and generalization. The paper reports no
crash/injury-effect estimate and no cost-benefit analysis: its safety and cost-offset claims are interpretations,
not measured outcomes. The separate supplementary Word file and raw trajectories were not reviewed.

## Related

- [Right-turn results](/findings/design/asbury-park-right-turn-speeds.md) and
  [directional comparisons](/findings/design/asbury-park-directional-speed-comparisons.md): table-specific results.
- [Interpreting cycling injury risk](/topics/cycling-injury-risk.md): behavior is not injury incidence.
- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md): distinguish local speeds and journey times.

[^younes2024]: Younes et al. (2024), PDF p. 6, vehicle total; pp. 7–12, Table 1, exclusions, tracking and models;
    pp. 14–18, speed definitions and Tables 3–6; pp. 19–20, discussion/conclusions; p. 26, Table 1 endnotes.
