---
title: Modrá kniha ČOS citations
description: The judge cites Modrá kniha ČOS with page and quote, checked against retrieved chunks.
---

## Decision

The judge cites Modrá kniha ČOS (26th edition, Czech). Setup fetches the public PDF and loads chunks into the IRIS table `vec.GuidelineChunk`. The PDF and chunks are not stored in git.

`Verdict.guideline = {page, quote}`. `page` is the 1-based PDF page, so the UI links to that page. A quote must appear in a chunk the agent retrieved in that run. It must be at least 20 characters.

## Options

- NCCN: licence and login.
- ESMO: not the Czech standard.

## Consequences

A citation the judge invents fails validation and is dropped.
