import { axiosInstance } from './axios';
import { GetVideosForAdminRequestParams } from './models/admin';
import { GetVideosResponse, getVideosResponseSchema } from './models/video';

export const getIsAdminAuthorization = async (accessToken: string) => {
  const { data } = await axiosInstance.get<boolean>('/admin', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return data;
};

export const getVideosForAdmin = async (
  accessToken: string,
  params?: GetVideosForAdminRequestParams,
): Promise<GetVideosResponse> => {
  const { data } = await axiosInstance.get('/admin/videos', {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { ...params },
  });
  const videos = getVideosResponseSchema.parse(data);
  return videos;
};

export const deleteVideoByIdForAdmin = async (
  accessToken: string,
  videoId: string,
) => {
  return axiosInstance.delete(`/admin/videos/${videoId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
