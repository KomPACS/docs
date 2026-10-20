---
title: Zdroje FHIR
description: Zdroje FHIR R4, ID a tagy, které KomPACS čte a zapisuje.
sidebar:
  order: 3
---

## Čte

| Zdroj | Použití |
|---|---|
| `Patient`, `Condition` | Pacient a diagnózy |
| `DocumentReference`, `DiagnosticReport` | Zprávy |
| `ImagingStudy` | Studie a série. `status` ukazuje dostupnost v PACS. |
| `ServiceRequest`, `List` | Spouštěče: objednávka z HL7, seznam MDT |
| `Coverage`, `ExplanationOfBenefit` | Pojišťovna a výpis pojištěnce (volitelný zdroj) |
| `Organization`, `Endpoint` | Jiné nemocnice a jejich FHIR adresa |

## Zapisuje

| Zdroj | ID nebo tag | Obsah |
|---|---|---|
| `Composition` | `summary-<trigger_id>` | Souhrn případu, verzovaný |
| `Task`, `Communication` | tag `prior-request` | Žádost o chybějící vyšetření a její e-mail |
| `Task` | `INS-<trigger_id>` | Dotaz na výpis pojištěnce, neodesílá se |
| `Basic` | `llm-cache`, `llm-override`, `review-*` | Posouzení AI se záznamem, nová posouzení, rozhodnutí koordinátora |
| `Organization` | `EPACS-<AE title>` | Kontakt z adresáře ePACS |

Podrobnosti: [anglická verze](/en/reference/fhir-resources/).
