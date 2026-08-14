export type ReferenceCategory = 'primary' | 'modern-scholarship' | 'archive' | 'institutional';

export interface Reference {
  id: string;
  authors: string;
  title: string;
  year: number;
  venue: string;
  doi?: string;
  url: string;
  archiveUrl?: string;
  category: ReferenceCategory;
  licenseNote?: string;
}

export const references: Reference[] = [
  {
    id: 'fisher-1918-relatives', authors: 'R. A. Fisher', year: 1918,
    title: 'The correlation between relatives on the supposition of Mendelian inheritance',
    venue: 'Transactions of the Royal Society of Edinburgh 52', doi: '10.1017/S0080456800012163',
    url: 'https://doi.org/10.1017/S0080456800012163', category: 'primary',
  },
  {
    id: 'fisher-1921-correlation', authors: 'R. A. Fisher', year: 1921,
    title: 'On the probable error of a coefficient of correlation deduced from a small sample',
    venue: 'Metron 1', url: 'https://hdl.handle.net/2440/15169', category: 'primary',
  },
  {
    id: 'fisher-1922-foundations', authors: 'R. A. Fisher', year: 1922,
    title: 'On the mathematical foundations of theoretical statistics',
    venue: 'Philosophical Transactions of the Royal Society A 222', doi: '10.1098/rsta.1922.0009',
    url: 'https://doi.org/10.1098/rsta.1922.0009', category: 'primary',
  },
  {
    id: 'fisher-1925-smrw', authors: 'R. A. Fisher', year: 1925,
    title: 'Statistical Methods for Research Workers', venue: 'Oliver & Boyd',
    url: 'https://psychclassics.yorku.ca/Fisher/Methods/',
    archiveUrl: 'https://digital.library.adelaide.edu.au/dspace/handle/2440/10701', category: 'primary',
  },
  {
    id: 'fisher-1926-field', authors: 'R. A. Fisher', year: 1926,
    title: 'The arrangement of field experiments', venue: 'Journal of the Ministry of Agriculture 33',
    url: 'https://hdl.handle.net/2440/15191', category: 'primary',
  },
  {
    id: 'fisher-1930-genetical', authors: 'R. A. Fisher', year: 1930,
    title: 'The Genetical Theory of Natural Selection', venue: 'Clarendon Press',
    url: 'https://archive.org/details/geneticaltheoryo031631mbp', category: 'primary',
  },
  {
    id: 'fisher-1932-likelihood', authors: 'R. A. Fisher', year: 1932,
    title: 'Inverse probability and the use of likelihood', venue: 'Proceedings of the Cambridge Philosophical Society 28',
    doi: '10.1017/S0305004100010500', url: 'https://doi.org/10.1017/S0305004100010500', category: 'primary',
  },
  {
    id: 'fisher-1934-annals', authors: 'R. A. Fisher', year: 1934,
    title: 'Two new properties of mathematical likelihood', venue: 'Proceedings of the Royal Society A 144',
    doi: '10.1098/rspa.1934.0050', url: 'https://doi.org/10.1098/rspa.1934.0050', category: 'primary',
  },
  {
    id: 'fisher-1935-design', authors: 'R. A. Fisher', year: 1935,
    title: 'The Design of Experiments', venue: 'Oliver & Boyd',
    url: 'https://archive.org/details/in.ernet.dli.2015.502684', category: 'primary',
  },
  {
    id: 'fisher-1936-discriminant', authors: 'R. A. Fisher', year: 1936,
    title: 'The use of multiple measurements in taxonomic problems', venue: 'Annals of Eugenics 7',
    doi: '10.1111/j.1469-1809.1936.tb02137.x', url: 'https://doi.org/10.1111/j.1469-1809.1936.tb02137.x', category: 'primary',
  },
  {
    id: 'fisher-1937-wave', authors: 'R. A. Fisher', year: 1937,
    title: 'The wave of advance of advantageous genes', venue: 'Annals of Eugenics 7',
    doi: '10.1111/j.1469-1809.1937.tb02153.x', url: 'https://doi.org/10.1111/j.1469-1809.1937.tb02153.x', category: 'primary',
  },
  {
    id: 'fisher-1956-induction', authors: 'R. A. Fisher', year: 1956,
    title: 'Statistical Methods and Scientific Inference', venue: 'Oliver & Boyd',
    url: 'https://archive.org/details/statisticalmetho0000fish', category: 'primary',
  },
  {
    id: 'lehmann-2011', authors: 'E. L. Lehmann', year: 2011,
    title: 'Fisher, Neyman, and the Creation of Classical Statistics', venue: 'Springer',
    doi: '10.1007/978-1-4419-9500-1', url: 'https://doi.org/10.1007/978-1-4419-9500-1', category: 'modern-scholarship',
  },
  {
    id: 'hald-1998', authors: 'A. Hald', year: 1998,
    title: 'A History of Mathematical Statistics from 1750 to 1930', venue: 'Wiley',
    url: 'https://www.wiley.com/en-us/A+History+of+Mathematical+Statistics+from+1750+to+1930-p-9780471179122', category: 'modern-scholarship',
  },
  {
    id: 'cox-2006', authors: 'D. R. Cox', year: 2006,
    title: 'Principles of Statistical Inference', venue: 'Cambridge University Press',
    doi: '10.1017/CBO9780511813559', url: 'https://doi.org/10.1017/CBO9780511813559', category: 'modern-scholarship',
  },
  {
    id: 'casella-berger-2002', authors: 'G. Casella and R. L. Berger', year: 2002,
    title: 'Statistical Inference, 2nd edition', venue: 'Duxbury',
    url: 'https://www.worldcat.org/oclc/46504847', category: 'modern-scholarship',
  },
  {
    id: 'imbens-rubin-2015', authors: 'G. W. Imbens and D. B. Rubin', year: 2015,
    title: 'Causal Inference for Statistics, Social, and Biomedical Sciences', venue: 'Cambridge University Press',
    doi: '10.1017/CBO9781139025751', url: 'https://doi.org/10.1017/CBO9781139025751', category: 'modern-scholarship',
  },
  {
    id: 'anderson-2003-combining', authors: 'T. W. Anderson', year: 2003,
    title: 'An Introduction to Multivariate Statistical Analysis, 3rd edition', venue: 'Wiley',
    url: 'https://www.wiley.com/en-us/An+Introduction+to+Multivariate+Statistical+Analysis%2C+3rd+Edition-p-9780471360919', category: 'modern-scholarship',
  },
  {
    id: 'montgomery-2017', authors: 'D. C. Montgomery', year: 2017,
    title: 'Design and Analysis of Experiments, 9th edition', venue: 'Wiley',
    url: 'https://www.wiley.com/en-us/Design+and+Analysis+of+Experiments%2C+9th+Edition-p-9781119113478', category: 'modern-scholarship',
  },
  {
    id: 'fisher-archive', authors: 'University of Adelaide Library', year: 2026,
    title: 'R. A. Fisher Digital Archive', venue: 'Adelaide Research & Scholarship',
    url: 'https://digital.library.adelaide.edu.au/dspace/handle/2440/3860', category: 'archive',
  },
  {
    id: 'rothamsted-archive', authors: 'Rothamsted Research', year: 2026,
    title: 'Works by Ronald Aylmer Fisher', venue: 'Rothamsted Repository',
    url: 'https://repository.rothamsted.ac.uk/view/creators/Fisher=3ARonald_Aylmer=3A=3A.html', category: 'archive',
  },
  {
    id: 'crow-1990', authors: 'J. F. Crow', year: 1990,
    title: 'Fisher’s contributions to genetics and evolution', venue: 'Theoretical Population Biology 38',
    doi: '10.1016/0040-5809(90)90013-7', url: 'https://doi.org/10.1016/0040-5809(90)90013-7', category: 'modern-scholarship',
  },
  {
    id: 'ewens-2004', authors: 'W. J. Ewens', year: 2004,
    title: 'Mathematical Population Genetics, 2nd edition', venue: 'Springer',
    doi: '10.1007/978-0-387-21822-9', url: 'https://doi.org/10.1007/978-0-387-21822-9', category: 'modern-scholarship',
  },
  {
    id: 'andersson-1994', authors: 'M. Andersson', year: 1994,
    title: 'Sexual Selection', venue: 'Princeton University Press',
    url: 'https://press.princeton.edu/books/paperback/9780691000572/sexual-selection', category: 'modern-scholarship',
  },
  {
    id: 'orr-2005', authors: 'H. A. Orr', year: 2005,
    title: 'The genetic theory of adaptation: a brief history', venue: 'Nature Reviews Genetics 6',
    doi: '10.1038/nrg1523', url: 'https://doi.org/10.1038/nrg1523', category: 'modern-scholarship',
  },
  {
    id: 'barton-2017', authors: 'N. H. Barton, A. M. Etheridge, and A. Véber', year: 2017,
    title: 'The infinitesimal model: definition, derivation, and implications', venue: 'Theoretical Population Biology 118',
    doi: '10.1016/j.tpb.2017.06.001', url: 'https://doi.org/10.1016/j.tpb.2017.06.001', category: 'modern-scholarship',
  },
  {
    id: 'murray-2002', authors: 'J. D. Murray', year: 2002,
    title: 'Mathematical Biology I: An Introduction, 3rd edition', venue: 'Springer',
    doi: '10.1007/b98868', url: 'https://doi.org/10.1007/b98868', category: 'modern-scholarship',
  },
  {
    id: 'box-1978', authors: 'J. F. Box', year: 1978,
    title: 'R. A. Fisher: The Life of a Scientist', venue: 'Wiley',
    url: 'https://search.worldcat.org/title/3516417', category: 'modern-scholarship',
  },
  {
    id: 'yates-mather-1963', authors: 'F. Yates and K. Mather', year: 1963,
    title: 'Ronald Aylmer Fisher, 1890–1962', venue: 'Biographical Memoirs of Fellows of the Royal Society 9',
    doi: '10.1098/rsbm.1963.0006', url: 'https://doi.org/10.1098/rsbm.1963.0006', category: 'modern-scholarship',
  },
  {
    id: 'bodmer-2021', authors: 'W. Bodmer et al.', year: 2021,
    title: 'The outstanding scientist, R. A. Fisher: his views on eugenics and race', venue: 'Heredity 126',
    doi: '10.1038/s41437-020-00394-6', url: 'https://doi.org/10.1038/s41437-020-00394-6', category: 'modern-scholarship',
  },
  {
    id: 'mazumdar-1992', authors: 'P. M. H. Mazumdar', year: 1992,
    title: 'Eugenics, Human Genetics and Human Failings: The Eugenics Society, Its Sources and Its Critics in Britain', venue: 'Routledge',
    url: 'https://www.routledge.com/Eugenics-Human-Genetics-and-Human-Failings-The-Eugenics-Society-its-sources-and-its-critics-in-Britain/Mazumdar/p/book/9780415514811', category: 'modern-scholarship',
  },
  {
    id: 'ucl-eugenics-history', authors: 'University College London', year: 2024,
    title: 'History of Eugenics Inside UCL', venue: 'Prejudice in Power',
    url: 'https://www.ucl.ac.uk/prejudice-in-power/digital-showcase/history-eugenics-inside-ucl', category: 'institutional',
  },
  {
    id: 'stolley-1991', authors: 'P. D. Stolley', year: 1991,
    title: 'When genius errs: R. A. Fisher and the lung cancer controversy', venue: 'American Journal of Epidemiology 133',
    doi: '10.1093/oxfordjournals.aje.a115904', url: 'https://doi.org/10.1093/oxfordjournals.aje.a115904', category: 'modern-scholarship',
  },
];

export const referencesById = new Map(references.map((reference) => [reference.id, reference]));
