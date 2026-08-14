import { describe, expect, it } from 'vitest';
import {
  fisherCombinedP,
  fisherExactDistribution,
  fisherExactTwoSided,
  hypergeometricProbability,
} from './statistics';

describe('Fisher exact calculations', () => {
  it('matches the canonical tea-style 2×2 example', () => {
    expect(hypergeometricProbability([3, 1, 1, 3])).toBeCloseTo(16 / 70, 12);
    expect(fisherExactTwoSided([3, 1, 1, 3])).toBeCloseTo(34 / 70, 12);
  });

  it('produces a normalized conditional distribution', () => {
    const total = fisherExactDistribution([8, 2, 1, 5])
      .reduce((sum, item) => sum + item.probability, 0);
    expect(total).toBeCloseTo(1, 12);
  });

  it('rejects invalid cells', () => {
    expect(() => fisherExactTwoSided([-1, 2, 3, 4])).toThrow(RangeError);
  });
});

describe('Fisher p-value combination', () => {
  it('returns the identity for one p-value', () => {
    expect(fisherCombinedP([0.05]).combinedP).toBeCloseTo(0.05, 12);
  });

  it('matches a known four-value calculation', () => {
    const result = fisherCombinedP([0.01, 0.04, 0.03, 0.20]);
    expect(result.statistic).toBeCloseTo(25.880, 3);
    expect(result.degreesOfFreedom).toBe(8);
    expect(result.combinedP).toBeCloseTo(0.00110, 4);
  });

  it('rejects empty and out-of-range input', () => {
    expect(() => fisherCombinedP([])).toThrow(RangeError);
    expect(() => fisherCombinedP([0])).toThrow(RangeError);
  });
});
