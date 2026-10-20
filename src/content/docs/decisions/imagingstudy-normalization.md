---
title: Normalizace ImagingStudy
description: Kódy modalit, série a UID opravuje loader, takže každé nahrání dá stejná data.
---

- České kódy modalit se mapují na DICOM (RTG → DX, SONO → US, MAMO → MG, ANGIO → XA). Český kód zůstává v `procedureCode`.
- Každá studie s modalitou DICOM má jednu sérii s UID `2.25.<uuid5(id studie)>`.
- StudyInstanceUID má systém `urn:dicom:uid`.

**Proč:** Hledání podle `modality` v R4 čte `series.modality`. Bez série nefunguje.
