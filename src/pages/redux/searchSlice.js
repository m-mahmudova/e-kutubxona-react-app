import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    category: "all",
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setQuery, setCategory } = searchSlice.actions;
export default searchSlice.reducer;
