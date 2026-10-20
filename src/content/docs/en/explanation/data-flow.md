---
title: Data flow
description: Where data comes from, where it lands in IRIS and when it leaves IRIS.
sidebar:
  order: 2
---

## Processes

| # | Process | Starts with | Path |
|---|---|---|---|
| 1 | Load | Setup | FHIR bundles → FHIR. Guideline PDF → vectors. Report sentences → vectors. |
| 2 | Trigger | HL7 order or MDT list | HL7 ORM^O01 → production → SDA3 → `ServiceRequest` |
| 3 | Case build | Collector opens a case | API reads FHIR → candidates and status → LLM → `Task`, `Composition` |
| 4 | Collector actions | Click in the UI | Review → `Basic`. Approve → `Task` + `Communication`. Re-judge → `Basic`. |
| 5 | Images arrive | PACS feed row | CSV → production → PATCH `ImagingStudy` |
| 6 | Search | Patient picker, timeline | Picker: SQL on `pacs.*`. Timeline: vector search. |
| 7 | MCP Q&A | MCP client question | Agent ↔ LLM. Agent runs `pacs-mcp` tools → FHIR and SQL. |

## Sources

| Origin | Content |
|---|---|
| Dataset | Pseudonymized FHIR bundles and a PACS availability CSV from the hackathon |
| Simulated | HL7 orders, MDT list, other hospitals, insurer statement data. FHIR tag `simulated`. |
| Public | Modrá kniha ČOS PDF, ePACS facility directory |
| Derived | Everything KomPACS writes: verdicts, requests, summaries |

## One check

```mermaid
sequenceDiagram
  actor C as Collector
  participant API as API
  participant P as IRIS production
  participant F as IRIS FHIR
  participant V as IRIS vectors
  participant L as LLM (EU)

  C->>API: new check (patient, CT/MR)
  API->>P: HL7 ORM^O01
  P->>F: SDA3 → ServiceRequest
  C->>API: open case
  API->>F: read Patient, Condition, reports, ImagingStudy, Coverage, Endpoint
  Note over API: candidates + prior status
  alt not cached
    API->>L: find mentions (report text)
    API->>L: match place to ePACS facility
    API->>L: judge case
    loop up to 6 rounds
      L->>API: search_guideline / search_reports
      API->>V: VECTOR_COSINE
      API->>L: chunks / sentences
    end
    L->>API: verdicts + Modrá kniha quote
    API->>F: PUT Basic llm-cache + llm-trace
  end
  API->>F: PUT Composition summary-* (on change)
  API->>C: case
  C->>API: approve request
  API->>F: PUT Task + Communication
  Note over P,F: images arrive
  P->>F: PATCH ImagingStudy
  Note over API: prior shows available
```

## MCP question

```mermaid
sequenceDiagram
  participant A as MCP client (agent)
  participant M as pacs-mcp
  participant L as LLM (EU)
  participant I as IRIS

  A->>M: list_tools
  A->>L: question + tool list
  loop up to 6 rounds
    L->>A: function call
    A->>M: call tool
    M->>I: FHIR REST or SQL
    M->>A: result
    A->>L: function output
  end
  L->>A: answer
```

The LLM never calls MCP. The agent is the MCP client. `pacs-mcp` reads the `Composition` that the API wrote.

## What leaves IRIS

| Call | When | Sends |
|---|---|---|
| Find mentions | Case build, per report not yet cached | Text and date of one report |
| ePACS match | New place name in a report | Place name and 15 facility names |
| Judge case | Case build, re-judge | Case JSON. Tool results: guideline chunks, the patient's report sentences. |
| MCP agent | A question | Question. Tool results: FHIR resources, case summary, report sentences. |

Patient text goes only to an EU Data Zone model. The API refuses other models. Embeddings run on a local model in the API container, so report text goes to no embedding service.

## Stores

| Store | Data | Written by |
|---|---|---|
| FHIR, dataset | Patient, Condition, reports, ImagingStudy | Loader, PACS feed (status) |
| FHIR, trigger | ServiceRequest, MDT List | HL7 production, API |
| FHIR, derived | Requests, verdicts, summaries, ePACS organizations | API |
| Insurer statement server | ExplanationOfBenefit, Coverage | Seed (POC) |
| `pacs.*` SQL | Patient, Condition | FHIR SQL Builder, live |
| `vec.ReportSentence` | Report sentence vectors, no text | API |
| `vec.GuidelineChunk` | Modrá kniha chunks and vectors | Setup |
