import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const base = '/awesome-fisher/';
const htmlFiles = [];

function walk(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, item.name);
    if (item.isDirectory()) walk(full);
    else if (item.name.endsWith('.html')) htmlFiles.push(full);
  }
}

walk(dist);
const failures = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(dist, file);
  if (!html.includes('<html lang="en">')) failures.push(`${relative}: missing English document language`);
  if (!html.includes('<main')) failures.push(`${relative}: missing main landmark`);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) failures.push(`${relative}: expected exactly one h1`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (!canonical?.startsWith('https://oliverhennhoefer.github.io/awesome-fisher/')) {
    failures.push(`${relative}: invalid or missing canonical URL`);
  }
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) failures.push(`${relative}: duplicate ids: ${[...new Set(duplicateIds)].join(', ')}`);
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
  for (const image of images) {
    if (!/\salt="[^"]*"/.test(image)) failures.push(`${relative}: image missing alt text`);
    if (!/\swidth="\d+"/.test(image) || !/\sheight="\d+"/.test(image)) failures.push(`${relative}: image missing intrinsic dimensions`);
  }
  const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(?:https?:|mailto:|#|data:)/.test(link)) continue;
    if (link.startsWith('/') && !link.startsWith(base)) {
      failures.push(`${path.relative(dist, file)}: root-relative URL misses ${base}: ${link}`);
      continue;
    }
    if (!link.startsWith(base)) continue;
    const clean = decodeURIComponent(link.split(/[?#]/)[0]).slice(base.length);
    const target = path.join(dist, clean);
    const candidates = [target, `${target}.html`, path.join(target, 'index.html')];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      failures.push(`${path.relative(dist, file)}: missing local target ${link}`);
    }
  }
}

if (!fs.existsSync(path.join(dist, 'pagefind', 'pagefind.js'))) {
  failures.push('Pagefind browser bundle is missing.');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} generated HTML files and their local URLs.`);
