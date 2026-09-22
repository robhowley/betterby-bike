---
type: Source
title: "Evaluation of Bus Lane Implementation Expediency on Streets with Different Lane Numbers: Case Study"
description: >-
  Baku-informed microsimulation proposes an hourly bus-lane travel-time test, with mixed illustrative results and
  unresolved model and measurement limitations.
resource: ../../raw-sources/research/2026-bus-lane-implementation-expediency-different-lane-numbers.pdf
tags: [bus lanes, simulation, travel time, measurement]
sources:
  - id: dashdamirov2026
    resource: ../../raw-sources/research/2026-bus-lane-implementation-expediency-different-lane-numbers.pdf
    title: "Evaluation of Bus Lane Implementation Expediency on Streets with Different Lane Numbers: Case Study"
---

# Bus-lane implementation on streets with different lane counts

Fuad Dashdamirov and Turan Verdiyev. *Communications* 28(1), D1–D12 (2026), online December 12, 2025.
[Original publication](https://doi.org/10.26552/com.C.2026.003).

## Study and methods

The authors propose screening bus-lane allocation by comparing aggregate travel time with buses in mixed
traffic versus one lane reserved for buses. PTV VISSIM simulations use the Wiedemann 99 car-following model,
2–5 lanes, an 800 m segment, 3.5 m lane widths and a stated 50 km/h permitted speed, informed by Baku
street observations. Inputs span 800–2,400 other vehicles/hour and 80–240 buses/hour. Regressions estimate
mixed-flow speed, dedicated-lane bus speed and remaining-lane vehicle speed. Bus passenger volume then
weights bus travel time in an hourly comparison.[^dashdamirov2026]

Table 2 describes lane and bus-route counts on nine Baku streets; it is context, not a before/after
outcome dataset. Tables 3–5 summarize simulation correlations and regressions. Hourly field measurements
are mentioned, but dates, observation samples, calibration diagnostics, replication counts and independent
out-of-sample validation are not supplied. Section 3 describes a real-condition two-lane test; section 7
presents its inputs as examples without identifying a street or measurement date.[^dashdamirov2026]

## Results and interpretation

The two-lane illustrations report a small favorable aggregate comparison (58.6 to 57.909 hours) at
2,000 bus passengers/hour, 1,800 other vehicles/hour and 90 buses/hour, but an adverse comparison
(36.4 to 39.7 hours) at 1,350 passengers/hour, 1,200 vehicles/hour and 60 buses/hour. These are modeled
values, not observed changes following installation. The latter example falls below the stated bus-frequency
simulation range. The authors recommend checking each hour and considering temporary or other lane arrangements
when an exclusive lane fails their time criterion; those alternatives were not evaluated here.[^dashdamirov2026]

The paper reports dedicated-lane bus speeds declining from 53.8 to 36.7 km/h across 80–240 buses/hour,
with a sharper decline above 180 buses/hour. Mixed-flow regression R² values are 0.576–0.752; dedicated-bus
R² is 0.9139 and remaining-vehicle fits are 0.9152–0.973. These describe simulation fits, not accuracy against
observed post-installation traffic. Claimed safety and reliability benefits are interpretations, not measured
outcomes, and no cycling outcome is estimated.[^dashdamirov2026]

## Access and limitations

Read extracted text of all 12 pages, including methods, Tables 1–5, discussion, conclusion and references;
visually checked D8–D9's Table 5, equations and worked examples. External references and DOI landing page were not read.
Publication-title, DOI, author and Baku searches found no existing representation of this study in the bundle.
Its cited prior bus-stop and other-city studies are background, not additional independent results extracted here.

The time formula adds bus passenger-hours to other vehicle-hours without car-occupancy weighting; it is not
fully specified all-person delay. It calculates travel time rather than subtracting a free-flow baseline.
Speeds above the stated limit and polynomial trends inconsistent with parts of the speed-decline narrative
remain unresolved. Recalculation at 0.8 km reproduces the examples approximately, but yields 57.920 rather
than 57.909 hours for the first after value. No uncertainty interval accompanies either comparison.
The authors acknowledge that time alone omits emissions, reliability and safety; network diversion, mode
shift and unexpected disruptions are not resolved by these fixed-input examples.[^dashdamirov2026]

## Findings

- [Mixed modeled two-lane comparisons](/findings/operations/baku-bus-lane-modeled-time-comparisons.md).
- [Bus-lane time accounting and model limits](/findings/operations/baku-bus-lane-model-measurement-limits.md).

## Related

- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md): modeled screening differs from observed
  corridor effects.

[^dashdamirov2026]: D4–D6, §§3–5 and Tables 1–2; D7–D8, Tables 3–5 and Equations 2–4;
    D8–D10, §§6–8, Equations 5–14 and discussion of excluded outcomes.
