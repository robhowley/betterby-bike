---
type: Finding
title: California Waymo empty mileage does not establish net congestion effects
description: Secondary CPUC-data reporting puts empty mileage near 44% at the end of 2025, without measuring displaced trips or net traffic.
tags: [robotaxis, traffic, measurement, California]
sources:
  - id: gitlin
    resource: /sources/2026-ars-waymo-empty-miles.md
    title: Autonomous vehicles were supposed to cut traffic
---

# California Waymo empty mileage does not establish net congestion effects

## In brief

- Ars Technica reports that passenger-occupied Waymo mileage in California rose from 36% to about 56% over August
  2023–December 2025, then plateaued: about 44% of mileage remained empty near the end.
- Empty miles per trip reportedly declined, but the article does not measure trips displaced, induced demand or net
  congestion. Its roughly 40% Uber/Lyft comparison is not a matched evaluation.[^gitlin]

## Evidence and denominator

The reported Abdelhalim analysis covers 13.8 million trips, 19.3 million passengers and 86.3 million vehicle
miles in CPUC records. The 44% figure is a share of miles, not trips, and the endpoint is not the full-period
average. Empty travel includes waiting for assignments and pickup travel. Pickup mileage reportedly fell
as the fleet expanded; the author suggests freeway service partly accounts for declining empty miles per trip.[^gitlin]

A Raifman analysis of January 2024–September 2025 reportedly found 44% empty miles, two-thirds of them while
waiting for assignments. It uses overlapping Waymo/CPUC data, not an independent fleet sample. Gitlin's
San Francisco sightings are personal observations, not additional quantitative evidence.[^gitlin]

## What remains unknown

Only the news coverage was reviewed. It provides neither uncertainty intervals nor enough classification
and sampling detail to reproduce the estimates. The ride-hailing comparator lacks matched periods,
geographies and definitions. Empty mileage consumes road space but cannot alone establish whether the
service increases or reduces total vehicle mileage, travel delay or emissions relative to users' alternatives.
Nor does this establish a cycling-infrastructure effect or a safety comparison adjusted for occupancy.

This complements [congestion-measurement limits](vtpi-congestion-measurement-limits.md): operational mileage,
traffic intensity and person-delay answer different questions. See the
[street-redesign synthesis](../../topics/street-redesign-outcomes.md#empty-vehicle-mileage-is-not-a-net-congestion-estimate).

[^gitlin]: Gitlin (2026), PDF pp. 2–3, “Is there anyone in there?” and “No better, no worse than ride-hailing.” Underlying studies and CPUC data not independently reviewed.
