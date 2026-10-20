---
title: REST API
description: Přehled REST API KomPACS. Generovaná reference vychází z kontraktu OpenAPI.
sidebar:
  order: 1
---

API KomPACS je služba FastAPI. UI ji volá na stejném originu pod `/api/`. Kontrakt je dokument OpenAPI 3.1: [openapi.json](https://github.com/KomPACS/docs/blob/main/contract/openapi.json).

Generované stránky (anglicky): [API (generováno)](/reference/api/).

| Skupina | Endpointy |
|---|---|
| Stav | `GET /api/health` |
| Pacienti | `GET /api/patients?q=`, `GET /api/patients/{patient_id}/timeline` |
| Spouštěče a případy | `GET /api/triggers`, `POST /api/triggers`, `GET /api/triggers/{trigger_id}` |
| AI záznam | `GET /api/triggers/{trigger_id}/llm-trace` |
| Kandidátní vyšetření | `POST .../candidates`, `PATCH .../candidates/{candidate_id}`, `POST .../rejudge`, `GET .../verdicts`, `POST .../verdicts/{n}/restore` |
| Fronta a žádosti | `GET /api/queue`, `POST /api/requests/{request_id}/approve`, `.../requested`, `.../not-found` |
| Kontakty | `POST /api/contacts/lookup`, `PUT /api/contacts/{organization_id}` |
| Statistiky | `GET /api/stats` |
| Jen demo | `POST /api/demo/deliver/{request_id}`, `POST /api/demo/pacs-arrival/{study_id}` |

Rozhodnutí koordinátora vždy platí před posouzením AI. Neúspěšné nové posouzení vrátí `502` a nic se neuloží.
