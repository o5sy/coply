import { useQueries, UseQueryResult } from '@tanstack/react-query';
import { useCallback } from 'react';
import { GetVideoResponse } from '@/apis/models/video';
import { getVideoById } from '@/apis/videos';
import { VideoItem, VideoList } from '@/components/explore-page';
import { SectionTitle } from '@/components/main-page';
import { recommendedSections } from '../models/main.model';

export function RecommendedVideoSectionListContainer() {
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

  return (
    <>
      {Array.from(recommendedSections).map(({ title, videoIds }) => {
        const videos: VideoItem[] = videoIds.map((id) => {
          const video = videoResults[id];

          return {
            id: video.id,
            name: video.name,
            channelName: video.videoChannel.name,
            thumbnailUrl: video.thumbnailImageUrl,
          };
        });

        return (
          <section key={encodeURI(title)} className="layout pt-[48px]">
            <SectionTitle title={title} />
            <VideoList items={videos} />
          </section>
        );
      })}
    </>
  );
}
