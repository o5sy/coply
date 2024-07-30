import { useCallback, useEffect, useRef } from 'react';
import { useDebounce } from '@/hooks';

// 여러번 호출돼도 interval 을 한번만 등록하기 위해 debounce 적용
export const useDebouncedInterval = (delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedInterval = useDebounce(
    (func: () => void) => () => {
      if (timeoutRef.current) {
        return;
      }
      timeoutRef.current = setInterval(func, delay);
    },
    delay,
    { leading: true },
  );

  const startDebouncedInterval = useCallback((func: () => void) => {
    debouncedInterval(func)?.();
  }, []);

  const clearDebouncedInterval = useCallback(() => {
    if (!timeoutRef.current) {
      return;
    }
    clearInterval(timeoutRef.current);
    timeoutRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      clearDebouncedInterval();
    };
  }, []);

  return { startDebouncedInterval, clearDebouncedInterval };
};
