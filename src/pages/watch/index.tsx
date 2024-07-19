import { PopoverBackdrop, VideoInfoSection } from '@/components/watch-page';
import { useOpenState } from '@/hooks';
import Head from 'next/head';
import Link from 'next/link';
import MenuIcon from 'public/hamburger-menu.svg';
import YouTube from 'react-youtube';
import ProfileIcon from 'public/profile.svg';

export default function WatchPage() {
  const { isOpen, handleState: handleDrawer } = useOpenState();

  const title = '영상 제목';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={`h-[100vh] w-[100vw] ${isOpen ? 'relative' : ''}`}>
        <div className="flex h-full w-full flex-col">
          {/* header */}
          <header className="flex h-[65px] w-full items-center bg-gray-800">
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

            <ProfileIcon
              width={36}
              height={36}
              className="ml-auto box-content px-[24px]"
            />
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

        {/* drawer */}
        {isOpen && (
          <PopoverBackdrop onClick={handleDrawer.close}>
            <VideoInfoSection
              title={title}
              onClose={handleDrawer.close}
              channelName="Coply"
              description="설명"
              uploadedAt="2022. 5. 1."
            />
          </PopoverBackdrop>
        )}
      </div>
    </>
  );
}
