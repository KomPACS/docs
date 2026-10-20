---
title: Queue, request and timeline display rules
description: Display rules for queue counts, request actions and timeline lanes.
---

## Queue cards count PACS availability

A queue card shows "in PACS X of Y candidates" from status counts. The case detail shows "ready X of Y" for relevant priors. The labels differ on purpose, so neither number claims more than it knows. Loading each full case for the queue would be one slow call per trigger.

## Request actions live on the prior tile

There is no separate request screen. The Collector acts on a request on the tile of its prior: verify contact, send, mark as requested, urge, close as not found. The queue lists triggers and counts the work.

## Timeline lanes come from report titles

The frontend maps the report title to a lane with patterns: MDT, hospital stay, radiotherapy, emergency, treatment, visit, else "reports". Radiotherapy reports group into one bar per course (a gap over 14 days starts a new course). The rules are display choices, so they live in the frontend. On live data they placed about 3/4 of report events.

## The imaging lane plots candidate priors

Candidates carry status, relevance and partial dates. The imaging lane draws them, plus NIS studies that match no candidate. A year- or month-only date draws a striped bar over that period.
