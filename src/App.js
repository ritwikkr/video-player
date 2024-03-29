import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./style/AppStyle";
import Controls from "./components/Controls";
import Playlist from "./components/Playlist";
import {
  setIsPlaying,
  setCurrentTime,
  setCurrentVideoIndex,
} from "./store/slice/videoPlaylerSlice";

function App() {
  const dispatch = useDispatch();
  const {
    isPlaying,
    currentTime,
    playbackSpeed,
    volume,
    playlist,
    currentVideoIndex,
  } = useSelector((state) => state.videoPlayer);
  const videoRef = useRef(null);

  function handlePlayPause() {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    dispatch(setIsPlaying(!isPlaying));
  }

  function updateTime() {
    dispatch(setCurrentTime(videoRef.current.currentTime));
  }

  function handleNextVideo() {
    if (currentVideoIndex < playlist.length - 1) {
      dispatch(setCurrentVideoIndex(currentVideoIndex + 1));
      dispatch(setCurrentTime(0));
      dispatch(setIsPlaying(true));
    }
  }

  const videoTitle = playlist.filter(
    (item, index) => index === currentVideoIndex
  );

  return (
    <Wrapper>
      <main>
        <div className="title">
          <h1>{videoTitle[0].title}</h1>
        </div>
        <div className="video">
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
        </div>
        <div className="controls">
          <Controls
            videoRef={videoRef}
            handlePlayPause={handlePlayPause}
            isPlaying={isPlaying}
            handleNextVideo={handleNextVideo}
            currentTime={currentTime}
            duration={videoRef.current ? videoRef.current.duration : 0}
            playbackSpeed={playbackSpeed}
            currentVideoIndex={currentVideoIndex}
            playlistLength={playlist.length}
            volume={volume}
          />
        </div>
      </main>
      <aside>
        <Playlist playlist={playlist} currentVideoIndex={currentVideoIndex} />
      </aside>
    </Wrapper>
  );
}

export default App;
