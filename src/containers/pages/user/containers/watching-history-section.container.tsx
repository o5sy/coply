import { SectionTitle } from '@/components/main-page';
import { VideoHistoryCard } from '@/components/user-page';
import { useIntersectionObserver } from '@/hooks';
import { useWatchingHistory } from '../hooks';

export function WatchingHistorySectionContainer() {
  const { data, fetchMore } = useWatchingHistory({ takeCount: 12 });

  // todo 인피니티 스크롤 테스트 필요
  const { ref } = useIntersectionObserver<HTMLUListElement>({
    onTrigger: fetchMore,
    options: {
      threshold: [0.6, 1],
    },
  });

  return (
    <section className="pt-[48px]">
      <SectionTitle title="시청 기록" />
      <ul
        ref={ref}
        className="grid w-full grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[24px]"
      >
        {data.map(({ video }) => (
          <VideoHistoryCard
            key={video.id}
            className="w-[unset]"
            thumbnailUrl={video.thumbnailImageUrl}
            href={`/watch?=${video.id}`}
            title={video.name}
            channelName={video.videoChannel.name}
            progressRatio={100}
            onDelete={() => {}}
          />
        ))}
      </ul>
    </section>
  );
}
