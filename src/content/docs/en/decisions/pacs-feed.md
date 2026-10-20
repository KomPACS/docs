---
title: PACS feed through IRIS, patching ImagingStudy
description: The PACS availability CSV runs through an IRIS production and patches only ImagingStudy status.
---

## Decision

- Path: `EnsLib.HTTP.GenericService` → `ZHL7.PacsCsvToFHIR` (embedded Python) → `HS.FHIRServer.Interop.Operation`. The Visual Trace shows every step.
- The process finds each `ImagingStudy` by its exam ID. It sends a FHIR JSON Patch on `status` and the `dostupnost-pacs` extension only.
- Status: images in PACS → `available`. No images → `registered`. No PACS row → `unknown`.

## Why

The CSV holds the core fact of the challenge: are the images in PACS. A full PUT or a new resource would overwrite or duplicate live priors. HTTP, because the POC host had no shared file drop.

## Consequences

- Unchanged studies get no new version. The same file twice gives the same state.
- Pass values to embedded Python as JSON strings. An ObjectScript JSON `false` reached a Python boolean argument as truthy once.
