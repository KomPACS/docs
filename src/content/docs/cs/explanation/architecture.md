---
title: Architektura
description: Komponenty KOMPACS a jejich propojení.
sidebar:
  order: 1
---

KOMPACS má tři části: IRIS for Health, API a webové UI. IRIS drží veškerý stav. API je v produkci bezstavové.

```mermaid
flowchart LR
  subgraph HOSP["Síť nemocnice"]
    NIS["NIS / RIS"]
    PACS["PACS"]
    subgraph STACK["Sada KOMPACS (jedna na nemocnici)"]
      subgraph IRIS["IRIS for Health"]
        PROD["Produkce<br/>objednávky · PACS feed"]
        FHIR[("FHIR R4 server")]
        SQL[("SQL projekce<br/>+ vektory")]
      end
      API["API<br/>lokální model embeddingů"]
      WEB["Webové UI"]
      MCP["pacs-mcp"]
    end
  end
  LLM["LLM<br/>EU region"]
  USER(["Koordinátor, lékař"])
  AGENT["MCP klient"]

  NIS -->|"HL7 v2 ORM^O01"| PROD
  PACS -->|"dostupnost"| PROD
  PROD --> FHIR --> SQL
  USER --> WEB --> API
  API <--> FHIR
  API <--> SQL
  API <-->|"text zpráv"| LLM
  AGENT --> MCP
  MCP --> FHIR
  MCP --> SQL
```

| Komponenta | Technologie | Role |
|---|---|---|
| IRIS for Health | InterSystems IRIS for Health | Úložiště FHIR R4, příjem HL7 a CSV, SQL projekce, vektorové vyhledávání |
| API | Python, FastAPI | Sestaví případ, volá AI, zapisuje žádosti a souhrny |
| Webové UI | React, TypeScript | Pohled koordinátora a lékaře, česky |
| `pacs-mcp` | Python, FastMCP | Nástroje MCP nad FHIR a vektory IRIS |
| LLM | Model v EU Data Zone | Hledá zmínky ve zprávách, posuzuje relevanci |

## Škálování

- API je bezstavové. Lze spustit N replik.
- IRIS drží stav. Pro vysokou dostupnost licencovaný IRIS se zrcadlením.
- Jedna sada na nemocnici. Data pacientů mezi sadami neputují.

Dále: [Tok dat](/cs/explanation/data-flow/).
