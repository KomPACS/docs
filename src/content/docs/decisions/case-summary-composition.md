---
title: Souhrn případu jako verzovaná Composition
description: Souhrn případu je uložená FHIR Composition, zapsaná jen při změně obsahu.
---

API sestaví `Composition/summary-<trigger_id>` a zapíše ji jen při změně obsahu. IRIS uchová každou verzi. `_history` ukáže, co lékař viděl a kdy.

Tvar: `status` `preliminary`, `type` LOINC `60591-5`, autor `Device/pacs-comparator`, sekce diagnózy, relevantní vyšetření, co chybí, upozornění na duplicitu.

**Odmítnuto:** souhrn jen na vyžádání. Chybí auditní stopa.
