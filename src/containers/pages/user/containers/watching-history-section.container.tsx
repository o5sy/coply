import { deleteViewingHistoryByVideoId } from '@/apis/users';
import { SectionTitle } from '@/components/main-page';
import { VideoHistoryCard } from '@/components/user-page';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useIntersectionObserver, useLocalStorage } from '@/hooks';
import { getPercentage } from '@/utils/number.util';
import { getSession } from '@/utils/session';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useWatchingHistory } from '../hooks';

export function WatchingHistorySectionContainer() {
  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data, fetchMore } = useWatchingHistory({ takeCount: 12 });

  // todo 더 추상화된 기능을 가진 훅이나 컴포넌트 추가
  const { ref } = useIntersectionObserver<HTMLDivElement>({
    onTrigger: fetchMore,
    options: {
      threshold: [0.1],
      rootMargin: '0px 0px 100px 0px',
    },
  });

  // todo 캐시 날려서 다시 불러오지 않고 optimistic update 적용
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteViewingHistoryByVideoId,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewing-histories'] });
    },
  });

  const handleDelete = (videoId: string) => {
    if (!accessToken) {
      return;
    }
    mutate({ videoId, accessToken });
  };

  return (
    <section className="pt-[48px]">
      <SectionTitle title="시청 기록" />
      <ul className="grid w-full grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[24px]">
        {data.map(({ video, watchTime }) => (
          <VideoHistoryCard
            key={video.id}
            className="w-[unset]"
            thumbnailUrl={video.thumbnailImageUrl}
            href={`/watch/${video.id}`}
            title={video.name}
            channelName={video.videoChannel.name}
            progressRatio={getPercentage(watchTime / video.duration, 2)}
            onDelete={() => {
              handleDelete(video.id);
            }}
          />
        ))}
        <div ref={ref} />
      </ul>
    </section>
  );
}
