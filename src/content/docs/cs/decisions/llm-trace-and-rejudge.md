---
title: Záznam a historie posouzení v IRIS
description: Záznam AI je u uloženého výsledku. Nová posouzení se přidávají jako FHIR Basic.
---

- Každý výsledek (`Basic`, tag `llm-cache`) má rozšíření `llm-trace`: prompt, vstup, kroky nástrojů, shrnutí uvažování, výstup, odmítnuté položky.
- Nové posouzení jednoho vyšetření je nový `Basic` s tagem `llm-override`. Platí nejnovější. Historie se jen doplňuje.

**Odmítnuto:** záznam v paměti (po nasazení prázdný), přepsání výsledku (ztráta historie).
