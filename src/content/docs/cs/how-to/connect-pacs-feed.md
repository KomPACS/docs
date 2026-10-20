---
title: Napojení feedu dostupnosti z PACS
description: Přenos dostupnosti snímků z PACS do IRIS, aby každé ImagingStudy ukázalo, zda jsou snímky v PACS.
sidebar:
  order: 3
---

KomPACS musí vědět, zda jsou snímky každého vyšetření v PACS. POC používá soubor CSV.

```text
Export z PACS (CSV) ──HTTP──> PACS.Csv.In ──> ZHL7.PacsCsvToFHIR (embedded Python) ──> FHIR PATCH ImagingStudy
```

| Hodnota v CSV | `ImagingStudy.status` |
|---|---|
| Snímky v PACS = ano | `available` |
| Snímky v PACS = ne | `registered` |
| Bez řádku | `unknown` |

Proces najde `ImagingStudy` podle ID vyšetření. Pošle FHIR JSON Patch jen na `status` a rozšíření `dostupnost-pacs`. Nezměněná studie nedostane novou verzi.

## Postup

1. Přidejte službu a proces do produkce.
2. Nastavte export z PACS: jeden řádek na vyšetření.
3. Pošlete soubor na službu.
4. Ověřte jednu studii: `GET /fhir/r4/ImagingStudy/<id>`.

Formát feedu se liší podle nemocnice. Přizpůsobte mapování, ne nemocnici.

Podrobnosti: [anglická verze](/how-to/connect-pacs-feed/).
