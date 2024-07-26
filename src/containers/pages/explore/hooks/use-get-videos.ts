import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { GetVideosResponse } from '@/apis/models/video';
import { VideoItem } from '@/components/explore-page';

interface UseGetVideosProps {
  queryOptions: UseQueryOptions<GetVideosResponse>;
}

export const useGetVideos = ({ queryOptions }: UseGetVideosProps) => {
  const { data } = useQuery(queryOptions);

  const videos = data?.items.map<VideoItem>((video) => {
    return {
      id: video.id.toString(),
      name: video.name,
      channelName: video.videoChannel.name,
      thumbnailUrl: video.thumbnailImageUrl,
    };
  });

  const totalCount = data?.total ?? 0;

  return { videos, totalCount };
};
