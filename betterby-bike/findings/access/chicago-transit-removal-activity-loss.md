---
type: Finding
title: Chicago transit-removal model loses activities despite more cars
description: Complete transit removal plus assumed car purchases reduces modeled daily activities more sharply in Chicago than across its metropolitan region.
tags: [transit, access, simulation, travel time, Chicago]
sources:
  - id: verbas2024
    resource: /sources/2024-chicago-transit-removal-mobility-equity-economy.md
    title: Impact of Transit on Mobility, Equity, and Economy in the Chicago Metropolitan Region
---

# Chicago transit-removal model loses activities despite more cars

## In brief

- Relative to a modeled 2025 baseline, complete transit removal with 1.9 million assumed additional cars reduces
  daily activities 8.6% regionally and 19.9% in Chicago. These are simulation results, not observed closures.
- Average travel times rise 14.2% regionally and 34.7% in the city, even after activity cancellations reduce
  traffic. Less completed travel can indicate lost access rather than improved mobility.[^verbas2024]

## Activities and comparison

POLARIS models a 24-hour day with activity scheduling, mode choice and traffic feedback. All zero-car households
are assumed to buy a car and all one-car households a second car, increasing ownership 30%. The modeled baseline
uses mixed 2019/2024 agency schedules, not observed 2025 service or travel.[^verbas2024]

| Modeled daily outcome | Metropolitan region | City of Chicago |
| --- | --- | --- |
| Baseline activities | 21.80 million | 5.78 million |
| Activities after removal | 19.92 million | 4.63 million |
| Non-work cancellation rate | 11.8% | 26.9% |
| Work/school cancellation rate | 2.8% | 7.3% |
| Overall cancellation rate | 8.6% | 19.9% |

The losses are not uniform: regional healthcare activities fall 5.4% and pickup/dropoff 24.7%, while school
falls 0.5%. Corresponding city declines are 19.1%, 33.8% and 1.2%. Small EV-charging activity counts increase,
so not every category declines. Tables round counts; reported changes use the paper's percentages.[^verbas2024]

## Limits and use

Complete removal and imposed car purchases form a joint counterfactual. Results cannot isolate removal from
ownership changes or predict a particular route cut, gradual service decline, long-term relocation or bicycle
investment. No uncertainty intervals or car-purchase sensitivity results are supplied. Activity cancellations
are model outputs, not directly counted unmet journeys. Congestion relief from abandoned activities should
not be interpreted as restored access.[^verbas2024]

## Related

- [Equity shares](chicago-transit-removal-equity-shares.md): who accounts for cancellations, not within-group rates.
- [Economic accounting](/findings/business/chicago-transit-removal-economic-accounting.md): conditional valuation.
- [Commuting and access](/topics/active-commuting-and-access.md): trip counts alone do not establish usable access.

[^verbas2024]: Verbas et al. (2024), §§3–4, pp. 4–8; §§5.2–5.3, pp. 10–12, Figure 7 and Tables 1–2;
    §6, pp. 15–16. Travel-time changes are stated in the text accompanying Figure 7.
