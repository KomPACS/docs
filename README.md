# KomPACS docs

Technical documentation of KomPACS (KOMparátor PACS), Rakathon 2026. Live at https://docs.kompacs.cz.

Prototype, not a medical device.

## Run

```sh
npx -y pnpm@10 install
npx -y pnpm@10 exec playwright install chromium   # Mermaid renders to SVG at build time
npx -y pnpm@10 dev                                # http://localhost:4321
npx -y pnpm@10 build                              # also checks internal links
```

## Structure

- `src/content/docs/`: English pages (default locale). `src/content/docs/cs/`: Czech pages. Every page exists in both.
- Sections follow Diátaxis: `overview/`, `tutorials/`, `how-to/`, `reference/`, `explanation/`, `decisions/`.
- `contract/openapi.json`: API contract, copied from `KomPACS/demo`. `starlight-openapi` generates `/reference/api/` from it.
- Diagrams: Mermaid code blocks.
- Push to `main` deploys to GitHub Pages.

## Writing rules

- ASD-STE100 Simplified Technical English: short sentences, one fact each, active voice. Czech pages equally plain.
- No patient data. No secrets, credentials, IP addresses or internal host names.
- Label clinical features "Prototype, not a medical device".
- Insurer data is optional enrichment: the patient's own consented statement ("Výpis pojištěnce").

Claude Code contributed to this repository.
