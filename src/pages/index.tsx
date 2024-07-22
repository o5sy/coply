/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import Head from 'next/head';
import { Header } from '@/components/header';
import { SearchInput } from '@/components/header/search-input';
import { Category, SectionTitle, VideoCard } from '@/components/main-page';

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Coply</title>
      </Head>

      <div className="relative">
        <Header />
        <main className="mb-[100px] w-full">
          {/* hero */}
          <section className="layout flex-center pt-[32px]">
            <Image
              src="/hero.png"
              width={1200}
              height={320}
              alt="로드맵 이미지"
            />
          </section>

          {/* search */}
          <div className="layout flex-center pt-[24px]">
            <SearchInput
              className="w-full"
              inputProps={{ placeholder: '배우고 싶은 지식을 입력해보세요.' }}
            />
          </div>

          {/* category */}
          <section className="layout pt-[48px]">
            <SectionTitle title="카테고리 🗂️" />
            <ul className="flex flex-wrap gap-[16px]">
              <Category text="Web Development" href="/explore" />
              <Category text="Programming" href="/explore" />
              <Category text="DevOps" href="/explore" />
              <Category text="Frontend" href="/explore" />
              <Category text="Backend" href="/explore" />
              <Category text="Mobile" href="/explore" />
              <Category text="Game" href="/explore" />
            </ul>
          </section>

          {/* recommended videos */}
          <section className="layout pt-[48px]">
            <SectionTitle title="요즘 핫한 프론트엔드 영상 🔥" />
            <ul className="flex flex-wrap justify-between gap-[12px]">
              {Array.from({ length: 4 }).map((_, index) => (
                <VideoCard
                  key={index}
                  title="React 웹 개발"
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
                  title="LLM 이란?"
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
                  title="4차 산업혁명 시대, 코딩을 배워야 하는 이유"
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
                  title="이력서, 어떻게 쓸까?"
                  channelName="코플리 월드"
                  thumbnailUrl="/sample-thumbnail.png"
                  href="/watch"
                />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
