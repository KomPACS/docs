---
title: Standalone MCP server over FHIR
description: pacs-mcp talks plain FHIR R4 REST and IRIS SQL. It does not import the API.
---

## Decision

`pacs-mcp` does not import the API code. It talks plain FHIR R4 REST through `FHIR_BASE`, so it works against any FHIR server. Only `search_reports` needs IRIS: it queries `vec.ReportSentence` with `EMBEDDING(?, 'minilm')`, the same model that filled the table. `get_case_summary` reads the case `Composition`.

The tools return report text. So the server refuses to start without `PACS_MCP_DATA`: `synthetic` or `eu-data-zone`. It runs as a least-privilege user.

## Options

- Import the API code: faster to build, not reusable on another FHIR server.
- Scope tools to one patient: safer, but less reusable. The declaration flag is the control instead.

## Consequences

- A small FHIR client exists twice. Next step: one core package.
- `search_reports` takes 5–17 s per query.
- stdio only. An HTTP transport inside the hospital network is a proposal.
