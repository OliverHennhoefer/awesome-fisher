import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const inventoryPath = path.resolve('src/data/idea-routes.json');
const contributionsPath = path.resolve('src/content/contributions');
const expectedIdeaCount = 289;
const expectedRouteCount = 41;

const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));

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

if (!inventory || Array.isArray(inventory) || typeof inventory !== 'object') {
  throw new Error('Idea route inventory must be an object keyed by contribution slug');
}

const routes = Object.entries(inventory);
if (routes.length !== expectedRouteCount) {
  throw new Error(`Idea route inventory: expected ${expectedRouteCount} contribution routes, found ${routes.length}`);
}

const routedIdeas = new Map();

for (const [slug, ideas] of routes) {
  if (!Array.isArray(ideas) || ideas.length === 0) {
    throw new Error(`Idea route inventory: ${slug} must contain at least one named idea`);
  }

  const contributionPath = path.join(contributionsPath, `${slug}.mdx`);
  if (!fs.existsSync(contributionPath)) {
    throw new Error(`Idea route inventory: missing contribution ${slug}`);
  }

  const contributionSource = fs.readFileSync(contributionPath, 'utf8');
  const { data, content } = matter(contributionSource);
  if (data.slug !== slug) {
    throw new Error(`Idea route inventory: ${slug} points to a contribution with slug ${data.slug ?? '(missing)'}`);
  }
  if (data.status !== 'reviewed') {
    throw new Error(`Idea route inventory: ${slug} is not reviewed`);
  }

  const searchableContribution = normalize([
    data.title,
    data.summary,
    ...(data.aliases ?? []),
    data.attribution?.note,
    content,
  ].filter(Boolean).join(' '));

  for (const idea of ideas) {
    if (typeof idea !== 'string' || idea.trim().length === 0) {
      throw new Error(`Idea route inventory: ${slug} contains an invalid idea name`);
    }

    const ideaKey = idea.trim().toLocaleLowerCase('en');
    const normalizedIdea = normalize(idea);
    if (routedIdeas.has(ideaKey)) {
      throw new Error(`Idea route inventory: “${idea}” duplicates “${routedIdeas.get(ideaKey)}”`);
    }
    routedIdeas.set(ideaKey, idea);

    if (!searchableContribution.includes(normalizedIdea)) {
      throw new Error(`Idea route inventory: “${idea}” is not discoverable in ${slug}`);
    }
  }
}

if (routedIdeas.size !== expectedIdeaCount) {
  throw new Error(`Idea route inventory: expected ${expectedIdeaCount} named ideas, found ${routedIdeas.size}`);
}

console.log(`Validated routing for ${routedIdeas.size} named ideas across ${routes.length} contributions.`);
