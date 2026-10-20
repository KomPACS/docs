---
title: Connect HL7 v2 orders
description: Send scheduled CT, MR and PET orders from NIS/RIS into the IRIS production as HL7 v2 ORM^O01.
sidebar:
  order: 2
---

A scheduled exam reaches KomPACS as an HL7 v2 `ORM^O01` order. IRIS converts it to a FHIR `ServiceRequest` with its built-in path.

## Path

```text
NIS/RIS ──ORM^O01──> HL7.Orders.In ──> ZHL7.OrderToSDA ──> SDA3 ──> ZHL7.SDA3ToFHIR ──> FHIR ServiceRequest
```

| Production item | Class |
|---|---|
| `HL7.Orders.In` | `EnsLib.HL7.Service.HTTPService` (POC). Production: an MLLP/TCP service with TLS. |
| HL7 to SDA3 | `ZHL7.OrderToSDA`. It calls `HS.Gateway.HL7.HL7ToSDA3` and passes PID-3 as the patient resource ID. |
| SDA3 to FHIR | `HS.FHIR.DTL.Util.HC.SDA3.FHIR.Process` with transform class `ZHL7.SDA3ToFHIR`. It skips the Patient entry, so the existing Patient stays. |
| FHIR write | `HS.FHIRServer.Interop.Operation` |

## Message rules

- PID-3: the patient ID. It must equal the FHIR `Patient.id`.
- ORC-2: the placer order number. It becomes a `ServiceRequest.identifier` of type `PLAC`.
- OBR-4: the modality with coding system `DCM` (for example `CT`, `MR`, `PT`). IRIS maps it to the DICOM OID system `urn:oid:1.2.840.10008.2.16.4`.

## Steps

1. Load the two ObjectScript classes into the FHIR namespace.
2. Add the business service, the process and the operation to the production. Start it.
3. Point the NIS/RIS interface engine at the business service.
4. Send one test order.
5. Check the result with a FHIR search, not the ACK:

   ```http
   GET /fhir/r4/ServiceRequest?identifier=<placer number>
   ```

   The HTTP service ACKs on receipt (`MSA|CA`). The `ServiceRequest` is searchable about 1 s later.

## Known limits

- Each order also creates one `Organization` from MSH.
- The POC HTTP service decodes the body as Latin-1. Czech diacritics in free-text fields break. Set the character set in the production before you send Czech text.

Why: [HL7 orders via the IRIS production](/en/decisions/hl7-orders-via-iris-production/).
