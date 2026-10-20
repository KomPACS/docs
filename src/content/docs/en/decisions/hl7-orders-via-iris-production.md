---
title: HL7 orders via the IRIS production
description: Orders use the built-in IRIS HL7 → SDA3 → FHIR path.
---

## Decision

The production uses `EnsLib.HL7.Service.HTTPService`, `HS.Gateway.HL7.HL7ToSDA3`, `HS.FHIR.DTL.Util.HC.SDA3.FHIR.Process` and `HS.FHIRServer.Interop.Operation`. The goal: use IRIS integration, do not rebuild it.

Two small ObjectScript classes close the gaps:

- `HS.Gateway.HL7.HL7ToSDA3` is a helper, not a business host. `ZHL7.OrderToSDA` calls it and passes PID-3 as the patient resource ID.
- `SDA3ToFHIR` would create a new Patient or overwrite the existing one. The subclass `ZHL7.SDA3ToFHIR` skips the Patient entry.

## Options

- MLLP/TCP input: the POC host exposed only the IRIS web and superserver ports. Production uses MLLP with TLS.
- Python builds the `ServiceRequest`: works, but bypasses IRIS interoperability.

## Consequences

- Each order also creates one `Organization` from MSH.
- The HTTP service ACKs on receipt. An ACK does not prove that the `ServiceRequest` exists. Check with a FHIR search.
- OBR-4 codes the modality with `DCM`. IRIS maps it to the DICOM OID system.
