import YouTube, { YouTubeEvent } from 'react-youtube';
import { YoutubePlayer } from '@/components/youtube-player/youtube-player';
import { useLatestWatchTime, useUpdateLatestWatchTime } from './hooks';

interface YoutubePlayerContainerProps {
  videoId: string;
  enabledTracingWatchTime?: boolean;
}

// todo enabledTracingWatchTime 에 따라 비즈니스 로직이 다 필요 없어짐. 최적화할 방법 찾아보기
export function YoutubePlayerContainer({
  videoId,
  enabledTracingWatchTime = false,
}: YoutubePlayerContainerProps) {
  // todo 이거 먼저 조회 후 ready 실행되도록 수정
  const latestWatchTime = useLatestWatchTime(videoId);
  const {
    startPollingWatchTime,
    stopPollingWatchTime,
    debouncedUpdateWatchTime,
  } = useUpdateLatestWatchTime({ videoId });

  const handleReady = (event: YouTubeEvent) => {
    if (!enabledTracingWatchTime) {
      return;
    }

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
    <YoutubePlayer
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
