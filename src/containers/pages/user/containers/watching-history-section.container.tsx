import { SectionTitle } from '@/components/main-page';
import { VideoHistoryCard } from '@/components/user-page';
import { useIntersectionObserver } from '@/hooks';
import { useWatchingHistory } from '../hooks';

export function WatchingHistorySectionContainer() {
  const { data, fetchMore } = useWatchingHistory({ takeCount: 12 });

  // todo 인피니티 스크롤 개선 (한개씩 불러와도 정상 작동되도록)
  // todo 더 추상화된 기능을 가진 훅이나 컴포넌트 추가
  const { ref } = useIntersectionObserver<HTMLDivElement>({
    onTrigger: () => {
      fetchMore();
    },
    options: {
      threshold: [0.1],
      rootMargin: '0px 0px 100px 0px',
    },
  });

  return (
    <section className="pt-[48px]">
      <SectionTitle title="시청 기록" />
      <ul className="grid w-full grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[24px]">
        {data.map(({ video }) => (
          <VideoHistoryCard
            key={video.id}
            className="w-[unset]"
            thumbnailUrl={video.thumbnailImageUrl}
            href={`/watch/${video.id}`}
            title={video.name}
            channelName={video.videoChannel.name}
            progressRatio={100}
            onDelete={() => {}}
          />
        ))}
        <div ref={ref} />
      </ul>
    </section>
  );
}
