---
type: Source
title: Estimating Walking and Bicycling at the State Level
description: Washington method demonstrations yield widely differing travel-mile estimates, not reliable statewide baselines, because survey and count inputs are inadequate.
resource: ../../raw-sources/research/2017-estimating-walking-and-bicycling-at-the-state-level.pdf
tags: [Washington, networks, measurement, travel surveys, bicycle counts]
sources:
  - id: report
    resource: ../../raw-sources/research/2017-estimating-walking-and-bicycling-at-the-state-level.pdf
    title: Estimating Walking and Bicycling at the State Level, NITC-RR-708
---

# Estimating Walking and Bicycling at the State Level

Krista Nordback, Michael Sellinger and Taylor Phillips, Portland State University. Final report NITC-RR-708,
March 2017, for the National Institute for Transportation and Communities, funded by WSDOT with NITC matching
funds. [Original report PDF](../../raw-sources/research/2017-estimating-walking-and-bicycling-at-the-state-level.pdf).

## Question and methods

The report tests three ways to estimate annual bicycle miles traveled (BMT) and pedestrian miles traveled (PMT)
in Washington, rather than evaluating a street intervention. Analysis centers on 2013 counts: 386 two-hour manual
counts at 211 intersections in 39 jurisdictions, with Seattle and Olympia supplementary data. Demographic inputs
include 2008–2012 ACS data and the 2009 National Household Travel Survey (NHTS).[^report]

- **Survey extrapolation:** national annual miles per person over age five, reported by Pucher et al., multiplied by
  population. Washington's NHTS sample was too small for the intended analysis; this is not a state-specific travel survey.
- **Sample-based expansion:** annualized counts multiplied by road/path centerline mileage, grouped into 24 strata
  (four regions, two urbanity classes, three facility classes). Existing sites were not randomly sampled.
- **Aggregate demand models:** ordinary least squares models of log(count-derived annual average daily volume + 1),
  using census-tract demographics and arterial, bridge and trail indicators, then expanded over segment lengths.[^report]

## Main results

None of the methods could confidently estimate statewide travel with the available inputs. The comparison for
**King County within the Puget Lowlands**, not the entire county or state, ranged from 45 million annual BMT using
national survey data to 690 million using King County count sites; PMT ranged from 200 million to 2,400 million.
The model estimates lay between them. These are method demonstrations, explicitly not actual-travel baselines.[^report]

The models explained a reported 34% of bicycle-volume variation and 16% of pedestrian-volume variation. Bridge and
trail indicators were positive and significant for bicycles, but neither was significant for pedestrians at the
report's 0.1 threshold; the pedestrian college-degree coefficient was also nonsignificant. These are spatial
associations, not effects of building bridges or trails. Accuracy was not established against known total travel.[^report]

## Limitations and recommendations

Counts may overrepresent busy sites and lacked rural coverage. Annualization borrowed one commute-oriented bicycle
counter's factors from Seattle's Fremont Bridge, including for pedestrians and other climates. The authors explicitly
call these factors placeholders, not appropriate accurate estimates. State roadway mileage also exceeded the cited
FHWA total because of local-road mileage differences, adding uncertainty to mileage expansion.[^report]

Survey estimates omit some very short trips and apply national rates to Washington; their intervals exclude these
biases. NHTS does include recreational out-and-back trips and transit-access legs, despite the report's broader
warnings that surveys can miss recreation. The model's broad ranges likewise do not validate its predictions.[^report]

The authors recommend improved travel surveys for statewide totals, representative counts for facility-level bicycle
volumes, and aggregate models for census-tract estimates. They recommend continuous counters across settings and
random short-duration sampling within strata. These are recommendations, not demonstrated comparative accuracy.
GPS data should be paired with observed counts rather than assumed to represent total travel.[^report]

## Extracted findings

- [King County method comparison](/findings/networks/king-county-travel-mile-estimation.md): numerical estimates,
  geographic scope and method-specific uncertainty.
- [Washington count-expansion limits](/findings/networks/washington-count-expansion-limits.md): site selection,
  temporal factors and network coverage prevent confident travel totals.
- [Who walks and bikes to work?](/topics/active-commuting-and-access.md): commuting shares and all-purpose mileage
  answer different questions.

## Review scope

Read the complete report text, including methods, limitations, supporting tables and references; visually checked
Tables 5.4–5.5 on printed p. 58 (PDF p. 63). Referenced studies and underlying datasets were not independently reviewed.
The cited 2014 Nordback–Sellinger WSDOT report is related prior work, not an independent confirmation reviewed here.

[^report]: Nordback, Sellinger and Phillips (2017), pp. 18–25 and 32 (inputs/annualization); pp. 40–51 (methods);
    pp. 53–58, Tables 5.1–5.5 (results and intervals); pp. 59–66 (interpretation, limitations and recommendations).
