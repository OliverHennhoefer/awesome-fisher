import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import matter from 'gray-matter';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const siteOrigin = process.env.SITE_ORIGIN ?? 'https://oliverhennhoefer.github.io';
const siteBase = process.env.SITE_BASE ?? '/awesome-fisher';
const normalizedBase = siteBase === '/' ? '/' : `/${siteBase.replace(/^\/+|\/+$/g, '')}/`;
const contributionPrefix = `${normalizedBase}contributions/`;
const contributionDirectory = new URL('./src/content/contributions/', import.meta.url);
const contributionReviewDates = new Map(
  fs.readdirSync(contributionDirectory)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => matter(fs.readFileSync(new URL(file, contributionDirectory), 'utf8')).data)
    .filter((data) => data.status === 'reviewed' && typeof data.slug === 'string' && data.reviewedAt)
    .map((data) => [data.slug, new Date(data.reviewedAt).toISOString()]),
);

export default defineConfig({
  site: siteOrigin,
  base: siteBase,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        if (!pathname.startsWith(contributionPrefix)) return item;
        const slug = pathname.slice(contributionPrefix.length).replace(/\/$/, '');
        const reviewedAt = contributionReviewDates.get(slug);
        if (reviewedAt) item.lastmod = reviewedAt;
        return item;
      },
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: { theme: 'github-light' },
  },
});
