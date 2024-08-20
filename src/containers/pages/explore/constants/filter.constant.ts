import { levelItems } from '@/constants/type-label-map';
import { FilterLevel } from '../models';

export const levelFilterItems = new Map<FilterLevel, string>([
  ['all', '전체'],
  ...Array.from(levelItems),
]);
