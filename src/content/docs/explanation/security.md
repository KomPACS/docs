---
title: Security and data protection
description: How KOMPACS handles patient data, access and the supply chain, in the POC and in production.
sidebar:
  order: 3
---

:::caution[Prototype, not a medical device]
The POC ran on a pseudonymized hackathon dataset. The POC environment no longer exists. This page describes its posture and the production path.
:::

## Data protection rules

- Patient text goes to an LLM only through an EU Data Zone gateway. The API refuses other models.
- Embeddings run on a local model inside the API container. Report text goes to no embedding service.
- The vector table stores no text. It holds only a FHIR reference and the vector.
- The MCP server refuses to start without a data declaration: `synthetic` or `eu-data-zone`.
- Demo data that KOMPACS adds is tagged `simulated` in FHIR.
- The public demo uses synthetic patients only. It runs in the browser and has no server.
- Insurer data is optional. Its source is the patient's own consented statement.

## Threat model (POC)

- In scope: internet scanners and bots. A reviewer who asks how data and access are handled.
- Out of scope: a targeted attacker, insider threat, availability attacks.

## In place in the POC

- One public entry point: a reverse proxy with TLS and a login. The API had no public ingress.
- Security headers: HSTS, `nosniff`, `X-Frame-Options: DENY`, `no-referrer`. Request body limit 1 MB.
- The API connected to IRIS as a least-privilege user. It had only the FHIR database roles and the SQL projection role.
- Anonymous FHIR requests got `401`. No predefined IRIS account had a default credential.
- Base images pinned by digest. The API image had no build tools and ran as a non-root user. `hadolint` and `trivy` scanned the images.
- Secrets came from the platform secret store. No secret was in git or in an image.

## Known POC gaps

- IRIS had a public address. FHIR, HL7 and the management portal used basic auth without TLS.
- No audit log export. No per-user login: all users shared one demo account.

## Production path

| Area | Control |
|---|---|
| Network | IRIS in a private subnet, no public address. NIS/RIS send HL7 over MLLP with TLS. Partners connect over VPN or a private link. |
| Identity | Hospital SSO. Doctor and Collector roles map to IdP groups. |
| IRIS | One least-privilege user per service. TLS on the web gateway and superserver. Management portal not exposed. IRIS audit on. |
| Supply chain | Images scanned in CI, pulled with a managed identity. Distroless runtime. |
| Data | Retention and access review per hospital policy. Data stays in the hospital or in an EU region. |
| Regulation | Hospitals are NIS2 operators. If MDR applies, the integrator certifies the product. |
