import express from "express";
import spotifyApi, {
  refreshAccessToken,
  handleAuthorizationCode,
} from "../get-refresh-token.js";

const router = express.Router();

router.get("/authorize", (req, res) => {
  const scopes = ["user-read-playback-state", "user-read-currently-playing"];
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const authUrl = spotifyApi.createAuthorizeURL(scopes, redirectUri);
  res.redirect(authUrl);
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ message: "Authorization code missing" });
  }

  try {
    const { accessToken, refreshToken } = await handleAuthorizationCode(code);

    res.status(200).json({
      message: "Tokens successfully retrieved",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to handle callback", error: error.message });
  }
});

router.get("/current-track", async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();
    spotifyApi.setAccessToken(accessToken);

    const currentTrack = await spotifyApi.getMyCurrentPlaybackState();
    if (currentTrack.body && currentTrack.body.is_playing) {
      const song = {
        name: currentTrack.body.item.name,
        artist: currentTrack.body.item.artists[0].name,
        spotifyUrl: currentTrack.body.item.external_urls.spotify,
        albumImageUrl: currentTrack.body.item.album.images[0].url,
      };
      res.json({ song });
    } else {
      res.json({ message: "No track currently playing" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch current track", error: error.message });
  }
});

export default router;
