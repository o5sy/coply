import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';

export const useSearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams.get('q');

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value.trim();
    if (keyword && e.key === 'Enter') {
      router.push(`/explore?q=${keyword}`);
    }
  };

  return { keywordFromParam: keyword || '', onKeyDown };
};
