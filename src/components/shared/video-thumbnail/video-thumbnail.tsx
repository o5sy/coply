import Image from 'next/image';

interface VideoThumbnailProps {
  thumbnailUrl?: string;
  alt: string;
}

export function VideoThumbnail({ thumbnailUrl, alt }: VideoThumbnailProps) {
  return (
    <div className="aspect-[1.8/1] w-full overflow-hidden rounded-lg transition-transform group-hover:scale-105">
      {thumbnailUrl ? (
        <div className="relative h-full w-full">
          <Image
            className="absolute object-cover"
            src={thumbnailUrl}
            alt={alt}
            fill
          />
        </div>
      ) : (
        <div className="flex-center h-full w-full bg-primary/25">
          <div className="relative h-full w-[16%]">
            <Image className="absolute" src="/flag.svg" fill alt={alt} />
          </div>
        </div>
      )}
    </div>
  );
}
