import { categoryItems, levelItems } from '@/constants/type-label-map';
import { Category, Level } from '../models';

export const levelFilterItems = new Map<Level, string>([
  ['all', '전체'],
  ...Array.from(levelItems),
]);

export const categoryFilterItems = new Map<Category, string>([
  ['all', '전체'],
  ...Array.from(categoryItems),
]);
