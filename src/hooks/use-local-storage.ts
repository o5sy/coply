import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T | null) => {
  const [value, setValue] = useState<T | null>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    const value = localStorage.getItem(key);
    if (!value || value === 'null') {
      return null;
    }
    return JSON.parse(JSON.stringify(value));
  });

  useEffect(() => {
    setValue(initialValue === 'null' ? null : initialValue);
    const value =
      typeof initialValue === 'string'
        ? initialValue
        : JSON.stringify(initialValue);
    localStorage.setItem(key, value);
  }, [key, initialValue]);

  return [value, setValue] as const;
};
