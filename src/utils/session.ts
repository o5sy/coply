const ACCESS_TOKEN = 'accessToken';

export const getSession = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const setSession = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};
