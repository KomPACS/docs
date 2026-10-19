---
title: FHIR SQL Builder pro čtení přes SQL
description: Čtení přes SQL používá živou projekci FHIR SQL Builder se zálohou přes FHIR REST.
---

Čtení přes SQL používá projekci FHIR SQL Builder (schéma `pacs`). Projekce je živá. Max. výsledků hledání FHIR je 10000.

**Odmítnuto:** dotazy na interní tabulky FHIR. Jejich prefix se mění při novém vytvoření serveru.

**Důsledky:** Smazané zdroje zůstávají jako prázdné záznamy, dotazy proto nejdřív filtrují živá ID. Každé čtení přes SQL má zálohu přes FHIR REST.
