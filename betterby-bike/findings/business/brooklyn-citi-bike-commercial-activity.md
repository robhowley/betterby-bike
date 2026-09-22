---
type: Finding
title: Brooklyn Citi Bike commercial-activity comparisons were weaker than Jersey City's
description: Modest ZIP-code transaction growth and an all-business proximity gradient did not establish statistically significant commercial gains at the conventional threshold.
tags: [business, bikeshare, Brooklyn]
sources:
  - id: paper
    resource: /sources/impact-urban-technology-deployments-local-commercial-activity.md
    title: Impact Of Urban Technology Deployments On Local Commercial Activity
---

# Brooklyn Citi Bike commercial-activity comparisons were weaker than Jersey City's

## In brief

- Across Brooklyn's 2013, 2015 and 2016 Citi Bike deployment phases, eating-place transaction proxies rose
  about **0.2–0.5%** in deployment ZIP codes, versus slight decline or little change in nearby controls.
- The growth-distribution test **did not reach the conventional 5% significance threshold** (p=0.0724),
  and sales-volume proxies did not confirm faster growth. This is not proof of either a gain or no effect.
- A separate 2016 block-level all-business comparison showed smaller growth farther from stations, but the
  paper could not validate that pattern statistically either.[^paper]

## ZIP-code comparison

The authors compare same-season annual activity before/after deployment against nearby ZIP codes without
stations at that phase. Table 1 reports the following relative transaction-proxy changes:[^paper]

| Deployment phase | Deployment area (%) | Control (%) |
| --- | ---: | ---: |
| 2013 | 0.546 ± 0.144 | −0.107 ± 1.034 |
| 2015 | 0.446 ± 0.615 | 0.004 ± 0.480 |
| 2016 | 0.209 ± 0.011 | −0.017 ± 0.489 |

The accompanying discussion describes standard deviations, not confidence intervals. It treats the KS result
as evidence only at a 10% threshold. ZIP codes contain businesses far from stations, potentially diluting local
associations. Data restrictions prevented a comparable eating-place block analysis.[^paper]

## Proximity comparison is another outcome, not confirmation

For the September 2016 deployment, Table 4 includes all businesses because food-specific detail was unavailable.
Sales-proxy growth was **1.975%** with a station in the block, **0.700%** with deployment in a neighboring block,
and **−0.333%** farther away; transaction-proxy changes were **0.987%, 0.809% and 0.122%**, respectively.
These are proximity categories, not measured distance bands or an estimated causal decay rate. The authors
state that differences were too small relative to comparison-sample fluctuations to validate significance.[^paper]

The [Jersey City finding](jersey-city-citi-bike-commercial-activity.md) concerns selected eating-place blocks,
not the same population or scale. Neither set can be pooled into a typical station effect. See
[proxy limitations](urban-deployment-commercial-proxy-limits.md) and
[street-redesign synthesis](/topics/street-redesign-outcomes.md).

[^paper]: Sobolevsky et al., pp. 6–7, Table 1; pp. 10–11, Table 4; pp. 4–5 (score construction).
