import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge(
        'group aspect-[1.2/1] min-w-[250px] cursor-pointer',
        className,
      )}
    >
      <Link href={href}>
        <div className="aspect-[1.8/1] w-full overflow-hidden rounded-lg transition-transform group-hover:scale-105">
          {thumbnailUrl ? (
            <div className="relative h-full w-full">
              <Image
                className="absolute object-cover"
                src={thumbnailUrl}
                alt={name}
                fill
              />
            </div>
          ) : (
            <div className="flex-center h-full w-full bg-primary/25">
              <div className="relative h-full w-[16%]">
                <Image className="absolute" src="/flag.svg" fill alt={name} />
              </div>
            </div>
          )}
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
