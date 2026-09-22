---
type: Finding
title: The Baku bus-lane model does not establish all-person delay or validated speed predictions
description: Mixed passenger and vehicle weighting, extrapolation and unresolved speed equations constrain reuse of a simulation-based bus-lane screening method.
tags: [bus lanes, simulation, measurement, travel time]
sources:
  - id: dashdamirov2026
    resource: /sources/2026-bus-lane-implementation-expediency-different-lane-numbers.md
    title: Evaluation of Bus Lane Implementation Expediency on Streets with Different Lane Numbers
---

# Limits of the Baku bus-lane time criterion

## In brief

- The Baku-informed model adds **bus passenger-hours to other vehicle-hours**, without a car-occupancy factor;
  its claimed total for all road users is not a complete person-delay measure.
- Its speed regressions fit simulations, not independently validated post-installation outcomes. Above-limit
  speeds, an out-of-range example and conflicting equation trends prevent unqualified reuse as a planning rule.

## What the time calculation counts

Equations 5–8 weight segment length divided by speed by bus passenger volume and other vehicle volume.
The latter receives weight one per vehicle, implicitly equivalent to one person per vehicle if interpreted
as person-time. Car passengers are not separately counted. Despite the term “time loss,” no free-flow
travel-time baseline is subtracted. Comparing scenarios can still compare travel-time totals under those
weights, but cannot establish absolute congestion delay or fully occupancy-weighted benefits.[^dashdamirov2026]

The authors acknowledge that a time-only criterion excludes emissions, safety and reliability. Their assertions
that bus lanes improve safety and reliability are not tested outcomes. Fixed scenario demands also do not
estimate mode shift or diversion to neighboring roads.

## Equation and transfer limits

- Section 5 specifies 3.5 m lanes, a 50 km/h permitted speed, 800 m length, 800–2,400 vehicles/hour and
  80–240 buses/hour. Nevertheless, the paper reports dedicated-bus speeds up to 53.8 km/h, and its printed
  equations produce speeds above 50 km/h in the worked examples. The speed-limit discrepancy is unexplained.
- Table 5's printed four- and five-lane equations increase vehicle speed with volume over the positive input
  range, rather than showing the general speed decline described in the text. They must not be silently
  re-signed or treated as universal congestion relationships.
- The adverse two-lane example uses 60 buses/hour, below the stated simulation range. Good regression fit
  does not justify that extrapolation. Mixed-flow R² ranges from 0.576 to 0.752; dedicated-bus and remaining-car
  fits have higher R², but these measure agreement with generated data, not real-world predictive validity.
- The paper mentions hourly real-world observations but does not report observation dates, sample counts,
  simulation replication counts or independent calibration/validation errors. It supplies no uncertainty
  interval for the net scenario differences.[^dashdamirov2026]

These limits qualify both favorable and adverse [worked examples](baku-bus-lane-modeled-time-comparisons.md).
They do not demonstrate that bus lanes generally help or harm traffic, nor that an alternative lane arrangement
would perform better.

## Related

- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md).
- [Congestion measurement limits](vtpi-congestion-measurement-limits.md): regional intensity and commuter burden
  likewise answer different questions, but come from a separate synthesis, not this model.

[^dashdamirov2026]: D4–D6, methods and simulation inputs; D7–D8, Tables 4–5 and Equation 3;
    D8–D10, §§6–8 and Equations 5–14.
