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
    id: 'fisher-1922-dominance-ratio', authors: 'R. A. Fisher', year: 1922,
    title: 'On the dominance ratio', venue: 'Proceedings of the Royal Society of Edinburgh 42',
    url: 'https://digital.library.adelaide.edu.au/items/c7d92abc-8dea-4ee4-9072-956fcd795654', category: 'primary',
  },
  {
    id: 'fisher-1924-distribution', authors: 'R. A. Fisher', year: 1924,
    title: 'On a distribution yielding the error functions of several well known statistics',
    venue: 'Proceedings of the International Mathematical Congress, Toronto, volume 2',
    url: 'https://hdl.handle.net/2440/15183',
    archiveUrl: 'https://repository.rothamsted.ac.uk/id/eprint/23852/', category: 'primary',
  },
  {
    id: 'fisher-1925-smrw', authors: 'R. A. Fisher', year: 1925,
    title: 'Statistical Methods for Research Workers', venue: 'Oliver & Boyd',
    url: 'https://psychclassics.yorku.ca/Fisher/Methods/',
    archiveUrl: 'https://digital.library.adelaide.edu.au/dspace/handle/2440/10701', category: 'primary',
  },
  {
    id: 'fisher-1925-estimation', authors: 'R. A. Fisher', year: 1925,
    title: 'Theory of statistical estimation', venue: 'Proceedings of the Cambridge Philosophical Society 22',
    doi: '10.1017/S0305004100009580', url: 'https://doi.org/10.1017/S0305004100009580',
    archiveUrl: 'https://hdl.handle.net/2440/15186', category: 'primary',
  },
  {
    id: 'fisher-1926-field', authors: 'R. A. Fisher', year: 1926,
    title: 'The arrangement of field experiments', venue: 'Journal of the Ministry of Agriculture 33',
    url: 'https://hdl.handle.net/2440/15191', category: 'primary',
  },
  {
    id: 'fisher-1928-dominance', authors: 'R. A. Fisher', year: 1928,
    title: 'The possible modification of the response of the wild type to recurrent mutations',
    venue: 'The American Naturalist 62', doi: '10.1086/280193',
    url: 'https://doi.org/10.1086/280193', category: 'primary',
  },
  {
    id: 'fisher-tippett-1928', authors: 'R. A. Fisher and L. H. C. Tippett', year: 1928,
    title: 'Limiting forms of the frequency distribution of the largest or smallest member of a sample',
    venue: 'Proceedings of the Cambridge Philosophical Society 24', doi: '10.1017/S0305004100015681',
    url: 'https://doi.org/10.1017/S0305004100015681', category: 'primary',
  },
  {
    id: 'fisher-1929-moments', authors: 'R. A. Fisher', year: 1929,
    title: 'Moments and product moments of sampling distributions',
    venue: 'Proceedings of the London Mathematical Society s2-30', doi: '10.1112/plms/s2-30.1.199',
    url: 'https://doi.org/10.1112/plms/s2-30.1.199',
    archiveUrl: 'https://digital.library.adelaide.edu.au/items/02bcc37f-41c4-4993-8118-b032517ed07f', category: 'primary',
  },
  {
    id: 'fisher-1929-harmonic', authors: 'R. A. Fisher', year: 1929,
    title: 'Tests of significance in harmonic analysis', venue: 'Proceedings of the Royal Society A 125',
    doi: '10.1098/rspa.1929.0151', url: 'https://doi.org/10.1098/rspa.1929.0151',
    archiveUrl: 'https://digital.library.adelaide.edu.au/items/6431e862-56c8-4cb9-b8b6-ac60d888a009', category: 'primary',
  },
  {
    id: 'fisher-1930-genetical', authors: 'R. A. Fisher', year: 1930,
    title: 'The Genetical Theory of Natural Selection', venue: 'Clarendon Press',
    url: 'https://archive.org/details/geneticaltheoryo031631mbp', category: 'primary',
  },
  {
    id: 'muller-1932-sex', authors: 'H. J. Muller', year: 1932,
    title: 'Some genetic aspects of sex', venue: 'The American Naturalist 66', doi: '10.1086/280418',
    url: 'https://doi.org/10.1086/280418', category: 'primary',
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
    id: 'cornish-fisher-1938', authors: 'E. A. Cornish and R. A. Fisher', year: 1938,
    title: 'Moments and cumulants in the specification of distributions',
    venue: 'Revue de l’Institut International de Statistique 5', doi: '10.2307/1400905',
    url: 'https://doi.org/10.2307/1400905', category: 'primary',
  },
  {
    id: 'fisher-yates-1938', authors: 'R. A. Fisher and F. Yates', year: 1938,
    title: 'Statistical Tables for Biological, Agricultural and Medical Research', venue: 'Oliver & Boyd',
    url: 'https://search.worldcat.org/title/3998605', category: 'primary',
  },
  {
    id: 'fisher-1939-behrens', authors: 'R. A. Fisher', year: 1939,
    title: 'The comparison of samples with possibly unequal variances', venue: 'Annals of Eugenics 9',
    doi: '10.1111/j.1469-1809.1939.tb02205.x', url: 'https://doi.org/10.1111/j.1469-1809.1939.tb02205.x',
    archiveUrl: 'https://digital.library.adelaide.edu.au/items/3c592811-8c39-4773-b4d0-abad0a40bb5b', category: 'primary',
  },
  {
    id: 'fisher-corbet-williams-1943', authors: 'R. A. Fisher, A. S. Corbet, and C. B. Williams', year: 1943,
    title: 'The relation between the number of species and the number of individuals in a random sample of an animal population',
    venue: 'Journal of Animal Ecology 12', doi: '10.2307/1411', url: 'https://doi.org/10.2307/1411',
    archiveUrl: 'https://repository.rothamsted.ac.uk/item/8w1x3/the-relation-between-the-number-of-species-and-the-number-of-individuals-in-a-random-sample-of-an-animal-population', category: 'primary',
  },
  {
    id: 'rao-1945', authors: 'C. R. Rao', year: 1945,
    title: 'Information and the accuracy attainable in the estimation of statistical parameters',
    venue: 'Bulletin of the Calcutta Mathematical Society 37; reprinted in Breakthroughs in Statistics',
    doi: '10.1007/978-1-4612-0919-5_16', url: 'https://doi.org/10.1007/978-1-4612-0919-5_16', category: 'primary',
  },
  {
    id: 'fisher-race-1946', authors: 'R. A. Fisher and R. R. Race', year: 1946,
    title: 'Rh gene frequencies in Britain', venue: 'Nature 157', doi: '10.1038/157048b0',
    url: 'https://doi.org/10.1038/157048b0', category: 'primary',
  },
  {
    id: 'fisher-1953-sphere', authors: 'R. A. Fisher', year: 1953,
    title: 'Dispersion on a sphere', venue: 'Proceedings of the Royal Society A 217',
    doi: '10.1098/rspa.1953.0064', url: 'https://doi.org/10.1098/rspa.1953.0064',
    archiveUrl: 'https://hdl.handle.net/2440/15264', category: 'primary',
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
    id: 'hinkley-1980', authors: 'D. V. Hinkley', year: 1980,
    title: 'Theory of statistical estimation: the 1925 paper', venue: 'R. A. Fisher: An Appreciation',
    doi: '10.1007/978-1-4612-6079-0_10', url: 'https://doi.org/10.1007/978-1-4612-6079-0_10', category: 'modern-scholarship',
  },
  {
    id: 'anscombe-1948', authors: 'F. J. Anscombe', year: 1948,
    title: 'The transformation of Poisson, binomial and negative-binomial data', venue: 'Biometrika 35',
    doi: '10.1093/biomet/35.3-4.246', url: 'https://doi.org/10.1093/biomet/35.3-4.246', category: 'modern-scholarship',
  },
  {
    id: 'warton-hui-2011', authors: 'D. I. Warton and F. K. C. Hui', year: 2011,
    title: 'The arcsine is asinine: the analysis of proportions in ecology', venue: 'Ecology 92',
    doi: '10.1890/10-0340.1', url: 'https://doi.org/10.1890/10-0340.1', category: 'modern-scholarship',
  },
  {
    id: 'brockwell-davis-1991', authors: 'P. J. Brockwell and R. A. Davis', year: 1991,
    title: 'Time Series: Theory and Methods, 2nd edition', venue: 'Springer',
    doi: '10.1007/978-1-4419-0320-4', url: 'https://doi.org/10.1007/978-1-4419-0320-4', category: 'modern-scholarship',
  },
  {
    id: 'hall-1992', authors: 'P. Hall', year: 1992,
    title: 'The Bootstrap and Edgeworth Expansion', venue: 'Springer',
    doi: '10.1007/978-1-4612-4384-7', url: 'https://doi.org/10.1007/978-1-4612-4384-7', category: 'modern-scholarship',
  },
  {
    id: 'speed-1983', authors: 'T. P. Speed', year: 1983,
    title: 'Cumulants and partition lattices', venue: 'Australian Journal of Statistics 25',
    doi: '10.1111/j.1467-842X.1983.tb00391.x', url: 'https://doi.org/10.1111/j.1467-842X.1983.tb00391.x', category: 'modern-scholarship',
  },
  {
    id: 'mardia-jupp-2000', authors: 'K. V. Mardia and P. E. Jupp', year: 2000,
    title: 'Directional Statistics', venue: 'Wiley', doi: '10.1002/9780470316979',
    url: 'https://doi.org/10.1002/9780470316979', category: 'modern-scholarship',
  },
  {
    id: 'coles-2001', authors: 'S. Coles', year: 2001,
    title: 'An Introduction to Statistical Modeling of Extreme Values', venue: 'Springer',
    doi: '10.1007/978-1-4471-3675-0', url: 'https://doi.org/10.1007/978-1-4471-3675-0', category: 'modern-scholarship',
  },
  {
    id: 'hayter-1986', authors: 'A. J. Hayter', year: 1986,
    title: 'The maximum familywise error rate of Fisher’s least significant difference test',
    venue: 'Journal of the American Statistical Association 81', doi: '10.1080/01621459.1986.10478364',
    url: 'https://doi.org/10.1080/01621459.1986.10478364', category: 'modern-scholarship',
  },
  {
    id: 'fog-2008', authors: 'A. Fog', year: 2008,
    title: 'Sampling methods for Wallenius’ and Fisher’s noncentral hypergeometric distributions',
    venue: 'Communications in Statistics—Simulation and Computation 37', doi: '10.1080/03610910701790236',
    url: 'https://doi.org/10.1080/03610910701790236', category: 'modern-scholarship',
  },
  {
    id: 'smith-etal-2014-macroecology', authors: 'F. A. Smith, J. L. Gittleman, and J. H. Brown (editors)', year: 2014,
    title: 'Foundations of Macroecology: Classic Papers with Commentaries', venue: 'University of Chicago Press',
    doi: '10.7208/9780226115504-006', url: 'https://doi.org/10.7208/9780226115504-006', category: 'modern-scholarship',
  },
  {
    id: 'ghosh-reid-fraser-2010', authors: 'M. Ghosh, N. Reid, and D. A. S. Fraser', year: 2010,
    title: 'Ancillary statistics: a review', venue: 'Statistica Sinica 20',
    url: 'https://www3.stat.sinica.edu.tw/sstest/j20n4/j20n41/j20n41.html', category: 'modern-scholarship',
  },
  {
    id: 'knuth-1998', authors: 'D. E. Knuth', year: 1998,
    title: 'The Art of Computer Programming, Volume 2: Seminumerical Algorithms, 3rd edition',
    venue: 'Addison-Wesley', url: 'https://www.informit.com/store/art-of-computer-programming-volume-2-seminumerical-9780201896848', category: 'modern-scholarship',
  },
  {
    id: 'lunneborg-2005', authors: 'C. E. Lunneborg', year: 2005,
    title: 'Normal scores and expected order statistics', venue: 'Encyclopedia of Statistics in Behavioral Science',
    doi: '10.1002/0470013192.bsa451', url: 'https://doi.org/10.1002/0470013192.bsa451', category: 'modern-scholarship',
  },
  {
    id: 'grafen-2006', authors: 'A. Grafen', year: 2006,
    title: 'A theory of Fisher’s reproductive value', venue: 'Journal of Mathematical Biology 53',
    doi: '10.1007/s00285-006-0376-4', url: 'https://doi.org/10.1007/s00285-006-0376-4', category: 'modern-scholarship',
  },
  {
    id: 'alvarez-castro-yang-2012', authors: 'J. M. Álvarez-Castro and R.-C. Yang', year: 2012,
    title: 'Clarifying the relationship between average excesses and average effects of allele substitutions',
    venue: 'Frontiers in Genetics 3', doi: '10.3389/fgene.2012.00030',
    url: 'https://doi.org/10.3389/fgene.2012.00030', category: 'modern-scholarship',
  },
  {
    id: 'charlesworth-2022', authors: 'B. Charlesworth', year: 2022,
    title: 'Fisher’s historic 1922 paper On the Dominance Ratio', venue: 'Genetics 220',
    doi: '10.1093/genetics/iyac006', url: 'https://doi.org/10.1093/genetics/iyac006', category: 'modern-scholarship',
  },
  {
    id: 'hartfield-keightley-2012', authors: 'M. Hartfield and P. D. Keightley', year: 2012,
    title: 'Current hypotheses for the evolution of sex and recombination', venue: 'Integrative Zoology 7',
    doi: '10.1111/j.1749-4877.2012.00284.x', url: 'https://doi.org/10.1111/j.1749-4877.2012.00284.x', category: 'modern-scholarship',
  },
  {
    id: 'ishida-rosales-2020', authors: 'M. R. Ishida and A. Rosales', year: 2020,
    title: 'The origins of the stochastic theory of population genetics: the Wright–Fisher model',
    venue: 'Studies in History and Philosophy of Biological and Biomedical Sciences 79',
    doi: '10.1016/j.shpsc.2019.101226', url: 'https://doi.org/10.1016/j.shpsc.2019.101226', category: 'modern-scholarship',
  },
  {
    id: 'bangham-2014', authors: 'J. Bangham', year: 2014,
    title: 'Writing, printing, speaking: Rhesus blood-group genetics and nomenclatures in the mid-twentieth century',
    venue: 'British Journal for the History of Science 47', doi: '10.1017/S0007087413000332',
    url: 'https://doi.org/10.1017/S0007087413000332', category: 'modern-scholarship',
  },
  {
    id: 'ay-etal-2017', authors: 'N. Ay, J. Jost, H. Vân Lê, and L. Schwachhöfer', year: 2017,
    title: 'Information Geometry', venue: 'Springer', doi: '10.1007/978-3-319-56478-4',
    url: 'https://doi.org/10.1007/978-3-319-56478-4', category: 'modern-scholarship',
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
