# Topology-Derived Concept Bridges (HCI)

Mobile-first research visualization site built with Next.js App Router, TypeScript, Tailwind CSS, and D3.

## Local run

```bash
npm install
npm run dev
```

## GitHub Pages deployment (minimum setup)

This repository is configured for static export (`output: "export"`).

1. Set repository variables (if using project pages):
   - `Settings > Secrets and variables > Actions > Variables`
   - Add `GITHUB_PAGES_REPO=<repo-name>`
2. Enable GitHub Pages:
   - `Settings > Pages`
   - Source: `GitHub Actions`
3. Push to `main` (or your deployment branch) and let workflow publish `out/`.

### What changed for Pages compatibility

- Route Handlers were removed because GitHub Pages cannot run server functions.
- Search now runs client-side against local JSON using `searchConcept`.
- Static export config is enabled in `next.config.mjs`.

## Data files

- `data/yearly_metrics.json`
- `data/representative_cases.json`
- `data/concept_index.json`
- `data/explainer_content.json`

## Future extensibility

If you later move to Vercel or another server runtime, you can re-introduce:

- `/api/search`
- `/api/case/[id]`
- `/api/year/[year]`
