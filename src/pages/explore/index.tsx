import { Pagination, VideoList } from '@/components/explore-page';
import { Header } from '@/components/header';
import Head from 'next/head';

export default function ExplorePage() {
  return (
    <>
      <Head>
        <title>영상 찾아보기 | Coply</title>
      </Head>

      <div className="relative">
        <Header />
        <main className="absolute top-0 mb-[100px] mt-[65px] w-full">
          <div className="layout">
            <section className="flex flex-col items-center justify-center">
              {/* 영상 리스트 */}
              <VideoList />

              {/* 페이지네이션 */}
              <Pagination totalPage={101} />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
