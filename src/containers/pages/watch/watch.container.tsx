import Link from 'next/link';
import YouTube from 'react-youtube';
import { useGetVideoByIdQuery } from './hooks';
import {
  PopoverBackdrop,
  UserMenu,
  VideoInfoSection,
  WatchPageHeader,
} from '@/components/watch-page';
import { useOpenState } from '@/hooks';

export function WatchContainer() {
  const { data: video } = useGetVideoByIdQuery();

  const { isOpen: isOpenDrawer, handleState: handleDrawer } = useOpenState();
  const { isOpen: isOpenUserMenu, handleState: handleUserMenu } =
    useOpenState();

  return (
    <div
      className={`h-[100vh] w-[100vw] ${isOpenDrawer || isOpenUserMenu ? 'relative' : ''}`}
    >
      <div className="flex h-full w-full flex-col">
        {/* header */}
        <WatchPageHeader
          title={video?.name ?? ''}
          onDrawerMenu={handleDrawer.open}
          onUserMenu={handleUserMenu.open}
        />

        {/* player */}
        <main className="flex-center flex-1 bg-gray-700">
          {video && (
            <YouTube
              videoId={video.id}
              opt={{
                height: '360',
                width: '640',
              }}
              className="h-full w-full"
              iframeClassName="h-[inherit] w-[inherit]"
            />
          )}
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
          {video && (
            <VideoInfoSection
              title={video.name}
              onClose={handleDrawer.close}
              channelName={video.videoChannel.name}
              description={video.description}
              uploadedAt={video.uploadedAt}
            />
          )}
        </PopoverBackdrop>
      )}

      {/* user menu */}
      {isOpenUserMenu && (
        <PopoverBackdrop onClick={handleUserMenu.close}>
          <UserMenu className="absolute right-[24px] top-[60px]" />
        </PopoverBackdrop>
      )}
    </div>
  );
}
