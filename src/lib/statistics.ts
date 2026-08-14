export type ContingencyTable = [number, number, number, number];

function assertCount(value: number) {
  if (!Number.isInteger(value) || value < 0) {
    throw new RangeError('Contingency-table cells must be non-negative integers.');
  }
}

function logFactorial(n: number) {
  assertCount(n);
  let value = 0;
  for (let i = 2; i <= n; i += 1) value += Math.log(i);
  return value;
}

export function logCombination(n: number, k: number) {
  if (k < 0 || k > n) return Number.NEGATIVE_INFINITY;
  return logFactorial(n) - logFactorial(k) - logFactorial(n - k);
}

export function hypergeometricProbability(table: ContingencyTable) {
  table.forEach(assertCount);
  const [a, b, c, d] = table;
  const row1 = a + b;
  const row2 = c + d;
  const column1 = a + c;
  const total = row1 + row2;
  return Math.exp(
    logCombination(row1, a)
      + logCombination(row2, c)
      - logCombination(total, column1),
  );
}

export function fisherExactDistribution(table: ContingencyTable) {
  table.forEach(assertCount);
  const [a, b, c, d] = table;
  const row1 = a + b;
  const row2 = c + d;
  const column1 = a + c;
  const minimum = Math.max(0, column1 - row2);
  const maximum = Math.min(row1, column1);

  return Array.from({ length: maximum - minimum + 1 }, (_, index) => {
    const candidateA = minimum + index;
    const candidate: ContingencyTable = [
      candidateA,
      row1 - candidateA,
      column1 - candidateA,
      row2 - (column1 - candidateA),
    ];
    return { a: candidateA, probability: hypergeometricProbability(candidate) };
  });
}

export function fisherExactTwoSided(table: ContingencyTable) {
  const observed = hypergeometricProbability(table);
  return Math.min(1, fisherExactDistribution(table)
    .filter(({ probability }) => probability <= observed + 1e-12)
    .reduce((sum, { probability }) => sum + probability, 0));
}

export function fisherCombinedP(values: number[]) {
  if (values.length === 0 || values.some((value) => !Number.isFinite(value) || value <= 0 || value > 1)) {
    throw new RangeError('P-values must be finite numbers in the interval (0, 1].');
  }
  const statistic = -2 * values.reduce((sum, value) => sum + Math.log(value), 0);
  const halfStatistic = statistic / 2;
  let term = 1;
  let series = 1;
  for (let index = 1; index < values.length; index += 1) {
    term *= halfStatistic / index;
    series += term;
  }
  return {
    statistic,
    degreesOfFreedom: 2 * values.length,
    combinedP: Math.min(1, Math.exp(-halfStatistic) * series),
  };
}
