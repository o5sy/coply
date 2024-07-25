import { axiosInstance } from './axios';

export const getUser = async (token: string) => {
  const { data } = await axiosInstance.get('/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
