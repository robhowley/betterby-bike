---
type: Finding
title: Resident-commuter weighting limits Chicago sharrow risk comparisons
description:
  Chicago's block-group analysis uses resident bicycle commuters rather than street-level riding exposure,
  so its weighted injury rates cannot establish individual sharrow risks or induced cycling.
tags: [safety, exposure, measurement, sharrows, Chicago]
sources:
  - id: ferenchak2019
    resource: /sources/2019-chicago-shared-lane-markings.md
    title: "Advancing healthy cities through safer cycling: An examination of shared lane markings"
---

# Resident-commuter weighting limits Chicago sharrow risk comparisons

The Chicago sharrow study uses ACS five-year estimates of resident bicycle commuters to approximate exposure when
comparing 2011–2012 and 2013–2014 injuries. It lacks counts of cyclists on treated streets. A commuter's residence
identifies neither the route nor destination of the trip and excludes noncommuting riding; a resident may barely
ride within the home block group.[^ferenchak2019]

## What the denominator measures

Mean resident bicycle commuters per block group changed as follows, grouped by installations in 2012–2013:[^ferenchak2019]

| Treatment added | Block groups | Before | After | Change % | Paired-test p |
| --- | ---: | ---: | ---: | ---: | ---: |
| None | 1,948 | 6.07 | 7.34 | +20.9% | <0.001 |
| Sharrows only | 42 | 10.31 | 15.50 | +50.3% | 0.032 |
| Bicycle lanes only | 149 | 11.56 | 13.16 | +13.8% | 0.224 |

Table 2 prints the first p-value as 0.000. These are within-group tests, not tests establishing that sharrows caused
more cycling than lanes. The largest increase in resident commuters does not establish greater use of the treatment,
net new trips or mode shifts caused by it.[^ferenchak2019]

The authors calculated injuries per 100 commuters, substituted one rider for null commuter values, and weighted rates
by block-group commuter populations. Thus changes in the location and weight of observations matter alongside injury
counts. ACS margins of error were used for rate confidence intervals, but do not resolve the mismatch between
residential populations and street-level exposure.[^ferenchak2019]

## Spatial and reporting limits

Injuries within a 50-foot buffer of a block group were assigned to that group, so a boundary injury could count in
both adjacent groups. The analysis assumes installations affect the whole block group, rather than identifying whether
an injury occurred on a treated street. It pools standard, buffered and protected lanes, omits mixed-treatment and
lane-upgrade groups, and does not account for treatment quantity, detailed street design or demographic and
socioeconomic differences. Injury severity was unavailable.[^ferenchak2019]

Table 4 also has an unresolved reporting inconsistency: baseline total rates of 8.70, 8.97 and 16.63 differ from the
sums of the displayed dooring and non-dooring rates (8.50, 8.46 and 16.53 respectively). These discrepancies appear
in the PDF itself. Retain the reported outcomes as separate values rather than silently correcting totals or deriving
new component shares from them.[^ferenchak2019]

## Related

- [Total injury-rate changes](/findings/safety/chicago-sharrow-injury-rate-changes.md) preserve the weighted comparison.
- [Dooring rates](/findings/safety/chicago-sharrow-dooring-rates.md) retain uncertain component results.
- [Interpreting cycling injury risk](/topics/cycling-injury-risk.md) distinguishes rates, counts and causal effects.

[^ferenchak2019]: Ferenchak and Marshall (2019), data/methods pp. 138–141; Table 2 p. 141; Table 4 p. 142;
    limitations pp. 143–144.
