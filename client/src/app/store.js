import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice.jsx";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
  },
});
