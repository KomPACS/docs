---
title: Walk the demo
description: Open a demo case, read the AI verdicts and handle a missing prior in the public KomPACS demo.
sidebar:
  order: 1
---

In this tutorial you walk one case in the public demo. You need only a browser. The demo uses synthetic patients. It runs fully in your browser and stores nothing on a server.

:::note
The demo UI is in Czech. Button names below are the Czech labels. The demo is in active development, so labels can change.
:::

## 1. Open the queue

1. Open [demo.kompacs.cz](https://demo.kompacs.cz).
2. The queue ("Fronta k vyřízení") lists triggers: scheduled exams and MDT meetings. The nearest date is at the top.
3. Each card shows how many candidate priors have images in PACS ("V PACS X z Y").

## 2. Pick a demo case

The sidebar has a list of demo cases ("Ukázkové případy"). Each case shows one feature:

| Demo case (Czech) | What it shows |
|---|---|
| Předchozí vyšetření nalezená ve zprávách, žádosti e-mailem i telefonem | Priors named only in report text. Requests by e-mail and phone. |
| Pojišťovna zná vyšetření z jiné nemocnice | A prior known only from the insurer account statement. |
| MDT: žádost nedoručena, urgovat | A request with no images after 2 working days. |
| Upozornění na duplicitu | The scheduled exam repeats an exam within 6 weeks. |
| Dlouhá historie, relevantní jen některá vyšetření | Many priors. The AI keeps only the relevant ones. |

Open the first case.

## 3. Read the case

1. The patient bar shows age band, diagnosis and the trigger.
2. The timeline shows all events of the patient in date order. The imaging lane shows the candidate priors.
3. Each prior tile shows its status and the relevance verdict.

## 4. Check how the AI decided

1. Open the AI log on a prior tile.
2. Read the steps ("Postup AI"). They name the searches that the judge ran.
3. Find the source sentence from the report and the Modrá kniha ČOS citation with page.
4. Optional: click "Posoudit znovu" to ask for a new verdict. Add a note. The old verdict stays in the history.

## 5. Handle a missing prior

1. Find a prior with status "chybí" (missing).
2. Check the contact of the other hospital. Confirm it.
3. Approve the drafted e-mail request. Or mark a phone request as requested.
4. Click the demo button that simulates the arrival in PACS. The prior turns available.

## 6. See the totals

Open the "Přehled" tab. It shows studies per modality and year, and how many are in PACS.

## What you learned

- A trigger starts a check.
- KomPACS finds priors in NIS records, report text and insurer data.
- The AI judge gives a verdict with evidence. The Collector decides.
- A missing prior becomes a request. The arrival in PACS closes it.

Next: [Start your own check](/en/tutorials/start-a-check/).
