---
title: Nasazení v nemocnici
description: Provoz jedné sady KomPACS pro jednu nemocnici, on-premise nebo ve spravovaném tenantu v EU cloudu.
sidebar:
  order: 1
---

:::caution[Prototyp, není zdravotnický prostředek]
Tento postup popisuje cílové nasazení. POC z hackathonu běžel ve zjednodušené podobě. Prostředí POC už neexistuje.
:::

## Podoba

Jedna nemocnice má jednu sadu kontejnerů. Mezi sadami se nesdílejí žádná data pacientů.

| Kontejner | Role | Velikost v POC |
|---|---|---|
| IRIS for Health | FHIR R4 server, interoperabilní produkce, SQL projekce, vektorové tabulky | 4 CPU, 8 GB |
| API | Logika případů, volání AI, lokální model embeddingů | 1 CPU, 2 GiB |
| Web | UI a reverzní proxy k API | 0,25 CPU, 0,5 GiB |

Dvě možnosti provozu:

- **On-premise** v síti nemocnice.
- **Spravovaný tenant v EU cloudu** pro každou nemocnici. Provozuje ho integrátor. Potřebuje VPN do NIS a PACS nemocnice.

## Předpoklady

- Kontejnerové prostředí (Docker Compose nebo Kubernetes).
- Licencovaný IRIS for Health pro produkci.
- LLM v EU regionu nebo on-premise.
- Poskytovatel identit nemocnice pro SSO.
- Síťové cesty z NIS/RIS a PACS do IRIS.

## Postup

1. Spusťte tři kontejnery v privátní síti. Ven vystavte jen webový kontejner přes TLS.
2. Nastavte IRIS opakovatelnými skripty: FHIR R4 server, max. 10000 výsledků hledání, produkce pro objednávky a PACS feed, projekce FHIR SQL Builder (schéma `pacs`), vektorové tabulky, jeden uživatel s minimálními právy na službu.
3. Nahrajte části Modré knihy ČOS do vektorové tabulky.
4. Nastavte API na IRIS (`IRIS_HOST`) a FHIR (`FHIR_BASE`).
5. Napojte zdroje: [HL7 objednávky](/how-to/connect-hl7-orders/), [PACS feed](/how-to/connect-pacs-feed/), [FHIR server](/how-to/connect-fhir-server/).
6. Napojte SSO. Role lékař a koordinátor namapujte na skupiny.
7. Pošlete testovací objednávku. Ověřte `ServiceRequest`. Otevřete případ.

Podrobná tabulka POC → produkce: [anglická verze](/en/how-to/deploy-for-a-hospital/). Proč: [Způsob nasazení](/decisions/deployment-shape/).
