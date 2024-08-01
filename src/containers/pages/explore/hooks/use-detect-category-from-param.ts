import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { categoryFilterItems } from '../constants';
import { Category } from '../models';

interface UseDetectInitialCategoryProps {
  onDetect: (category: Category) => void;
}

export const useDetectCategoryFromParam = ({
  onDetect,
}: UseDetectInitialCategoryProps) => {
  const searchParams = useSearchParams();

  const categoryFromParam = searchParams.get('initCategory');

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
