---
type: Source
title: "Wheels to Meals: Measuring the Impact of Micromobility on Restaurant Demand"
description: Matched U.S. card-panel study estimates higher restaurant spending among scooter users after program entry, with heterogeneous results and limits on population and net-benefit extrapolation.
resource: ../../raw-sources/research/wheels-to-meals-micromobility-restaurant-demand.pdf
tags: [business, micromobility, scooters, spending, measurement]
sources:
  - id: paper
    resource: ../../raw-sources/research/wheels-to-meals-micromobility-restaurant-demand.pdf
    title: "Wheels to Meals: Measuring the Impact of Micromobility on Restaurant Demand"
---

# Wheels to Meals: Measuring the Impact of Micromobility on Restaurant Demand

## Publication and access

Kyeongbin Kim and Daniel Minh McCarthy, Emory University. [Original SSRN publication](https://ssrn.com/abstract=3802082)
· [Supplied manuscript](../../raw-sources/research/wheels-to-meals-micromobility-restaurant-demand.pdf).
The appended online appendix is dated **May 2023**; no journal citation or main-manuscript date is printed.
Read the complete extracted text of the 62-page PDF: front matter, main pp. 1–32 and appendix pp. 1–27,
including methods, limitations, Tables 1–6 and W1/W3–W6. Visually checked Table 2 and Figure 4 (main pp. 15, 18).
Other embedded survey graphics were not independently transcribed; no underlying card data, cited studies,
external SSRN version or municipal records were accessed.

## Question and methods

Does dockless e-scooter entry change residents' restaurant spending? Earnest Analytics credit/debit-card data
cover January 2017–February 2020, before COVID-19, and 391 restaurant companies (222 fast food, 169 sitdown).
The analysis retains home-city in-store spending, excluding restaurant delivery and away-from-home activity.
Home cities are inferred from modal transaction locations; the provider's consistent-shopper filter is proprietary.[^paper]

The matched sample contains **13,583 scooter users and 32,868 controls** in 49 entry cities and 49 cities
without programs throughout observation. Entry occurred June–October 2018. Although the introduction describes
all entry cities, note 4 and Appendix B clarify that **54 qualified and five were dropped during matching**.
Treated people rode at least once during observation, not necessarily every week. City matching uses demographics
and climate; individual coarsened exact matching uses pre-entry spending propensities. Weekly difference-in-differences
models use log(spending + $1), individual/week fixed effects, city-specific linear trends and city-clustered errors.
The estimand concerns eventual users, not all residents or restaurant trips made by scooter.[^paper]

## Results and interpretation

- Table 2's total coefficient is **0.05172** (SE 0.01711, p<0.01), described by the authors as about **5.2%**
  higher restaurant spending. Fast-food and sitdown coefficients are 0.04503 and 0.01727, both p<0.01.
- Figure 4 shows stronger estimates for larger, lower-order-value companies and positive new/repeat-customer
  spending estimates. The smallest-company group and cities with the lowest share aged 18–44 have nonsignificant
  estimates. Temperature-group differences are not significant. Lower walking/biking/transit commute shares
  accompany larger point estimates, but that proxy is not a direct measurement of transit infrastructure.
- Local non-restaurant spending has a positive but nonsignificant estimate, **0.03818** (SE 0.03081).
  This does not demonstrate zero displacement or a positive net benefit across the economy.
- Alternative matching, transformations, trend specifications and time aggregation retain positive overall
  restaurant estimates. Pretrend and placebo tests do not detect the tested differences; they do not exclude
  all time-varying confounding.
- The authors extrapolate **$11.3 million annually** across 49 treated cities and **$179.1 per permitted scooter**
  in a 32-city subset. These are model-based, population-scaled estimates, not directly observed city receipts.[^paper]

## Limits and recommendations

Nonrandom entry and selection of eventual riders leave possible time-varying confounding despite matching and
robustness checks. City-level transaction locations cannot identify neighborhood effects, individual establishments
or trip mechanisms. Tracked companies and card users need not represent all restaurants, cash purchases or residents;
strong correlations with 36 public brands' sales trends do not establish representative scooter treatment effects.
Tourists and international settings are outside the analysis. The paper does not evaluate bicycle lanes.[^paper]

The authors propose more permissive scooter policies and location-based advertising. Their Dallas tax/profit
illustrations apply assumed rates and margins and use fees as a rollout-cost proxy; these are not audited municipal
returns or complete social cost-benefit accounts. Population impacts could be higher or lower if scaling assumptions
fail, despite the abstract's “at least” wording.[^paper]

## Findings and study overlap

- [Rider restaurant-spending estimate and heterogeneous results](/findings/business/scooter-entry-rider-restaurant-spending.md).
- [Non-restaurant null result does not prove no displacement](/findings/business/scooter-entry-local-spending-null.md).
- [Population and permitted-fleet extrapolation limits](/findings/business/scooter-restaurant-spending-extrapolation.md).
- [Street-redesign synthesis](/topics/street-redesign-outcomes.md).

Title, SSRN identifier, author, provider, sample and result searches found no existing primary-study Source or
matching Finding. [NABSA's report](/sources/2021-shared-micromobility-state-of-the-industry-report.md) already
mentions Kim and McCarthy (2022): related earlier-version reporting, not independent confirmation. This manuscript
acknowledges that a prior version used Bloomberg Second Measure rather than Earnest Analytics; earlier and current
estimates should not be pooled as separate studies or silently equated.

[^paper]: Main pp. 5–14 (data/design), pp. 15–24, Tables 2–6 and Figure 4 (results/checks), pp. 24–27
    (scaling and limitations), p. 32 note 4; Appendices B–E (selection/matching/representativeness),
    G–H (robustness), I–J (permitted fleets and modeled profit).
