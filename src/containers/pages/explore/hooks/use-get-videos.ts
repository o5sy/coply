import { useQuery } from '@tanstack/react-query';
import { GetVideosResponse } from '@/apis/models/video';
import { getVideos } from '@/apis/videos';
import { VideoItem } from '@/components/explore-page';

export const useGetVideos = () => {
  const { data } = useQuery<GetVideosResponse>({
    queryKey: ['videos'],
    queryFn: () => getVideos(),
  });

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
