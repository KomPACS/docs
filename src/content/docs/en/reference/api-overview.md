---
title: REST API
description: Overview of the KomPACS REST API. The generated reference comes from the OpenAPI contract.
sidebar:
  order: 1
---

The KomPACS API is a FastAPI service. The UI calls it on the same origin under `/api/`. The contract is an OpenAPI 3.1 document: [openapi.json](https://github.com/KomPACS/docs/blob/main/contract/openapi.json).

The generated pages are under [API (generated)](/en/reference/api/).

## Groups

| Group | Endpoints |
|---|---|
| Health | `GET /api/health` |
| Patients | `GET /api/patients?q=`, `GET /api/patients/{patient_id}/timeline` |
| Triggers and cases | `GET /api/triggers`, `POST /api/triggers`, `GET /api/triggers/{trigger_id}` |
| AI log | `GET /api/triggers/{trigger_id}/llm-trace` |
| Candidate priors | `POST .../candidates`, `PATCH .../candidates/{candidate_id}`, `POST .../rejudge`, `GET .../verdicts`, `POST .../verdicts/{n}/restore` |
| Queue and requests | `GET /api/queue`, `POST /api/requests/{request_id}/approve`, `.../requested`, `.../not-found` |
| Contacts | `POST /api/contacts/lookup`, `PUT /api/contacts/{organization_id}` |
| Stats | `GET /api/stats` |
| Demo only | `POST /api/demo/deliver/{request_id}`, `POST /api/demo/pacs-arrival/{study_id}` |

## Conventions

- JSON in and out.
- A Collector decision always wins over an AI verdict.
- A failed re-judge returns `502`. Nothing is stored.
- The demo endpoints simulate a PACS arrival. They do not exist in production.
