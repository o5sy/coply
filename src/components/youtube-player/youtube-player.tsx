import Script from 'next/script';
import { ComponentProps, useEffect, useState } from 'react';
import { Options } from 'youtube-player/dist/types';
import { YouTubeEvent } from './types/youtube-player.type';
import { getYouTubeApi, getYouTubeApiUrl } from './utils/youtube-player.util';

interface YouTubePlayerProps {
  // YouTube video id
  videoId: string;

  // player element custom id
  id?: string;

  opts?: Omit<Options, 'videoId'>;
  className?: ComponentProps<'div'>['className'];

  onReady?: (event: YouTubeEvent) => void;
  onError?: (event: YouTubeEvent<number>) => void;
  onStateChange?: (event: YouTubeEvent<number>) => void;
  onPlaybackRateChange?: (event: YouTubeEvent<number>) => void;
  onPlaybackQualityChange?: (event: YouTubeEvent<string>) => void;
}

export function YouTubePlayer({
  videoId,
  id = 'player',
  opts,
  className,
  onReady,
  onError,
  onStateChange,
  onPlaybackQualityChange,
  onPlaybackRateChange,
}: YouTubePlayerProps) {
  const [YouTubeApi, setYouTubeApi] = useState<Window['YT'] | null>(
    getYouTubeApi(),
  );

  useEffect(() => {
    if (YouTubeApi) {
      return;
    }

    // API 가 플레이어를 삽입할 수 있는 시점에서 onYouTubeIframeAPIReady 함수를 호출함
    window.onYouTubeIframeAPIReady = () => {
      // 2. API 로드
      setYouTubeApi(getYouTubeApi());
    };

    return () => {
      if (Object.hasOwn(window, 'onYouTubeIframeAPIReady')) {
        delete window.onYouTubeIframeAPIReady;
      }
    };
  }, [YouTubeApi]);

  useEffect(() => {
    if (!YouTubeApi) return;

    // 3. player 인스턴스 생성
    const player = new YouTubeApi.Player(id, {
      videoId,
      width: opts?.width,
      height: opts?.height,
      playVars: opts?.playerVars,
      events: {
        onReady,
        onStateChange,
        onPlaybackQualityChange,
        onPlaybackRateChange,
        onError,
      },
    });

    return () => {
      player.destroy();
    };
  }, [YouTubeApi]);

  return (
    <>
      <div id={id} className={className} />

      {/* 1. script 불러오기 */}
      {/* todo 페이지 컴포넌트로 옮기고 여기서 오류날 경우 script load 필요하다는 오류 던지기 */}
      <Script src={getYouTubeApiUrl()} type="text/javascript" async />
    </>
  );
}
