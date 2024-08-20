import Link from 'next/link';
import { cn } from '@/utils/styling';
import { VideoThumbnail } from '../video-thumbnail';

interface VideoCardProps {
  name: string;
  channelName: string;
  href: string;
  thumbnailUrl?: string;
  className?: string;
}

export function VideoCard({
  name,
  channelName,
  href,
  thumbnailUrl,
  className,
}: VideoCardProps) {
  return (
    <li
      className={cn(
        'group aspect-[1.2/1] min-w-[250px] cursor-pointer',
        className,
      )}
    >
      <Link href={href}>
        <VideoThumbnail thumbnailUrl={thumbnailUrl} alt={name} />
        <div className="py-3">
          <div className="mb-1 line-clamp-2 text-base font-semibold text-gray-800">
            {name}
          </div>
          <div className="line-clamp-1 text-sm text-primary">{channelName}</div>
        </div>
      </Link>
    </li>
  );
}
