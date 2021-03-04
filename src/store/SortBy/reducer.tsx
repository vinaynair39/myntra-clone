import { createSlice } from "@reduxjs/toolkit";

interface SortByState {
  sortType: "NEW" | "POPULAR" | "BETTER_DISCOUNT" | "PRICE_HIGH_TO_LOW" | "PRICE_LOW_TO_HIGH";
}

const initialState = { sortType: "POPULAR" } as SortByState;

const SortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setSortType } = SortBySlice.actions;

export default SortBySlice.reducer;
