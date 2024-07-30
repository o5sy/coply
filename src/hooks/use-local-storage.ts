import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T | null) => {
  const [value, setValue] = useState<T | null>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    const value = localStorage.getItem(key);
    return typeof value === 'string'
      ? value
      : JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));
  });

  useEffect(() => {
    setValue(initialValue === 'null' ? null : initialValue);
    const value =
      typeof initialValue === 'string'
        ? initialValue
        : JSON.stringify(initialValue);
    localStorage.setItem(key, value);
  }, [key, initialValue]);

  return [value, setValue];
};
