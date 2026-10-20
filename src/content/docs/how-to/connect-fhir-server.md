---
title: Connect a FHIR server
description: Point the KomPACS API and MCP server at a FHIR R4 server, and load the patient record into it.
sidebar:
  order: 4
---

KomPACS reads and writes plain FHIR R4 REST. IRIS for Health is the reference server. The MCP server works with any FHIR R4 server.

## Point KomPACS at the server

| Variable | Use |
|---|---|
| `FHIR_BASE` | Base URL of the FHIR R4 server, for example `https://fhir.example.org/fhir/r4` |
| `IRIS_HOST` | IRIS host for SQL and vector search |
| `INSURER_BASE` | Optional. Base URL of the insurer statement server. |

## Resources KomPACS needs

- `Patient`, `Condition`
- `DocumentReference` or `DiagnosticReport` with report text
- `ImagingStudy` with one series and a DICOM modality
- `ServiceRequest` for the trigger
- `Organization` and `Endpoint` for other hospitals

Full list: [FHIR resources](/reference/fhir-resources/).

## Load the patient record

- POC: ready FHIR transaction bundles.
- Production: NIS sends HL7 v2 ORU/ADT or CDA. IRIS converts them through SDA3 to FHIR, the same path as [orders](/how-to/connect-hl7-orders/).

## ImagingStudy rules

The loader normalizes each `ImagingStudy` before it sends the bundle:

- Czech modality codes map to DICOM: RTG → DX, SONO → US, MAMO → MG, ANGIO → XA. CT and MR stay. The Czech code stays in `procedureCode`.
- Each study with a DICOM modality gets one series. Its UID is `2.25.<uuid5(study id)>`. A reload gives the same UIDs.
- The StudyInstanceUID is an identifier with system `urn:dicom:uid`.

The R4 `modality` search parameter reads `series.modality`. Without a series, a modality search does not find the study.

## Server settings

- Set the max search results to 10000. The default 1000 rejects a search over all patients with `413`.
- Filter every search by patient. Unfiltered searches over large resource types stay blocked.

## FHIR SQL Builder

Create a projection of `Patient` and `Condition` as SQL schema `pacs`. The projection is live. The patient picker reads it in one query. Every SQL read has a FHIR REST fallback.
