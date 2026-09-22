---
type: Source
title: Impact Of Urban Technology Deployments On Local Commercial Activity
description: Citi Bike and LinkNYC comparisons using transformed commercial-activity scores, with positive Jersey City associations, weaker Brooklyn cycling results and unresolved causal and measurement limits.
resource: ../../raw-sources/research/impact-urban-technology-deployments-local-commercial-activity.pdf
tags: [business, bikeshare, Jersey City, Brooklyn, measurement]
sources:
  - id: paper
    resource: ../../raw-sources/research/impact-urban-technology-deployments-local-commercial-activity.pdf
    title: Impact Of Urban Technology Deployments On Local Commercial Activity
---

# Impact Of Urban Technology Deployments On Local Commercial Activity

## Publication and access

Stanislav Sobolevsky, Ekaterina Levitskaya, Henry Chan, Shefali Enaker, Joe Bailey, Marc Postle, Yuriy
Loukachev, Melinda Rolfs and Constantine Kontokosta. The supplied 23-page manuscript has no visible publication
date, venue or DOI; PDF creation metadata says December 2017, which is not a verified publication date.
[Original supplied manuscript](../../raw-sources/research/impact-urban-technology-deployments-local-commercial-activity.pdf).
Read the complete extracted text, including methods, Tables 1–6, discussion, references and appendix captions;
visually checked Tables 2–3 and the Jersey City coverage map (Figure A4). Other map/screenshot details were not
used as evidence. Underlying Mastercard data and cited studies were not independently accessed.

## Question and methods

The authors test whether Citi Bike stations are associated with nearby eating-place activity and LinkNYC kiosks
with broader commercial activity. Mastercard Retail Location Insights supplies monthly national quantile scores,
not raw business receipts. An inverse distribution transform using Census-informed log-normal parameters creates
approximate relative activity proxies. Compliance restrictions leave incomplete spatial coverage; eating-place
blocks require more than five businesses, and top-percentile saturation limits Manhattan analysis.[^paper]

The design compares same-season before/after activity against nearby untreated areas, with KS distribution tests,
a Jersey City difference-in-differences regression and prior-year placebo comparisons. Citi Bike analyses cover
Brooklyn deployment phases in 2013, 2015 and 2016, and five available blocks near Grove Street and Journal Square
PATH stations after September 2015 deployment. Jersey City/Hoboken blocks without nearby bikeshare stations are
controls. Brooklyn LinkNYC analysis covers ten blocks near seven deployments, comparing December 2016–May 2017
against December 2015–May 2016, with 14 deployment/surrounding ZIP codes as the broader comparison.[^paper]

## Results and interpretation

- Jersey City eating-place sales proxies rose **3.624%**, versus **−0.894%** in controls; transaction proxies
  rose **2.723%**, versus **0.257%**. Reported regression interaction p-values are 0.0003 for sales and 0.0274
  for transactions. Prior-year and non-food comparisons were weaker, but these are not randomized station effects.
- Brooklyn ZIP-code eating-place transaction changes were modestly positive; the distribution comparison did
  **not** reach the conventional 5% threshold (p=0.0724), and sales did not confirm the pattern. A separate
  all-business proximity gradient after the 2016 deployment was also not statistically validated.
- LinkNYC blocks had sales/transaction proxy changes of **3.027%/3.174%**, versus **0.721%/0.704%** in controls
  (Table 6, KS p=0.0029 for each). One Table 5 block had declining sales. These are a different intervention,
  not additional cycling evidence; the authors' navigation/visibility mechanism was not directly tested.[^paper]

The authors frame this as proof-of-concept evidence, not definitive causation. Placement favors important urban
locations; the Jersey City deployment area includes major transit hubs absent from controls. Other concurrent
changes, sparse available blocks and approximate scores limit interpretation. Local growth may redistribute
spending rather than create net citywide gains. Funding came from Future Cities Catapult, with a Mastercard
Center for Inclusive Growth data grant; Mastercard also had a Citi Bike payment-partner role.[^paper]

## Reporting inconsistencies

Table 2 repeats September 2015–August 2016 as both post and supposed prior-year periods and also mislabels the
placebo dates. Preserve the stated post period and intended prior-year comparison without silently repairing the
caption. For LinkNYC, p. 12 says prior growth was −0.37%, Table 6 says +0.374%, and Table 5's listed prior
values do not reconcile to that mean. Do not treat the placebo magnitude as verified. Table 3's ± quantities
are not identified as confidence intervals; the paper discusses variability but does not clearly define these
entries as it does the Table 6 standard deviations.

## Findings and connections

- [Jersey City eating-place association](/findings/business/jersey-city-citi-bike-commercial-activity.md).
- [Brooklyn's weaker and nonsignificant comparisons](/findings/business/brooklyn-citi-bike-commercial-activity.md).
- [Score, selection and net-gain limits](/findings/business/urban-deployment-commercial-proxy-limits.md).
- [Street-redesign synthesis](/topics/street-redesign-outcomes.md).

Title, author, Citi Bike, LinkNYC, Mastercard, location and numerical searches found no existing representation
of this publication or its original analyses. Its cited Portland spending and Montreal property research overlaps
existing secondary coverage, not new independent confirmation. Those background results were not re-extracted.

[^paper]: Sobolevsky et al., pp. 3–6 (setting, measurement and methods), pp. 7–10, Tables 1–4 (Citi Bike),
    pp. 11–13, Tables 5–6 (LinkNYC), pp. 13–14 (limitations and funding), p. 22, Figure A4 (coverage).
