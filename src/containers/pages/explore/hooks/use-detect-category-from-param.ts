import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Category } from '../models';
import { isCategoryFilterItemKey } from '../utils/type-checker';

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
