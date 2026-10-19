---
title: Requests and their channels
description: The request channel comes from Organization.endpoint. FHIR requests are stored, not sent, in the POC.
---

## Decision

**Channel.** A request gets channel `fhir` when the recipient `Organization` references an active `Endpoint` with `connectionType` `hl7-fhir-rest`. Else `email` with an e-mail. Else `phone`. Standard FHIR, no custom flag. Most Czech hospitals answer by phone and e-mail.

**FHIR requests are dead ends in the POC.** The FHIR hospitals in the demo are simulated. The API writes each FHIR request as a `Task` and sends it nowhere. The UI shows the `Task` JSON.

**Insurer statement query.** One `Task` `INS-<trigger_id>` per case: `for` the Patient, `basedOn` the trigger, `owner` the patient's insurer from `Coverage.payor`, one input `ExplanationOfBenefit?patient=<id>&created=ge<index date>`. It is generated, not sent. Insurer data is optional enrichment.

## Options

- A mock FHIR server per recipient: same demo, more setup. Rejected for the POC.
- An IRIS business operation for outbound FHIR: the production path.

## Consequences

- The channel is set when the request is created.
- Production: send through an IRIS operation to `Endpoint.address`.
