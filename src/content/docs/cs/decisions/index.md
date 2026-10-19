---
title: Rozhodnutí
description: Záznamy architektonických rozhodnutí KOMPACS.
sidebar:
  order: 0
---

Každý záznam uvádí jedno rozhodnutí, odmítnuté možnosti a důsledky. Tým je přijal během hackathonu 16.–17. října 2026. Podrobnější znění jsou v anglické verzi.

| Oblast | Rozhodnutí |
|---|---|
| Nasazení | [Jedna sada na nemocnici, vlastní ji integrátor](/cs/decisions/deployment-shape/) |
| Příjem dat | [Objednávky HL7 přes produkci IRIS](/cs/decisions/hl7-orders-via-iris-production/) |
| Příjem dat | [PACS feed přes IRIS, patch ImagingStudy](/cs/decisions/pacs-feed/) |
| FHIR | [Normalizace ImagingStudy](/cs/decisions/imagingstudy-normalization/) |
| FHIR | [FHIR SQL Builder pro čtení přes SQL](/cs/decisions/fhir-sql-builder/) |
| FHIR | [Souhrn případu jako verzovaná Composition](/cs/decisions/case-summary-composition/) |
| FHIR | [Žádosti a jejich kanály](/cs/decisions/requests-and-channels/) |
| AI | [Jedno posouzení na případ](/cs/decisions/judge-per-case-agent/) |
| AI | [Citace Modré knihy ČOS](/cs/decisions/guideline-citations/) |
| AI | [Vektorové vyhledávání](/cs/decisions/vector-search/) |
| AI | [Záznam a historie posouzení v IRIS](/cs/decisions/llm-trace-and-rejudge/) |
| Kontakty | [Adresář ePACS](/cs/decisions/epacs-directory/) |
| MCP | [Samostatný MCP server nad FHIR](/cs/decisions/mcp-server-standalone/) |
| Data | [Simulovaná část těla](/cs/decisions/simulated-body-part/) |
| UI | [Pravidla zobrazení fronty, žádostí a časové osy](/cs/decisions/ui-decisions/) |
