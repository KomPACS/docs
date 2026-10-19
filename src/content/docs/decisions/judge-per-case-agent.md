---
title: One judge call per case
description: The AI judges all candidate priors of a trigger in one agent call. Rules live in the prompt.
---

## Decision

- One agent call judges all candidate priors of a trigger. List rules (2 newest, a cap, the baseline window) need all priors at once.
- The clinical rules are guidance in a Czech prompt. No rule code runs over the candidate list. NIS exams have no body region, so region rules need the report text anyway.
- Code only validates the output: unknown IDs dropped, missing or invalid verdicts become uncertain, quotes must appear in their source.
- The agent calls `search_guideline` and `search_reports` and writes its own queries.
- Each verdict has `kroky`: 3–5 short Czech steps that name the searches and the evidence. Doctors need a readable account in Czech. The model returns only an English reasoning summary.

## Consequences

- Verdicts are cached per trigger and the set of judged candidate IDs. Collector decisions do not change the key.
- Fallback verdicts are not cached.
- `kroky` is the model's stated explanation, not its hidden reasoning.
