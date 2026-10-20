---
title: Trace and re-judge history in IRIS
description: The AI trace lives on the cached result. Re-judges append history as FHIR Basic resources.
---

## Decision

**Trace.** Each cached LLM result (`Basic`, tag `llm-cache`) has a second extension `llm-trace`: system prompt, input, tool steps with hits, reasoning summary, raw output and rejected items. `GET /api/triggers/{id}/llm-trace` returns them. One write and one read, so the trace cannot drift from its result.

**Re-judge.** The Collector asks for a new verdict on one prior, with an optional note. All priors go as context. Each result is a `Basic` tagged `llm-override`. The newest one is active. Restoring an old one adds it again as the newest. History is append-only.

## Options

- In-memory log: empty after every deploy.
- Separate trace resource: two writes that can drift.
- Overwrite the cached result on re-judge: loses history.
- Re-judge the whole case: changes verdicts the user did not ask about.

## Consequences

- Raw chain of thought is not available. "Reasoning" is the model's reasoning summary.
- A failed re-judge is not stored. The API answers `502`.
- A Collector decision always wins over any AI verdict.
