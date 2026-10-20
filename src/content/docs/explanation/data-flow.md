---
title: Tok dat
description: Odkud data přicházejí, kam se v IRIS uloží a kdy IRIS opouštějí.
sidebar:
  order: 2
---

## Jedna kontrola

```mermaid
sequenceDiagram
  actor C as Koordinátor
  participant API as API
  participant P as Produkce IRIS
  participant F as IRIS FHIR
  participant V as Vektory IRIS
  participant L as LLM (EU)

  C->>API: nová kontrola (pacient, CT/MR)
  API->>P: HL7 ORM^O01
  P->>F: SDA3 → ServiceRequest
  C->>API: otevřít případ
  API->>F: čtení Patient, Condition, zprávy, ImagingStudy
  alt není v cache
    API->>L: zmínky ve zprávách
    API->>L: posouzení případu
    loop až 6 kol
      L->>API: search_guideline / search_reports
      API->>V: VECTOR_COSINE
      API->>L: části / věty
    end
    L->>API: posouzení + citace Modré knihy
    API->>F: PUT Basic llm-cache + llm-trace
  end
  API->>F: PUT Composition summary-*
  API->>C: případ
  C->>API: schválit žádost
  API->>F: PUT Task + Communication
  P->>F: PATCH ImagingStudy (snímky dorazily)
```

## Co opouští IRIS

| Volání | Kdy | Posílá |
|---|---|---|
| Hledání zmínek | Sestavení případu | Text a datum jedné zprávy |
| Párování s ePACS | Nové místo ve zprávě | Název místa a 15 názvů zařízení |
| Posouzení případu | Sestavení, nové posouzení | JSON případu, části doporučení, věty ze zpráv |
| MCP agent | Dotaz | Dotaz a výsledky nástrojů |

Text o pacientovi jde jen do modelu v EU Data Zone. Embeddingy počítá lokální model v kontejneru API.

Úplné tabulky procesů a úložišť: [anglická verze](/en/explanation/data-flow/).
