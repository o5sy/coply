import { SectionTitle } from '@/components/main-page';
import { VideoHistoryCard } from '@/components/user-page';
import { UserSectionContainer } from './containers/user-section.container';

export function UserContainer() {
  return (
    <main className="mb-[100px] w-full">
      <div className="layout">
        {/* 유저 정보 */}
        <UserSectionContainer />

        {/* 시청 기록 */}
        <section className="pt-[48px]">
          <SectionTitle title="시청 기록" />
          <ul className="grid w-full grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[24px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <VideoHistoryCard
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="w-[unset]"
                thumbnailUrl="/sample-thumbnail.png"
                href="/watch"
                title="React 로 웹 사이트 만들기"
                channelName="코플리"
                progressRatio={100}
                onDelete={() => {}}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
