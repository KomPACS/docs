---
title: Case summary is a versioned Composition
description: The case summary is a persisted FHIR Composition, written only when its content changes.
---

## Decision

The API builds `Composition/summary-<trigger_id>`. It writes it only when the content differs from the stored one, ignoring `meta` and `date`. IRIS keeps every version, so `_history` shows what the Doctor saw and when.

Shape: `status` `preliminary`, `type` LOINC `60591-5`, `author` `Device/pacs-comparator`, `attester` the Collector once a request is approved. `event.detail` is the trigger `ServiceRequest`. Sections: diagnoses, relevant priors, missing items, duplicate alert. Each has a Czech narrative.

Request `Task`s point at what they serve: `basedOn` the trigger, `focus` the prior `ImagingStudy`.

## Options

- Write only at approve: fewer versions, weaker audit trail.
- Build the summary only on demand: no audit trail.

## Consequences

- One FHIR read per case view, one write when content changed.
- No server-side `$document`. The MCP tool `get_case_summary` resolves the entries itself.
