---
title: Deploy for a hospital
description: Run one KOMPACS stack for one hospital, on-premises or in a managed EU-cloud tenant.
sidebar:
  order: 1
---

:::caution[Prototype, not a medical device]
This guide describes the target deployment. The hackathon POC ran a reduced version of it. The POC environment no longer exists.
:::

## Shape

One hospital gets one stack. No patient data is shared between stacks.

| Container | Role | POC size |
|---|---|---|
| IRIS for Health | FHIR R4 server, interoperability production, SQL projection, vector tables | 4 CPU, 8 GB |
| API | Case logic, AI judge calls, local embedding model | 1 CPU, 2 GiB |
| Web | UI and reverse proxy to the API | 0.25 CPU, 0.5 GiB |

IRIS needs about 1.5 GB. The in-process `EMBEDDING()` model adds about 1 GB. The API waits mostly on the LLM.

Two ways to run it:

- **On-premises** in the hospital network.
- **Managed EU-cloud tenant** per hospital, operated by the integrator. It still needs a VPN to the hospital NIS and PACS.

## Prerequisites

- A container runtime (Docker Compose or Kubernetes).
- A licensed IRIS for Health for production. The Community Edition has no mirroring and a connection limit.
- An LLM endpoint in an EU region, or on-premises.
- The hospital identity provider for SSO.
- Network paths from NIS/RIS and PACS to IRIS. See the connection guides.

## Steps

1. Start the three containers on a private network. Expose only the web container through TLS.
2. Configure IRIS. Each step must be a repeatable script:
   1. Create the FHIR R4 server.
   2. Set the FHIR max search results to 10000.
   3. Load the interoperability production for orders and the PACS feed.
   4. Create the FHIR SQL Builder projection (schema `pacs`).
   5. Create the vector tables for report sentences and guideline chunks.
   6. Create one least-privilege IRIS user per service.
3. Load the Modrá kniha ČOS chunks into the guideline vector table.
4. Point the API at IRIS (`IRIS_HOST`) and at the FHIR base (`FHIR_BASE`).
5. Connect the feeds: [HL7 orders](/how-to/connect-hl7-orders/), [PACS feed](/how-to/connect-pacs-feed/), [FHIR server](/how-to/connect-fhir-server/).
6. Connect SSO. Map the Doctor and Collector roles to IdP groups.
7. Run a smoke test: send one test order. Check that a `ServiceRequest` exists. Open the case.

## POC → production

| POC | Production |
|---|---|
| Case results in an in-memory API cache | Results and requests in IRIS (FHIR `Task`, `Composition`) |
| One API replica | Stateless API, N replicas |
| IRIS without durable storage, rebuilt by script | IRIS with a durable volume or a mirror. Configuration baked into the image. |
| Deploy script | Infrastructure as code and a CI/CD pipeline |
| One shared demo login | Hospital SSO with Doctor and Collector roles |
| Shared EU Data Zone LLM gateway | EU-region or on-premises model per hospital |
| Mock insurer statement server | Patient-consented insurer statement |
| HL7 v2 over HTTP | HL7 v2 over MLLP with TLS |

Why: [Deployment shape](/decisions/deployment-shape/). Security: [Security and data protection](/explanation/security/).
