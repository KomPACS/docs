---
title: Adresář ePACS
description: Kontakty na zařízení pocházejí z veřejného adresáře ePACS. LLM k němu páruje místa ze zpráv.
---

Veřejný seznam ePACS (asi 860 zařízení) se jednou stáhne do souboru. Jména osob se zahodí. Místo ze zprávy: neostré párování vybere 15 zařízení, model v EU vybere jedno nebo žádné. První shoda vytvoří `Organization/EPACS-<AE>`. Existující organizace se nepřepisuje.

**Důsledky:** Adresář stárne. Ověření kontaktu koordinátorem chyby zachytí.
