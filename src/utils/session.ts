import { ACCESS_TOKEN } from '@/constants/local-storage-key';

export const getSession = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return localStorage.getItem('accessToken');
};

export const setSession = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};
