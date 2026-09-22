---
type: Finding
title: Jersey City Citi Bike deployment and eating-place activity
description: Five station-adjacent blocks had higher estimated eating-place activity growth than controls, using approximate scores rather than observed receipts.
tags: [business, bikeshare, Jersey City]
sources:
  - id: paper
    resource: /sources/impact-urban-technology-deployments-local-commercial-activity.md
    title: Impact Of Urban Technology Deployments On Local Commercial Activity
---

# Jersey City Citi Bike deployment and eating-place activity

## In brief

- Five available blocks near Grove Street and Journal Square PATH stations had **3.624% estimated eating-place
  sales growth**, versus **−0.894%** in control blocks, after September 2015 Citi Bike deployment.
- Estimated transaction activity rose **2.723% versus 0.257%**. These are transformed commercial-activity scores,
  not directly observed receipt totals or spending specifically by cyclists.
- The controlled comparisons were statistically significant, but nonrandom transit-hub placement, sparse coverage
  and possible spending redistribution prevent concluding that stations caused net economic gains.[^paper]

## Comparison and uncertainty

The stated post-deployment window is September 2015–August 2016, compared with the corresponding previous year.
Table 2's caption repeats dates incorrectly for the baseline and placebo, so exact windows require clarification.
Controls are available blocks in Jersey City and nearby Hoboken without nearby Citi Bike or Hudson Bike Share
stations. Only blocks with more than five eating businesses could receive scores; the exact control count is
not reported in the accompanying account.[^paper]

| Table 3 sample | Sales proxy change (%) | Transaction proxy change (%) |
| --- | ---: | ---: |
| Deployment | 3.624 ± 3.621 | 2.723 ± 1.175 |
| Control | −0.894 ± 0.681 | 0.257 ± 1.087 |
| Non-food businesses near deployment | 1.133 ± 1.249 | 1.283 ± 1.012 |
| Prior-year placebo | 0.234 ± 3.303 | −0.031 ± 2.545 |

The paper does not clearly define Table 3's ± entries; they must not be presented as confidence intervals.
The five block sales changes range from 1.3295% to 10.7856%, indicating substantial variation. The non-food
sample uses available blocks, not exactly the same blocks as the food sample.[^paper]

The growth-distribution KS test gives p=0.006861. A regression with post-period, deployment-area and their
interaction reports interaction p=0.0274 for transactions and p=0.0003 for sales. These tests analyze the same
underlying observations, not independent replications. The table's before/after changes are not the regression
interaction coefficients. The paper does not supply those coefficients or their confidence intervals.[^paper]

## Limits and connections

Prior-year and non-food comparisons strengthen the timing/sector association but do not exclude concurrent
transit-hub development. Distance-decay testing was not feasible here. The study does not measure individual
business profits, openings/closures or net citywide spending. See [measurement limits](urban-deployment-commercial-proxy-limits.md)
and [Brooklyn's weaker comparisons](brooklyn-citi-bike-commercial-activity.md) from the same publication.

[Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md) distinguishes these station associations
from protected-lane and customer-survey evidence.

[^paper]: Sobolevsky et al., pp. 4–6 (score transformation/methods), pp. 7–10, Tables 2–3; pp. 13–14 (limits).
