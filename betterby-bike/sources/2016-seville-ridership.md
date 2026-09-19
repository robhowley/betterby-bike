---
type: Source
title: On the effect of networks of cycle-tracks on the risk of cycling. The case of Seville
description: Seville's citywide time series links network expansion with higher estimated bicycle trips and lower motor-vehicle collision rates, without isolating causality.
resource: ../../raw-sources/research/2016-seville-ridership.pdf
tags: [Seville, cycle tracks, networks, ridership, safety, exposure]
sources:
  - id: paper
    resource: ../../raw-sources/research/2016-seville-ridership.pdf
    title: On the effect of networks of cycle-tracks on the risk of cycling. The case of Seville
---

# On the effect of networks of cycle-tracks on the risk of cycling. The case of Seville

R. Marqués and V. Hernández-Herrador, [original manuscript (local PDF)](../../raw-sources/research/2016-seville-ridership.pdf).
The supplied line-numbered manuscript does not state a publication date or journal citation;
2016 is the local filename's year.

## Question and methods

The authors examine Seville, Spain, before and after construction of a connected, segregated, bidirectional cycle-track
network in 2007. Spanish Traffic Authority police microdata cover 2000–2013. Risk means reported bicycle–motor-vehicle
collisions per million estimated bicycle trips, not all injuries or a comparison of track users with roadway users.
Annual regressions first use 2006–2013, then extend to 2000–2013 assuming unchanged pre-2006 cycling exposure.[^paper]

Trip estimates use municipal counts before 2011 and, from 2011, bike-share rental totals extrapolated using observed
public/private bicycle shares. Explanatory variables are track kilometres, estimated trips and a binary before/after
network indicator. A separate nonlinear analysis examines the association between trips and risk.[^paper]

## Results and interpretation

- Estimated annual trips increased from 3.055 million in 2006 to 16.333 million in 2013, after peaking at 17.038 million
  in 2011. Track length rose from 12 km to 77 km in 2007 and 152 km in 2013; the latter excludes 12 km of shared paths.
- Motor-vehicle collisions increased from 48 in 2006 to 100 in 2013, but the rate fell from 15.71 to 6.12 per million
  trips. The rate fell sharply in 2007, but did not decline every subsequent year.
- Adding the before/after indicator to track length improved the 2006–2013 regression fit (R² 0.847 to 0.930).
  The authors interpret this as a connectivity benefit beyond length. The nonlinear trip model was consistent with a
  safety-in-numbers relationship, but cannot determine causal direction.
- Section 4.3 reports a fall in motor-vehicle-collision KSI percentages from 9.5% to 5.9%. Its stated periods overlap
  at 2006, so this is not a cleanly labeled before/after severity comparison. Annual KSI counts are small, and no
  inferential severity analysis is supplied.[^paper]

The authors argue that safer connected infrastructure encouraged cycling, with possible feedback from cyclist numbers.
Their recommendation to complement network extension with traffic calming and motor-traffic restrictions is an
interpretation, not an evaluated intervention.[^paper]

## Limits and access

This is one uncontrolled city time series, with only eight annual observations in the main analysis and strongly
correlated explanatory variables. The binary indicator can absorb other changes after 2006; it does not independently
measure connectivity. Motor traffic also fell (reported AADT decline of 16% in 2007–2013), bike sharing was introduced,
and pedestrianization occurred. The authors discuss these factors but do not establish an isolated network effect.

Pre-2006 exposure is assumed, later exposure is estimated with changing methods, and police underreporting is unknown.
The authors assume stable motor-vehicle collision reporting, while excluding other crash types from the main risk
measure because their reporting may have changed. Recorded non-motor-vehicle crashes increased, so this is not evidence
that all crash types or absolute casualty counts fell. Full manuscript text, tables, figure labels and discussion were
read; cited studies and underlying datasets were not independently reviewed.[^paper]

## Extracted Findings

- [Citywide trip growth and its estimation limits](/findings/networks/seville-citywide-bicycle-trips.md).
- [Lower collision rates alongside higher collision counts](/findings/safety/seville-motor-vehicle-collision-risk.md).
- [Network and safety-in-numbers models do not identify causal direction](/findings/safety/seville-network-risk-models.md).

## Related

- [Interpreting cycling injury risk](/topics/cycling-injury-risk.md).
- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md).

[^paper]: Marqués and Hernández-Herrador, supplied manuscript, section 3 and Tables 2–3 (data and definitions);
    sections 4.1–4.3, Tables 4–7 and Figures 1–3 (models and severity); section 5 and conclusions (interpretation).
