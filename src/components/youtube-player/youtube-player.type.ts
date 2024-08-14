import { YouTubePlayer } from 'react-youtube';

export type YouTubeEvent<T = unknown> = {
  data: T;
  target: YouTubePlayer;
};

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
