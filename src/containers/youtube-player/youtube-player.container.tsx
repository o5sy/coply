import { useQueryClient } from '@tanstack/react-query';
import { getViewingHistoriesByVideoId } from '@/apis/users';
import {
  YouTubeEvent,
  YouTubePlayerState,
} from '@/components/youtube-player/types/youtube-player.type';
import { YouTubePlayer } from '@/components/youtube-player/youtube-player';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { useUpdateLatestWatchTime } from './hooks';

interface YoutubePlayerContainerProps {
  videoId: string;
  enabledTracingWatchTime?: boolean;
}

// todo enabledTracingWatchTime 에 따라 비즈니스 로직이 다 필요 없어짐. 최적화할 방법 찾아보기
export function YouTubePlayerContainer({
  videoId,
  enabledTracingWatchTime = false,
}: YoutubePlayerContainerProps) {
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
    event.target.unMute();

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

    if (event.data === YouTubePlayerState.PLAYING) {
      startPollingWatchTime(event.target);
    } else if (
      event.data === YouTubePlayerState.PAUSED ||
      event.data === YouTubePlayerState.ENDED
    ) {
      const currentTime = await event.target.getCurrentTime();
      stopPollingWatchTime();
      debouncedUpdateWatchTime(currentTime);

      if (event.data === YouTubePlayerState.ENDED) {
        // 영상 종료됐을 때 관련 동영상 표시하지 않도록 추가함
        event.target.stopVideo();
      }
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
