---
title: FHIR resources
description: The FHIR R4 resources, IDs and tags that KomPACS reads and writes.
sidebar:
  order: 3
---

## Read

| Resource | Use |
|---|---|
| `Patient` | The patient |
| `Condition` | Diagnoses. The first one sets the index date. |
| `DocumentReference`, `DiagnosticReport` | Reports, including radiology reports |
| `ImagingStudy` | A study and its series. `status` shows PACS availability. |
| `ServiceRequest` | The scheduled exam (trigger), from HL7 |
| `List` | Patients on an MDT list (trigger) |
| `Coverage` | The patient's insurer |
| `ExplanationOfBenefit` | Exams from the insurer statement (optional source) |
| `Organization`, `Endpoint` | Other hospitals and their FHIR address |

## Written by KomPACS

| Resource | ID or tag | Content |
|---|---|---|
| `Composition` | `summary-<trigger_id>` | Case summary. Written only on change. `_history` keeps every version. |
| `Task` | tag `prior-request` | Request for a missing prior. `basedOn` the trigger, `focus` the prior `ImagingStudy`. |
| `Communication` | | The e-mail of an approved request |
| `Task` | `INS-<trigger_id>` | Insurer statement query. Generated, not sent. |
| `Basic` | tag `llm-cache` | Cached AI verdicts with extension `llm-trace` |
| `Basic` | tag `llm-override` | Re-judge results. The newest one is active. |
| `Basic` | `review-*` | Collector decisions |
| `Organization` | `EPACS-<AE title>` | Facility contact from the ePACS directory |

Demo data that KomPACS adds carries the tag `simulated`.

## Composition shape

- `status` `preliminary`, `type` LOINC `60591-5` (patient summary).
- `author` `Device/pacs-comparator`. `attester` the Collector, after the first approved request.
- `event.detail` the trigger `ServiceRequest`.
- Sections: diagnoses, relevant priors, missing items (`Task`), duplicate alert. Each has a Czech narrative.

## ImagingStudy status

| `status` | Meaning |
|---|---|
| `available` | Images in PACS |
| `registered` | Study known, no images in PACS |
| `unknown` | No PACS record |

## Request channel

A request gets channel `fhir` if the recipient `Organization` has an active `Endpoint` with `connectionType` `hl7-fhir-rest`. Else `email` if an e-mail exists. Else `phone`.
