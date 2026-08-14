# The Fisher Index

A critical, accessible field guide to the statistical and biological ideas associated with Ronald A. Fisher: what they say, why they matter, who helped develop them, and where their limits lie.

The production site is designed for [oliverhennhoefer.github.io/the-fisher-index/](https://oliverhennhoefer.github.io/the-fisher-index/).

## What is included

- 19 reviewed cornerstone articles across statistical inference, experimental design, multivariate methods, and genetics/evolution
- Dedicated historical context on eugenics, scientific disputes, and the smoking–lung-cancer controversy
- Static full-text search, field and difficulty filters, rendered mathematics, and three progressive interactive demonstrations
- Structured source, attribution, collaborator, prerequisite, and related-entry metadata

## Work locally

Requires Node.js 22.19 or newer.

```sh
npm install
npm run dev
```

Before proposing a change, run:

```sh
npm run check
npm test
npm run build
```

The build validates the contribution corpus, generates the Astro site, creates a Pagefind index, and checks local links under the `/the-fisher-index/` project base path.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before drafting an entry. Corrections, stronger sources, attribution improvements, accessible examples, and technical fixes are all welcome through reviewed pull requests.

## Licenses

- Source code is licensed under the existing [MIT License](LICENSE).
- Editorial content, original diagrams, and examples are licensed under [CC BY 4.0](LICENSE-CONTENT.md).
- Archival assets retain their individual rights and provenance as recorded in [ASSETS.md](ASSETS.md).
