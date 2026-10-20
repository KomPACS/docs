---
title: Connect the PACS availability feed
description: Feed PACS image availability into IRIS so each ImagingStudy shows whether images are in PACS.
sidebar:
  order: 3
---

KomPACS must know whether the images of each exam are in PACS. A non-FHIR feed delivers this fact. The POC uses a CSV file.

## Path

```text
PACS export (CSV) ──HTTP──> PACS.Csv.In ──> ZHL7.PacsCsvToFHIR (embedded Python) ──> FHIR PATCH ImagingStudy
```

| Production item | Class |
|---|---|
| `PACS.Csv.In` | `EnsLib.HTTP.GenericService` |
| `PACS.CsvToFHIR` | `ZHL7.PacsCsvToFHIR`, embedded Python |
| FHIR write | `HS.FHIRServer.Interop.Operation` |

## Mapping

| CSV value | `ImagingStudy.status` |
|---|---|
| Images in PACS = yes | `available` |
| Images in PACS = no | `registered` (study known, no images) |
| No PACS row | `unknown` |

The process finds each `ImagingStudy` by its exam ID. It sends a FHIR JSON Patch on `status` and the `dostupnost-pacs` extension only. An unchanged study gets no new version. The same file sent twice gives the same state.

## Steps

1. Add the service and the process to the production.
2. Configure the PACS export. One row per exam: exam ID, images yes/no, source.
3. Post the file to the service.
4. Check one study: `GET /fhir/r4/ImagingStudy/<id>`. Check `status`.

## Notes

- Pass values to embedded Python as JSON strings. An ObjectScript JSON `false` can reach a Python boolean argument as truthy.
- Production: the PACS feed format differs per hospital. Adapt the mapping, not the hospital. A DICOM C-FIND or QIDO-RS query is the next option.

Why: [PACS feed](/decisions/pacs-feed/).
