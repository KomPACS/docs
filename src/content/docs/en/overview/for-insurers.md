---
title: For insurers
description: How insurer data can enrich a KomPACS check. KomPACS works without it.
sidebar:
  order: 3
---

:::note
KomPACS works without insurer data. Insurer data is optional enrichment.
:::

## Why insurer data helps

A hospital sees only its own exams. A patient can have earlier CT or MR scans at other hospitals. An insurer knows where and when each billed exam took place. In the 40 demo cases, 14 priors were known only from insurer data. None of them was in the hospital PACS.

## How KomPACS uses it

- The source is the patient's own consented statement: the insurer account statement ("Výpis pojištěnce"). Every insured person can get this statement from their insurer today.
- KomPACS reads exam date, type and place from it. It adds these as candidate priors.
- The AI judge marks insurer-only priors as uncertain. The Collector decides.
- In the prototype, a mock FHIR server holds simulated statement data. The prototype has no live insurer connection.

## Outlook

The EU European Health Data Space regulation (EHDS, Regulation (EU) 2025/327) adds cross-border access to patient summaries from 2029. Medical images and imaging reports follow from 26 March 2031. KomPACS uses FHIR R4, so it can read these sources when they are available.
