import { categoryItems } from '@/constants/type-label-map';
import { Category, Level } from '../models';

export const levelFilterItems = new Map<Level, string>([
  ['all', '전체'],
  ['BEGINNER', '입문'],
  ['LOW', '초급'],
  ['MIDDLE', '중급 이상'],
]);

export const categoryFilterItems = new Map<Category, string>([
  ['all', '전체'],
  ...Array.from(categoryItems),
]);
