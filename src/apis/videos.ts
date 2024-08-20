import { axiosInstance } from './axios';
import {
  GetVideoResponse,
  GetVideosRequestParams,
  GetVideosResponse,
  getVideosResponseSchema,
  videoSchema,
} from './models/video';

export const getVideoById = async (id: string): Promise<GetVideoResponse> => {
  const { data } = await axiosInstance.get(`/videos/${id}`);
  const video = videoSchema.parse(data);
  return video;
};

export const getVideos = async (
  params?: GetVideosRequestParams,
): Promise<GetVideosResponse> => {
  const { data } = await axiosInstance.get('/videos', { params });
  const videos = getVideosResponseSchema.parse(data);
  return videos;
};
