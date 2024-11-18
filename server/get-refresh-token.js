import express from "express";
import SpotifyWebApi from "spotify-web-api-node";
import "dotenv/config";

const app = express();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri:
    process.env.NODE_ENV === "production"
      ? "https://react-resume-api.vercel.app/callback"
      : "http://localhost:5000/callback",
});

const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
if (refreshToken) {
  spotifyApi.setAccessToken(refreshToken);
} else {
  console.error("No refresh token found");
}

app.get("/api/spotify", async (req, res) => {
  try {
    const data = await spotifyApi.refreshAccessToken();
    const accessToken = data.body["access_token"];

    spotifyApi.setAccessToken(accessToken);

    const currentTrack = await spotifyApi.getMyCurrentPlaybackState();

    if (currentTrack.body && currentTrack.body.is_playing) {
      const song = {
        name: currentTrack.body.item.name,
        artist: currentTrack.body.item.artists[0].name,
        spotifyUrl: currentTrack.body.item.external_urls.spotify,
      };
      res.json({ song });
    } else {
      res.json({ message: "No track currently playing" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch current song" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
