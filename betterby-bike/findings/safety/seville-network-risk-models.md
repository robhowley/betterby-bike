---
type: Finding
title: Seville's network and safety-in-numbers models fit risk trends without identifying causality
description: A before/after network indicator improved regression fit, but correlated predictors and an uncontrolled time series prevent isolating connectivity or safety-in-numbers effects.
tags: [Seville, safety, networks, safety in numbers, causality]
sources:
  - id: seville
    resource: /sources/2016-seville-ridership.md
    title: On the effect of networks of cycle-tracks on the risk of cycling. The case of Seville
---

# Seville's network and safety-in-numbers models fit risk trends without identifying causality

## In brief

- Seville's models cannot establish that connectivity caused the [lower collision rate per estimated trip](seville-motor-vehicle-collision-risk.md):
  the main 2006–2013 analysis has one pre-network year and no untreated comparison.[^seville]
- Adding a before/after network marker improved the model's fit to annual collision rates, but did not directly
  measure connectivity and could reflect other changes.[^seville]
- More cycling alongside lower rates cannot show which caused which: safer conditions could attract cyclists,
  or both could reflect infrastructure and other changes.[^seville]

## Model results

For **eight annual observations in 2006–2013**, Seville's regression of police-recorded bicycle–motor-vehicle collisions
per million estimated trips on cycle-track length had **R² 0.847**. Adding a binary indicator (0 in 2006, 1 thereafter)
raised **R² to 0.930**, an increment of 0.083 (reported F for the increment 5.966). The authors describe improvement
at greater than 90% confidence. The fitted indicator coefficient was **−5.143 collisions per million trips**, standard
error **2.106**, conditional on track length. It is not an experimentally identified network benefit.[^seville]

The authors interpret the indicator as evidence that connecting tracks adds safety beyond adding kilometres. However,
it is a before/after marker, not a direct connectivity measure, and has only one pre-network observation in this main
analysis. Track length and trip totals are strongly correlated (**r = 0.944**). The city lacks an untreated comparison,
and other changes can coincide with the indicator. Extending to 2000–2013 gives qualitatively similar results, but
requires assuming unchanged trip totals for 2000–2005.[^seville]

A separate nonlinear model used risk = a₀ + a₁ × trips^(β−1). Among exponents tested in 0.1 increments from −0.1 to
−0.9, **−0.6** made the intercept closest to zero (**a₀ = 0.332; R² = 0.841**). This matches the exponent discussed in
Jacobsen's safety-in-numbers work, but was selected for its near-zero intercept, **not the largest R²**. It does not
show that adding cyclists alone makes cycling safer; safer conditions could attract cyclists, or both could reflect
infrastructure and other changes.[^seville]

The authors acknowledge that regressions cannot determine causal direction and then argue, using the history of the
project, that network construction reduced risk and encouraged cycling, with possible feedback from cyclist numbers.
That remains their interpretation. Reported motor-traffic decline, bike sharing, pedestrianization, uncertain police
reporting and estimated exposure further limit causal attribution. Recommendations for traffic calming and motor-traffic
restrictions after network completion were not tested in this study.[^seville]

## Related

- [Seville collision rates](seville-motor-vehicle-collision-risk.md): the observed outcome being modeled.
- [Seville trip estimates](/findings/networks/seville-citywide-bicycle-trips.md): estimated exposure and its assumptions.
- [Interpreting cycling injury risk](/topics/cycling-injury-risk.md): distinguish association from intervention effects.
- [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md): network-scale and corridor-scale comparisons.

[^seville]: Marqués and Hernández-Herrador, supplied manuscript, sections 4.1–4.2, Tables 4–7, Figures 1–3;
    section 5 (causal interpretation and concurrent changes); conclusions (policy recommendations).
