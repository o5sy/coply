import { VideoCard } from '../video-card';

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
          thumbnailUrl={thumbnailUrl}
          href={`/watch/${id}`}
          name={name}
          channelName={channelName}
        />
      ))}
    </ul>
  );
}
