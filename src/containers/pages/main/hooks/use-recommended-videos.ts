import { useCallback } from 'react';
import { UseQueryResult, useQueries } from '@tanstack/react-query';
import { GetVideoResponse } from '@/apis/models/video';
import { getVideoById } from '@/apis/videos';
import { recommendedSections } from '../models/main.model';

export const useRecommendedVideos = () => {
  const convertToObject = useCallback((results: UseQueryResult[]) => {
    const videos = results
      .map((result) => result.data)
      .filter((data): data is GetVideoResponse => !!data)
      .reduce<Map<string, GetVideoResponse>>((acc, video) => {
        acc.set(video.id, video);
        return acc;
      }, new Map());
    return videos;
  }, []);

  const videoIds = recommendedSections.flatMap((section) => section.videoIds);

  const videoResults = useQueries<
    GetVideoResponse[],
    Map<string, GetVideoResponse>
  >({
    queries: videoIds.map((videoId) => ({
      queryKey: ['videos', { videoId }],
      queryFn: () => getVideoById(videoId),
    })),
    combine: convertToObject,
  });

  return videoResults;
};
