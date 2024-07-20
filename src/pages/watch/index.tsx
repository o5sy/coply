import {
  PopoverBackdrop,
  UserMenu,
  VideoInfoSection,
  WatchPageHeader,
} from '@/components/watch-page';
import { useOpenState } from '@/hooks';
import Head from 'next/head';
import Link from 'next/link';
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
          <WatchPageHeader
            title={title}
            onDrawerMenu={handleDrawer.open}
            onUserMenu={handleUserMenu.open}
          />

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

        {/* drawer menu */}
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
            <UserMenu className="absolute right-[24px] top-[60px]" />
          </PopoverBackdrop>
        )}
      </div>
    </>
  );
}
