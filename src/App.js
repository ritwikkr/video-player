import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

import { One, Two, Three } from "./videos";
import Wrapper from "./style/App";

function formatTime(seconds) {
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;

  return [hours, minutes, seconds % 60].map(format).join(":");
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playlist, setPlaylist] = useState([
    { url: One, title: "Video 1" },
    { url: Two, title: "Video 2" },
    { url: Three, title: "Video 3" },
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.autoplay = isPlaying;
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const updateTime = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
  };

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < playlist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  return (
    <Wrapper>
      <main>
        <div className="title">
          <h1>Video Player</h1>
        </div>
        <video
          ref={videoRef}
          width={"500px"}
          height={"500px"}
          src={playlist[currentVideoIndex].url}
          onClick={handlePlayPause}
          onTimeUpdate={updateTime}
          playbackRate={playbackSpeed}
          onEnded={handleNextVideo}
          autoPlay
        />
        <div className="controls">
          <div className="top">
            <div className="time">
              {formatTime(currentTime)} /{" "}
              {formatTime(videoRef.current ? videoRef.current.duration : 0)}
            </div>
            <input
              type="range"
              min="0"
              max={videoRef.current ? videoRef.current.duration : ""}
              value={currentTime}
              onChange={handleSeek}
            />
          </div>
          <div className="bottom">
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
              disabled={currentVideoIndex === playlist.length - 1}
            >
              <GiNextButton />
            </button>
            <div>
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
        </div>
      </main>
      <aside>
        <div>
          {playlist.map((video, index) => (
            <button key={index} onClick={() => handleVideoChange(index)}>
              {video.title}
            </button>
          ))}
        </div>
      </aside>
    </Wrapper>
  );
}

export default App;
