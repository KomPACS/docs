---
title: ImagingStudy normalization
description: Modality codes, series and UIDs are fixed in the loader, so every reload gives the same data.
---

## Decision

The loader transforms each `ImagingStudy` before it sends the bundle:

- **Modality uses DICOM codes.** RTG → DX, SONO → US, MAMO → MG, ANGIO → XA. CT and MR stay. Codes without a DICOM equivalent get none. Each study keeps its Czech code in `procedureCode` under a local system.
- **One series per study.** UID `2.25.<uuid5(study id)>`, with the study modality. Studies without a DICOM code get no series, because R4 requires `series.modality`.
- **Identifiers.** The StudyInstanceUID has system `urn:dicom:uid`. The exam ID is the accession number.

## Why

The R4 `modality` search parameter reads `series.modality`. Without a series, the search fails. A fix in the loader means a reload gives correct data with no extra step.

## Consequences

A reload produces the same UIDs.
