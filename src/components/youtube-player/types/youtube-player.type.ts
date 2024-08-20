import { YouTubePlayer } from 'youtube-player/dist/types';

export type YouTubeEvent<T = unknown> = {
  data: T;
  target: YouTubePlayer;
};

export const YouTubePlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

declare global {
  interface Window {
    YT: {
      Player: {
        new (id: string, config: object): YouTubePlayer;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}
