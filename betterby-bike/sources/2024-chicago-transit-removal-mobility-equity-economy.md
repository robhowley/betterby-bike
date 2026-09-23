---
type: Source
title: Impact of Transit on Mobility, Equity, and Economy in the Chicago Metropolitan Region
description: A Chicago agent-based transit-removal scenario estimates lost activities, unequal cancellation burdens and illustrative economic costs under assumed increased car ownership.
resource: ../../raw-sources/research/2409-04568-impact-of-transit-on-mobility-equity-and-economy-in-the-chicago-metropolitan-re.pdf
tags: [transit, access, equity, simulation, Chicago]
sources:
  - id: verbas2024
    resource: ../../raw-sources/research/2409-04568-impact-of-transit-on-mobility-equity-and-economy-in-the-chicago-metropolitan-re.pdf
    title: Impact of Transit on Mobility, Equity, and Economy in the Chicago Metropolitan Region
---

# Chicago transit-removal simulation

Omer Verbas, Taner Cokyasar, Seamus Joyce-Johnson, Scott Wainwright, Maeve Coates, Aymeric Rousseau,
Jim Aloisi, Anson Stewart and Joshua Auld. [arXiv:2409.04568v1](https://arxiv.org/abs/2409.04568v1).
The arXiv stamp says September 6, 2024; the manuscript title page says September 10, 2024.
This supplied preprint does not establish peer-reviewed publication status.

## Study and scenarios

POLARIS integrates synthetic households, activity schedules, freight, mode/route choice and traffic assignment
over 24 hours. The authors compare a modeled 2025 Chicago metropolitan baseline with complete removal of
CTA, Pace, Metra and South Shore Line service. The baseline combines March 19, 2024 Pace/Metra schedules
with October 8, 2019 CTA/South Shore schedules, assuming CTA service recovery. It is not observed 2025 travel.
The removal scenario also assumes every zero-car household buys one car and every one-car household buys
another, adding 1.9 million cars (30%). These are imposed assumptions, not observed purchase responses.[^verbas2024]

## Results

- Average travel times rise 14.2% regionally and 34.7% within Chicago; modeled daily activities fall 8.6%
  regionally and 19.9% in the city. Non-work cancellations exceed work/school cancellations. Activity loss
  moderates subsequent congestion, so traffic alone does not capture lost access.
- In the city, women account for 53.0% of all cancellations and the lowest two household-income quintiles
  account for 48.0%. These are shares of cancellations, not percentages of each group's activities cancelled.
- Illustrative annual losses total $35.4 billion: $4.6 billion in spending, $10.4 billion in net valued travel
  time and $20.4 billion in assumed extra-car costs. Dividing by $2.7 billion annual transit operating funding
  gives the authors' approximately 13:1 comparison, not a measured marginal investment return.[^verbas2024]

The paper also combines CMAP survey transit care-trip counts with selected simulated activity categories to
estimate a 12% (about 27,000 daily trips) mobility-of-care reduction. This is a hybrid extrapolation, not direct
observation of cancelled care journeys. Recommendations for service improvements, bus priority and land-use
change are future research proposals, not interventions evaluated here.[^verbas2024]

## Access and limitations

Read extracted text of all 21 pages, including methods, Tables 1–3, results, conclusions and references.
Figure-supported numerical claims below are explicitly repeated in the text; charts/maps were not digitized
or independently visually reviewed. External references, underlying data and model code were not reviewed.
Title, arXiv ID, author, POLARIS and transit-removal searches found no matching bundle Source or Finding.

This extreme joint transit-removal/car-purchase scenario does not estimate incremental service cuts, gradual
revenue/service decline or a cycling intervention. The authors explicitly leave gradual evolution and long-term
land-use changes to future work. Section 3.5 cites earlier validation studies rather than supplying scenario-specific
accuracy diagnostics; results lack uncertainty intervals and a sensitivity analysis of the car-purchase assumption.
The economic estimate mixes spending, valued time and household vehicle costs, not measured GDP or fiscal returns.
No emissions or cyclist-safety effects are estimated despite the paper's broad net-zero framing.[^verbas2024]

## Findings

- [Modeled activity loss and travel times](/findings/access/chicago-transit-removal-activity-loss.md).
- [Cancellation shares and equity denominators](/findings/access/chicago-transit-removal-equity-shares.md).
- [Economic valuation and the 13:1 comparison](/findings/business/chicago-transit-removal-economic-accounting.md).

## Related

- [Commuting and access](/topics/active-commuting-and-access.md): completed travel and available access differ.

[^verbas2024]: Verbas et al. (2024), pp. 4–8, §§3–4 (model and scenarios); pp. 9–14, §§5.1–5.4,
    Tables 1–2 and Figures 7–8 (results); pp. 13–16, §§5.5–6 and Table 3 (valuation and future work).
