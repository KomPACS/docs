---
title: Vektorové vyhledávání
description: Vektory zpráv a doporučení používají lokální model a vektorové tabulky IRIS.
---

- Věty ze zpráv: fastembed `paraphrase-multilingual-MiniLM-L12-v2` v API, uložení v `vec.ReportSentence` s indexem HNSW, bez textu. Práh `VECTOR_COSINE` ≥ 0,6.
- Doporučení: načtení přes fastembed, dotaz v IRIS přes `EMBEDDING(?, 'minilm')`.

**Proč:** Text zpráv nejde do externí služby. `EMBEDDING()` v IRIS je pro hromadné načtení pomalé (asi 8 s na řádek).
