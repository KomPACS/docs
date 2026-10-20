---
title: Napojení objednávek HL7 v2
description: Posílání plánovaných CT, MR a PET z NIS/RIS do produkce IRIS jako HL7 v2 ORM^O01.
sidebar:
  order: 2
---

Plánované vyšetření přijde do KomPACS jako objednávka HL7 v2 `ORM^O01`. IRIS ji vestavěnou cestou převede na FHIR `ServiceRequest`.

```text
NIS/RIS ──ORM^O01──> HL7.Orders.In ──> ZHL7.OrderToSDA ──> SDA3 ──> ZHL7.SDA3ToFHIR ──> FHIR ServiceRequest
```

## Pravidla zprávy

- PID-3: ID pacienta. Musí se rovnat FHIR `Patient.id`.
- ORC-2: číslo objednávky. Stane se `ServiceRequest.identifier` typu `PLAC`.
- OBR-4: modalita se systémem `DCM` (např. `CT`, `MR`, `PT`).

## Postup

1. Nahrajte dvě třídy ObjectScript do FHIR namespace.
2. Přidejte službu, proces a operaci do produkce. Spusťte ji.
3. Nasměrujte rozhraní NIS/RIS na službu.
4. Pošlete testovací objednávku.
5. Výsledek ověřte hledáním FHIR, ne podle ACK: `GET /fhir/r4/ServiceRequest?identifier=<číslo>`.

V produkci použijte MLLP s TLS místo HTTP. Nastavte znakovou sadu, jinak se česká diakritika poškodí.

Podrobnosti: [anglická verze](/how-to/connect-hl7-orders/).
