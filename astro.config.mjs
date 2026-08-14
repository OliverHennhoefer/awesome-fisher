import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const siteOrigin = process.env.SITE_ORIGIN ?? 'https://oliverhennhoefer.github.io';
const siteBase = process.env.SITE_BASE ?? '/awesome-fisher';

export default defineConfig({
  site: siteOrigin,
  base: siteBase,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: { theme: 'github-light' },
  },
});
