---
title: Start a check
description: Start a new check for a planned CT, MR, PET or MDT in the public KomPACS demo.
sidebar:
  order: 2
---

In this tutorial you start a new check in the demo. In a hospital, an HL7 v2 order from NIS starts the check. In the demo, a dialog does the same.

## Steps

1. Open [demo.kompacs.cz](https://demo.kompacs.cz).
2. Click "Spustit kontrolu" (start check).
3. Search for a patient by name or ID. Pick one.
4. Pick the trigger ("Spouštěč"): "Plánované CT", "Plánované MR", "Plánované PET" or "MDT, indikační seminář".
5. Pick the date.
6. Confirm. The new case opens.

## What happens behind the dialog

In the real system:

1. The API sends an HL7 v2 `ORM^O01` message to the IRIS production.
2. IRIS converts it via SDA3 to a FHIR `ServiceRequest` on the existing patient.
3. The API builds the candidate priors, asks the AI judge and writes the case summary.

In the demo, the browser simulates these steps with synthetic data.

Details: [Data flow](/en/explanation/data-flow/).
