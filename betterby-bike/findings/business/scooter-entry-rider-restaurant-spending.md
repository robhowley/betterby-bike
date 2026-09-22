---
type: Finding
title: Scooter entry was associated with higher restaurant spending among eventual riders
description: A 98-city matched card-panel model estimates about 5.2% higher rider restaurant spending, with smaller sitdown effects and unresolved time-varying confounding.
tags: [business, scooters, spending, observational study]
sources:
  - id: wheels
    resource: /sources/wheels-to-meals-micromobility-restaurant-demand.md
    title: "Wheels to Meals: Measuring the Impact of Micromobility on Restaurant Demand"
---

# Scooter entry was associated with higher restaurant spending among eventual riders

## In brief

- In 49 U.S. cities admitting scooters in June–October 2018, a matched model estimates about **5.2% higher
  restaurant spending among eventual scooter users**, relative to spending changes among controls in 49 non-entry cities.
- Fast-food estimates were larger than sitdown estimates; the smallest-company subgroup did not show a significant
  increase. This is not a 5.2% gain for all residents, every restaurant or bicycle-lane installation.
- The nonrandomized design addresses several confounders but cannot rule out time-varying differences between
  riders and controls or cities.[^wheels]

## Population, measure and model

January 2017–February 2020 Earnest Analytics data cover in-store purchases at 391 restaurant companies in residents'
inferred home cities. Matching retains 13,583 people who rode scooters at least once and 32,868 controls.
The intervention is city program entry, not the date of a person's first ride. Delivery and tourist spending are
outside the focal outcome. Five of 54 qualifying entry cities were lost during matching.[^wheels]

The difference-in-differences regression models **log(weekly spending in dollars + 1)**, with individual and week
fixed effects, city-specific linear trends, matching weights and city-clustered standard errors. Table 2 reports:

| Outcome | Entry coefficient | Standard error | Person-week observations |
| --- | ---: | ---: | ---: |
| All restaurants | 0.05172 | 0.01711 | 7,664,415 |
| Fast food | 0.04503 | 0.01688 | 7,647,750 |
| Sitdown | 0.01727 | 0.00548 | 7,196,145 |

All three p-values are below 0.01. The approximately 5.2% headline is the authors' interpretation of the transformed
outcome coefficient, not an observed percentage change in aggregate dollar receipts. Because zeros are handled by
adding $1, do not treat it as an exact percentage effect on arithmetic mean spending.[^wheels]

## Heterogeneity and uncertainty

Figure 4 associates larger estimates with higher pre-entry company sales and lower average order values. Both
new and repeat-customer spending estimates are positive and significant; “new” means no prior observed purchase
at that company, not necessarily first-ever patronage or discovery caused by a scooter trip. Smallest-company
and lowest-share-aged-18–44 city groups have nonsignificant estimates. Temperature differences are not significant.
Lower walking/biking/transit commute shares accompany larger point estimates, but do not directly measure
infrastructure quality or prove that transit provision moderates the effect.[^wheels]

Alternative matching yields smaller total coefficients (PSM 0.03452; unmatched 0.04442). Alternative trend and
transformation checks retain positive results. Failure to reject parallel pretrends (p=0.19) and null placebo
results support, but cannot prove, the required counterfactual assumptions. Selection by eventual scooter use,
card/brand coverage and city-level locations limit causal and geographic transfer.[^wheels]

## Connections

See [non-restaurant spending uncertainty](scooter-entry-local-spending-null.md),
[population extrapolation](scooter-restaurant-spending-extrapolation.md) and
[street-redesign outcomes](/topics/street-redesign-outcomes.md).
These are analyses from one study, not independent confirmations; NABSA's earlier-version coverage is secondary.

[^wheels]: Main pp. 5–16, Equation 1 and Tables 2–3; pp. 17–24, Figure 4 and checks; p. 27 limitations;
    p. 32 note 4; Appendices B–E and G–H. Supplied manuscript with May 2023 appendix.
