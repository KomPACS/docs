---
title: Použití MCP serveru
description: Spuštění pacs-mcp a napojení MCP klienta na data případů přes FHIR a vektory IRIS.
sidebar:
  order: 5
---

`pacs-mcp` je samostatný MCP server se třemi nástroji nad FHIR R4 a vektorovým vyhledáváním IRIS.

:::danger[Data pacientů]
Nástroje vracejí text zpráv. Na reálná data připojte jen klienta, který posílá text do LLM v EU Data Zone. S jiným klientem používejte testovací data.
:::

## Nastavení

| Proměnná | Povinná | Použití |
|---|---|---|
| `PACS_MCP_DATA` | ano | `synthetic` (testovací data) nebo `eu-data-zone` (reálná data, jen klient v EU Data Zone). Bez ní server nenastartuje. |
| `FHIR_BASE` | ano | Základní URL FHIR R4 |
| `IRIS_HOST` a další `IRIS_*` | pro `search_reports` | Připojení k IRIS SQL |

## Spuštění

```sh
PACS_MCP_DATA=synthetic FHIR_BASE=http://localhost:52773/fhir/r4 uv run pacs-mcp
```

Transport je stdio. Klient spustí server jako podproces.

Konfigurace klienta a příklad: [anglická verze](/how-to/use-mcp-server/). Nástroje: [Nástroje MCP](/cs/reference/mcp-tools/).
