import { GetVideoResponse } from '@/apis/models/video';
import { VideoItem } from '@/components/shared/video-list';

export const getVideoItems = (
  videoIds: string[],
  videos: Map<string, GetVideoResponse>,
): VideoItem[] => {
  if (!videos) {
    return [];
  }

  const videoItems: VideoItem[] = [];

  videoIds.forEach((id) => {
    const video = videos.get(id);
    if (!video) {
      return;
    }
    videoItems.push({
      id: video.id,
      name: video.name,
      channelName: video.videoChannel.name,
      thumbnailUrl: video.thumbnailImageUrl,
    });
  });

  return videoItems;
};
