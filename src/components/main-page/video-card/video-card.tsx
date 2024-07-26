import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface Video {
  name: string;
  channelName: string;
  thumbnailUrl: string;
}

interface VideoCardProps extends Video {
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
        'aspect-[1.2/1] min-w-[250px] cursor-pointer',
        className,
      )}
    >
      <Link href={href}>
        <div className="relative h-[74%] w-full">
          <Image
            className="object-cover"
            src={thumbnailUrl}
            alt="thumbnail"
            fill
          />
        </div>
        <div className="py-[12px]">
          <div className="text-[#0D1A17]">{name}</div>
          <div className="text-primary">{channelName}</div>
        </div>
      </Link>
    </li>
  );
}
