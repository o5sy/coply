import Head from 'next/head';
import { Pagination, VideoList } from '@/components/explore-page';
import { Header } from '@/components/header';
import { SearchInput } from '@/components/header/search-input';
import { Separator } from '@/components/shared';

export default function ExplorePage() {
  const keyword = '';

  return (
    <>
      <Head>
        <title>영상 찾아보기 | Coply</title>
      </Head>

      <div className="relative">
        <Header />
        <main className="absolute top-0 mb-[100px] mt-[65px] w-full">
          <div className="layout">
            <div className="flex items-center justify-between py-[32px]">
              <h1 className="text-3xl font-bold">영상 탐색</h1>
              <SearchInput />
            </div>

            <div className="flex w-full gap-[24px]">
              <aside className="flex w-[300px] flex-col gap-[24px]">
                <div className="text-xl">필터</div>
                <Separator className="border-black" />

                {/* 난이도 */}
                <fieldset>
                  <legend className="text-md pb-[16px] font-bold">
                    난이도
                  </legend>
                  <div className="flex flex-col gap-[8px]">
                    {['입문', '초급', '중급 이상'].map((level) => {
                      return (
                        <label key={level} className="flex gap-[8px]">
                          <input type="checkbox" name="level" value={level} />
                          {level}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* 주제 */}
                <fieldset>
                  <legend className="text-md pb-[16px] font-bold">주제</legend>
                  <div className="flex flex-col gap-[8px]">
                    {['전체', 'FE', 'BE', '취업 준비', 'CS', '알고리즘'].map(
                      (level) => {
                        return (
                          <label key={level} className="flex gap-[8px]">
                            <input type="radio" name="level" value={level} />
                            {level}
                          </label>
                        );
                      },
                    )}
                  </div>
                </fieldset>
              </aside>

              <div className="w-full">
                <div className="pb-[24px] text-xl">
                  {keyword ? `"${keyword}" 검색 결과` : '10건의 영상'}
                </div>
                <section className="flex w-full flex-col items-center justify-center">
                  {/* 영상 리스트 */}
                  <VideoList />
                  {/* 페이지네이션 */}
                  <Pagination totalPage={101} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
