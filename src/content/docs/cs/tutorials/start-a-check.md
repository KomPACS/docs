---
title: Spustit kontrolu
description: Spusťte novou kontrolu pro plánované CT, MR, PET nebo MDT ve veřejném demu KomPACS.
sidebar:
  order: 2
---

V tomto návodu spustíte novou kontrolu v demu. V nemocnici kontrolu spustí objednávka HL7 v2 z NIS. V demu totéž udělá dialog.

## Postup

1. Otevřete [demo.kompacs.cz](https://demo.kompacs.cz).
2. Klikněte na „Spustit kontrolu“.
3. Najděte pacienta podle jména nebo ID. Vyberte ho.
4. Vyberte spouštěč: „Plánované CT“, „Plánované MR“, „Plánované PET“ nebo „MDT, indikační seminář“.
5. Vyberte datum.
6. Potvrďte. Otevře se nový případ.

## Co se děje za dialogem

Ve skutečném systému:

1. API pošle zprávu HL7 v2 `ORM^O01` do produkce IRIS.
2. IRIS ji převede přes SDA3 na FHIR `ServiceRequest` u existujícího pacienta.
3. API sestaví kandidátní vyšetření, požádá AI o posouzení a zapíše souhrn případu.

V demu tyto kroky simuluje prohlížeč se syntetickými daty.

Podrobnosti: [Tok dat](/cs/explanation/data-flow/).
