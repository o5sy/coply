import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';

export const useHandleEnterAtSearchInput = () => {
  const router = useRouter();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value.trim();
    if (keyword && e.key === 'Enter') {
      router.push(`/explore?q=${keyword}`);
    }
  };

  return { onKeyDown };
};
