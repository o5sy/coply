/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { SectionTitle, Category, VideoCard } from '@/components/main-page';
import { SearchInput, useSearchInput } from '@/components/shared';
import { categoryItems } from '@/constants/type-label-map';
import { INIT_CATEGORY_KEY } from '../explore/hooks';

export function MainContainer() {
  const { onKeyDown } = useSearchInput();

  return (
    <main className="mb-[100px] w-full">
      {/* hero */}
      <section className="layout flex-center pt-[32px]">
        <Image src="/hero.png" width={1200} height={320} alt="로드맵 이미지" />
      </section>

      {/* search */}
      <div className="layout flex-center pt-[24px]">
        <SearchInput
          className="w-full"
          inputProps={{
            placeholder: '배우고 싶은 지식을 입력해보세요.',
            onKeyDown,
          }}
        />
      </div>

      {/* category */}
      <section className="layout pt-[48px]">
        <SectionTitle title="카테고리 🗂️" />
        <ul className="flex flex-wrap gap-[16px]">
          {Array.from(categoryItems).map(([key, label]) => (
            <Category
              key={key}
              text={label}
              href={`/explore?${INIT_CATEGORY_KEY}=${key}`}
            />
          ))}
        </ul>
      </section>

      {/* recommended videos */}
      <section className="layout pt-[48px]">
        <SectionTitle title="요즘 핫한 프론트엔드 영상 🔥" />
        <ul className="flex flex-wrap justify-between gap-[12px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <VideoCard
              key={index}
              name="React 웹 개발"
              channelName="코플리 월드"
              thumbnailUrl="/sample-thumbnail.png"
              href="/watch"
            />
          ))}
        </ul>
      </section>

      <section className="layout pt-[48px]">
        <SectionTitle title="AI 기술 트렌드 👤" />
        <ul className="flex flex-wrap justify-between gap-[12px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <VideoCard
              key={index}
              name="LLM 이란?"
              channelName="코플리 월드"
              thumbnailUrl="/sample-thumbnail.png"
              href="/watch"
            />
          ))}
        </ul>
      </section>

      <section className="layout pt-[48px]">
        <SectionTitle title="코딩 공부 시작하기 🚀" />
        <ul className="flex flex-wrap justify-between gap-[12px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <VideoCard
              key={index}
              name="4차 산업혁명 시대, 코딩을 배워야 하는 이유"
              channelName="코플리 월드"
              thumbnailUrl="/sample-thumbnail.png"
              href="/watch"
            />
          ))}
        </ul>
      </section>

      <section className="layout pt-[48px]">
        <SectionTitle title="취업 뽀개기 딱대 👊" />
        <ul className="flex flex-wrap justify-between gap-[12px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <VideoCard
              key={index}
              name="이력서, 어떻게 쓸까?"
              channelName="코플리 월드"
              thumbnailUrl="/sample-thumbnail.png"
              href="/watch"
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
