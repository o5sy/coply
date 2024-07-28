import { ParsedUrlQuery } from 'querystring';

export const getFirstSegment = (
  segment: ParsedUrlQuery[string],
): string | undefined => {
  if (typeof segment === 'string') {
    return segment;
  }
  if (Array.isArray(segment) && segment.length > 0) {
    return segment[0];
  }
  return undefined;
};
