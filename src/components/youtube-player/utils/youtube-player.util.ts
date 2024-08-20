export const getYouTubeApi = () => {
  if (typeof window !== 'undefined' && window.YT && window.YT.Player) {
    return window.YT;
  }
  return null;
};

export const getYouTubeApiUrl = () => {
  const protocol =
    typeof window !== 'undefined' && window.location.protocol === 'http:'
      ? 'http:'
      : 'https:';
  return `${protocol}//www.youtube.com/iframe_api`;
};
