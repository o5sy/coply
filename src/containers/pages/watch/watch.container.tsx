import Link from 'next/link';
import {
  PopoverBackdrop,
  UserMenu,
  VideoInfoSection,
  WatchPageHeader,
} from '@/components/watch-page';
import { YoutubePlayerContainer } from '@/containers/youtube-player';
import { useIsLoggedIn, useOpenState } from '@/hooks';
import { getFormattedDate } from '@/utils/date.util';
import { useGetVideoByIdQuery } from './hooks';

export function WatchContainer() {
  const { isOpen: isOpenDrawer, handleState: handleDrawer } = useOpenState();
  const { isOpen: isOpenUserMenu, handleState: handleUserMenu } =
    useOpenState();

  const { data: video } = useGetVideoByIdQuery();

  const { isLoggedIn } = useIsLoggedIn();

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
            <YoutubePlayerContainer
              videoId={video.id}
              enabledTracingWatchTime={isLoggedIn}
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
              uploadedAt={getFormattedDate(video.uploadedAt)}
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
