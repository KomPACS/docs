---
title: Simulovaná část těla
description: Dataset nemá část těla, API ji odvodí z diagnózy a modality.
---

API odvodí část těla plánovaného vyšetření z první mapované diagnózy MKN-10 a modality. U PET, MDT a neznámé diagnózy žádná. Mapování musí potvrdit lékař. V produkci se část těla vezme ze skutečné objednávky.
