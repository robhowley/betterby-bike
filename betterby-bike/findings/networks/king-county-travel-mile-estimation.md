---
type: Finding
title: King County travel-mile estimates varied widely by method and were not validated baselines
description: A 2017 Washington report demonstrates survey, count-expansion and aggregate-model estimates for King County within the Puget Lowlands, with major unresolved bias.
tags: [Washington, networks, measurement, travel surveys]
sources:
  - id: report
    resource: /sources/2017-estimating-walking-bicycling-state-level.md
    title: Estimating Walking and Bicycling at the State Level
---

# King County travel-mile estimates varied widely by method and were not validated baselines

## In brief

- In a 2017 method demonstration for **King County within the Puget Lowlands**, annual bicycle-mile estimates
  ranged from **45 million** using national survey data to **690 million** using local count expansion; walking
  estimates ranged from **200 million to 2,400 million miles**. These are alternative estimates, not growth over time.[^report]
- Actual totals were unknown. The authors explicitly say the computations should not be used as travel baselines:
  national survey rates may understate Washington travel, while nonrandom count sites may overstate it.[^report]

## Estimates and scope

The analysis centered on 2013 counts, with 2009 NHTS national travel rates and census population/demographic inputs.
Table 5.5 compares the same geographic area using different methods and count-site sets. Values below are **millions
of miles per year**, not trips, commuters or statewide totals. Parentheses reproduce the table's reported “95% CI”
labels, with important differences in construction described below.[^report]

| Method | Pedestrian miles | Bicycle miles |
| --- | ---: | ---: |
| National survey rates | 200 (190–210) | 45 (40–50) |
| Sample-based, all Puget count sites | 1,800 (1,200–2,400) | 510 (370–650) |
| Sample-based, King County count sites only | 2,400 (1,400–3,300) | 690 (460–930) |
| Aggregate demand model | 560 (100–3,000) | 220 (50–910) |

These are not independent confirmations: both count-based methods use the same underlying count program and
[placeholder annualization factors](/findings/networks/washington-count-expansion-limits.md). Intermediate model
estimates do not establish that the model is closer to the unknown true total.[^report]

## Uncertainty is not interchangeable

- **Survey:** national rates of 112.4 walking and 24.1 cycling miles per person over age five per year were applied
  to population. Intervals reflect only the NHTS uncertainty reported by Pucher et al., not national-to-state
  transfer error, omitted travel or nonsampling bias.
- **Sample-based:** intervals were constructed from sampling-group mean daily volumes using 1.96 times the
  standard error. They do not resolve nonrandom site selection or inappropriate temporal adjustment factors.
- **Model:** the authors produced lower and upper estimates by substituting each coefficient's lower and upper
  95% confidence limits. These bounds are not demonstrated calibrated uncertainty for total travel.[^report]

NHTS includes walking/cycling to transit and recreational out-and-back trips, but excludes travel within one address
and access to a car when driving is the primary mode. Do not interpret this report's warnings about missed recreation
as meaning NHTS excludes all recreational travel. Washington's higher commuting shares support the authors' concern
about national-rate transfer, but do not quantify its all-purpose mileage error.[^report]

The report's statewide 700–8,000 million walking-mile and 150–2,400 million bicycle-mile range combines a survey
lower estimate with an extrapolation of King County rates. It is an exploratory range, not a validated statewide
confidence interval or a safety-risk denominator.[^report]

## Related

- [Who walks and bikes to work?](/topics/active-commuting-and-access.md): match the travel measure to the question.
- [ACS commute-share limits](/findings/networks/acs-active-commuting-measurement-limits.md): a different survey's
  work-only, main-mode measure cannot substitute for all-purpose miles.

[^report]: Nordback et al. (2017), pp. 40, 53–54 (survey basis/scope); pp. 55–58 (count/model intervals and Table 5.5);
    pp. 59, 63–66 (statewide range, unknown totals and warning against baseline use).
