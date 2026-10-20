---
title: Impact
description: Measured results on the 40 KomPACS demo cases, and the estimates behind them.
sidebar:
  order: 5
---

## Measured

The team measured these numbers on 40 demo cases (30 exams: 27 CT, 3 MR; 10 MDT) on 2026-10-17. The source is a pseudonymized hackathon dataset.

| Fact | Count |
|---|---|
| Candidate priors found | 286: 198 from NIS, 74 from report text, 14 from insurer data |
| Relevant priors (AI and Collector) | 127 |
| Relevant, but not in the hospital PACS | 34, in 24 of 40 cases (60%) |
| Of these, named only in a report (no NIS record) | 34 (22 place unknown, 12 place known) |
| Priors known only from insurer data | 14, in 14 cases. None in PACS. The AI marks them uncertain. |
| Duplicate alerts (same exam within 6 weeks) | 1 |

In 6 of 10 cases, the physician would start without a prior they need. A NIS or PACS search finds none of these priors.

## Estimates

These values are assumptions. A clinical partner must confirm them.

| Assumption | Value | Effect on 40 cases |
|---|---|---|
| Manual check per case today | 15 min | 10 h |
| Check per case with KomPACS | 3 min | 2 h |
| Calls per missing prior today | 2 | 68 calls. KomPACS drafts the request instead. |
