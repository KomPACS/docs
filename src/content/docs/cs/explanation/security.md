---
title: Bezpečnost a ochrana dat
description: Jak KOMPACS zachází s daty pacientů, přístupy a dodavatelským řetězcem.
sidebar:
  order: 3
---

:::caution[Prototyp, není zdravotnický prostředek]
POC běžel na pseudonymizovaném datasetu z hackathonu. Prostředí POC už neexistuje.
:::

## Pravidla ochrany dat

- Text o pacientovi jde do LLM jen přes bránu EU Data Zone. API jiné modely odmítne.
- Embeddingy počítá lokální model v kontejneru API.
- Vektorová tabulka neukládá text, jen odkaz FHIR a vektor.
- MCP server bez deklarace dat (`synthetic` nebo `eu-data-zone`) nenastartuje.
- Veřejné demo používá jen syntetické pacienty a běží v prohlížeči.
- Data pojišťovny jsou volitelná. Zdrojem je výpis, který pacient poskytne se souhlasem.

## V POC

- Jeden veřejný vstup: reverzní proxy s TLS a přihlášením. API nemělo veřejný vstup.
- API se k IRIS připojovalo jako uživatel s minimálními právy.
- Obrazy kontejnerů připnuté digestem, běh bez roota, skenování `hadolint` a `trivy`.
- Žádná tajemství v gitu ani v obrazech.

## Známé mezery POC

- IRIS mělo veřejnou adresu a basic auth bez TLS.
- Žádné přihlášení po uživatelích, žádný export auditu.

## Cesta do produkce

- IRIS v privátní síti. HL7 přes MLLP s TLS. Partneři přes VPN.
- SSO nemocnice. Role lékař a koordinátor ze skupin IdP.
- Jeden uživatel s minimálními právy na službu. Audit IRIS zapnutý.
- Skenování obrazů v CI. Distroless runtime.
- Data zůstávají v nemocnici nebo v EU regionu.
