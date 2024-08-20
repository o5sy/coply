import Image from 'next/image';

export function HeroCopy() {
  return (
    <h1 className="text-5xl font-bold leading-snug text-gray-800 max-md:text-4xl max-sm:text-3xl">
      <span className="flex gap-5 max-sm:gap-3">
        <div className="relative">
          <Image
            className="absolute -top-4 left-0 max-sm:-top-5"
            src="/youtube-logo.webp"
            width={1143 / 14}
            height={255 / 14}
            alt="YouTube"
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
