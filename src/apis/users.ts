import { axiosInstance } from './axios';
import {
  GetViewingHistoryResponse,
  getViewingHistoryResponseSchema,
} from './models/user';

export const getUser = async (token: string) => {
  const { data } = await axiosInstance.get('/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const getViewingHistoriesByVideoId = async (
  videoId: string,
  accessToken: string,
): Promise<GetViewingHistoryResponse> => {
  const { data } = await axiosInstance.get(
    `/users/viewing-histories/${videoId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  const viewingHistories = getViewingHistoryResponseSchema.parse(data);
  return viewingHistories;
};
