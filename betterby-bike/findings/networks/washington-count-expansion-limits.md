---
type: Finding
title: Washington's available counts could not support reliable statewide walking and cycling mileage
description: Nonrandom busy-site sampling, missing rural counts and borrowed bicycle-only temporal factors undermined the 2017 report's mileage demonstrations.
tags: [Washington, networks, measurement, bicycle counts]
sources:
  - id: report
    resource: /sources/2017-estimating-walking-bicycling-state-level.md
    title: Estimating Walking and Bicycling at the State Level
---

# Washington's available counts could not support reliable statewide walking and cycling mileage

## In brief

- A 2017 Washington report could not confidently estimate statewide walking or cycling miles from the available
  counts: sites were not randomly selected, rural coverage was missing and busy locations may have been oversampled.[^report]
- Short counts were expanded using **one Seattle bridge's bicycle patterns**, even for pedestrians and other
  climates. The authors explicitly call these placeholder calculations, not accurate annual volume estimates.[^report]
- Their recommendation is representative spatial sampling plus continuous counts matched to travel patterns,
  not simply collecting more counts at existing busy sites.[^report]

## Spatial coverage and mileage expansion

The main spatial dataset contained 386 two-hour manual counts at 211 intersections in 39 jurisdictions in 2013.
The proposed method divides road/path segments into 24 groups: four regions, urban/rural and three facility types
(highway/arterial, local/collector and trail). Average annualized volume in each group is multiplied by its
centerline mileage and by 365. Existing sites did not implement the proposed random sampling within groups.[^report]

Table 5.3's count-based totals, 4,900 million pedestrian miles and 1,540 million bicycle miles annually, cover
**Puget and Eastern regions only**, not Washington as a whole. Lack of rural counts prevented proper statewide
application. Network length also matters: the report calculated 156,109 centerline road/path miles versus a cited
FHWA roadway estimate of 83,527, with the discrepancy attributed to local streets. This is not a reconciled
road-network denominator.[^report]

## Temporal adjustment and model limitations

Hourly/daily and monthly factors came from Fremont Bridge bicycle counts from October 2012 through September 2013.
The bridge's commute-heavy profile cannot simply represent recreational routes, other climates or pedestrian travel.
No continuous pedestrian record was available. Adding demographic predictors to count-derived annual volumes does
not remove these input limitations.[^report]

The aggregate models explained a reported 34% of bicycle-volume variation and 16% of pedestrian-volume variation.
Table 5.4 shows positive bridge and trail associations for bicycles, but neither is significant at the 0.1 level for
pedestrians (p = 0.204 and 0.113); pedestrian college-degree share is also nonsignificant (p = 0.690). Neither the
model fit nor the bicycle associations demonstrate causal facility effects or reliable transfer outside Washington.[^report]

## What the authors recommend

Continuous counters should span regions, urban/rural settings and on-street/path travel patterns. Short-duration
sites should be randomly sampled within strata, with rotation across years possible once continuous monitoring
supports temporal adjustment. Survey oversampling addresses a separate need for statewide travel estimates.
GPS tracks may help fill geographic gaps, but the authors require comparison with observed counts before treating
them as total-volume estimates. These are proposed improvements, not an evaluated successful statewide program.[^report]

## Related

- [King County method comparison](/findings/networks/king-county-travel-mile-estimation.md): the numerical
  demonstration shares these limitations and is not an actual-travel baseline.
- [Who walks and bikes to work?](/topics/active-commuting-and-access.md): count locations, commute shares and
  total miles measure different aspects of travel.

[^report]: Nordback et al. (2017), pp. 18–25, Tables 3.1–3.2 (count data and placeholder factors);
    pp. 35, 40–51 (GPS qualification and proposed methods); pp. 53–58, Tables 5.2–5.4 (coverage, mileage and models);
    pp. 63–66, Table 7.1 (limitations and recommendations).
