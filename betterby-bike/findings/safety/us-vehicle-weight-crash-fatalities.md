---
type: Finding
title: Heavier vehicles protected occupants but were associated with more partner-vehicle deaths
description: The Economist's 2013–2023 U.S. two-vehicle crash analysis separates occupant protection from harm to the other vehicle, without estimating cyclist or per-mile risk.
tags: [safety, vehicle weight, United States, crash severity]
sources:
  - id: economist2024
    resource: /sources/2024-economist-big-cars-killing.md
    title: Americans’ love affair with big cars is killing them
---

# Heavier vehicles protected occupants but were associated with more partner-vehicle deaths

## In brief

- In The Economist's approximately 7.5 million two-vehicle crashes across 14 U.S. states in 2013–2023, the heaviest
  1% of vehicles had 4.1 own-vehicle deaths and 37 deaths in the other vehicle per 10,000 crashes, versus 6.6 and
  5.7 for median-weight vehicles.[^economist2024]
- After adjustment, a collision partner 1,000 lb heavier was associated with a 0.06-percentage-point higher
  fatality probability, about 66% of the reported 0.09% average. This concerns recorded crashes, not a causal
  weight effect, crash probability per mile or cyclist/pedestrian risk.[^economist2024]

## Comparison and method

The original analysis matched police reports to VinAudit curb weights by vehicle identification number and excluded
missing data. The article reports these average deaths per 10,000 two-vehicle crashes:[^economist2024]

| Vehicle group | Approximate curb weight | Own-vehicle deaths | Partner-vehicle deaths |
| --- | --- | --- | --- |
| Lightest 1% | 2,300 lb | 15.8 | 2.6 |
| Middle of sample | 3,500 lb | 6.6 | 5.7 |
| Heaviest 1% | 6,800 lb | 4.1 | 37 |

Own-vehicle and partner-vehicle deaths count people in different vehicles. These are not deaths per 10,000 people
or per distance travelled. The regression's fatality-probability measure is distinct from the table's death-count
rates; its full outcome specification is not given. Reported controls are own-vehicle curb weight, driver age and
gender, crash-location population density and passenger seatbelt use.[^economist2024]

## Limits and interpretation

The pattern supports distinguishing private occupant protection from harm to others. It does not show that every
increment of weight improves occupant safety, nor establish weight as the sole cause. The article reports no
confidence intervals, full model specification or controls explicitly covering impact speed or vehicle geometry.
Selection of states with accessible detailed records and exclusion of missing observations may affect applicability;
coverage of more than a third of the population alone does not demonstrate national representativeness.

Only the article was reviewed, not its records or code. Its original analysis is distinct from the earlier studies
it cites, which were not independently reviewed. Two-vehicle occupant outcomes cannot be transferred directly to
cyclists, pedestrians or single-vehicle crashes.[^economist2024]

## Related

- [Fleet-downsizing estimate](us-heavy-vehicle-downsizing-estimate.md): a counterfactual derived from the same
  analysis, not independent evidence.
- [Interpreting cycling injury risk](/topics/cycling-injury-risk.md): outcome populations and denominators matter.

[^economist2024]: The Economist (August 31, 2024), PDF p. 3, dataset and exclusions;
    p. 7, weight-group death rates and adjusted regression result. Figures are from prose, not chart digitization.
