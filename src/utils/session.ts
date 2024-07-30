import { ACCESS_TOKEN } from '@/constants/local-storage-key';

export const getSession = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const token = localStorage.getItem(ACCESS_TOKEN);
  return typeof token === 'string' ? token : JSON.parse(token || 'null');
};

export const setSession = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeSession = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
