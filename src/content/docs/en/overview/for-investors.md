---
title: For investors and partners
description: Business model, deployment shape and regulatory path of KomPACS.
sidebar:
  order: 4
---

:::caution[Prototype, not a medical device]
KomPACS is a proof of concept (POC). It is not certified.
:::

## Value

- Fewer repeated CT and MR exams.
- Less staff time to collect priors.
- Priors that a NIS or PACS search does not find.

Numbers from the demo cases: [Impact](/en/overview/impact/).

## Model

- After the hackathon, a licensed Czech IT integrator owns, distributes and supports the product.
- The hospital pays the integrator.
- One container stack per hospital: on-premises, or a managed EU-cloud tenant that the integrator operates.
- The hospital changes nothing. KomPACS connects through standards the hospital already has: HL7 v2 orders, FHIR R4, a PACS availability feed.

## Regulatory line

- Intended purpose: find and fetch prior imaging. KomPACS makes no diagnosis.
- A person confirms every relevance verdict.
- A human in the loop alone does not take software out of the EU Medical Device Regulation (MDR, see MDCG 2019-11). If MDR applies (Rule 11, likely class IIa), the integrator certifies the product.

## Next steps

1. Pilot at one hospital with real orders.
2. Second hospital.
3. Certification, if MDR applies.

Details: [Deploy for a hospital](/en/how-to/deploy-for-a-hospital/), [Deployment shape](/en/decisions/deployment-shape/).
