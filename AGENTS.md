# AGENTS.md

## Non-negotiables

- This is a static Astro site served from `/the-fisher-index/`. Pass every internal route and asset through `withBase()` from `src/data/site.ts`.
- Preserve progressive enhancement: core content and a representative demo result must work without JavaScript. Keep keyboard, focus, contrast, semantic HTML, reduced motion, monochrome design, and privacy intact.
- Never add analytics, cookies, external runtime APIs, or third-party font requests.
- Never edit or commit generated output: `node_modules/`, `.astro/`, `dist/`, Pagefind indexes, or Playwright artifacts.

## Scholarship

- Follow `CONTRIBUTING.md` and `src/content.config.ts`. Reviewed articles need the prescribed section order, valid relations, one primary source when available, and one modern scholarly source.
- State Fisher's role precisely; credit collaborators; distinguish later developments; address harms and disputes specifically. Never use unsupported "Fisher invented" language.
- Use historical assets only with verified rights, useful alt text, and provenance recorded in `ASSETS.md`. Do not generate substitute historical imagery.
- Code is MIT; prose, diagrams, and examples are CC BY 4.0.

## Validate

- Use Node `>=22.19.0` and `npm ci`. After any Windows lockfile update, confirm `package-lock.json` still contains root `@emnapi/core` and `@emnapi/wasi-threads` entries required by Linux CI.
- Before handoff run `npm run check`, `npm test`, `npm run build`, and `npm run test:e2e`; Playwright requires Chromium and WebKit.
