import React from "react";
import { FaSpotify, FaMusic } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";

class Spotify extends React.Component {
  state = {
    song: null,
    error: null,
    isLoading: true,
  };

  componentDidMount() {
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
          ? "http://localhost:5000/api/spotify"
          : "https://react-resume-api.vercel.app/api/spotify";

      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.song) {
        this.setState({ song: data.song, error: null });
      } else if (data.message) {
        this.setState({ song: null, error: data.message });
      }
    } catch (error) {
      this.setState({
        error: "Failed to fetch current song",
        song: null,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { song, error, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="flex items-center space-x-4 text-xl text-gray-500">
          <BiLoaderAlt className="h-6 w-6 animate-spin" />
          <span>Loading music...</span>
        </div>
      );
    }

    if (error === "No track currently playing") {
      return (
        <div className="flex items-center space-x-4 text-xl text-gray-500">
          <FaMusic className="h-6 w-6" />
          <span>Nothing playing right now</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center space-x-4 text-xl text-red-500">
          <FaMusic className="h-6 w-6" />
          <span>{error}</span>
        </div>
      );
    }

    if (!song) {
      return (
        <div className="flex items-center space-x-4 text-xl text-gray-500">
          <FaMusic className="h-6 w-6" />
          <span>No song information available</span>
        </div>
      );
    }

    return (
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 text-base sm:text-lg md:text-xl">
        <FaSpotify className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-400" />
        <span>
          Currently playing:{" "}
          <a
            href={song.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 underline"
          >
            {song.name} by {song.artist}
          </a>
        </span>
      </div>
    );
  }
}

export default Spotify;
