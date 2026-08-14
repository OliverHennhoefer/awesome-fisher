import fs from 'node:fs';
import path from 'node:path';

const ideasPath = path.resolve('IDEAS.md');
const contributionsPath = path.resolve('src/content/contributions');

const source = fs.readFileSync(ideasPath, 'utf8');
const names = [...source.matchAll(/^- \*\*(.+?)\*\*/gm)].map((match) => match[1]);

if (names[0] !== 'Kurzfazit:' || names.length !== 290) {
  throw new Error(`IDEAS.md: expected the summary plus 289 named ideas, found ${names.length}`);
}

const routes = [
  [1, 6, 'behrens-fisher-problem'],
  [7, 11, 'fisher-information-and-score'],
  [12, 14, 'cornish-fisher-expansion'],
  [15, 16, 'information-bounds-and-efficiency'],
  [17, 20, 'fisher-information-and-score'],
  [21, 29, 'f-distribution-and-variance-ratios'],
  [30, 32, 'angular-transformation'],
  [33, 35, 'average-effect-and-excess'],
  [36, 36, 'f-distribution-and-variance-ratios'],
  [37, 38, 'directional-distributions'],
  [39, 39, 'f-distribution-and-variance-ratios'],
  [40, 45, 'fisher-consistency'],
  [46, 58, 'discriminant-analysis-and-iris'],
  [59, 61, 'fisher-rao-information-geometry'],
  [62, 63, 'information-bounds-and-efficiency'],
  [64, 69, 'fisher-kpp-wave'],
  [70, 79, 'fishers-exact-test'],
  [80, 83, 'sufficiency'],
  [84, 85, 'discriminant-analysis-and-iris'],
  [86, 92, 'fiducial-inference'],
  [93, 95, 'fundamental-theorem-natural-selection'],
  [96, 100, 'fishers-g-test'],
  [101, 105, 'fishers-geometric-model'],
  [106, 106, 'discriminant-analysis-and-iris'],
  [107, 117, 'fisher-information-and-score'],
  [118, 120, 'fisher-rao-information-geometry'],
  [121, 121, 'fisher-information-and-score'],
  [122, 125, 'fisher-rao-information-geometry'],
  [126, 128, 'fisher-information-and-score'],
  [129, 130, 'fisher-rao-information-geometry'],
  [131, 132, 'infinitesimal-model'],
  [133, 137, 'fisher-muller-hypothesis'],
  [138, 139, 'discriminant-analysis-and-iris'],
  [140, 142, 'k-statistics'],
  [143, 148, 'fisher-information-and-score'],
  [149, 149, 'discriminant-analysis-and-iris'],
  [150, 155, 'fishers-least-significant-difference'],
  [156, 159, 'likelihood-and-maximum-likelihood'],
  [160, 167, 'log-series-and-fishers-alpha'],
  [168, 176, 'fishers-method'],
  [177, 177, 'fishers-geometric-model'],
  [178, 181, 'noncentral-hypergeometric-distribution'],
  [182, 184, 'ancillarity-and-conditionality'],
  [185, 185, 'fundamental-theorem-natural-selection'],
  [186, 188, 'randomization-replication-and-blocking'],
  [189, 196, 'fishers-principle'],
  [197, 198, 'ancillarity-and-conditionality'],
  [199, 203, 'randomization-replication-and-blocking'],
  [204, 204, 'factorial-designs-and-confounding'],
  [205, 205, 'randomization-replication-and-blocking'],
  [206, 208, 'fisher-race-blood-groups'],
  [209, 218, 'randomization-replication-and-blocking'],
  [219, 220, 'reproductive-value'],
  [221, 225, 'fisherian-runaway-selection'],
  [226, 228, 'fisher-information-and-score'],
  [229, 230, 'discriminant-analysis-and-iris'],
  [231, 234, 'fisher-scoring'],
  [235, 242, 'directional-distributions'],
  [243, 245, 'evolution-of-dominance'],
  [246, 248, 'average-effect-and-excess'],
  [249, 253, 'significance-tests-and-p-values'],
  [254, 255, 'likelihood-and-maximum-likelihood'],
  [256, 261, 'fisher-tippett-extreme-values'],
  [262, 268, 'fisher-z-transformation'],
  [269, 269, 'f-distribution-and-variance-ratios'],
  [270, 274, 'fisher-yates-shuffle'],
  [275, 276, 'fisher-yates-normal-scores'],
  [277, 289, 'wright-fisher-model'],
];

function normalize(value) {
  return value
    .normalize('NFKD')
    .replace(/\p{Mark}/gu, '')
    .replace(/\\\(|\\\)|\\|[{}$]/g, '')
    .replace(/[’']s\b/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

const routed = new Map();

for (const [start, end, slug] of routes) {
  const contributionPath = path.join(contributionsPath, `${slug}.mdx`);
  if (!fs.existsSync(contributionPath)) throw new Error(`IDEAS.md: missing routed contribution ${slug}`);
  const contribution = normalize(fs.readFileSync(contributionPath, 'utf8'));

  for (let index = start; index <= end; index += 1) {
    if (routed.has(index)) throw new Error(`IDEAS.md: idea ${index} is routed more than once`);
    routed.set(index, slug);
    const idea = normalize(names[index]);
    if (!contribution.includes(idea)) {
      throw new Error(`IDEAS.md: “${names[index]}” is not discoverable in ${slug}`);
    }
  }
}

for (let index = 1; index < names.length; index += 1) {
  if (!routed.has(index)) throw new Error(`IDEAS.md: idea ${index} “${names[index]}” has no route`);
}

console.log(`Validated routing for ${routed.size} named ideas across ${new Set(routed.values()).size} contributions.`);
