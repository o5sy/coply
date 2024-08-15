import Image from 'next/image';

export function HeroCopy() {
  return (
    <h1 className="text-5xl font-bold leading-snug text-gray-800">
      <span className="flex gap-5">
        <div className="relative">
          <Image
            className="absolute -top-4 left-0"
            src="/youtube-logo.webp"
            width={1143 / 14}
            height={255 / 14}
            alt="youtube logo"
          />
          YouTube
        </div>
        개발 영상을
      </span>
      <span className="text-primary">코플리</span>
      에서
      <br />
      카테고리로 모아 보세요
    </h1>
  );
}
