import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  href: string;
  className?: string;
}

export function VideoCard({
  thumbnailUrl,
  title,
  channelName,
  href,
  className,
}: VideoCardProps) {
  return (
    <li className={twMerge('w-[250px] cursor-pointer', className)}>
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
          <div className="text-[#0D1A17]">{title}</div>
          <div className="text-primary">{channelName}</div>
        </div>
      </Link>
    </li>
  );
}
