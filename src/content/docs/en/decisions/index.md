---
title: Decisions
description: Architecture decision records of KomPACS.
sidebar:
  order: 0
---

Each record states one decision, the options the team rejected and the consequences. The team made them during the hackathon, 16–17 October 2026.

| Area | Decision |
|---|---|
| Deployment | [One stack per hospital, integrator-owned](/en/decisions/deployment-shape/) |
| Ingest | [HL7 orders via the IRIS production](/en/decisions/hl7-orders-via-iris-production/) |
| Ingest | [PACS feed through IRIS, patching ImagingStudy](/en/decisions/pacs-feed/) |
| FHIR | [ImagingStudy normalization](/en/decisions/imagingstudy-normalization/) |
| FHIR | [FHIR SQL Builder for SQL reads](/en/decisions/fhir-sql-builder/) |
| FHIR | [Case summary is a versioned Composition](/en/decisions/case-summary-composition/) |
| FHIR | [Requests and their channels](/en/decisions/requests-and-channels/) |
| AI | [One judge call per case](/en/decisions/judge-per-case-agent/) |
| AI | [Modrá kniha ČOS citations](/en/decisions/guideline-citations/) |
| AI | [Vector search: local model, IRIS index](/en/decisions/vector-search/) |
| AI | [Trace and re-judge history in IRIS](/en/decisions/llm-trace-and-rejudge/) |
| Contacts | [ePACS directory for facility contacts](/en/decisions/epacs-directory/) |
| MCP | [Standalone MCP server over FHIR](/en/decisions/mcp-server-standalone/) |
| Data | [Simulated body part of the scheduled exam](/en/decisions/simulated-body-part/) |
| UI | [Queue, request and timeline display rules](/en/decisions/ui-decisions/) |
