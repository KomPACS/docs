---
title: Co je KomPACS
description: KomPACS (KOMparátor PACS) kontroluje předchozí vyšetření před CT, MR, PET nebo indikačním seminářem.
sidebar:
  order: 1
---

:::caution[Prototyp, není zdravotnický prostředek]
KomPACS je prototyp z hackathonu. Nepoužívejte ho pro klinická rozhodnutí.
:::

KomPACS znamená *KOMparátor PACS*. Vytvořil ho tým „404 Tumor Not Found“ na Rakathonu 2026. Zadání připravily FN Motol a Nemocnice Na Homolce.

## Problém

Před CT, MR nebo PET radiolog srovnává nové snímky se staršími. Před indikačním seminářem (MDT) potřebují specialisté stejnou historii. Dnes člověk čte staré zprávy, hledá v PACS a volá do jiných nemocnic. Mnohá předchozí vyšetření jsou jen v textu zpráv. Vyhledávání v NIS ani v PACS je nenajde.

## Co KomPACS dělá

1. **Spouštěč.** Kontrolu spustí plánované CT, MR nebo PET, nebo pacient na seznamu MDT.
2. **Hledání.** KomPACS sebere kandidátní předchozí vyšetření z NIS, z textu zpráv a, pokud ho pacient poskytne, z výpisu pojištěnce.
3. **Posouzení.** AI označí každé vyšetření: relevantní, nerelevantní nebo nejisté. Cituje Modrou knihu ČOS a zdrojovou větu.
4. **Kontrola PACS.** KomPACS ukáže, která relevantní vyšetření mají snímky v PACS.
5. **Žádost.** Pro chybějící vyšetření připraví žádost do jiné nemocnice: e-mail, telefon nebo FHIR.
6. **Souhrn.** KomPACS zapíše souhrn případu jako FHIR `Composition`.

Každé posouzení a každou žádost potvrdí člověk (koordinátor/ka). KomPACS nestanovuje diagnózu.

## Technologie

- InterSystems IRIS for Health: FHIR R4 server, převod HL7 v2 → SDA3 → FHIR, interoperabilní produkce, FHIR SQL Builder, vektorové vyhledávání.
- LLM v EU Data Zone. Text o pacientovi nejde do žádného jiného modelu.
- MCP server. Data případu může číst libovolný MCP klient.

## Odkazy

- Web: [kompacs.cz](https://kompacs.cz)
- Veřejné demo se syntetickými daty: [demo.kompacs.cz](https://demo.kompacs.cz)
- Čísla dopadu: [Dopad](/overview/impact/)
