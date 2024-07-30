import {
  getViewingHistoriesByVideoId,
  updateViewingHistoryByVideoId,
} from '@/apis/users';
import {
  PopoverBackdrop,
  UserMenu,
  VideoInfoSection,
  WatchPageHeader,
} from '@/components/watch-page';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useDebounce, useLocalStorage, useOpenState } from '@/hooks';
import { getFormattedDate } from '@/utils/date.util';
import { getSession } from '@/utils/session';
import { skipToken, useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import YouTube from 'react-youtube';
import { useGetVideoByIdQuery } from './hooks';
import { UpsertViewingHistoryRequestParams } from '@/apis/models/user';
import { axiosInstance } from '@/apis/axios';
import { useCallback, useEffect, useMemo, useRef } from 'react';
// import { throttle } from '@/utils/event-handling';
import { debounce, throttle } from 'lodash';
import { useDebouncedInterval } from './hooks/use-debounced-interval';

export function WatchContainer() {
  const { data: video } = useGetVideoByIdQuery();

  const { isOpen: isOpenDrawer, handleState: handleDrawer } = useOpenState();
  const { isOpen: isOpenUserMenu, handleState: handleUserMenu } =
    useOpenState();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data } = useQuery({
    queryKey: ['viewing-histories', { videoId: video?.id }],
    queryFn:
      video?.id && accessToken
        ? () => {
            return getViewingHistoriesByVideoId(video.id, accessToken);
          }
        : skipToken,
    enabled: !!accessToken,
  });

  // onLoad 시 data 있거나 data 있을 때 플레이어 시작 시간 이동
  // todo 영상 시작, 일시정지, 주기마다 -> 디바운싱해서 api 호출

  const { mutate } = useMutation({
    mutationFn: ({
      videoId,
      accessToken,
      params,
    }: {
      videoId: string;
      accessToken: string;
      params: UpsertViewingHistoryRequestParams;
    }) => {
      return updateViewingHistoryByVideoId(videoId, accessToken, params);
    },
  });

  // const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const debounced = useDebounce(() => {
    console.log('debounced');
  }, 2000);

  // const i = useCallback(
  //   debounce(() => {
  //     setInterval(() => {
  //       console.log('debounced interval');
  //     }, 2000);
  //   }),
  //   [],
  // );

  // const a = () => {
  //   let timeout: NodeJS.Timeout | null = null;

  //   const startDebouncedInterval = (callbackFn: () => void) => {
  //     return debounce(() => {
  //       timeout = setInterval(() => {
  //         callbackFn();
  //       }, 2000);
  //     });

  //     // debounce 를 리턴해서 실행시켜야 내부 로직이 동작함
  //   };

  //   const clearDebouncedInterval = () => {
  //     if (!timeout) {
  //       return;
  //     }
  //     clearInterval(timeout);
  //     timeout = null;
  //   };

  //   return [startDebouncedInterval, clearDebouncedInterval] as const;
  // };

  // const [start, clear] = useMemo(() => a(), []);

  const { startDebouncedInterval, clearDebouncedInterval } =
    useDebouncedInterval(2000);

  // const startInterval = useCallback(() => {
  //   if (intervalIdRef.current) {
  //     return;
  //   }
  //   const i = setInterval(() => {
  //     console.log('throttling');
  //   }, 2000);
  //   // console.log('interval', i);
  //   intervalIdRef.current = i;
  // }, [debounced]);

  // const cancelInterval = () => {
  //   if (!intervalIdRef.current) {
  //     return;
  //   }
  //   // console.log('clear Interval', intervalIdRef.current);
  //   clearInterval(intervalIdRef.current);
  //   intervalIdRef.current = null;
  // };

  // useEffect(() => {
  //   return () => {
  //     clear();
  //   };
  // }, []);

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
              opts={{
                width: '640',
                height: '360',
              }}
              className="h-full w-full"
              iframeClassName="h-[inherit] w-[inherit]"
              onReady={() => {
                // todo 시간 이동
                // console.log('load');
              }}
              onStateChange={({ data, target }) => {
                // 0, 2 일 때 시간 저장 (종료, 일시중지)
                // 1 일 때 setInterval 추가
                // 이거 세개 묶어서 디바운스 걸어주기
                console.log('onStateChange', data);
                if (
                  data === YouTube.PlayerState.ENDED ||
                  data === YouTube.PlayerState.PAUSED
                ) {
                  // console.log(target.getCurrentTime());
                  debounced();
                  // cancelInterval();
                  clearDebouncedInterval();
                }

                if (data === YouTube.PlayerState.PLAYING) {
                  // throttled();
                  // startInterval();
                  startDebouncedInterval(() => console.log('new interval'));

                  // setTimeout;
                }
              }}
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
