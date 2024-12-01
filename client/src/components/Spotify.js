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
    // Retrieve the last played song from localStorage
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
        // Store current song as last played before updating to new song
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
          // If this is our first song, set it as last played too
          lastPlayedSong: this.state.lastPlayedSong || data.song,
        });
        localStorage.setItem("lastPlayedSong", JSON.stringify(data.song));
      } else if (data.message === "No track currently playing") {
        // Ensure we still show the last played song if no track is playing
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
      <div className="backdrop-blur-sm p-4 rounded-xl">
        {isLoading && !songToDisplay ? (
          <div className="flex items-center space-x-4 text-xl text-gray-500">
            <BiLoaderAlt className="h-6 w-6 animate-spin" />
            <span>Loading music...</span>
          </div>
        ) : error && !songToDisplay ? (
          <div className="flex items-center space-x-4 text-xl text-red-500">
            <FaMusic className="h-6 w-6" />
            <span>{error}</span>
          </div>
        ) : !songToDisplay ? (
          <div className="flex items-center space-x-4 text-xl text-gray-500">
            <FaMusic className="h-6 w-6" />
            <span>No song information available</span>
          </div>
        ) : (
          <a
            href={songToDisplay.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex max-[640px]:flex-col items-center gap-6 p-6 text-xl bg-[#cbd5e1] hover:bg-[#aebaca] dark:bg-[#2d3748] dark:hover:bg-[#1a202c] transition-colors rounded-xl hover:no-underline"
          >
            {currentSong && (
              <div className="now-playing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            <img
              src={songToDisplay.albumImageUrl}
              alt={`${songToDisplay.name} album art`}
              className="w-24 h-24 rounded-xl shadow-xl"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold dark:text-[#e2e8f0] max-[640px]:text-xl max-[375px]:text-lg">
                {songToDisplay.name}
              </span>
              <span className="text-lg text-[#4a5568] dark:text-[#a0aec0] max-[640px]:text-base max-[375px]:text-sm">
                {songToDisplay.artist}
              </span>
              {!currentSong && lastPlayedSong && (
                <span className="text-sm text-[#4a5568] dark:text-[#a0aec0] italic mt-1">
                  Last played
                </span>
              )}
            </div>
          </a>
        )}
      </div>
    );
  }
}

export default Spotify;
