import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onTrigger: () => void;
  options?: IntersectionObserverInit;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  onTrigger,
  options = { threshold: 0.6 },
}: UseIntersectionObserverProps) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        onTrigger();
      }
    }, options);
    observer.observe(ref.current);

    return observer.disconnect;
  });

  return { ref };
};
