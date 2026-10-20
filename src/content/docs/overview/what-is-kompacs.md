---
title: What is KomPACS
description: KomPACS (KOMparátor PACS) checks prior imaging before a CT, MR, PET or tumor board.
sidebar:
  order: 1
---

:::caution[Prototype, not a medical device]
KomPACS is a hackathon prototype. Do not use it for clinical decisions.
:::

KomPACS means *KOMparátor PACS*. Team "404 Tumor Not Found" built it at Rakathon 2026. The challenge came from FN Motol and Nemocnice Na Homolce.

## The problem

Before a CT, MR or PET scan, the radiologist compares the new images with earlier ones. Before a tumor board (MDT), the specialists need the same history. Today a person reads old reports, searches PACS and phones other hospitals. Many priors are named only in report text. A search in the hospital information system (NIS) or in PACS does not find them.

## What KomPACS does

1. **Trigger.** A scheduled CT, MR or PET order, or a patient on an MDT list, starts a check.
2. **Find.** KomPACS collects candidate priors from NIS records, from report text and, if the patient gives it, from the insurer account statement.
3. **Judge.** An AI judge labels each candidate prior: relevant, not relevant or uncertain. It cites the Czech oncology guideline (Modrá kniha ČOS) and the source sentence.
4. **Check PACS.** KomPACS shows which relevant priors have images in PACS.
5. **Request.** For each missing prior, KomPACS drafts a request to the other hospital: e-mail, phone or FHIR.
6. **Summarize.** KomPACS writes a case summary as a FHIR `Composition`.

A person (the Collector) confirms every verdict and every request. KomPACS makes no diagnosis.

## Built on

- InterSystems IRIS for Health: FHIR R4 server, HL7 v2 → SDA3 → FHIR conversion, interoperability productions, FHIR SQL Builder, vector search.
- An LLM in the EU Data Zone. Patient text goes to no other model.
- An MCP server. Any MCP client can query the case data.

## Links

- Landing page: [kompacs.cz](https://kompacs.cz/en/)
- Public demo with synthetic data: [demo.kompacs.cz](https://demo.kompacs.cz)
- Impact numbers: [Impact](/overview/impact/)
