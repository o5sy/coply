import { categoryFilterItems } from '../constants';
import { Category } from '../models';

export function isCategoryFilterItemKey(value: unknown): value is Category {
  if (typeof value !== 'string') {
    return false;
  }
  const categoryKeys = Array.from(categoryFilterItems.keys());
  return categoryKeys.includes(value as Category);
}
