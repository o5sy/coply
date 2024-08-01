import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { categoryFilterItems } from '../constants';
import { Category } from '../models';

export const INIT_CATEGORY_KEY = 'initCategory';

interface UseDetectInitialCategoryProps {
  onDetect: (category: Category) => void;
}

export const useDetectCategoryFromParam = ({
  onDetect,
}: UseDetectInitialCategoryProps) => {
  const searchParams = useSearchParams();

  const categoryFromParam = searchParams.get(INIT_CATEGORY_KEY);

  useEffect(() => {
    if (isCategoryFilterItemKey(categoryFromParam)) {
      onDetect(categoryFromParam);
    }
  }, [categoryFromParam]);
};

function isCategoryFilterItemKey(value: unknown): value is Category {
  if (typeof value !== 'string') {
    return false;
  }
  const categoryKeys = Array.from(categoryFilterItems.keys());
  return categoryKeys.includes(value as Category);
}
