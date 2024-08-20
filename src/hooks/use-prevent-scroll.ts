import { useEffect } from 'react';

interface UsePreventScrollProps {
  scrollable?: boolean;
}

export const usePreventScroll = (
  { scrollable = false }: UsePreventScrollProps = { scrollable: false },
) => {
  const allowScroll = (isAllow: boolean) => {
    if (!isAllow) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    allowScroll(scrollable);
    return () => {
      allowScroll(true);
    };
  }, [scrollable]);
};
