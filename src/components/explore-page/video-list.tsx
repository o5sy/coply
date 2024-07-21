import { VideoCard } from '../main-page';

export function VideoList() {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[24px]">
      {Array.from({ length: 30 }).map((_, index) => (
        <VideoCard
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="w-[unset]"
          thumbnailUrl="/sample-thumbnail.png"
          href="/watch"
          title="React 로 웹 사이트 만들기"
          channelName="코플리"
        />
      ))}
    </ul>
  );
}
