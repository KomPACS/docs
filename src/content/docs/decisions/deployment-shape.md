---
title: One stack per hospital, integrator-owned
description: KomPACS runs as one container stack per hospital, on-premises or in a managed EU-cloud tenant.
---

## Decision

- One product: the same container stack (IRIS for Health, API, UI) for every hospital.
- Two ways to run it: on-premises at the hospital, or a managed EU-cloud tenant per hospital that the integrator operates. No patient data is shared between tenants.
- The hospital changes nothing. KomPACS connects through standards the hospital already has: HL7 v2 orders, FHIR R4, a PACS availability feed. Later DICOM and ePACS for the fetch.
- Central part without patient data: the verified-contact directory of hospitals.
- After the hackathon, a licensed Czech IT integrator owns, distributes and supports the product. The hospital pays the integrator.

## Why not pure SaaS

Hospitals are NIS2 operators. Approval for patient data in a public cloud is slow. A cloud tenant still needs a VPN to the hospital NIS and PACS. So the managed tenant is an option, not the only path.

## Regulatory line

- Intended purpose: find and fetch prior imaging. No diagnosis.
- The Collector confirms every relevance verdict.
- A human in the loop alone does not take software out of MDR (MDCG 2019-11). If MDR applies (Rule 11, likely class IIa), the integrator certifies the product.

## Consequences

The POC differs from production. See the table in [Deploy for a hospital](/how-to/deploy-for-a-hospital/).
