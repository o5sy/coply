import Link from 'next/link';
import { MouseEvent } from 'react';
import { cn } from '@/utils/styling';
import { VideoThumbnail } from '../shared/video-thumbnail';

interface VideoHistoryCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  href: string;
  progressRatio: number;
  className?: string;
  onDelete: () => void;
}

export function VideoHistoryCard({
  thumbnailUrl,
  title,
  channelName,
  href,
  progressRatio,
  className,
  onDelete,
}: VideoHistoryCardProps) {
  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <li
      className={cn(
        'group relative aspect-[1.2/1] min-w-[250px] cursor-pointer',
        className,
      )}
    >
      <Link href={href}>
        <VideoThumbnail thumbnailUrl={thumbnailUrl} alt={title} />

        <div className="py-[12px]">
          <div className="flex justify-between gap-[8px]">
            <div className="mb-1 line-clamp-2 text-base font-semibold text-gray-800">
              {title}
            </div>
            <button
              type="button"
              className="invisible items-start text-gray-500 group-hover:visible"
              onClick={handleDelete}
            >
              X
            </button>
          </div>
          <div className="line-clamp-1 text-sm text-primary">{channelName}</div>
          <progress
            className="h-[4px] w-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-primary"
            value={progressRatio}
            max={100}
          />
          <div className="text-sm text-gray-500">진행률: {progressRatio}%</div>
        </div>
      </Link>
    </li>
  );
}
