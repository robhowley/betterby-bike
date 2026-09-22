---
type: Source
title: NJTPA Trip Potential Analysis, final revised June 2023
description: >-
  Toole Design's regional walking and cycling potential scores use weighted spatial indicators, not observed trips or
  validated demand forecasts.
resource: ../../raw-sources/research/2023-njtpa-trip-potential-analysis.pdf
tags: [trip potential, planning, New Jersey, land use, access]
sources:
  - id: memo
    resource: ../../raw-sources/research/2023-njtpa-trip-potential-analysis.pdf
    title: Trip Potential Analysis – FINAL REVISED (6/16/23)
---

# NJTPA Trip Potential Analysis

## Publication and access

Toole Design memorandum by Theja Putta and Michael Blau to Keith Hamas, North Jersey Transportation Planning
Authority, for its Regional Active Transportation Plan. The heading is dated August 12, 2022; the subject identifies
the final revision as June 16, 2023. The filename's 2023 date is therefore a revision date, not a travel-observation year.

Read the extracted text of the supplied 24-page PDF, including the complete substantive memo (PDF pp. 1–9),
Tables 1–2, equations and appendix captions. Visually inspected the equations (p. 3), composite maps and the
Phillipsburg comparison (Figures 1–3, PDF pp. 6–8). Appendix A/B variable-map images on pp. 11–17 and 19–24 were not
visually reviewed;
no additional local results are extracted from them. The underlying GIS layers, barrier analysis, network screening,
environmental-justice datasets and cited Christian et al. land-use-mix study were not independently reviewed.
The local PDF is the publication reviewed; no external publication URL is supplied here.

## Question and method

The analysis identifies places where development and socioeconomic indicators suggest greater walking and cycling
trip potential. It divides the NJTPA region into hexagons 500 feet across, percentile-scales inputs with different
units and combines them into weighted-average scores from 0 to 100. Most inputs use quarter-mile pedestrian
buffers and one-mile bicycle buffers. ACS 2019 population, poverty and vehicle-access data and LEHD 2019 jobs are
allocated proportionally by spatial overlap. Other inputs include intersections, transit stops and land-use mix.[^memo]

Table 1 gives pedestrian/bicycle weights respectively: population 30/30, employment 20/20, intersection density
10/0, poverty 10/15, households without vehicles 10/15, transit 10/10 and land-use mix 20/20. Each column totals
110; these are relative weights, not percentages summing to 100. The results section describes a weighted average
but gives no worked composite calculation. Its later statement that both modes use the same variables and weights
conflicts with Table 1 and its own discussion of omitted bicycle intersections.

Land-use mix uses five categories: retail, large employment locations (census blocks with at least 100 jobs),
community health/welfare destinations, residential area and parks. It converts each category's counts or area into
regional percentiles, then measures their balance with an entropy formula. An equal, nonzero percentile across
all categories produces the stated maximum of 100; only one category present produces zero. It is not simply a
count of destinations or total development. Bicycle transit excludes regular local bus stops, retaining rail,
regional express bus and ferry stops.[^memo]

## Results and intended use

Walking and cycling maps have similar broad patterns: high scores in the urbanized east, with lower values in
much of Sussex, Warren and Hunterdon counties but higher-scoring towns within them. Phillipsburg scores 90–100
for both modes; the one-mile bicycle search distance spreads its high-potential area farther outward than the
quarter-mile pedestrian search. The memo attributes broader bicycle high-score coverage to that distance choice,
not to measured extra cycling.[^memo]

The team reports comparing potential with connectivity barriers and overlaying NJDOT safety screening and NJDEP
environmental-justice data to identify starting areas for a conceptual regional active-transportation network.
This is a planning application, not an evaluation of a built network or its benefits.

## Interpretation limits

No observed-trip calibration, predictive accuracy, uncertainty intervals or weight-sensitivity analysis is reported.
The memo has no dedicated limitations section. Poverty and lack of vehicles are score inputs, not evidence that
safe access or equitable outcomes have been delivered. Buffer proximity does not establish a traversable route;
barriers are considered separately. The authors' rationale for excluding bicycle intersection density is a modeling
choice, not a measured null effect of intersections in this region. Low scores likewise do not demonstrate that
people have no unmet travel needs.

## Finding

- [NJTPA trip-potential scores are planning indicators, not trip forecasts](/findings/networks/njtpa-trip-potential-score-limits.md).

[^memo]: Supplied PDF, pp. 1–4 (methods, Tables 1–2 and equations 1–2), pp. 4–8 (results and Figures 1–3), p. 9 (Next
    Steps).
