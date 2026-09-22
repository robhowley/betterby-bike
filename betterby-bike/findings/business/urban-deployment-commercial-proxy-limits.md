---
type: Finding
title: Urban-deployment commercial scores do not measure receipts or net economic gains
description: Transformed national rankings, incomplete coverage and nonrandom placement limit economic interpretation of Citi Bike and LinkNYC comparisons.
tags: [business, measurement, bikeshare]
sources:
  - id: paper
    resource: /sources/impact-urban-technology-deployments-local-commercial-activity.md
    title: Impact Of Urban Technology Deployments On Local Commercial Activity
---

# Urban-deployment commercial scores do not measure receipts or net economic gains

## In brief

- The Citi Bike/LinkNYC study converts monthly Mastercard national quantile rankings into **approximate relative
  commercial-activity proxies**. Reported percentage changes are not directly measured dollar receipts.
- Privacy-related data suppression and top-rank saturation constrain the available locations; station/kiosk
  placement is nonrandom. Nearby controls and prior-year tests do not remove all local confounding.
- Even a genuine nearby sales increase could shift purchases from other businesses. The study cannot establish
  net citywide economic growth, profits, cyclist spending or benefits from protected bicycle lanes.[^paper]

## What was measured

Mastercard Retail Location Insights ranks areas by commercial characteristics, including sales and transactions.
The authors apply an inverse cumulative distribution transform, using a Census-informed log-normal distribution,
to construct a linear proxy. They explicitly say resulting values approximate activity and do not represent
its actual payment-card scale. Individual business records are unavailable; eating-place blocks need more than
five businesses to receive scores. Manhattan's top-percentile eating scores make fluctuations hard to detect,
so the analyses focus on Brooklyn and Jersey City.[^paper]

This selects commercially observable areas rather than a representative sample of every station or business.
No per-cyclist purchase attribution is possible. Sales and transaction proxies remain distinct outcomes, as
[Brooklyn's transaction-only pattern](brooklyn-citi-bike-commercial-activity.md) demonstrates.

## What comparisons cannot resolve

[Jersey City's positive association](jersey-city-citi-bike-commercial-activity.md) includes major transit hubs
not represented in controls. Concurrent local changes could explain some growth despite a weak prior-year
trend. Distance-decay analysis could not be adequately performed there; the Brooklyn proximity comparison was
inconclusive. Statistical significance is not evidence that only the deployment changed.[^paper]

The authors explicitly leave open whether nearby growth comes at the expense of farther-away businesses.
Broader-area growth does not itself identify the deployment's contribution to total spending. They recommend
more granular earnings, tax and opening/closure data for a more reliable magnitude and causal assessment.
The same issues constrain the paper's LinkNYC comparison, which is not independent cycling evidence.

See [Evaluating street redesign outcomes](/topics/street-redesign-outcomes.md) for distinctions between these
proxies, tax-record sales, employment, customer surveys and economic forecasts.

[^paper]: Sobolevsky et al., pp. 4–6 (data and counterfactual methods), pp. 7–11 (coverage/proximity limits),
    pp. 13–14 (selection, alternative causes, spending redistribution and further-data needs).
