---
title: Glossary
description: KomPACS terms with their Czech UI labels.
sidebar:
  order: 4
---

One meaning per term. The Czech column is the UI label.

## Clinical

| Term | Meaning | Czech (UI) |
|---|---|---|
| MDT | Multidisciplinary team meeting (tumor board). Specialists decide cancer treatment together. | MDT, indikační seminář |
| Exam | One imaging examination of a patient, as recorded in NIS. Its images in PACS form a study. | vyšetření |
| Scheduled exam | A planned CT, MRI or PET scan. One of the two triggers. | plánované vyšetření |
| Trigger | The event that starts a check: a scheduled exam or a patient on an MDT list. | spouštěč |
| Prior | An earlier imaging exam of the same patient. | předchozí vyšetření |
| Candidate prior | A prior found in NIS, named in a report, or known from insurer data, before the relevance verdict. | kandidátní předchozí vyšetření |
| Relevant prior | A prior the physician needs to compare against for the current exam or MDT. | relevantní předchozí vyšetření |
| Baseline | The prior taken before treatment started. Used to measure response. | vstupní vyšetření |
| Comparison | Reading a new exam against priors to see change. | srovnání |
| Index date | Date of the first record of the patient's cancer. The lookback window starts from it. | datum prvozáchytu |
| Case summary | KomPACS output: patient context, relevant priors, their status, missing items, next steps. | souhrn případu |
| Report | Text written by a physician. A radiology report is the text reading of an exam. | zpráva, popis |
| Ordering person | The person who orders the exam or starts the check. | indikující osoba |

## Workflow

| Term | Meaning | Czech (UI) |
|---|---|---|
| Doctor | Anyone who reads the case summary: physician, nurse, MDT member. | lékař |
| Collector | The person who works the queue: decides priors, approves requests, makes calls. | koordinátor/ka |
| Queue | The Collector's list of open requests and alerts. | fronta |
| Request | One ask to get missing images or a missing report, by e-mail, phone or FHIR. | žádost |
| Insurer request | A FHIR `Task` that asks for the patient's insurer statement since the index date. Generated, not sent. | dotaz na pojišťovnu |
| Relevance verdict | The AI label for a candidate prior: relevant, not relevant or uncertain, with a reason and the source sentence. | relevantní / nerelevantní / nejisté |
| Prior status | Available, missing report, missing, or place unknown. | dostupné / chybí popis / chybí / místo neznámé |
| Removed prior | A prior the Collector removed from the request list. The Doctor can request it again. | vyřazeno koordinátorem |
| Duplicate alert | Warning that the scheduled exam repeats the same exam within 6 weeks. | upozornění na duplicitu |
| Verified contact | An e-mail or phone of another hospital that the Collector confirmed, with the date. | ověřený kontakt |
| Insurer | A health insurer. Knows where and when each billed exam took place. | zdravotní pojišťovna |
| Not delivered | A request whose prior is not in PACS 2 working days after it was sent. | nedoručeno |
| Not found | A place-unknown request the Collector closed without finding the place. | nedohledáno |
| Timeline | All events of one patient in date order. | časová osa |

## Imaging

| Term | Meaning |
|---|---|
| Modality | The imaging technique (CT, MR, PT, US, ...). DICOM code. |
| Study | One imaging exam. Has a unique Study Instance UID. |
| Series | One image set inside a study. |
| Accession number | Hospital ID for an ordered exam. Links the order, the study and the report. |
| AE title | DICOM Application Entity title. ePACS identifies a facility by it. |
| PACS | Picture archiving and communication system. Stores and serves DICOM images. |
| ePACS | Czech network for exchanging images between hospitals. |
| Placer order number | The ordering system's ID for an order. HL7 ORC-2. FHIR `ServiceRequest.identifier` of type `PLAC`. |
| C-FIND / C-MOVE | DICOM query / DICOM retrieve. |
| QIDO-RS / WADO-RS | DICOMweb query / retrieve. |

## Hospital IT and standards

| Term | Meaning |
|---|---|
| NIS | *Nemocniční informační systém*, hospital information system (HIS). |
| RIS | Radiology information system. Holds orders and schedules. |
| FHIR | HL7 standard for health data exchange. REST and JSON. KomPACS uses R4. |
| HL7 v2 | Pipe-delimited message standard. Common in Czech hospitals. |
| ORM^O01 | HL7 v2 order message. Scheduled exams arrive as ORM^O01. |
| CDA | HL7 XML clinical document standard. |
| SDA | InterSystems internal pivot format. IRIS converts HL7 v2 / CDA → SDA → FHIR. |
| Production | IRIS interoperability pipeline: business services (in), processes (logic), operations (out). |
| FHIR SQL Builder | IRIS tool that projects FHIR resources into SQL tables. KomPACS schema: `pacs`. |
| Embedding | A vector of numbers that holds the meaning of a text. |
| Vector search | Find the texts whose embeddings are closest to the query, with `VECTOR_COSINE` in IRIS SQL. |
| MCP | Model Context Protocol. Lets an LLM client call tools. KomPACS server: `pacs-mcp`. |
| EHDS | European Health Data Space, Regulation (EU) 2025/327. |
