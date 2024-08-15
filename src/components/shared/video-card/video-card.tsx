import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface VideoCardProps {
  name: string;
  channelName: string;
  thumbnailUrl: string;
  href: string;
  className?: string;
}

export function VideoCard({
  name,
  channelName,
  thumbnailUrl,
  href,
  className,
}: VideoCardProps) {
  return (
    <li
      className={twMerge(
        'group aspect-[1.2/1] min-w-[250px] cursor-pointer',
        className,
      )}
    >
      <Link href={href}>
        <div className="relative aspect-[1.8/1] w-full overflow-hidden rounded-lg">
          <Image
            className="object-cover transition-transform group-hover:scale-110"
            src={thumbnailUrl}
            alt="thumbnail"
            fill
          />
        </div>
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
