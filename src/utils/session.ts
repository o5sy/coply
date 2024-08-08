import { ACCESS_TOKEN } from '@/constants/local-storage-key';

export const getSession = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const token = localStorage.getItem(ACCESS_TOKEN);
  // 토큰 값은 string 일 거라 JSON 파싱은 안함
  return !token || token === 'null' ? null : token;
};

export const setSession = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const removeSession = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
