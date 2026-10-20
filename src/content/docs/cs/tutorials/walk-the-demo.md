---
title: Projít demo
description: Otevřete ukázkový případ, přečtěte posouzení AI a vyřiďte chybějící vyšetření ve veřejném demu KomPACS.
sidebar:
  order: 1
---

V tomto návodu projdete jeden případ ve veřejném demu. Stačí prohlížeč. Demo používá syntetické pacienty. Běží celé v prohlížeči a nic neukládá na server.

:::note
Demo se aktivně vyvíjí. Názvy tlačítek se mohou změnit.
:::

## 1. Otevřete frontu

1. Otevřete [demo.kompacs.cz](https://demo.kompacs.cz).
2. „Fronta k vyřízení“ ukazuje spouštěče: plánovaná vyšetření a MDT. Nejbližší datum je nahoře.
3. Každá karta ukazuje, kolik kandidátních vyšetření má snímky v PACS („V PACS X z Y“).

## 2. Vyberte ukázkový případ

V postranním panelu jsou „Ukázkové případy“. Každý ukazuje jednu funkci:

| Ukázkový případ | Co ukazuje |
|---|---|
| Předchozí vyšetření nalezená ve zprávách, žádosti e-mailem i telefonem | Vyšetření jen v textu zpráv. Žádosti e-mailem a telefonem. |
| Pojišťovna zná vyšetření z jiné nemocnice | Vyšetření známé jen z výpisu pojištěnce. |
| MDT: žádost nedoručena, urgovat | Žádost bez snímků po 2 pracovních dnech. |
| Upozornění na duplicitu | Plánované vyšetření opakuje vyšetření do 6 týdnů. |
| Dlouhá historie, relevantní jen některá vyšetření | Mnoho vyšetření. AI ponechá jen relevantní. |

Otevřete první případ.

## 3. Přečtěte případ

1. Lišta pacienta ukazuje věkové pásmo, diagnózu a spouštěč.
2. Časová osa ukazuje všechny události pacienta podle data. Řádek zobrazování ukazuje kandidátní vyšetření.
3. Každá dlaždice vyšetření ukazuje stav a posouzení relevance.

## 4. Zjistěte, jak AI rozhodla

1. Otevřete AI záznam na dlaždici vyšetření.
2. Přečtěte „Postup AI“. Uvádí vyhledávání, která AI provedla.
3. Najděte zdrojovou větu ze zprávy a citaci Modré knihy ČOS se stránkou.
4. Volitelně: klikněte na „Posoudit znovu“ a přidejte poznámku. Staré posouzení zůstane v historii.

## 5. Vyřiďte chybějící vyšetření

1. Najděte vyšetření se stavem „chybí“.
2. Zkontrolujte kontakt na jinou nemocnici. Potvrďte ho.
3. Schvalte připravený e-mail. Nebo označte telefonickou žádost jako vyžádanou.
4. Klikněte na demo tlačítko, které simuluje doručení do PACS. Vyšetření je dostupné.

## 6. Podívejte se na souhrn

Otevřete záložku „Přehled“. Ukazuje vyšetření podle modality a roku a kolik jich je v PACS.

## Co jste se naučili

- Spouštěč zahájí kontrolu.
- KomPACS najde vyšetření v NIS, v textu zpráv a v datech pojišťovny.
- AI posoudí relevanci s důkazy. Rozhodne koordinátor/ka.
- Chybějící vyšetření se stane žádostí. Doručení do PACS ji uzavře.

Dále: [Spustit kontrolu](/cs/tutorials/start-a-check/).
