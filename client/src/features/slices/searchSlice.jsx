import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  suggestions: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
  },
});

export const { setQuery, setSuggestions } = searchSlice.actions;
export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
