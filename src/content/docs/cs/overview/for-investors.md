---
title: Pro investory a partnery
description: Obchodní model, způsob nasazení a regulatorní cesta KomPACS.
sidebar:
  order: 4
---

:::caution[Prototyp, není zdravotnický prostředek]
KomPACS je ověření konceptu (POC). Není certifikovaný.
:::

## Přínos

- Méně opakovaných CT a MR.
- Méně času personálu na shánění předchozích vyšetření.
- Vyšetření, která vyhledávání v NIS ani v PACS nenajde.

Čísla z ukázkových případů: [Dopad](/cs/overview/impact/).

## Model

- Po hackathonu produkt vlastní, distribuuje a podporuje licencovaný český IT integrátor.
- Nemocnice platí integrátorovi.
- Jedna sada kontejnerů na nemocnici: on-premise, nebo spravovaný tenant v EU cloudu, který provozuje integrátor.
- Nemocnice nic nemění. KomPACS se napojí přes standardy, které nemocnice už má: objednávky HL7 v2, FHIR R4, feed dostupnosti z PACS.

## Regulace

- Určený účel: najít a vyžádat předchozí vyšetření. KomPACS nestanovuje diagnózu.
- Každé posouzení relevance potvrdí člověk.
- Samotný člověk v procesu software nevyjímá z nařízení MDR (viz MDCG 2019-11). Pokud se MDR uplatní (pravidlo 11, pravděpodobně třída IIa), produkt certifikuje integrátor.

## Další kroky

1. Pilot v jedné nemocnici s reálnými objednávkami.
2. Druhá nemocnice.
3. Certifikace, pokud se MDR uplatní.

Podrobnosti: [Nasazení v nemocnici](/cs/how-to/deploy-for-a-hospital/), [Způsob nasazení](/cs/decisions/deployment-shape/).
