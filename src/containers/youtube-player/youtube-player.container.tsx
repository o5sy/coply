import { useQueryClient } from '@tanstack/react-query';
import YouTube, { YouTubeEvent } from 'react-youtube';
import { getViewingHistoriesByVideoId } from '@/apis/users';
import { YouTubePlayer } from '@/components/youtube-player/youtube-player';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { useUpdateLatestWatchTime } from './hooks';

interface YouTubePlayerContainerProps {
  videoId: string;
  enabledTracingWatchTime?: boolean;
}

// todo enabledTracingWatchTime 에 따라 비즈니스 로직이 다 필요 없어짐. 최적화할 방법 찾아보기
export function YouTubePlayerContainer({
  videoId,
  enabledTracingWatchTime = false,
}: YouTubePlayerContainerProps) {
  const queryClient = useQueryClient();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const {
    startPollingWatchTime,
    stopPollingWatchTime,
    debouncedUpdateWatchTime,
  } = useUpdateLatestWatchTime({ videoId });

  const getLatestWatchTime = (videoId: string, accessToken: string) =>
    queryClient.fetchQuery({
      queryKey: ['viewing-histories', { videoId }],
      queryFn: () => {
        return getViewingHistoriesByVideoId(videoId, accessToken);
      },
      staleTime: 0,
    });

  const handleReady = async (event: YouTubeEvent) => {
    if (!enabledTracingWatchTime || !accessToken) {
      return;
    }

    const { watchTime: latestWatchTime } = await getLatestWatchTime(
      videoId,
      accessToken,
    );

    if (latestWatchTime) {
      event.target.seekTo(latestWatchTime, true);
    }
  };

  const handleStateChange = async (event: YouTubeEvent) => {
    if (!enabledTracingWatchTime) {
      return;
    }

    if (event.data === YouTube.PlayerState.PLAYING) {
      startPollingWatchTime(event.target);
    } else if (
      event.data === YouTube.PlayerState.PAUSED ||
      event.data === YouTube.PlayerState.ENDED
    ) {
      const currentTime = await event.target.getCurrentTime();
      stopPollingWatchTime();
      debouncedUpdateWatchTime(currentTime);
    }
  };

  return (
    <YouTubePlayer
      videoId={videoId}
      opts={{
        height: '360',
        width: '640',
      }}
      className="h-full w-full"
      onReady={handleReady}
      onStateChange={handleStateChange}
    />
  );
}
