// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import videoPlayerReducer from "./slice/videoPlaylerSlice";

const store = configureStore({
  reducer: {
    videoPlayer: videoPlayerReducer,
  },
});

export default store;
