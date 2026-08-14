export const fields = {
  'statistical-inference': {
    name: 'Statistical inference',
    numeral: 'I',
    description: 'How data bear on parameters, models, and uncertainty.',
  },
  'experimental-design': {
    name: 'Experimental design',
    numeral: 'II',
    description: 'How randomization and structure turn comparisons into evidence.',
  },
  'multivariate-methods': {
    name: 'Multivariate methods',
    numeral: 'III',
    description: 'How several measurements can reveal separation and structure.',
  },
  'genetics-evolution': {
    name: 'Genetics & evolution',
    numeral: 'IV',
    description: 'Mathematical ideas linking inheritance, selection, and populations.',
  },
  'historical-context': {
    name: 'Historical context',
    numeral: 'V',
    description: 'The people, institutions, disputes, and harms around the work.',
  },
} as const;

export type FieldId = keyof typeof fields;

export const site = {
  title: 'The Fisher Index',
  description: 'A critical, accessible field guide to the ideas associated with Ronald A. Fisher.',
  repository: 'https://github.com/OliverHennhoefer/awesome-fisher',
  language: 'en',
  contentLicense: 'https://creativecommons.org/licenses/by/4.0/',
  subject: {
    name: 'Ronald Aylmer Fisher',
    alternateNames: ['Ronald Fisher', 'R. A. Fisher', 'Sir Ronald Aylmer Fisher'],
    birthDate: '1890-02-17',
    deathDate: '1962-07-29',
    sameAs: [
      'https://www.wikidata.org/wiki/Q216723',
      'https://en.wikipedia.org/wiki/Ronald_Fisher',
    ],
  },
};

export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`.replace(/\/+/g, '/');
}
