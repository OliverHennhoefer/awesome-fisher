import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.resolve('src/content/contributions');
if (!fs.existsSync(root)) {
  console.error('Contribution directory is missing.');
  process.exit(1);
}

const files = fs.readdirSync(root).filter((file) => /\.mdx?$/.test(file));
const slugs = new Map();
const entries = [];
const requiredSections = [
  'Why it matters',
  'Intuition',
  'Prerequisites',
  'Formal statement',
  'Worked example',
  'History and attribution',
  'Modern use',
  'Limits and debates',
];

for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const { data, content } = matter(source);
  const slug = data.slug;
  if (!slug) throw new Error(`${file}: missing slug`);
  if (slugs.has(slug)) throw new Error(`${file}: duplicate slug also used by ${slugs.get(slug)}`);
  slugs.set(slug, file);
  if (path.basename(file).replace(/\.mdx?$/, '') !== slug) throw new Error(`${file}: filename must match slug`);
  if (data.status === 'reviewed') {
    if (!Array.isArray(data.references) || data.references.length < 2) throw new Error(`${file}: reviewed entries need at least two references`);
    if (!Array.isArray(data.contributors) || data.contributors.length === 0) throw new Error(`${file}: reviewed entries need a contributor`);
    for (const section of requiredSections) {
      if (!content.includes(`## ${section}`)) throw new Error(`${file}: missing section "${section}"`);
    }
  }
  entries.push({ file, data });
}

for (const { file, data } of entries.filter(({ data }) => data.status === 'reviewed')) {
  for (const related of data.related ?? []) {
    if (!slugs.has(related)) throw new Error(`${file}: related slug "${related}" does not exist`);
  }
}

console.log(`Validated ${entries.length} contribution entries (${entries.filter(({ data }) => data.status === 'reviewed').length} reviewed).`);
