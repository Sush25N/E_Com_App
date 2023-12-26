import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice.jsx";
import productReducer from "../features/slices/productSlice.jsx";
import cartReducer from "../features/slices/cartSlice.jsx";
import authReducer from "../features/slices/authSlice.jsx";
import searchReducer from "../features/slices/searchSlice.jsx";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
    cart: cartReducer,
    user: authReducer,
    search: searchReducer,
  },
});
