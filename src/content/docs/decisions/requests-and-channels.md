---
title: Žádosti a jejich kanály
description: Kanál žádosti určuje Organization.endpoint. Žádosti FHIR se v POC ukládají, neodesílají.
---

- Kanál `fhir`, když má příjemce aktivní `Endpoint` typu `hl7-fhir-rest`. Jinak `email`, jinak `phone`.
- V POC jsou nemocnice s FHIR simulované. API zapíše `Task` a nikam ho neodešle.
- Dotaz na výpis pojištěnce: jeden `Task` `INS-<trigger_id>` na případ. Vytvoří se, neodešle se. Data pojišťovny jsou volitelná.

**Produkce:** odeslání přes operaci IRIS na `Endpoint.address`.
