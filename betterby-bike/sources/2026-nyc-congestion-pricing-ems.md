---
type: Source
title: "Congestion Pricing and Emergency Medical Service Response: Evidence from New York City"
description: A boundary-based NYC working paper estimates shorter ambulance hospital transport after congestion pricing, with imprecise incident-arrival gains and sensitivity limits.
resource: ../../raw-sources/research/congestion-pricing-and-emergency-medical-service-response-evidence-from-new-york-city-nber.pdf
tags: [congestion pricing, emergency response, traffic, measurement, New York City]
sources:
  - id: chikish2026
    resource: ../../raw-sources/research/congestion-pricing-and-emergency-medical-service-response-evidence-from-new-york-city-nber.pdf
    title: "Congestion Pricing and Emergency Medical Service Response: Evidence from New York City"
---

# Congestion Pricing and Emergency Medical Service Response: Evidence from New York City

Yulia Chikish, Gregory J. Colman, Dhaval M. Dave, Brad R. Humphreys, Zachary Santamaria and Zachary Winship.
NBER Working Paper 35414, July 2026, revised August 2026. The cover explicitly states that this working paper
has not been peer reviewed. [Original publication](https://www.nber.org/papers/w35414) ·
[Local PDF](../../raw-sources/research/congestion-pricing-and-emergency-medical-service-response-evidence-from-new-york-city-nber.pdf).

## Question and design

The paper examines ambulance travel after NYC introduced congestion pricing on January 5, 2025. Its primary
difference-in-discontinuities design compares changes on either side of Manhattan's 60th Street boundary,
subtracting pre-existing spatial differences. The main EMS data cover 2024–2025, with 2023–2024 placebo analyses;
traffic-camera data extend only about nine weeks after implementation. The design estimates a boundary effect,
not an average effect throughout Manhattan or a bicycle-lane treatment.[^chikish2026]

Exact incident coordinates are unavailable. The authors intersect administrative boundaries into 188 polygons,
use alternative representative points and estimate shortest routes to the nearest station and hospital.
Treatment depends on which side contains most of the inferred route, not tracked ambulance travel. Models
include temporal, dispatch-area and incident controls; main EMS standard errors cluster by polygon.[^chikish2026]

## Main results

- Within five kilometres of the boundary, Table 5 estimates **63–70 seconds less combined ambulance travel
  (5.3%–5.9%)**, mainly **54–59 seconds less scene-to-hospital travel**. Assignment-to-scene estimates of
  **7–9 seconds less** are not statistically distinguishable from zero. Combined travel excludes call handling,
  on-scene treatment and hospital handover, and requires a hospital transport with valid times.
- Full-Manhattan Table 5 estimates are smaller: roughly **28–31 seconds less combined travel (2.3%–2.6%)**.
  Table A1's two-kilometre and quadratic specifications have statistically insignificant hospital/total results,
  qualifying the prose's broad robustness claims. Bicycle-lane/construction controls leave point estimates
  similar, but do not estimate the effects of those street treatments.
- Table 3 reports **20.6% lower passenger-vehicle density**, **18.1% lower truck density**, **13.5% higher
  pedestrian density** and **19.8% higher bicycle density** near the boundary. These are camera snapshot
  object counts, not trips, mode shares or tracked switching from driving; bicycle counts are extremely sparse.
- The authors describe early gains that attenuate, modest traffic increases immediately north of the boundary,
  little systematic nearby EMS worsening and some positive hospital/total-time coefficients deeper inside the
  zone. These spatial results are descriptive, not evidence that all neighborhoods improved.[^chikish2026]

## Interpretation and limitations

A March 12, 2025 FDNY nearest-hospital directive complicates attribution. Standard difference-in-differences
estimates show longer hospital/total travel in the full sample; a post-directive interaction separates earlier
negative estimates from later positive ones. The authors favor the boundary design because it removes common
local changes. That protection depends on other changes affecting both sides smoothly, not on the design being
immune to concurrent policies.[^chikish2026]

Placebo and non-transport on-scene tests are null; small severity differences are statistically significant.
Inferred locations/routes, specification sensitivity and local identification limit transfer. No patient survival,
citywide net welfare or isolated cycling effect is measured. The proposed health/welfare benefit relies on
external response-time research, not observed health improvements here.[^chikish2026]

Internal reporting differences remain unresolved: Table 2 camera observations total 1,220,036 versus 2,360,613
in Table 3; Table 10 notes 195 polygons versus 188 in the methods. Narrative significance claims exceed Tables
5, 9 and 10 in places. Table A2 changes the clustering unit and yields different significance from Table 5.
Use named tables and specifications rather than pooling these results or silently reconciling them.

Read all extracted text, including main Tables 1–10 and appendix Tables A1–A2 (printed pp. 2–43 plus front
matter). Maps and plotted figures were not visually reviewed or digitized; spatial/dynamic descriptions above
are explicitly the authors' prose accounts. No underlying data, code, FDNY directive or cited studies reviewed.

## Extracted findings

- [Ambulance travel estimates](/findings/operations/nyc-congestion-pricing-ems-travel.md): distinguish hospital travel
  from incident arrival.
- [Camera density changes](/findings/operations/nyc-congestion-pricing-camera-density.md): local object counts, not trip
  substitution.
- [EMS identification and sensitivity limits](/findings/operations/nyc-congestion-pricing-ems-limits.md): concurrent
  policy, route proxies and null specifications.

## Related

- [Street redesign outcomes](/topics/street-redesign-outcomes.md): integrates this pricing study without treating it as
  a lane evaluation.
- [2019 FDNY news account](2019-streetsblog-fdny-traffic-is-the-problem.md): an earlier fire-company trend, not
  independent evidence for this 2025 pricing effect.

[^chikish2026]: Chikish et al. (August 2026 revision), printed pp. 9–20, data/design and Tables 1–3;
    pp. 22–28, Tables 5–8; pp. 28–37, dynamics, spatial analysis, Tables 9–10 and interpretation;
    pp. 42–43, Tables A1–A2. Locators use printed page numbers, not PDF sheet numbers.
