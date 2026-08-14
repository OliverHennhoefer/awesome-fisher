import { getCollection, type CollectionEntry } from 'astro:content';
import { referencesById } from '@/data/references';

export type Contribution = CollectionEntry<'contributions'>;

export async function getPublishedContributions() {
  const entries = await getCollection('contributions', ({ data }) => data.status === 'reviewed');
  const slugs = new Set(entries.map(({ data }) => data.slug));

  for (const entry of entries) {
    for (const related of entry.data.related) {
      if (!slugs.has(related)) throw new Error(`${entry.data.slug}: unknown related contribution "${related}"`);
    }
    for (const reference of entry.data.references) {
      if (!referencesById.has(reference)) throw new Error(`${entry.data.slug}: unknown reference "${reference}"`);
    }
    const sourceCategories = new Set(entry.data.references.map((id) => referencesById.get(id)?.category));
    if (!sourceCategories.has('primary')) {
      throw new Error(`${entry.data.slug}: reviewed entries need a primary source where one is available`);
    }
    if (!sourceCategories.has('modern-scholarship')) {
      throw new Error(`${entry.data.slug}: reviewed entries need a modern scholarly source`);
    }
  }

  return entries.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function contributionHref(entry: Contribution) {
  return `/contributions/${entry.data.slug}/`;
}
