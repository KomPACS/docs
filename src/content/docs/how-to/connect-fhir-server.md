---
title: Napojení FHIR serveru
description: Nastavení API a MCP serveru KomPACS na FHIR R4 server a nahrání záznamu pacienta.
sidebar:
  order: 4
---

KomPACS čte a zapisuje přes FHIR R4 REST. Referenční server je IRIS for Health.

| Proměnná | Použití |
|---|---|
| `FHIR_BASE` | Základní URL FHIR R4 serveru |
| `IRIS_HOST` | IRIS pro SQL a vektorové vyhledávání |
| `INSURER_BASE` | Volitelně. Server s výpisem pojištěnce. |

## Záznam pacienta

- POC: hotové FHIR transakční bundly.
- Produkce: NIS posílá HL7 v2 ORU/ADT nebo CDA. IRIS je převede přes SDA3 na FHIR.

## Pravidla pro ImagingStudy

- České kódy modalit se mapují na DICOM: RTG → DX, SONO → US, MAMO → MG, ANGIO → XA.
- Každá studie s modalitou DICOM má jednu sérii s deterministickým UID.
- Hledání podle `modality` funguje jen se sérií.

## Nastavení serveru

- Max. výsledků hledání: 10000.
- Každé hledání filtrujte podle pacienta.

Podrobnosti: [anglická verze](/en/how-to/connect-fhir-server/).
