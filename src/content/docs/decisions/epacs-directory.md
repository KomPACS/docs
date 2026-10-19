---
title: ePACS directory for facility contacts
description: Facility contacts come from the public ePACS directory. The LLM matches report place names to it.
---

## Decision

The public ePACS facility list has about 860 Czech facilities with phone and e-mail. A script scrapes it once into a file. No web search runs at demo time. Staff names are dropped.

A report place goes through two steps:

1. A fuzzy match over name, city and AE title keeps the top 15 facilities.
2. The EU model picks one AE title or none. A pick outside the shortlist counts as none.

The first match creates `Organization/EPACS-<AE>` in IRIS with the contact and its source URL. An existing `Organization` is never overwritten, so Collector-verified contacts stay.

## Options

- Live web search per facility: slow, fails on bad networks.
- Bulk load all facilities: data with no use until a report names them.
- Fuzzy match only: misses declined names and abbreviations.

## Consequences

- One LLM call per new place string.
- The directory goes stale. Re-run the scraper. The Collector verify step catches wrong contacts.
