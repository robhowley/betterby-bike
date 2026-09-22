---
type: Finding
title: Ground-plane blind-zone measurements do not establish crash risk
description: The 17-vehicle visibility study measures static ground occlusion at one driver eyepoint, not whole-person detection, driver response or exposure-adjusted injuries.
tags: [safety, visibility, measurement, causal inference]
sources:
  - id: epstein2025
    resource: /sources/2025-longitudinal-forward-blind-zones.md
    title: "Longitudinal Analysis of Forward Blind Zone Changes in Popular Vehicle Models (1997–2023)"
---

# Limits of ground-plane blind-zone measurements

## In brief

- Epstein et al.'s 2025 study measures how much ground is directly visible from a standardized driver eyepoint
  in 17 vehicles. Hidden ground does not mean an entire pedestrian or cyclist at that location is invisible.[^epstein2025]
- The study links neither vehicles nor blind-zone measurements to crashes or travel exposure. Its observed
  visibility losses cannot quantify injury risk, explain a share of rising fatalities or establish a safety benefit
  from cameras, braking systems or redesigned vehicles.[^epstein2025]

## What was measured

Photographs from a fixed 50th-percentile male eyepoint, with mid-height/mid-track seat positioning, were manually
annotated and projected onto the ground using the IIHS markerless method. Processing removed nonphysical outliers
and overlapping points. Occluded polygons included fully blocked sectors such as A-pillars out to the assessment
radius. The output describes static direct vision in the forward 180°, not three-dimensional human detection,
mirror/camera use, attention or reaction time. Ground areas at 10 m and in the 10–20 m band are distinct measures;
15 m numerical results were not published in the paper.[^epstein2025]

## Uncertainty and causal limits

Only six nameplates, selected model years and one driver height were sampled. Table 1 supplies no confidence
intervals; the authors say the 7–8% sedan changes may lie within measurement error. The paper cites earlier
method validation reporting ground points within 0.5 m of ground truth, but that is secondary evidence, not an
uncertainty interval for these area changes or independently reviewed validation here.[^epstein2025]

The discussion explicitly calls for crash/injury linkage, normalized outcomes and control for changing vehicle
characteristics. Hood height, speed-related characteristics and seating position could covary with visibility.
Moving drivers and road users may enter and leave an occluded area; static and dynamic visibility need further
comparison. Heavy-truck simulator findings cited in the introduction do not establish a light-vehicle crash
response to each square metre of lost visible ground.[^epstein2025]

## Related

- [Measured visibility changes](vehicle-generation-forward-visibility.md): strong near-field losses in two SUVs,
  smaller potentially uncertain sedan changes and mixed outer-band results.
- [Turning-crash denominator](rtz-turning-crash-denominator.md): separate secondary crash evidence also does not
  establish blind zones as the causal mechanism.
- [Source and access scope](/sources/2025-longitudinal-forward-blind-zones.md).
- [Interpreting cycling injury risk](/topics/cycling-injury-risk.md).

[^epstein2025]: Epstein et al., printed pp. 70–72, measurement methods and cited validation; p. 73,
    Table 1; pp. 75–76, small-change caveat, causal/dynamic-visibility discussion and §4.2 future work.
