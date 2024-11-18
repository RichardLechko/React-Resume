import express from "express";
import SpotifyWebApi from "spotify-web-api-node";
import "dotenv/config";

const router = express.Router();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

async function refreshAccessToken() {
  try {
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
    if (!refreshToken) {
      console.error("No refresh token found");
      return false;
    }

    spotifyApi.setRefreshToken(refreshToken);

    const data = await spotifyApi.refreshAccessToken();
    const accessToken = data.body["access_token"];

    spotifyApi.setAccessToken(accessToken);

    return true;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return false;
  }
}

router.get("/spotify", async (req, res) => {
  try {
    const isTokenRefreshed = await refreshAccessToken();

    if (!isTokenRefreshed) {
      return res
        .status(500)
        .json({ message: "Failed to refresh access token" });
    }

    const data = await spotifyApi.getMyCurrentPlayingTrack();

    if (!data.body || !data.body.item) {
      return res.json({ message: "No track currently playing" });
    }

    const song = {
      name: data.body.item.name,
      artist: data.body.item.artists[0].name,
      spotifyUrl: data.body.item.external_urls.spotify,
    };

    res.json({ song });
  } catch (error) {
    console.error("Error fetching current song:", error);
    res
      .status(error.statusCode || 500)
      .json({ message: "Failed to fetch current song" });
  }
});

export default router;
