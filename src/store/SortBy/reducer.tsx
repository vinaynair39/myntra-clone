import { createSlice } from "@reduxjs/toolkit";

interface SortByState {
  new: boolean;
  popularity: boolean;
  betterDiscount: boolean;
  priceHighToLow: boolean;
  priceLowToHigh: boolean;
}

const initialState = { new: false, popularity: false, betterDiscount: false, priceHighToLow: false, priceLowToHigh: false } as SortByState;

const SortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    setNew: (state, action) => {
      state.new = action.payload;
    },
    setPopularity: (state, action) => {
      state.popularity = action.payload;
    },
    setbetterDiscount: (state, action) => {
      state.betterDiscount = action.payload;
    },
    setPriceHighToLow: (state, action) => {
      state.priceHighToLow = action.payload;
    },
    setPriceLowToHigh: (state, action) => {
      state.priceLowToHigh = action.payload;
    },
  },
});

export const { setNew, setPopularity, setbetterDiscount, setPriceHighToLow, setPriceLowToHigh } = SortBySlice.actions;

export default SortBySlice.reducer;
