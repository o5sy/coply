import { GetVideoResponse } from '@/apis/models/video';
import { VideoItem } from '@/components/shared/video-list';

export const getVideoItems = (
  videoIds: string[],
  videos: Record<string, GetVideoResponse>,
): VideoItem[] => {
  return videoIds.map((id) => {
    const video = videos[id];
    return {
      id: video.id,
      name: video.name,
      channelName: video.videoChannel.name,
      thumbnailUrl: video.thumbnailImageUrl,
    };
  });
};
