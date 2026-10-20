---
title: FHIR SQL Builder for SQL reads
description: SQL reads use a live FHIR SQL Builder projection, with a FHIR REST fallback.
---

## Decision

SQL reads use a FHIR SQL Builder projection (schema `pacs`). The builder is the InterSystems product path from FHIR to SQL. A script creates the projection. The projection is live: no refresh after FHIR writes.

The FHIR server max search results is 10000. The default 1000 rejects a search over all patients.

## Options

- Query the internal FHIR storage tables: their prefix changes when a FHIR server is recreated.

## Consequences

- Deleted FHIR resources stay as empty stubs. A full scan of a projected subtable then fails. Queries filter on live IDs first.
- Every SQL read has a FHIR REST fallback.
- Unfiltered searches over large resource types stay blocked. App queries filter by patient.
