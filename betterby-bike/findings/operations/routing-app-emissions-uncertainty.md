---
type: Finding
title: Routing experiment emissions savings are modeled and uncertain for individual cities
description: Annual CO2e-change medians favor savings in ten cities, but every city's reported 5th–95th percentile interval spans zero.
tags: [congestion, routing, emissions, measurement]
sources:
  - id: arora2026
    resource: /sources/2026-routing-app-congestion-relief.md
    title: Urban congestion relief experiments through routing-app interventions
---

# Routing experiment emissions savings are modeled and uncertain for individual cities

## In brief

- A ten-city Google Maps routing experiment projects median annual CO2e reductions of roughly **504–4,511
  tons per city**, but **all ten city-specific 5th–95th percentile ranges include increased emissions**.
- These are fuel-model estimates scaled to annual traffic, not measured emissions or demonstrated yearly
  savings. Aggregate evidence favoring lower fuel consumption does not remove city-specific uncertainty.[^arora2026]

## Model and reported uncertainty

The experiment models fuel consumption from segment conditions using a machine-learning approximation
based on NREL's physics-based FASTSim approach, similar to RouteE. Inputs include speeds, grade and segment
length; CO2e is proportional to modeled fuel use. Targeted segments show median fuel-consumption-rate
reductions of 0.5%–1.0%. Across the broader affected set, the reported posterior probability of an aggregate
fuel-rate improvement is 98.6%, with more diluted effects.

Table 2 extrapolates affected-segment weekday 07:00–20:00 observations to a year, assumes a fixed app
penetration rate for total emissions, and applies Bayesian model percentiles. Its signed values represent
emissions changes: negative means savings despite the table's “Savings” label. Examples (tons CO2e/year):

| City | 5th percentile | Median | 95th percentile |
| --- | ---: | ---: | ---: |
| Atlanta | −7,537.42 | −1,991.30 | +4,715.98 |
| Los Angeles | −13,956.27 | −4,511.44 | +2,369.32 |
| Salt Lake City | −1,577.04 | −657.72 | +414.81 |
| Seattle | −3,458.31 | −503.77 | +3,921.23 |

Eight of ten city medians exceed 1,000 tons of annual savings, but every city's upper percentile permits an
increase. These are percentile bounds, not minimum and maximum possible outcomes.[^arora2026]

## Limits

Results depend on energy-model calibration, traffic sampling, fixed penetration and annual extrapolation.
Short-run speed changes do not establish persistence under induced demand. No direct exhaust measurements,
local pollutant exposure, lifecycle accounting, cycling substitution or neighborhood safety effects are
reported. Do not translate this conditional projection into a measured climate benefit of bicycle lanes.

## Related

- [Short-run travel gains](routing-app-short-run-travel-gains.md): observed traffic inputs and study-design limitations.
- [Street redesign outcomes](/topics/street-redesign-outcomes.md): separates modeled environmental benefits from
  measured travel outcomes.

[^arora2026]: Arora et al. (2026), p. 593, fuel-rate results; p. 594, Table 2 and its extrapolation note;
    p. 595, long-run demand limitation; p. 597, Energy modeling.
