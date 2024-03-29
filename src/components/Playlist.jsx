import React from "react";
import Wrapper from "../style/PlaylistStyle";
import {
  setCurrentTime,
  setCurrentVideoIndex,
  setIsPlaying,
} from "../store/slice/videoPlaylerSlice";
import { useDispatch } from "react-redux";

function Playlist({ playlist, currentVideoIndex }) {
  const dispatch = useDispatch();
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index.toString());
  };

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handlePlayVideo(index) {
    dispatch(setCurrentVideoIndex(index));
    dispatch(setCurrentTime(0));
    dispatch(setIsPlaying(true));
  }

  function handleDrop(e, targetIndex) {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("index"));
    if (draggedIndex !== targetIndex) {
      const newPlaylist = [...playlist];
      const [draggedItem] = newPlaylist.splice(draggedIndex, 1);
      newPlaylist.splice(targetIndex, 0, draggedItem);
      handlePlayVideo(targetIndex);
    }
  }

  return (
    <Wrapper>
      <div className="title">
        <h1>Playlist</h1>
      </div>
      <div className="playlist-container">
        {playlist.map((video, index) => (
          <button
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onClick={() => handlePlayVideo(index)}
            className={currentVideoIndex === index ? "active" : ""}
          >
            {video.title}
          </button>
        ))}
      </div>
    </Wrapper>
  );
}

export default Playlist;
