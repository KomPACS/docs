---
title: AI posouzení a záznam postupu
description: Jak AI v KOMPACS posuzuje relevanci, cituje Modrou knihu ČOS a zaznamenává kroky.
sidebar:
  order: 4
---

:::caution[Prototyp, není zdravotnický prostředek]
AI navrhuje. Rozhoduje koordinátor/ka. Rozhodnutí člověka vždy platí.
:::

## Postup

1. **Zmínky.** LLM najde v textu zpráv zobrazovací vyšetření s datem a místem.
2. **Místo.** Neostré párování vybere 15 zařízení z adresáře ePACS. LLM vybere jedno nebo žádné.
3. **Posouzení.** Jedno volání agenta posoudí všechna kandidátní vyšetření spouštěče.
4. **Hledání.** Až v 6 kolech agent volá `search_guideline` (Modrá kniha ČOS) a `search_reports` (věty ze zpráv pacienta).
5. **Odpověď.** Každé posouzení má štítek, důvod, zdrojovou větu, citaci `{page, quote}` a 3–5 českých kroků.

## Kontrola

Kód ověří štítek, ID kandidáta, zdrojovou větu a citaci. Citace musí být v části, kterou agent v tomto běhu získal. Chybná položka se zahodí nebo je nejistá.

## Záznam postupu

Každý uložený výsledek je FHIR `Basic` (tag `llm-cache`) s rozšířením `llm-trace`: prompt, vstup, kroky nástrojů, shrnutí uvažování modelu, výstup, odmítnuté položky. UI ho ukazuje jako AI záznam. České kroky jsou vysvětlení modelu, ne jeho skryté uvažování.

## Nové posouzení

Koordinátor/ka může požádat o nové posouzení jednoho vyšetření s poznámkou. Každý výsledek je nový `Basic` (tag `llm-override`). Platí nejnovější. Historie se jen doplňuje.
