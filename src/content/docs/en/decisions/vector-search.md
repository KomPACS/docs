---
title: "Vector search: local model, IRIS index"
description: Report and guideline vectors use a local embedding model and IRIS vector tables.
---

## Decision

**Report vectors.** The API embeds report sentences with fastembed `paraphrase-multilingual-MiniLM-L12-v2` (384 dimensions, Czech). IRIS stores them in `vec.ReportSentence` with an HNSW index. The table holds no text, only the FHIR reference. The timeline adds report events with `VECTOR_COSINE` ≥ 0.6.

**Guideline vectors.** The load script embeds chunks with fastembed MiniLM into `VECTOR(FLOAT, 384)`. The query goes to IRIS: `VECTOR_COSINE(Embedding, EMBEDDING(?, 'minilm'))`, the same model.

## Why

- Report text goes to no external service.
- IRIS `EMBEDDING()` reloads the model per call: about 8 s per row on load, 5–17 s per query. Too slow for a bulk load.
- Off-topic queries scored up to 0.58 on real reports. On-topic queries scored 0.6–0.8. So the threshold is 0.6.

## Consequences

- The model is in the API image. The API needs 2 GiB.
- Faster option: embed the query in the API (about 20 ms) and use `TO_VECTOR`.
