---
type: Finding
title: Missing clinical-note data limit micromobility helmet and risk-factor comparisons
description: NEISS helmet status was identifiable in only 20.3% of micromobility injury narratives, while alcohol and vehicle fields lacked a reliable negative category.
tags: [safety, micromobility, helmets, measurement]
sources:
  - id: burford2024
    resource: /sources/2024-united-states-micromobility-injury-burden-2019-2022.md
    title: "U.S. micromobility injury burden, 2019–2022"
---

# Missing clinical-note data limit micromobility helmet and risk-factor comparisons

## In brief

- In U.S. 2019–2022 micromobility ED records, helmet status was identifiable in only 20.3% of narratives.
  Reported helmet-use shares describe this selected subset, not all injured patients or riders.
- Powered scooter cases had the highest recorded alcohol involvement (9.0%); e-bike cases had the highest
  recorded motor-vehicle involvement (35.4%). Unreported does not mean absent, and case-only comparisons
  cannot establish that either factor caused injury.[^burford2024]

## Denominators and ascertainment

| Device | Helmet use among known-status cases, % (95% CI) | Helmet status unreported, % |
| --- | --- | ---: |
| Bicycle | 48.7 (45.3–52.1) | 80.5 |
| E-bike | 43.8 (37.5–50.3) | 68.9 |
| Hoverboard | 30.3 (19.0–44.7) | 97.1 |
| Powered scooter | 34.8 (30.7–39.0) | 78.3 |

Helmet yes/no percentages use known-status cases; missingness percentages describe all cases for each device.
The especially sparse hoverboard status data make a simple mode ranking misleading. A valid text-search
classifier cannot recover helmet status never recorded in the clinical note.[^burford2024]

Alcohol positive indications represent 9.0% of powered scooter, 6.5% of e-bike, 4.1% of bicycle and 0.7%
of hoverboard cases. NEISS only collects positive alcohol/drug notations, so “not reported” includes both
negative and unknown observations. These are not percentages of a tested positive/negative subset and do
not establish intoxication prevalence or an alcohol-attributable injury fraction.

Narrative searches for “car,” “vehicle,” “truck,” “bus” or “SUV” produce motor-vehicle involvement shares
of 35.4% for e-bikes (95% CI 29.3–41.9), 25.4% for powered scooters (19.6–32.1), 21.9% for bicycles
(20.1–23.9) and 3.5% for hoverboards (2.7–4.7). Pedestrian mentions range from 0.1% for hoverboards to
1.1% for powered scooters. These text-derived indicators can miss or misclassify circumstances; absence of
a term is not a confirmed non-collision, and a pedestrian mention is not a count of pedestrians injured.

## What cannot be concluded

The study does not estimate helmet effectiveness, causal alcohol risk, risk per motor-vehicle encounter or
benefits from protected lanes. Race and ethnicity comparisons are also conditional on incomplete reporting,
not exposure-adjusted group risk. The authors call for improved surveillance and intervention research rather
than demonstrating an intervention effect.

These limitations qualify the [injury-profile comparisons](/findings/safety/us-micromobility-ed-injury-profiles.md).
[CPSC's scooter follow-up](/findings/safety/cpsc-scooter-follow-up-limits.md) uses a different ascertainment
method and period; its helmet share is not directly interchangeable with these narrative-derived shares.
See [interpreting cycling injury risk](/topics/cycling-injury-risk.md).

[^burford2024]: Burford et al. (2024), coding methods p. 1366; Table 1 pp. 1368–1369;
    risk-factor results p. 1367; measurement discussion and limitations pp. 1372–1373.
