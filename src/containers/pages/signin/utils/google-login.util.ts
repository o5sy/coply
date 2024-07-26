export const getGoogleOAuthUrl = (clientId: string, redirectUri: string) => {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', 'token');
  url.searchParams.set(
    'scope',
    'https://www.googleapis.com/auth/userinfo.email',
  );

  return url.toString();
};

export const getGoogleAccessTokenFromPath = () => {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get('access_token');

  return accessToken;
};
