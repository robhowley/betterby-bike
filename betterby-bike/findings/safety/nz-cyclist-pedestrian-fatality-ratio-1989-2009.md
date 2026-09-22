---
type: Finding
title: Clarke’s cyclist-to-pedestrian fatality ratio rose in an unadjusted activity-hour calculation
description:
  A 2012 review’s calculation combines New Zealand road-fatality counts with average walking and cycling hours, with an
  unresolved 2006–09 cyclist-count discrepancy.
tags: [safety, fatalities, injuries, exposure, helmets, New Zealand, measurement limits]
sources:
  - id: clarke2012
    resource: /sources/2012-evaluation-nz-bike-helmet.md
    title: Evaluation of New Zealand’s bicycle helmet law
---

# Clarke’s cyclist-to-pedestrian fatality ratio rose in an unadjusted activity-hour calculation

## In brief

- Clarke reports New Zealand’s cyclist-to-pedestrian fatality ratio, accounting for time spent on each activity,
  rising from 1.24 in 1989–90 to 2.44 in 2006–09. This is a ratio between modes, not a doubling of cyclists’ absolute
  fatality rate.[^clarke2012]
- The calculation combines official annual death counts with survey averages of hours per person. It has no confidence
  intervals, statistical test or adjustment for other changes, so it describes a relative fatality pattern rather than
  identifying a helmet-law effect.[^clarke2012]
- The source is internally inconsistent: Table 2 displays 9, 12, 10 and 8 cyclist deaths in 2006–09, which sum to 39,
  while its prose and Table 3 use 41. The reported 2.44 endpoint therefore cannot be reproduced from the displayed
  annual counts.[^clarke2012]

## Calculation

| Period | Pedestrian deaths | Cyclist deaths used in Table 3 | Average hours walked/person | Average hours cycled/person | Reported ratio |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1989–1990 | 185 | 47 | 56 | 11.4 | 1.24 |
| 1997–1998 | 125 | 28 | 57 | 6.9 | 1.85 |
| 2003–2006 | 171 | 34 | 49 | 5.4 | 1.80 |
| 2006–2009 | 151 | 41 | 50 | 5.6 | 2.44 |

The death totals are annual sums from Clarke’s Table 2, except that the final cyclist total follows the prose and Table
3 rather than the displayed annual row. Table 3 divides the period-average death count by the corresponding average
hours and compares the cyclist result with the pedestrian result. The calculation uses average time per person and does
not present population-normalized rates or uncertainty, although the common population factor would cancel in the
reported ratio if the two activity measures cover the same population. Its component values are not deaths per hour
travelled: those would require total travel hours. The reported ratios also reflect rounding of the component values.
Both modes’ annual death counts fell between the first and last periods.[^clarke2012]

The abstract’s roughly 24%-to-49% comparison is a different calculation: it rescales later death counts to earlier
per-person activity levels. It is neither a percentage of cyclists killed nor the Table 3 rate ratio. That calculation
also uses the disputed 41-death total. The separate compensation discussion on p. 6 gives 42 cyclist deaths for
2006–09, adding a third inconsistent total.[^clarke2012]

## Interpretation and limits

A higher cyclist-to-pedestrian ratio can reflect changes in exposure, mode choice, road use, enforcement, vehicle safety,
health policy or recording, not only helmets. This fatality comparison does not estimate deaths caused by the law or
compare New Zealand with an untreated jurisdiction. The review’s separate
[premature-death estimate](/findings/safety/nz-helmet-law-premature-death-estimate.md) concerns assumed lost health
benefits, not recorded road fatalities.

The [New Zealand injury-rate finding](/findings/safety/nz-cycling-injury-rates-1988-2007.md) uses different outcomes,
periods and a cycling-hours denominator. The [activity finding](/findings/networks/nz-cycling-activity-decline-1989-2009.md)
describes the survey component without treating it as a law effect.

## Related

[Interpreting cycling injury risk](/topics/cycling-injury-risk.md) explains why fatality counts, exposure denominators
and causal claims must remain distinct.

[^clarke2012]: Clarke (2012), Table 2 p. 3 and Table 3 p. 3; surrounding fatality discussion pp. 2–4. The displayed
    2006–09 cyclist values are 9, 12, 10 and 8; the prose says 41 and Table 3 uses 41/10.25. The compensation
    assessment p. 6 instead says 42. The original crash reports were not reviewed to resolve these discrepancies.
