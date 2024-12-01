import SpotifyWebApi from "spotify-web-api-node";
import "dotenv/config";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);

export const refreshAccessToken = async () => {
  try {
    const data = await spotifyApi.refreshAccessToken();
    const accessToken = data.body["access_token"];

    spotifyApi.setAccessToken(accessToken);

    process.env.SPOTIFY_ACCESS_TOKEN = accessToken;

    return accessToken;
  } catch (error) {
    throw error;
  }
};

export const handleAuthorizationCode = async (code) => {
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const accessToken = data.body.access_token;
    const refreshToken = data.body.refresh_token;

    spotifyApi.setAccessToken(accessToken);
    spotifyApi.setRefreshToken(refreshToken);

    process.env.SPOTIFY_ACCESS_TOKEN = accessToken;
    process.env.SPOTIFY_REFRESH_TOKEN = refreshToken;

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

export default spotifyApi;
