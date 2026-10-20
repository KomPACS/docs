---
title: Simulated body part of the scheduled exam
description: The dataset has no body part, so the API derives it from the diagnosis and modality.
---

## Decision

The dataset has no body part for exams. The API derives the body part of the scheduled exam from the patient's first mapped ICD-10 code and the modality. Unknown diagnosis, PET or MDT → no body part. A clinician must confirm the mapping table.

## Options

- Body part in the HL7 order (OBR-4.2): the POC HTTP service decoded the body as Latin-1, so Czech diacritics broke. A fix needed a production setting change and a re-send of all orders.

## Consequences

Production: take the body part from the real order.
