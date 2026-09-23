---
type: Source
title: Urban congestion relief experiments through routing-app interventions
description: Ten-city Google Maps switchbacks estimate modest traffic-speed and trip-time gains, with modeled emissions and unresolved long-term effects.
resource: ../../raw-sources/research/urban-congestion-relief-experiments-through-routing-app-interventions-nature-cities.pdf
tags: [congestion, routing, travel time, emissions, measurement]
sources:
  - id: arora2026
    resource: ../../raw-sources/research/urban-congestion-relief-experiments-through-routing-app-interventions-nature-cities.pdf
    title: Urban congestion relief experiments through routing-app interventions
---

# Urban congestion relief experiments through routing-app interventions

Neha Arora and eleven coauthors, *Nature Cities* 3, 591–598, published online 16 June 2026.
[Original publication](https://doi.org/10.1038/s44284-026-00443-x) ·
[Local PDF](../../raw-sources/research/urban-congestion-relief-experiments-through-routing-app-interventions-nature-cities.pdf).

## Question and design

The study tests whether marginal Google Maps rerouting can improve traffic conditions without large detours.
It targets approximately 100 congested segments **per city**, not 100 overall, in Atlanta, Boston, Chicago,
Los Angeles, Miami, New York, Philadelphia, Salt Lake City, San Francisco and Seattle. Target selection uses
historical high density or bottlenecks, with road classes varying by city. Under 2% of observed trips receive
changed recommendations; alternatives have comparable road classes and capped predicted travel-time costs,
averaging about 30 seconds slower for rerouted trips before accounting for network effects.[^arora2026]

Treatment alternates daily across entire geographies in a switchback design. The Methods explicitly call
assignment **nonrandom**. Hierarchical Bayesian models partially pool effects across cities and hours.
Segment outcomes use six months of aggregated anonymized Google Maps data; trip outcomes were added later
and use only the final two months because of retention limits. Analysis covers weekdays, 07:00–20:00,
with atypical low-density days removed. The reviewed material does not specify calendar start/end dates.
Affected segments include routes diverted from and onto, reportedly covering about 80% of each city's traffic,
not a census of all travel.[^arora2026]

## Results and interpretation

- Targeted-segment speed gains have a cross-city posterior median around 2%; all affected segments show
  about 0.35% across analyzed hours and 0.50% at peaks. The aggregate posterior probability of improved
  affected-segment speeds is 99.8%.
- The separate trip analysis reports a median aggregate travel-time reduction of 0.69% across cities for
  observed trips passing through affected segments. This is not a gain for every driver or segment.
- Fuel consumption and CO2e are modeled, not measured. Table 2's annual emissions-change medians range
  from roughly −504 to −4,511 tons per city; **every city's 5th–95th percentile range crosses zero**.
  Most city medians exceed 1,000 tons of savings, but none establishes certain city-specific savings.[^arora2026]

## Limitations and access

App-based segment sampling can miss routes less likely to require guidance; varying segment composition,
nonrandom assignment, model assumptions and outlier exclusions constrain inference. Long-run induced demand
could erode gains and is not estimated. Cycling, pedestrian safety, neighborhood exposure, access and modal
shift are not measured. Faster aggregate vehicle travel is not evidence of benefit to every road user.

The Discussion describes savings as about 0.25% of an average affected trip length, versus 0.69% in the
trip-results section. Their relationship is not explained in the reviewed text; retain the result-specific
0.69% rather than silently equating them. All authors are or were affiliated with Google Research. Underlying
data are confidential; analysis code is linked but was not reviewed.

Read the complete extracted text of the eight-page article and appended seven-page reporting summary,
including Table 1, Table 2 and figure captions. Plotted distributions and maps were not visually digitized;
no claims rely on reading their graphical values. Separate Supplementary Information, source data, code and
external references were not reviewed. Claimed frequentist robustness therefore remains the authors' account.

## Extracted findings

- [Short-run routing speed and trip-time gains](/findings/operations/routing-app-short-run-travel-gains.md).
- [Modeled emissions savings and uncertainty](/findings/operations/routing-app-emissions-uncertainty.md).

## Related

- [Street redesign outcomes](/topics/street-redesign-outcomes.md): separates network traffic metrics from cycling and
  broader street benefits.

[^arora2026]: Arora et al. (2026), pp. 591–593, design, Table 1 and results; p. 594, Figure 2 and Table 2;
    pp. 595–597, Discussion and Methods; p. 598, interests; appended reporting summary pp. 1–2.
