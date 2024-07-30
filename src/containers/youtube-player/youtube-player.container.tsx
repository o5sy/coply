import YouTube, { YouTubeEvent } from 'react-youtube';
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
  const latestWatchTime = useLatestWatchTime(videoId);
  const {
    startPollingWatchTime,
    stopPollingWatchTime,
    debouncedUpdateWatchTime,
  } = useUpdateLatestWatchTime({ videoId });

  // todo 동작 테스트 후 주석 정리
  const handleReady = (event: YouTubeEvent) => {
    if (!enabledTracingWatchTime) {
      return;
    }

    console.log(latestWatchTime);
    if (latestWatchTime) {
      event.target.seekTo(latestWatchTime, true);
    }
  };

  // ! api 요청할 시점에 currentTime 을 가져와야 하는데 스케줄이 등록되는 시점의 currentTime 으로 날림
  // todo 스케줄 등록되는 시점에 getCurrentTime 호출하도록 수정
  const handleStateChange = async (event: YouTubeEvent) => {
    if (!enabledTracingWatchTime) {
      return;
    }

    if (event.data === YouTube.PlayerState.PLAYING) {
      const currentTime = await event.target.getCurrentTime();
      startPollingWatchTime(currentTime);
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
    <YouTube
      videoId={videoId}
      opts={{
        height: '360',
        width: '640',
      }}
      className="h-full w-full"
      iframeClassName="h-[inherit] w-[inherit]"
      onReady={handleReady}
      onStateChange={handleStateChange}
    />
  );
}
