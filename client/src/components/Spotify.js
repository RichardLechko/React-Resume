import React from "react";
import { FaMusic } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import "../styles/index.css";

class Spotify extends React.Component {
  state = {
    currentSong: null,
    lastPlayedSong: null,
    error: null,
    isLoading: true,
  };

  componentDidMount() {
    const savedLastPlayedSong = localStorage.getItem("lastPlayedSong");
    if (savedLastPlayedSong) {
      this.setState({ lastPlayedSong: JSON.parse(savedLastPlayedSong) });
    }

    this.fetchCurrentSong();
    this.interval = setInterval(this.fetchCurrentSong, 30000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  fetchCurrentSong = async () => {
    try {
      this.setState({ isLoading: true });

      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:5000/api/spotify/current-track"
          : "https://react-resume-api.vercel.app/api/spotify/current-track";

      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.song) {
        if (
          this.state.currentSong &&
          this.state.currentSong.name !== data.song.name
        ) {
          this.setState({ lastPlayedSong: this.state.currentSong });
          localStorage.setItem(
            "lastPlayedSong",
            JSON.stringify(this.state.currentSong)
          );
        }
        this.setState({
          currentSong: data.song,
          error: null,
          lastPlayedSong: this.state.lastPlayedSong || data.song,
        });
        localStorage.setItem("lastPlayedSong", JSON.stringify(data.song));
      } else if (data.message === "No track currently playing") {
        this.setState((prevState) => ({
          currentSong: null,
          error: null,
        }));
      } else if (data.message) {
        this.setState({
          currentSong: null,
          error: data.message,
        });
      }
    } catch (error) {
      this.setState({
        error: "Failed to fetch song information",
        currentSong: null,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { currentSong, lastPlayedSong, error, isLoading } = this.state;
    const songToDisplay = currentSong || lastPlayedSong;

    return (
      <div className="spotify-container">
        {isLoading && !songToDisplay ? (
          <div className="spotify-loading">
            <BiLoaderAlt />
            <span>Loading music...</span>
          </div>
        ) : error && !songToDisplay ? (
          <div className="spotify-error">
            <FaMusic />
            <span>{error}</span>
          </div>
        ) : !songToDisplay ? (
          <div className="spotify-error">
            <FaMusic />
            <span>No song information available</span>
          </div>
        ) : (
          <a
            href={songToDisplay.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-playing"
          >
            {currentSong && (
              <div className="spotify-bars">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            <img
              className="spotify-album-art"
              src={songToDisplay.albumImageUrl}
              alt={`${songToDisplay.name} album art`}
            />
            <div className="spotify-info">
              <span className="spotify-song-name">{songToDisplay.name}</span>
              <span className="spotify-artist">{songToDisplay.artist}</span>
              {!currentSong && lastPlayedSong && (
                <span className="spotify-last-played">Last played</span>
              )}
            </div>
          </a>
        )}
      </div>
    );
  }
}

export default Spotify;
