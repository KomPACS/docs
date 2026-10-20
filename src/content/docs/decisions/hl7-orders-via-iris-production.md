---
title: Objednávky HL7 přes produkci IRIS
description: Objednávky používají vestavěnou cestu IRIS HL7 → SDA3 → FHIR.
---

Produkce používá vestavěné třídy IRIS pro HL7 → SDA3 → FHIR. Cílem je využít integraci IRIS, ne ji psát znovu. Dvě malé třídy ObjectScript doplňují mezery: `ZHL7.OrderToSDA` předá PID-3 jako ID pacienta, `ZHL7.SDA3ToFHIR` přeskočí zápis pacienta.

**Odmítnuto:** Python, který sám vytvoří `ServiceRequest`. Funguje, ale obchází interoperabilitu IRIS.

**Důsledky:** ACK nepotvrzuje existenci `ServiceRequest`. Ověřte ho hledáním FHIR. V produkci MLLP s TLS.
