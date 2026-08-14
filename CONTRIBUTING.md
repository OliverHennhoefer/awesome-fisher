# Contributing to The Fisher Index

Thank you for helping make the record more precise and accessible. This is a curated reference rather than an open-edit wiki: every substantive change is reviewed for evidence, attribution, clarity, and accessibility.

## Propose before drafting

1. Search the site, `src/data/idea-routes.json`, and open issues for the concept and its aliases.
2. Open a **New contribution** issue with the proposed scope, attribution, and sources.
3. Wait for agreement on scope before writing a long article.

Corrections and small improvements can go directly through the correction issue or a focused pull request.

## Contribution metadata

Each file in `src/content/contributions/` must satisfy the content schema. Important fields include:

- a stable kebab-case `slug` matching the filename;
- title, one-sentence summary, aliases, fields, kind, period, and difficulty;
- an attribution status and evidence-based note;
- named collaborators, prerequisites, related slugs, and source IDs;
- contributors, review date, and `reviewed` or `draft` status.

Reviewed entries require at least one primary source where available and one modern scholarly source. New references belong in the shared reference catalog.

## Article sequence

Use these level-two headings in order:

1. Why it matters
2. Intuition
3. Prerequisites
4. Formal statement
5. Worked example
6. History and attribution
7. Modern use
8. Limits and debates

Define notation, state assumptions, keep examples checkable, and distinguish Fisher’s role from later developments. Never write “Fisher invented” unless the primary and historical record supports that exact claim.

## Historical and ethical context

Do not use a general disclaimer to replace specific context. Name policies, institutions, collaborators, conflicts, and harms where relevant. Technical importance is not moral exoneration, and moral judgment is not a substitute for accurate attribution.

## Validation

Run all checks before opening a pull request:

```sh
npm run check
npm test
npm run build
```

## Licensing

Code contributions are submitted under MIT. Prose, original diagrams, and examples are submitted under CC BY 4.0. Do not submit copyrighted images or copied prose without compatible rights and complete provenance.
