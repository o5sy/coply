import { axiosInstance } from './axios';
import {
  GetUserResponse,
  getUserResponseSchema,
  GetViewingHistoriesResponse,
  getViewingHistoriesResponseSchema,
  GetViewingHistoriesRequestParams,
  GetViewingHistoryResponse,
  getViewingHistoryResponseSchema,
  UpsertViewingHistoryRequestParams,
} from './models/user';

export const getUser = async (
  accessToken: string,
): Promise<GetUserResponse> => {
  const { data } = await axiosInstance.get('/users/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const user = getUserResponseSchema.parse(data);
  return user;
};

export const getViewingHistories = async (
  accessToken: string,
  params: GetViewingHistoriesRequestParams,
): Promise<GetViewingHistoriesResponse> => {
  const { data } = await axiosInstance.get('/users/viewing-histories', {
    headers: { Authorization: `Bearer ${accessToken}` },
    params,
  });
  const viewingHistories = getViewingHistoriesResponseSchema.parse(data);
  return viewingHistories;
};

export const getViewingHistoriesByVideoId = async (
  videoId: string,
  accessToken: string,
): Promise<GetViewingHistoryResponse> => {
  const { data } = await axiosInstance.get(
    `/users/viewing-histories/${videoId}`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  const viewingHistories = getViewingHistoryResponseSchema.parse(data);
  return viewingHistories;
};

export const updateViewingHistoryByVideoId = (
  videoId: string,
  accessToken: string,
  params: UpsertViewingHistoryRequestParams,
) => {
  return axiosInstance.post(
    `/users/viewing-histories/${videoId}`,
    { ...params },
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
};

export const deleteViewingHistoryByVideoId = (
  videoId: string,
  accessToken: string,
) => {
  return axiosInstance.delete(`/users/viewing-histories/${videoId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
