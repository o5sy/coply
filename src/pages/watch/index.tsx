import { PopoverBackdrop, VideoInfoSection } from '@/components/watch-page';
import { useOpenState } from '@/hooks';
import Head from 'next/head';
import Link from 'next/link';
import MenuIcon from 'public/hamburger-menu.svg';
import ProfileIcon from 'public/profile.svg';
import YouTube from 'react-youtube';

export default function WatchPage() {
  const { isOpen: isOpenDrawer, handleState: handleDrawer } = useOpenState();
  const { isOpen: isOpenUserMenu, handleState: handleUserMenu } =
    useOpenState();

  const title = '영상 제목';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div
        className={`h-[100vh] w-[100vw] ${isOpenDrawer || isOpenUserMenu ? 'relative' : ''}`}
      >
        <div className="flex h-full w-full flex-col">
          {/* header */}
          <header className="flex h-[65px] w-full items-center bg-gray-800">
            {/* drawer menu button */}
            <button
              type="button"
              className="flex-center h-full w-[65px] hover:bg-gray-500"
              onClick={handleDrawer.open}
            >
              <MenuIcon stroke="white" alt="영상 정보" />
            </button>
            <h1 className="pl-[8px] text-lg font-semibold text-white">
              {title}
            </h1>

            {/* user menu button */}
            <button
              className="ml-auto box-content px-[24px]"
              onClick={handleUserMenu.open}
            >
              <ProfileIcon width={36} height={36} />
            </button>
          </header>

          {/* player */}
          <main className="flex-center flex-1 bg-gray-700">
            <YouTube
              videoId="M7lc1UVf-VE"
              opt={{
                height: '360',
                width: '640',
              }}
              className="h-full w-full"
              iframeClassName="h-[inherit] w-[inherit]"
            />
          </main>

          {/* bottom */}
          <div className="flex h-[60px] items-center bg-gray-600 px-[24px]">
            <Link href="/" className="px-[4px] py-[8px] text-sm text-gray-300">
              &lt; 홈으로 이동
            </Link>
          </div>
        </div>

        {/* video sidebar */}
        {isOpenDrawer && (
          <PopoverBackdrop className="bg-black/70" onClick={handleDrawer.close}>
            <VideoInfoSection
              title={title}
              onClose={handleDrawer.close}
              channelName="Coply"
              description="설명"
              uploadedAt="2022. 5. 1."
            />
          </PopoverBackdrop>
        )}

        {/* user menu */}
        {isOpenUserMenu && (
          <PopoverBackdrop onClick={handleUserMenu.close}>
            <div className="absolute right-[24px] top-[60px] flex h-[100px] w-[200px] flex-col bg-slate-50">
              <Link href="/">홈</Link>
              <Link href="mypage">마이페이지</Link>
              <button>로그아웃</button>
            </div>
          </PopoverBackdrop>
        )}
      </div>
    </>
  );
}
