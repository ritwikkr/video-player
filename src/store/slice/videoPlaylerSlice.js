// src/features/videoPlayer/videoPlayerSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { One, Two, Three, Four, Five } from "../../videos";

const initialState = {
  isPlaying: false,
  currentTime: 0,
  playbackSpeed: 1,
  volume: 1,
  playlist: [
    { url: One, title: "Video 1" },
    { url: Two, title: "Video 2" },
    { url: Three, title: "Video 3" },
    { url: Four, title: "Video 4" },
    { url: Five, title: "Video 5" },
  ],
  currentVideoIndex: 0,
};

export const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setPlaybackSpeed: (state, action) => {
      state.playbackSpeed = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setCurrentVideoIndex: (state, action) => {
      state.currentVideoIndex = action.payload;
    },
  },
});

export const {
  setIsPlaying,
  setCurrentTime,
  setPlaybackSpeed,
  setVolume,
  setPlaylist,
  setCurrentVideoIndex,
} = videoPlayerSlice.actions;

export default videoPlayerSlice.reducer;
