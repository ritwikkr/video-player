import React from "react";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import Wrapper from "../style/Controls";

function Controls({
  isPlaying,
  handlePlayPause,
  currentTime,
  duration,
  handleSeek,
  handleSpeedChange,
  playbackSpeed,
  handlePreviousVideo,
  handleNextVideo,
  currentVideoIndex,
  handleVolumeChange,
  playlistLength,
  volume,
}) {
  const formatTime = (seconds) => {
    const format = (val) => `0${Math.floor(val)}`.slice(-2);
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;

    return [hours, minutes, seconds % 60].map(format).join(":");
  };

  return (
    <Wrapper>
      <div className="top">
        <div className="time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
      </div>
      <div className="bottom">
        <div className="volume">
          <label>
            <FaVolumeUp />
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <nav>
          <button
            onClick={handlePreviousVideo}
            disabled={currentVideoIndex === 0}
          >
            <GiPreviousButton />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={handleNextVideo}
            disabled={currentVideoIndex === playlistLength - 1}
          >
            <GiNextButton />
          </button>
        </nav>
        <div className="speed">
          <label>Speed:</label>
          <select
            value={playbackSpeed}
            onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
}

export default Controls;
