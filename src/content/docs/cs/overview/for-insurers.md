---
title: Pro pojišťovny
description: Jak data pojišťovny mohou obohatit kontrolu KomPACS. KomPACS funguje i bez nich.
sidebar:
  order: 3
---

:::note
KomPACS funguje bez dat pojišťovny. Data pojišťovny jsou volitelné obohacení.
:::

## Proč data pojišťovny pomáhají

Nemocnice vidí jen svá vyšetření. Pacient mohl mít CT nebo MR v jiné nemocnici. Pojišťovna ví, kde a kdy proběhlo každé vykázané vyšetření. Ve 40 ukázkových případech znala 14 vyšetření jen data pojišťovny. Žádné z nich nebylo v PACS nemocnice.

## Jak je KomPACS používá

- Zdrojem je vlastní výpis pacienta, který pacient poskytne se souhlasem: „Výpis pojištěnce“. Každý pojištěnec si ho dnes může od pojišťovny vyžádat.
- KomPACS z výpisu čte datum, typ a místo vyšetření. Přidá je jako kandidátní předchozí vyšetření.
- AI označí vyšetření známá jen z výpisu jako nejistá. Rozhodne koordinátor/ka.
- Prototyp používá simulovaná data výpisu na testovacím FHIR serveru. Nemá živé napojení na pojišťovnu.

## Výhled

Nařízení EU o evropském prostoru pro zdravotní data (EHDS, nařízení (EU) 2025/327) přidá přeshraniční přístup k pacientským souhrnům od roku 2029. Snímky a zprávy ze zobrazovacích vyšetření následují od 26. března 2031. KomPACS používá FHIR R4, takže tyto zdroje může číst, až budou dostupné.
