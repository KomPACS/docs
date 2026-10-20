---
title: PACS feed přes IRIS, patch ImagingStudy
description: CSV s dostupností z PACS jde přes produkci IRIS a mění jen stav ImagingStudy.
---

Cesta: `EnsLib.HTTP.GenericService` → `ZHL7.PacsCsvToFHIR` (embedded Python) → FHIR operace. Proces najde `ImagingStudy` podle ID vyšetření a pošle JSON Patch jen na `status` a rozšíření `dostupnost-pacs`.

**Proč:** Plný PUT nebo nový zdroj by přepsal nebo zdvojil živá data.

**Důsledky:** Nezměněná studie nedostane novou verzi. Stejný soubor dvakrát dá stejný stav.
