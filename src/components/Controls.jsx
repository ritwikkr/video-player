import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import Wrapper from "../style/ControlsStyle";
import {
  setCurrentTime,
  setIsPlaying,
  setPlaybackSpeed,
  setVolume,
  setCurrentVideoIndex,
} from "../store/slice/videoPlaylerSlice";

function Controls({
  duration,
  playlistLength,
  videoRef,
  handlePlayPause,
  handleNextVideo,
}) {
  const { isPlaying, currentTime, playbackSpeed, volume, currentVideoIndex } =
    useSelector((state) => state.videoPlayer);
  const dispatch = useDispatch();

  function formatTime(seconds) {
    const format = (val) => `0${Math.floor(val)}`.slice(-2);
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;

    return [hours, minutes, seconds % 60].map(format).join(":");
  }

  function handleVolumeChange(e) {
    const newVolume = parseFloat(e.target.value);
    dispatch(setVolume(newVolume));
    videoRef.current.volume = newVolume;
  }

  function handleSeek(e) {
    const newTime = e.target.value;
    videoRef.current.currentTime = newTime;
    dispatch(setCurrentTime(newTime));
  }

  function handleSpeedChange(speed) {
    dispatch(setPlaybackSpeed(speed));
    videoRef.current.playbackRate = speed;
  }

  function handlePreviousVideo() {
    if (currentVideoIndex > 0) {
      dispatch(setCurrentVideoIndex(currentVideoIndex - 1));
      dispatch(setCurrentTime(0));
      dispatch(setIsPlaying(true));
    }
  }

  function handleFullScreen() {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }

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
        <div className="full-screen">
          <button onClick={handleFullScreen}>
            <MdFullscreen />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Controls;
