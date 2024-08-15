import { categoryItems, levelItems } from '@/constants/type-label-map';
import { Category } from '@/apis/models/video';
import { FilterLevel } from '../models';

export const levelFilterItems = new Map<FilterLevel, string>([
  ['all', '전체'],
  ...Array.from(levelItems),
]);

export const categoryFilterItems = new Map<Category, string>([
  // ['all', '전체'],
  ...Array.from(categoryItems),
]);
