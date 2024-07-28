import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const localStorageState = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue),
    );
  });

  useEffect(() => {
    localStorage.setItem(
      key,
      typeof initialValue === 'string'
        ? initialValue
        : JSON.stringify(initialValue),
    );
  }, [key, initialValue]);

  return localStorageState;
};
