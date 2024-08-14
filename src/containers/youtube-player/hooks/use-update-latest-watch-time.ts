import { useMutation } from '@tanstack/react-query';
import { YouTubePlayer } from 'youtube-player/dist/types';
import { UpsertViewingHistoryRequestParams } from '@/apis/models/user';
import { updateViewingHistoryByVideoId } from '@/apis/users';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useDebounce, useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { useDebouncedInterval } from '../../pages/watch/hooks/use-debounced-interval';

interface UseUpdateLatestWatchTimeProps {
  videoId?: string;
  intervalTime?: number; // default: 10000(ms)
}

export const useUpdateLatestWatchTime = ({
  videoId,
  intervalTime = 10000,
}: UseUpdateLatestWatchTimeProps) => {
  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { mutate } = useMutation({
    mutationFn: ({
      videoId,
      accessToken,
      params,
    }: {
      videoId: string;
      accessToken: string;
      params: UpsertViewingHistoryRequestParams;
    }) => {
      return updateViewingHistoryByVideoId(videoId, accessToken, params);
    },
  });

  const mutateWatchTime = (currentTime: number) => {
    if (!videoId || !accessToken) {
      return;
    }
    mutate({
      videoId,
      accessToken,
      params: {
        watchTime: currentTime,
      },
    });
  };

  const { startDebouncedInterval, clearDebouncedInterval } =
    useDebouncedInterval(intervalTime);

  const debouncedUpdateWatchTime = useDebounce((currentTime: number) => {
    mutateWatchTime(currentTime);
  }, intervalTime);

  const startPollingWatchTime = (player: YouTubePlayer) => {
    startDebouncedInterval(async () => {
      const currentTime = await player.getCurrentTime();
      mutateWatchTime(currentTime);
    });
  };

  return {
    startPollingWatchTime,
    stopPollingWatchTime: clearDebouncedInterval,
    debouncedUpdateWatchTime,
  };
};
