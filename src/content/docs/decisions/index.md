---
title: Rozhodnutí
description: Záznamy architektonických rozhodnutí KomPACS.
sidebar:
  order: 0
---

Každý záznam uvádí jedno rozhodnutí, odmítnuté možnosti a důsledky. Tým je přijal během hackathonu 16.–17. října 2026. Podrobnější znění jsou v anglické verzi.

| Oblast | Rozhodnutí |
|---|---|
| Nasazení | [Jedna sada na nemocnici, vlastní ji integrátor](/decisions/deployment-shape/) |
| Příjem dat | [Objednávky HL7 přes produkci IRIS](/decisions/hl7-orders-via-iris-production/) |
| Příjem dat | [PACS feed přes IRIS, patch ImagingStudy](/decisions/pacs-feed/) |
| FHIR | [Normalizace ImagingStudy](/decisions/imagingstudy-normalization/) |
| FHIR | [FHIR SQL Builder pro čtení přes SQL](/decisions/fhir-sql-builder/) |
| FHIR | [Souhrn případu jako verzovaná Composition](/decisions/case-summary-composition/) |
| FHIR | [Žádosti a jejich kanály](/decisions/requests-and-channels/) |
| AI | [Jedno posouzení na případ](/decisions/judge-per-case-agent/) |
| AI | [Citace Modré knihy ČOS](/decisions/guideline-citations/) |
| AI | [Vektorové vyhledávání](/decisions/vector-search/) |
| AI | [Záznam a historie posouzení v IRIS](/decisions/llm-trace-and-rejudge/) |
| Kontakty | [Adresář ePACS](/decisions/epacs-directory/) |
| MCP | [Samostatný MCP server nad FHIR](/decisions/mcp-server-standalone/) |
| Data | [Simulovaná část těla](/decisions/simulated-body-part/) |
| UI | [Pravidla zobrazení fronty, žádostí a časové osy](/decisions/ui-decisions/) |
