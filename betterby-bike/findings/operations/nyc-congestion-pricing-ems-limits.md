---
type: Finding
title: NYC pricing and EMS estimates depend on local comparability, inferred routes and model specification
description: A concurrent hospital-routing directive, null sensitivity results and inferred ambulance exposure qualify NYC congestion-pricing travel estimates.
tags: [emergency response, congestion pricing, measurement, causal inference, New York City]
sources:
  - id: chikish2026
    resource: /sources/2026-nyc-congestion-pricing-ems.md
    title: "Congestion Pricing and Emergency Medical Service Response: Evidence from New York City"
---

# NYC pricing and EMS estimates depend on local comparability, inferred routes and model specification

## In brief

- A 2024–2025 NYC working paper's preferred boundary model estimates shorter ambulance travel, but **two-kilometre
  and quadratic specifications do not detect significant hospital or total-travel gains**. The headline magnitude
  is not uniformly robust.
- A **March 12, 2025 nearest-hospital directive** coincides with longer travel in broader-area comparisons.
  Boundary identification is less exposed only if other changes affect both sides smoothly, not automatically.
- Incident locations and routes are inferred, not tracked. These results cannot establish citywide benefits,
  a bike-lane effect or patient survival gains.[^chikish2026]

## What the design can separate

The primary difference-in-discontinuities model compares before/after changes at 60th Street. It removes
pre-existing boundary differences, including those associated with Central Park, but assumes that without pricing
outcome changes would be smooth across the boundary. Temporal and dispatch-area controls do not guarantee this.

Administrative-area overlaps locate incidents within polygons rather than exact coordinates. Alternative centroids
and random points test some location sensitivity. Shortest paths to the nearest station/hospital approximate
exposure, although actual units can be dispatched from prior assignments and patients can require other hospitals.
The claim that location error is classical is the authors' assumption, not established by knowing polygon boundaries.

## Specification sensitivity must accompany the main result

Table A1 reports these combined-travel changes, with polygon-clustered standard errors:

| Specification | Estimated seconds | Standard error | Table's significance |
| --- | --- | --- | --- |
| Linear, 2 km | −26.981 | 21.586 | Not significant at 10% |
| Linear, 3 km | −55.934 | 20.024 | p<0.01 |
| Linear, 4 km | −49.239 | 19.225 | p<0.05 |
| Linear, 5 km | −63.239 | 17.971 | p<0.01 |
| Quadratic, 5 km | −29.858 | 22.455 | Not significant at 10% |
| Local linear, 5 km | −53.972 | 17.845 | p<0.01 |

Hospital-time estimates are also insignificant at 2 km and under the quadratic model; incident-arrival estimates
are insignificant throughout Table A1. These nulls do not establish zero effects, but qualify claims of uniform
robustness. Table A2 adds bicycle-lane and construction controls with similar point estimates; it clusters by
dispatch area instead of polygon, so significance differs from Table 5. This is not a controlled estimate of lane effects.

The 2023–2024 pseudo-policy and non-transport on-scene falsification tests are insignificant (Table 7).
Table 8 finds small but significant severity differences, so balance is not uniformly null. These checks support
parts of the design without proving its identifying assumptions.[^chikish2026]

## Concurrent policy and conflicting comparisons

Standard difference-in-differences compares broader inside/outside-zone changes. Table 9's full sample estimates
**+32.803 seconds total travel**, SE **9.513**, versus **+16.848**, SE **12.370**, within 5 km. Only the former
is significant under the table's conventions, contrary to prose suggesting both are significant.

Adding a post-directive interaction in Table 10 gives pre-directive total estimates of **−34.980 seconds**
(full sample) and **−50.081 seconds** (5 km), followed by positive incremental terms. Full-sample pre-directive
hospital time is not significant, despite a broader narrative claim of significant reductions across outcomes.
The authors interpret the reversal as hospital-routing confounding. It does not independently identify the
directive's causal effect, and the directive itself was not independently reviewed for this ingestion.

The boundary model is less sensitive to a citywide policy only to the extent its effects are locally shared.
Some deeper-in-zone spatial estimates are positive; the authors describe little systematic EMS worsening just
outside the boundary. These are not a citywide no-harm test. Internal reporting also varies: methods describe
188 polygons, while Table 10 notes 195; that difference remains unresolved.

## Related

- [Main ambulance travel result](nyc-congestion-pricing-ems-travel.md): retains interval definitions and
  outcome-specific denominators.
- [Camera density result](nyc-congestion-pricing-camera-density.md): shorter follow-up and no direct mode-switching observation.
- [Street redesign outcomes](/topics/street-redesign-outcomes.md): distinguishes pricing from road-diet and bike-lane evaluations.

[^chikish2026]: Chikish et al. (August 2026 revision), printed pp. 9–19, geography, routes and identification;
    Tables 7–8 pp. 27–28; spatial discussion pp. 31–33; Tables 9–10 and discussion pp. 33–36;
    Tables A1–A2 pp. 42–43. No underlying-data or code review; no statistical replication performed.
