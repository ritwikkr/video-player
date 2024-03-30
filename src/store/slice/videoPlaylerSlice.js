// src/features/videoPlayer/videoPlayerSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentTime: 0,
  playbackSpeed: 1,
  volume: 1,
  playlist: [
    {
      url: "https://ritwik-video-player.s3.ap-south-1.amazonaws.com/One.mp4",
      title: "Video 1",
    },
    {
      url: "https://ritwik-video-player.s3.ap-south-1.amazonaws.com/Two.mp4",
      title: "Video 2",
    },
    {
      url: "https://ritwik-video-player.s3.ap-south-1.amazonaws.com/Three.mp4",
      title: "Video 3",
    },
    {
      url: "https://ritwik-video-player.s3.ap-south-1.amazonaws.com/Four.mp4",
      title: "Video 4",
    },
    {
      url: "https://ritwik-video-player.s3.ap-south-1.amazonaws.com/Five.mp4",
      title: "Video 5",
    },
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
