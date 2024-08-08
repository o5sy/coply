import { axiosInstance } from './axios';

export const getIsAdminAuthorization = async (accessToken: string) => {
  const { data } = await axiosInstance.get<boolean>('/admin', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return data;
};
