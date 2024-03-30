import React, { useState } from "react";
import Wrapper from "../style/PlaylistStyle";
import {
  setCurrentTime,
  setCurrentVideoIndex,
  setIsPlaying,
} from "../store/slice/videoPlaylerSlice";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

function Playlist({ playlist, currentVideoIndex }) {
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredPlaylist = playlist.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <div className="title">
        <h1>Playlist</h1>
      </div>
      <div className="playlist-container">
        <div className="search">
          <div className="search-icon">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search by video title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredPlaylist.length > 0 ? (
          filteredPlaylist.map((video, index) => (
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
          ))
        ) : (
          <div>No titles found</div>
        )}
      </div>
    </Wrapper>
  );
}

export default Playlist;
