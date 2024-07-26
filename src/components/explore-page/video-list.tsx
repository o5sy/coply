import { VideoCard } from '../main-page';

export interface VideoItem {
  id: string;
  name: string;
  channelName: string;
  thumbnailUrl: string;
}

interface VideoListProps {
  items: VideoItem[];
}

export function VideoList({ items }: VideoListProps) {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[24px]">
      {items.map(({ id, name, channelName, thumbnailUrl }) => (
        <VideoCard
          key={id}
          className="w-[unset]"
          // todo 기본 이미지 변경
          thumbnailUrl={thumbnailUrl || '/sample-thumbnail.png'}
          href={`/watch/${id}`}
          name={name}
          channelName={channelName}
        />
      ))}
    </ul>
  );
}
