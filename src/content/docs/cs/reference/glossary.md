---
title: Slovník
description: Pojmy KOMPACS a jejich význam.
sidebar:
  order: 4
---

Jeden význam na pojem.

## Klinické pojmy

| Pojem | Význam |
|---|---|
| MDT, indikační seminář | Setkání specialistů, kteří společně rozhodují o léčbě nádoru. |
| Vyšetření | Jedno zobrazovací vyšetření pacienta, jak je zapsané v NIS. Jeho snímky v PACS tvoří studii. |
| Plánované vyšetření | Plánované CT, MR nebo PET. Jeden ze dvou spouštěčů. |
| Spouštěč | Událost, která zahájí kontrolu: plánované vyšetření nebo pacient na seznamu MDT. |
| Předchozí vyšetření | Dřívější zobrazovací vyšetření téhož pacienta. |
| Kandidátní předchozí vyšetření | Vyšetření z NIS, ze zprávy nebo z dat pojišťovny, před posouzením relevance. |
| Relevantní předchozí vyšetření | Vyšetření, se kterým lékař potřebuje srovnávat. |
| Vstupní vyšetření | Vyšetření před začátkem léčby. Slouží k hodnocení odpovědi. |
| Datum prvozáchytu | Datum prvního záznamu o nádoru. Od něj začíná okno hledání. |
| Souhrn případu | Výstup KOMPACS: kontext pacienta, relevantní vyšetření, jejich stav, co chybí, další kroky. |
| Zpráva, popis | Text lékaře. Radiologický popis je textové čtení vyšetření. |
| Indikující osoba | Kdo objedná vyšetření nebo spustí kontrolu. |

## Pracovní postup

| Pojem | Význam |
|---|---|
| Lékař | Kdokoli, kdo čte souhrn případu: lékař, sestra, člen MDT. |
| Koordinátor/ka | Kdo pracuje s frontou: rozhoduje o vyšetřeních, schvaluje žádosti, volá. |
| Fronta | Seznam otevřených žádostí a upozornění. |
| Žádost | Žádost o chybějící snímky nebo popis: e-mailem, telefonem nebo přes FHIR. |
| Dotaz na pojišťovnu | FHIR `Task`, který žádá výpis pojištěnce od data prvozáchytu. Vytvoří se, neodešle se. |
| Posouzení relevance | Označení AI: relevantní, nerelevantní nebo nejisté, s důvodem a zdrojovou větou. |
| Stav vyšetření | Dostupné, chybí popis, chybí, místo neznámé. |
| Vyřazeno koordinátorem | Vyšetření odebrané ze žádostí. Lékař ho může vyžádat znovu. |
| Upozornění na duplicitu | Plánované vyšetření opakuje stejné vyšetření do 6 týdnů. |
| Ověřený kontakt | E-mail nebo telefon jiné nemocnice, který koordinátor potvrdil, s datem. |
| Nedoručeno | Žádost, jejíž snímky nejsou v PACS 2 pracovní dny po odeslání. |
| Nedohledáno | Žádost s neznámým místem, kterou koordinátor uzavřel bez nalezení. |
| Časová osa | Všechny události pacienta podle data. |

## Zobrazování a IT

| Pojem | Význam |
|---|---|
| Modalita | Zobrazovací technika (CT, MR, PT, US …). Kód DICOM. |
| Studie, série | Jedno vyšetření s unikátním UID; sada snímků uvnitř studie. |
| AE title | Název aplikační entity DICOM. ePACS jím identifikuje zařízení. |
| PACS, ePACS | Archiv snímků; česká síť pro výměnu snímků mezi nemocnicemi. |
| NIS, RIS | Nemocniční informační systém; radiologický informační systém. |
| FHIR, HL7 v2, ORM^O01, CDA | Standardy pro výměnu zdravotních dat. Objednávky přicházejí jako ORM^O01. |
| SDA | Interní formát InterSystems. IRIS převádí HL7 v2 / CDA → SDA → FHIR. |
| Produkce | Interoperabilní pipeline IRIS: služby, procesy, operace. |
| FHIR SQL Builder | Nástroj IRIS, který promítá zdroje FHIR do SQL tabulek. Schéma `pacs`. |
| Embedding, vektorové vyhledávání | Vektor významu textu; hledání nejbližších textů přes `VECTOR_COSINE`. |
| MCP | Model Context Protocol. Server KOMPACS: `pacs-mcp`. |
| EHDS | Evropský prostor pro zdravotní data, nařízení (EU) 2025/327. |
