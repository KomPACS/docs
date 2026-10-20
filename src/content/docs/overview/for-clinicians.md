---
title: For clinicians
description: What KomPACS gives radiologists, oncologists and tumor board members.
sidebar:
  order: 2
---

:::caution[Prototype, not a medical device]
KomPACS supports the search for prior imaging. It makes no diagnosis.
:::

## What you get

- A list of relevant priors for the scheduled exam or MDT. Each prior has a status: available, missing report, missing, or place unknown.
- For each verdict: a short reason, the source sentence from the report and a Modrá kniha ČOS citation with page number.
- Priors that only report text names. A NIS or PACS search does not find these.
- A duplicate alert when the scheduled exam repeats the same exam within 6 weeks.
- A case summary that you can read before the reading or the tumor board.

## Who does what

| Role | Task |
|---|---|
| Doctor | Reads the case summary. Can ask for a removed prior again. |
| Collector | Confirms verdicts. Approves and sends requests. Calls other hospitals. |

The Collector decision always wins over the AI verdict.

## What the AI judge does not do

- It does not read images.
- It does not suggest treatment.
- It does not send anything without a person's approval.

Details: [AI judge and reasoning trace](/explanation/ai-judge/).
