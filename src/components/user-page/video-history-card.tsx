import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge(
        'group relative aspect-[1.2/1] min-w-[250px] cursor-pointer',
        className,
      )}
    >
      <Link href={href}>
        <div className="relative h-[60%] w-full">
          <Image
            className="object-cover"
            src={thumbnailUrl}
            alt="thumbnail"
            fill
          />
        </div>
        <div className="py-[12px]">
          <div className="flex justify-between gap-[8px]">
            <div className="my-[4px] line-clamp-2 flex-1 text-base text-[#0D1A17]">
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
          <div className="text-primary">{channelName}</div>
          <progress
            className="h-[4px] w-full appearance-none"
            value={progressRatio}
            max={100}
          />
          <div className="text-sm text-gray-500">진행률: {progressRatio}%</div>
        </div>
      </Link>
    </li>
  );
}
