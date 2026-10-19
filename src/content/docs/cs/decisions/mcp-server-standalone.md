---
title: Samostatný MCP server nad FHIR
description: pacs-mcp používá čisté FHIR R4 REST a SQL IRIS. Nezávisí na kódu API.
---

`pacs-mcp` nezávisí na kódu API. Funguje s libovolným FHIR serverem. Jen `search_reports` potřebuje IRIS. Bez `PACS_MCP_DATA` (`synthetic` nebo `eu-data-zone`) nenastartuje.

**Důsledky:** Jen stdio. HTTP transport v síti nemocnice je návrh.
