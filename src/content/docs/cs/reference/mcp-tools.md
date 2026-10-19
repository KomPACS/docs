---
title: Nástroje MCP
description: Reference tří nástrojů serveru pacs-mcp.
sidebar:
  order: 2
---

Server `PACS Comparator`, balíček `pacs-mcp`, transport stdio.

| Nástroj | Parametry | Vrací |
|---|---|---|
| `search_fhir` | `resource_type`, `params` | Až 50 zdrojů FHIR z hledání |
| `search_reports` | `patient_id`, `query`, `top` (výchozí 5) | `[{resource, score}]`: odkaz na zprávu a kosinovou podobnost. Potřebuje IRIS. 5–17 s na dotaz. |
| `get_case_summary` | `trigger_id` | `{composition, resources}`: `Composition/summary-<trigger_id>` a všechny odkazované zdroje |

Server nenastartuje bez `PACS_MCP_DATA` (`synthetic` nebo `eu-data-zone`). Kontroluje tvar typu a ID zdroje.

Podrobnosti: [anglická verze](/reference/mcp-tools/).
