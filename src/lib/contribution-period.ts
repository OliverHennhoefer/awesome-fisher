export const WORKS_TIMELINE_START = 1910;
export const WORKS_TIMELINE_END = 1960;

export interface ContributionPeriod {
  start: number;
  end: number;
}

export interface TimelinePlacement {
  left: number;
  width: number;
}

export function parseContributionPeriod(period: string): ContributionPeriod | null {
  const matches = [...period.matchAll(/((?:18|19|20)\d{2})(s?)/g)];
  if (matches.length === 0) return null;

  const first = matches[0];
  const last = matches.at(-1) ?? first;
  const start = Number(first[1]);
  const end = Number(last[1]) + (last[2] === 's' ? 9 : 0);

  return { start, end: Math.max(start, end) };
}

export function getTimelinePlacement(
  period: ContributionPeriod,
  timelineStart = WORKS_TIMELINE_START,
  timelineEnd = WORKS_TIMELINE_END,
): TimelinePlacement {
  const visibleStart = Math.max(period.start, timelineStart);
  const visibleEnd = Math.min(period.end, timelineEnd);
  const yearCount = timelineEnd - timelineStart + 1;

  return {
    left: ((visibleStart - timelineStart) / (timelineEnd - timelineStart)) * 100,
    width: ((visibleEnd - visibleStart + 1) / yearCount) * 100,
  };
}
