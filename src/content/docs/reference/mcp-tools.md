---
title: MCP tools
description: Reference of the three tools of the pacs-mcp server.
sidebar:
  order: 2
---

Server name: `PACS Comparator`. Package: `pacs-mcp`. Transport: stdio.

## `search_fhir`

Search a FHIR R4 server.

| Parameter | Type | Description |
|---|---|---|
| `resource_type` | string | FHIR resource type, for example `ImagingStudy` |
| `params` | object of strings | FHIR search parameters, for example `{"patient": "123"}` |

Returns: up to 50 resources from the search set.

## `search_reports`

Find a patient's report sentences closest to a query. Uses IRIS vector search.

| Parameter | Type | Description |
|---|---|---|
| `patient_id` | string | FHIR `Patient.id` |
| `query` | string | Free text, Czech or English |
| `top` | integer | Number of results. Default 5. |

Returns: `[{resource, score}]`. `resource` is a FHIR reference to the report. `score` is the cosine similarity.

SQL:

```sql
SELECT TOP ? Resource, VECTOR_COSINE(Embedding, EMBEDDING(?, 'minilm')) AS Score
FROM vec.ReportSentence WHERE PatientId = ? ORDER BY Score DESC
```

Needs IRIS. Without `IRIS_HOST` the tool returns `report search needs IRIS`. One query takes 5–17 s, because `EMBEDDING()` loads the model per call.

## `get_case_summary`

Read the case summary of a trigger and every resource it references.

| Parameter | Type | Description |
|---|---|---|
| `trigger_id` | string | Trigger ID |

Returns: `{composition, resources}`. `composition` is `Composition/summary-<trigger_id>`. Without a summary the tool returns a text message.

## Input checks

- A resource type must match `^[A-Z][A-Za-z]+$`.
- A resource ID must match `^[A-Za-z0-9.-]{1,64}$`.
- The server does not start without `PACS_MCP_DATA` set to `synthetic` or `eu-data-zone`.

How to run it: [Use the MCP server](/how-to/use-mcp-server/).
