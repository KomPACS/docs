---
title: Decisions
description: Architecture decision records of KOMPACS.
sidebar:
  order: 0
---

Each record states one decision, the options the team rejected and the consequences. The team made them during the hackathon, 16–17 October 2026.

| Area | Decision |
|---|---|
| Deployment | [One stack per hospital, integrator-owned](/decisions/deployment-shape/) |
| Ingest | [HL7 orders via the IRIS production](/decisions/hl7-orders-via-iris-production/) |
| Ingest | [PACS feed through IRIS, patching ImagingStudy](/decisions/pacs-feed/) |
| FHIR | [ImagingStudy normalization](/decisions/imagingstudy-normalization/) |
| FHIR | [FHIR SQL Builder for SQL reads](/decisions/fhir-sql-builder/) |
| FHIR | [Case summary is a versioned Composition](/decisions/case-summary-composition/) |
| FHIR | [Requests and their channels](/decisions/requests-and-channels/) |
| AI | [One judge call per case](/decisions/judge-per-case-agent/) |
| AI | [Modrá kniha ČOS citations](/decisions/guideline-citations/) |
| AI | [Vector search: local model, IRIS index](/decisions/vector-search/) |
| AI | [Trace and re-judge history in IRIS](/decisions/llm-trace-and-rejudge/) |
| Contacts | [ePACS directory for facility contacts](/decisions/epacs-directory/) |
| MCP | [Standalone MCP server over FHIR](/decisions/mcp-server-standalone/) |
| Data | [Simulated body part of the scheduled exam](/decisions/simulated-body-part/) |
| UI | [Queue, request and timeline display rules](/decisions/ui-decisions/) |
