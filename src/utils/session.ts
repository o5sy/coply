import { ACCESS_TOKEN } from '@/constants/local-storage-key';

export const getSession = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setSession = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};
