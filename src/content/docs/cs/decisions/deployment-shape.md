---
title: Jedna sada na nemocnici, vlastní ji integrátor
description: KOMPACS běží jako jedna sada kontejnerů na nemocnici, on-premise nebo ve spravovaném tenantu v EU cloudu.
---

- Stejná sada kontejnerů (IRIS for Health, API, UI) pro každou nemocnici.
- On-premise, nebo spravovaný tenant v EU cloudu pro každou nemocnici. Data pacientů se mezi tenanty nesdílejí.
- Nemocnice nic nemění. Napojení přes HL7 v2, FHIR R4 a feed z PACS.
- Centrálně, bez dat pacientů: adresář ověřených kontaktů.
- Produkt vlastní a podporuje licencovaný český IT integrátor. Nemocnice platí integrátorovi.

**Proč ne čisté SaaS.** Nemocnice jsou provozovatelé podle NIS2. Schválení dat pacientů ve veřejném cloudu trvá dlouho. Tenant v cloudu stejně potřebuje VPN do NIS a PACS.

**Regulace.** Určený účel: najít a vyžádat předchozí vyšetření, bez diagnózy. Člověk potvrdí každé posouzení. To samo software nevyjímá z MDR (MDCG 2019-11). Pokud se MDR uplatní (pravidlo 11, pravděpodobně třída IIa), certifikuje integrátor.
