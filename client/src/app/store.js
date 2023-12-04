import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice.jsx";
import productReducer from "../features/slices/productSlice.jsx";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
  },
});
