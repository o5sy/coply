import Head from 'next/head';
import Image from 'next/image';
import { Header } from '@/components/header';
import { SectionTitle } from '@/components/main-page';
import { Button } from '@/components/shared';
import { VideoHistoryCard } from '@/components/user-page';

export default function UserPage() {
  return (
    <>
      <Head>
        <title>내 정보 | Coply</title>
      </Head>

      <div className="relative">
        <Header />
        <main className="mb-[100px] w-full">
          <div className="layout">
            <section className="flex justify-between pt-[32px]">
              {/* user info */}
              <div className="flex items-center gap-[30px] text-gray-800">
                <Image
                  className="rounded-full bg-primary/50 p-[16px]"
                  src="/flag.svg"
                  alt="user"
                  width={90}
                  height={90}
                />
                <div>
                  <div className="text-md text-gray-600">내 계정</div>
                  <div className="text-xl">team.coply@gmail.com</div>
                </div>
              </div>

              {/* buttons */}
              <div className="flex flex-col justify-center gap-[8px]">
                <Button>로그아웃</Button>
                <Button>회원탈퇴</Button>
              </div>
            </section>

            {/* 시청 기록 */}
            <section className="pt-[48px]">
              <SectionTitle title="시청 기록" />
              <ul className="grid w-full grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[24px]">
                {Array.from({ length: 4 }).map((_, index) => (
                  <VideoHistoryCard
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="w-[unset]"
                    thumbnailUrl="/sample-thumbnail.png"
                    href="/watch"
                    title="React 로 웹 사이트 만들기"
                    channelName="코플리"
                    progressRatio={100}
                    onDelete={() => {}}
                  />
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
