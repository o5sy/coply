import { debounce, DebounceSettingsLeading } from 'lodash';
import { useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <T extends (...args: any) => any>(
  func: T,
  wait?: number | undefined,
  options?: DebounceSettingsLeading,
) => {
  return useCallback(debounce(func, wait, options), []);
};
