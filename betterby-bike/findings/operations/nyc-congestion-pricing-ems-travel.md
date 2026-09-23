---
type: Finding
title: NYC congestion pricing estimates favor shorter hospital transport, with uncertain incident-arrival gains
description: A 2024–2025 boundary comparison estimates 63–70 seconds less combined ambulance travel within five kilometres, mainly hospital transport rather than incident arrival.
tags: [emergency response, congestion pricing, travel time, New York City]
sources:
  - id: chikish2026
    resource: /sources/2026-nyc-congestion-pricing-ems.md
    title: "Congestion Pricing and Emergency Medical Service Response: Evidence from New York City"
---

# NYC congestion pricing estimates favor shorter hospital transport, with uncertain incident-arrival gains

## In brief

- A non-peer-reviewed NYC working paper estimates **63–70 seconds less combined ambulance travel (5.3%–5.9%)**
  after January 5, 2025 congestion pricing, comparing changes across the 60th Street boundary within five kilometres.
- Most estimated savings are **54–59 seconds from scene to hospital**; the **7–9-second assignment-to-scene
  reduction is statistically uncertain**, not an established one-minute improvement in reaching patients.
- This is a local, model-dependent pricing estimate, not a citywide or bike-lane effect. Narrower-bandwidth and
  quadratic models include null results; combined travel excludes call handling, treatment and handover.[^chikish2026]

## Population, comparison and measured intervals

Chikish et al. use Manhattan FDNY dispatch records for 2024–2025. Their difference-in-discontinuities model
subtracts the pre-policy spatial difference from the post-policy difference at the boundary. Treatment is assigned
from majority exposure along inferred nearest-station/nearest-hospital routes; exact locations and traveled routes
are unavailable. Four alternative polygon-based incident locations yield four Table 5 estimates.

Time to incident runs from unit assignment to arrival. Hospital time runs from scene departure to hospital arrival.
Total travel sums those two segments only for hospital transports with valid component times. It is neither full
911-to-hospital elapsed time nor response time to the scene alone.[^chikish2026]

## Main estimates and denominators

Table 5 Panel B gives the following ranges across four location methods. Ranges are estimates across specifications,
not confidence intervals; percentages use each specification's pre-treatment mean.

| Outcome | Estimated change | Reported change | Observations across specifications |
| --- | --- | --- | --- |
| Assignment to incident | −9.039 to −6.581 seconds | −1.9% to −1.4% | 302,516–320,185 |
| Scene to hospital | −58.828 to −54.229 seconds | −8.2% to −7.6% | 189,815–201,221 |
| Combined travel | −70.427 to −63.239 seconds | −5.9% to −5.3% | 188,140–199,474 |

For the population-weighted random-location specification, combined travel is **−63.239 seconds**, SE **17.971**,
relative to **1,182.00 seconds** pre-treatment (N=188,256). Hospital time is **−54.741**, SE **13.932**; incident
arrival is **−7.900**, SE **5.699**. Table 5 marks all hospital/total estimates p<0.01, but none of the incident
estimates significant at p<0.10. Different outcome samples mean the reported component effects need not sum exactly.
Main standard errors cluster by intersection polygon.[^chikish2026]

Full-Manhattan Panel A estimates are smaller: combined travel falls **27.895–31.142 seconds (2.3%–2.6%)**,
with incident-arrival estimates still insignificant. These are alternative boundary models using broader samples,
not direct estimates of an average benefit to every Manhattan incident.

## Qualifications and related evidence

[Identification and sensitivity limits](nyc-congestion-pricing-ems-limits.md) preserve null two-kilometre/quadratic
results and the concurrent nearest-hospital directive. The authors' spatial account includes some positive
hospital/total coefficients farther inside the priced zone; nearby no-displacement evidence is not a no-harm guarantee.

[Lower camera vehicle density](nyc-congestion-pricing-camera-density.md) is consistent with a congestion mechanism,
but does not isolate that mechanism or show that increased cycling caused the ambulance improvement. No mortality,
reliability distribution or net welfare outcome is estimated. Do not convert combined-travel seconds into lives saved
using an external incident-response mortality estimate.

[Street redesign outcomes](/topics/street-redesign-outcomes.md) distinguishes these pricing results from
[Cedar Rapids road-diet response rates](cedar-rapids-road-diet-response-rates.md), which measure alarm-to-arrival
minutes per inferred kilometre under a different intervention.

[^chikish2026]: Chikish et al. (August 2026 revision), printed pp. 12, 14, 16–18, sample, intervals and design;
    Table 5 p. 24; spatial discussion pp. 31–33; Table A1 p. 42. Source read as text, not independently replicated.
