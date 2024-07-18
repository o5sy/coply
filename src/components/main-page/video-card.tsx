import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  href: string;
}

export function VideoCard({
  thumbnailUrl,
  title,
  channelName,
  href,
}: VideoCardProps) {
  return (
    <li className="w-[250px] cursor-pointer">
      <Link href={href}>
        <div className="relative h-[125px] w-full">
          <Image src={thumbnailUrl} alt="thumbnail" fill />
        </div>
        <div className="py-[12px]">
          <div className="text-[#0D1A17]">{title}</div>
          <div className="text-primary">{channelName}</div>
        </div>
      </Link>
    </li>
  );
}
