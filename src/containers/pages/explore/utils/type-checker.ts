import { Category } from '@/apis/models/video';
import { categoryItems } from '@/constants/type-label-map';

export function isCategoryFilterItemKey(value: unknown): value is Category {
  if (typeof value !== 'string') {
    return false;
  }
  const categoryKeys = Array.from(categoryItems.keys());
  return categoryKeys.includes(value as Category);
}
