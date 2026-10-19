---
title: Jedno posouzení na případ
description: AI posoudí všechna kandidátní vyšetření spouštěče jedním voláním. Pravidla jsou v promptu.
---

- Jedno volání agenta posoudí všechna kandidátní vyšetření. Pravidla seznamu (2 nejnovější, strop, vstupní vyšetření) potřebují všechna najednou.
- Klinická pravidla jsou vodítkem v českém promptu. Kód jen ověřuje výstup.
- Každé posouzení má 3–5 českých kroků (`kroky`). Lékaři potřebují čitelné vysvětlení česky.

**Důsledky:** Cache podle spouštěče a sady kandidátů. Záložní posouzení se neukládají.
