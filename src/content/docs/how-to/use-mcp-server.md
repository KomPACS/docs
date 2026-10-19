---
title: Use the MCP server
description: Run pacs-mcp and connect an MCP client to query KOMPACS case data over FHIR and IRIS vectors.
sidebar:
  order: 5
---

`pacs-mcp` is a standalone MCP server. It exposes three tools over FHIR R4 REST and IRIS vector search. It does not call the KOMPACS API.

:::danger[Patient data]
The tools return report text. Connect a client to real patient data only if the client sends text to an EU Data Zone LLM. Use test data with any other client.
:::

## Prerequisites

- Python 3.12 or later and `uv`.
- A FHIR R4 server. For `search_reports`: IRIS with the `vec.ReportSentence` table.
- The `pacs-mcp` package source.

## Configure

| Variable | Required | Use |
|---|---|---|
| `PACS_MCP_DATA` | yes | `synthetic` (test data) or `eu-data-zone` (real data, EU Data Zone client only). The server refuses to start without it. |
| `FHIR_BASE` | yes | FHIR R4 base URL |
| `FHIR_USER`, `FHIR_PASSWORD` | no | Basic auth for the FHIR server |
| `IRIS_HOST`, `IRIS_PORT`, `IRIS_NAMESPACE`, `IRIS_USER`, `IRIS_PASSWORD` | for `search_reports` | IRIS SQL connection. Use a least-privilege user. |

## Run

```sh
PACS_MCP_DATA=synthetic FHIR_BASE=http://localhost:52773/fhir/r4 uv run pacs-mcp
```

The transport is stdio. The client starts the server as a child process.

## Connect a client

Example client config, for a **synthetic** FHIR server only:

```json
{
  "mcpServers": {
    "pacs": {
      "command": "uv",
      "args": ["run", "--directory", "mcp", "pacs-mcp"],
      "env": {
        "FHIR_BASE": "http://localhost:52773/fhir/r4",
        "PACS_MCP_DATA": "synthetic"
      }
    }
  }
}
```

Inspect the tools with the MCP Inspector:

```sh
PACS_MCP_DATA=synthetic FHIR_BASE=http://localhost:52773/fhir/r4 \
  npx @modelcontextprotocol/inspector uv run pacs-mcp
```

## Ask a question

A typical agent loop:

1. The agent lists the tools and sends them with the question to the LLM.
2. The LLM asks for a tool call, for example `get_case_summary`.
3. The agent calls the tool and returns the result.
4. After up to 6 rounds, the LLM answers with FHIR references.

The LLM never calls MCP directly. The agent is the MCP client.

Tools: [MCP tools reference](/reference/mcp-tools/).
