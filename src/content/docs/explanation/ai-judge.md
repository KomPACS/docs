---
title: AI judge and reasoning trace
description: How the KomPACS AI judge decides relevance, cites Modrá kniha ČOS and records its steps.
sidebar:
  order: 4
---

:::caution[Prototype, not a medical device]
The AI judge proposes. The Collector decides. A Collector decision always wins.
:::

## Inputs

1. **Candidate priors** from three sources: NIS `ImagingStudy` records, mentions in report text, and the insurer statement if the patient gives it.
2. **The trigger**: modality, date, simulated body part, MDT or exam.
3. **Tools**: guideline search and report search.

## Steps

1. **Find mentions.** For each report not yet cached, the LLM lists the imaging exams that the text names, with date and place.
2. **Match the place.** A fuzzy match keeps the top 15 ePACS facilities. The LLM picks one AE title or none. A pick outside the shortlist counts as none.
3. **Judge the case.** One agent call judges all candidate priors of a trigger. List rules need all priors at once: the 2 newest, a cap, the baseline window.
4. **Search.** In up to 6 rounds, the judge calls `search_guideline` (Modrá kniha ČOS chunks) and `search_reports` (the patient's report sentences). It writes its own queries.
5. **Answer.** Each verdict has a label, a reason, the source sentence, a guideline citation `{page, quote}` and 3–5 Czech steps (`kroky`).

## Validation

Code checks every verdict. Code does not apply clinical rules.

| Check | On failure |
|---|---|
| Label is relevant, not relevant or uncertain | Verdict becomes uncertain |
| Candidate ID exists | Item dropped |
| Source sentence appears in the report | Item dropped or uncertain |
| Guideline quote appears in a chunk retrieved in this run, at least 20 characters | Citation dropped |

A run with a fallback verdict is not cached.

## Guideline

The judge cites Modrá kniha ČOS, 26th edition (Czech). Not NCCN or ESMO: licence and login. `page` is the 1-based PDF page, so the UI links to that page.

## Reasoning trace

Each cached result is a FHIR `Basic` (tag `llm-cache`) with an `llm-trace` extension. The trace holds:

- the system prompt and the input,
- each tool step with its hits,
- the reasoning summary of the model,
- the raw output,
- the items that validation rejected.

The UI shows it as the AI log. The Czech steps come first.

:::note
The Czech steps are the model's stated explanation. They are not its hidden reasoning. The tool steps and the reasoning summary are the real record.
:::

## Re-judge

The Collector can ask for a new verdict on one prior, with a note. The judge gets all priors as context and returns one verdict. Each result is a new FHIR `Basic` (tag `llm-override`). The newest one is active. The Collector can restore an older one. History is append-only.

## Cost

- One agent call per case. Cached per trigger and the set of judged candidates.
- Guideline query: IRIS `EMBEDDING()`, 5–17 s per query in the POC. A faster option embeds the query in the API (about 20 ms).
