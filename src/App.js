import React, { useState, useRef } from "react";
import { One, Two, Three, Four } from "./videos";
import Wrapper from "./style/App";
import Controls from "./components/Controls";
import Playlist from "./components/Playlist";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(1); // Initial volume
  const [playlist, setPlaylist] = useState([
    { url: One, title: "Video 1" },
    { url: Two, title: "Video 2" },
    { url: Three, title: "Video 3" },
    { url: Four, title: "Video 4" },
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
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

  const handlePlayVideo = (index) => {
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

  const videoTitle = playlist.filter(
    (item, index) => index === currentVideoIndex
  );

  return (
    <Wrapper>
      <main>
        <div className="title">
          <h1>{videoTitle[0].title}</h1>
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
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          currentTime={currentTime}
          duration={videoRef.current ? videoRef.current.duration : 0}
          handleSeek={handleSeek}
          handleSpeedChange={handleSpeedChange}
          playbackSpeed={playbackSpeed}
          handlePreviousVideo={handlePreviousVideo}
          handleNextVideo={handleNextVideo}
          currentVideoIndex={currentVideoIndex}
          playlistLength={playlist.length}
          handleVolumeChange={handleVolumeChange}
          volume={volume}
        />
      </main>
      <aside>
        <Playlist
          playlist={playlist}
          currentVideoIndex={currentVideoIndex}
          handlePlayVideo={handlePlayVideo}
        />
      </aside>
    </Wrapper>
  );
}

export default App;
