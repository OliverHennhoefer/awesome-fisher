import { describe, expect, it } from 'vitest';
import { getTimelinePlacement, parseContributionPeriod } from './contribution-period';

describe('parseContributionPeriod', () => {
  it('reads explicit ranges and mixed decade endpoints', () => {
    expect(parseContributionPeriod('1918–1930')).toEqual({ start: 1918, end: 1930 });
    expect(parseContributionPeriod('1934–1950s')).toEqual({ start: 1934, end: 1959 });
  });

  it('expands decade-only periods', () => {
    expect(parseContributionPeriod('1920s–1930s')).toEqual({ start: 1920, end: 1939 });
    expect(parseContributionPeriod('1930s')).toEqual({ start: 1930, end: 1939 });
  });

  it('plots a dated origin without extending an unspecified later history', () => {
    expect(parseContributionPeriod('1953 and later')).toEqual({ start: 1953, end: 1953 });
    expect(parseContributionPeriod('1938 and later algorithms')).toEqual({ start: 1938, end: 1938 });
  });

  it('leaves genuinely undated descriptions unplotted', () => {
    expect(parseContributionPeriod('modern term rooted in Fisherian estimation')).toBeNull();
  });
});

describe('getTimelinePlacement', () => {
  it('positions a period within the shared 1910–1960 scale', () => {
    const placement = getTimelinePlacement({ start: 1935, end: 1935 });
    expect(placement.left).toBe(50);
    expect(placement.width).toBeCloseTo(100 / 51);
  });
});
