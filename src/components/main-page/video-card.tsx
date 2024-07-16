import Image from 'next/image';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
}

export function VideoCard({
  thumbnailUrl,
  title,
  channelName,
}: VideoCardProps) {
  return (
    <li className="w-[250px]">
      <div className="relative h-[125px] w-full">
        <Image src={thumbnailUrl} alt="thumbnail" fill />
      </div>
      <div className="py-[12px]">
        <div className="text-[#0D1A17]">{title}</div>
        <div className="text-primary">{channelName}</div>
      </div>
    </li>
  );
}
