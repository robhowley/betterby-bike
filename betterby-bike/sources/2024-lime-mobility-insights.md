---
type: Source
title: "Lessons from Lime Data: How Cities Can Use Shared Micromobility Data for Transportation Planning and Policy"
description: Lime and the League's September 2024 report compares lane use, reported incidents and parking in Washington, DC and Bloomington, with different levels of causal support.
resource: ../../raw-sources/research/league-of-american-bicyclists-mobility-insights-competition-2024-report.pdf
tags: [micromobility, bike lanes, parking, safety, Washington-DC, Bloomington]
sources:
  - id: report
    resource: ../../raw-sources/research/league-of-american-bicyclists-mobility-insights-competition-2024-report.pdf
    title: "Lessons from Lime Data, Mobility Insights Competition Report, September 2024"
---

# Lessons from Lime Data

*How Cities Can Use Shared Micromobility Data for Transportation Planning and Policy*. League of American
Bicyclists' Mobility Insights Competition Report, September 2024. Authors: Amelia Neptune, Ken McLeod,
Marissa Cruse, Brandon Haydu and Calvin Thigpen. [Original report, local PDF](../../raw-sources/research/league-of-american-bicyclists-mobility-insights-competition-2024-report.pdf).

## Study and methods

Lime and the League selected Washington, DC and Bloomington, Indiana through a competition and worked with
city staff on bicycle facilities, safety and parking. This is an operator/advocacy report, not an independent
fleet-wide audit. GPS trajectories were matched to OpenStreetMap street-segment midpoints within 10 meters
for June–August 2019–2024. Municipal data identified painted/protected lanes and installation years;
sharrows and neighborhood greenways were excluded from the lane analysis.[^report]

DC's linear difference-in-differences model compared newly treated streets with streets of similar speed limits
and lane counts, included year effects and omitted installation-year observations. Controls were selected
within one mile but more than a quarter mile away; p. 9 specifies distance from any bike infrastructure,
while the appendix describes distance from the treated lane. Bloomington lacked sufficient road-attribute data
for this model and instead compared three downtown corridors. Safety rates divide incidents reported to Lime
by trips. Parking analyses use GPS trip ends and blocked end-trip attempts, under different local rules.[^report]

## Results

- DC's model estimated **1,804 additional summer segment trips** after lane installation (95% CI 1,134–2,474),
  about 20 daily, relative to control trends. Bloomington's 7-Line volumes doubled between 2020 and 2024,
  versus 19% growth on an unlaned comparison street and 28% on an existing painted-lane street.
- The report describes lane use disproportionate to lane availability: about 40% of DC segment trip volumes
  on roughly 10% of segments, and nearly 60% versus one quarter in Bloomington. These are route-use measures,
  not shares of unique journeys made entirely in lanes or a randomized preference test.
- DC's reported incident rate fell 39% during 2021–2024 while lane use rose 38%. Bloomington's rate was fairly
  stable in 2021–2023, then reportedly fell 71% in 2024 to date. Parallel trends do not identify a lane safety effect.
- DC parking concentration increased 60% after corrals were installed, with improvement at 93% of locations.
  Bloomington showed fewer blocked parking attempts per trip at higher parking-location density.[^report]

## Interpretation and limitations

The authors recommend more dedicated infrastructure and well-placed, dense parking networks. Their proposed
benefits for pedestrian safety, operations mileage and future corral placement are not measured intervention
outcomes here. Fleet expansion, pandemic changes, route diversion and nonrandom infrastructure placement limit
attribution and transfer. Segment counts cannot establish net new citywide trips, and combined Lime results do
not isolate bicycles from scooters or represent private bicycles. Safety reporting completeness and stability
are unmeasured; absence of a report is not proof of an incident-free trip. Parking proximity is not an audit of
physical locking, sidewalk clearance or injuries.[^report]

All extracted text, including methods, references and regression Table 1, was read. Cover and parking figures
14 and 19–20 were also viewed. Other figure images, underlying data and cited external studies were not
independently reviewed. The cover dates the report September 2024, so 2024 safety comparisons are not full-year
results; the exact safety cutoff is not supplied. The appendix calls 2019–2024 “five summers” despite listing
six calendar years. Model sample size and repeated-segment error treatment are not reported in Table 1.

## Extracted Findings

- [DC lane installation and Lime segment volumes](/findings/networks/dc-lime-bike-lane-trip-volumes.md).
- [Bloomington 7-Line corridor comparison](/findings/networks/bloomington-lime-7-line-volumes.md).
- [Reported incident trends and safety limits](/findings/safety/lime-dc-bloomington-reported-incidents.md).
- [DC parking-corral concentration](/findings/design/dc-lime-parking-corral-concentration.md).
- [Bloomington parking density and blocked attempts](/findings/design/bloomington-lime-parking-density.md).

## Related

[Street redesign outcomes](/topics/street-redesign-outcomes.md) distinguishes segment use and parking behavior
from net travel or safety effects. [Cycling injury risk](/topics/cycling-injury-risk.md) separates operator
incident reporting from hospital surveillance and facility-specific exposure.

[^report]: Cover; authors p. 3; executive summary pp. 5–7; methods pp. 9–10; lane results pp. 11–16;
    safety p. 17; parking pp. 18–26; recommendations pp. 27–29; appendix pp. 31–33, Table 1.
