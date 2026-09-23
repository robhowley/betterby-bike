---
type: Finding
title: Denser Bloomington parking locations were associated with fewer blocked Lime parking attempts
description: Spatial GPS/app data show fewer blocked attempts per trip at higher parking-pin density, not an experimentally established universal minimum.
tags: [micromobility, parking, Bloomington, measurement]
sources:
  - id: lime2024
    resource: /sources/2024-lime-mobility-insights.md
    title: Lessons from Lime Data
---

# Denser Bloomington parking locations were associated with fewer blocked Lime parking attempts

## In brief

- In Bloomington's mandatory parking areas, **blocked Lime parking attempts per trip generally decreased as
  parking-location density increased**; the report gives **61 corrals/km² downtown** and **52/km² on Indiana
  University's campus**.
- This is a spatial association in app/GPS data, not a before/after intervention estimate, a count of obstructing
  vehicles or proof of a universal density threshold.[^lime2024]

## Evidence and measurement

A blocked attempt occurs when a rider tries to end a trip but GPS indicates the vehicle is outside a designated
parking location. Figure 19 plots hexagonal areas' **blocked attempts divided by trips** against **parking pins
per square kilometer**. Its fitted curve declines with density, including above 25 pins/km², with substantial
variation between areas. An attempts/trips ratio is not necessarily the share of distinct riders or journeys
that experienced a failure: repeat attempts are not described.[^lime2024]

The report invokes an external Meng et al. study's 25 locations/km² minimum and recommends higher density,
including 75–100 spots/km². Those are cited guidance and author interpretation, not a threshold experimentally
established here. “Locations,” “pins” and “spots” do not quantify the number of vehicles each location holds.
Seven of the ten highest-clustering corrals were in the city and three on campus; four were along the B-Line.[^lime2024]

## Limits

No adjusted effect, uncertainty interval or before/after comparison is provided. Trip demand, destinations,
geofencing and GPS accuracy can influence blocked attempts as well as density. Outside mandatory areas,
absence of blocks can simply mean parking is allowed anywhere. The data support identifying possible unmet
parking demand, not asserting that every blocked attempt proves missing infrastructure or that a particular
density prevents sidewalk obstruction. The underlying Meng et al. study was not independently read.[^lime2024]

## Related

[DC corral concentration](dc-lime-parking-corral-concentration.md) uses a different policy and outcome.
[Street redesign outcomes](/topics/street-redesign-outcomes.md) separates parking behavior from safety effects.

[^lime2024]: Report methods p. 10; pp. 22–25, especially Figure 19 (visually read), Figures 18 and 20–21;
    external Meng et al. reference p. 30.
