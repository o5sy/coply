import { useCallback } from 'react';
import { UseQueryResult, useQueries } from '@tanstack/react-query';
import { GetVideoResponse } from '@/apis/models/video';
import { getVideoById } from '@/apis/videos';
import { recommendedSections } from '../models/main.model';

export const useRecommendedVideos = () => {
  const convertToObject = useCallback(
    (results: UseQueryResult[]): Record<string, GetVideoResponse> => {
      const videos = results
        .map((result) => result.data)
        .filter((data): data is GetVideoResponse => !!data);
      return videos.reduce((acc, video) => {
        return {
          ...acc,
          [video.id]: video,
        };
      }, {});
    },
    [],
  );

  const videoIds = recommendedSections.flatMap((section) => section.videoIds);

  const videoResults = useQueries<
    GetVideoResponse[],
    Record<string, GetVideoResponse>
  >({
    queries: videoIds.map((videoId) => ({
      queryKey: ['videos', { videoId }],
      queryFn: () => getVideoById(videoId),
    })),
    combine: convertToObject,
  });

  return videoResults;
};
