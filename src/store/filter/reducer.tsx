import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  brand: string[];
  price: string[];
  color: string[];
  discountRange: number | null;
}

const initialState = { brand: [], price: [], color: [], discountRange: null } as FilterState;

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setDiscountRange: (state, action) => {
      state.discountRange = action.payload;
    },
  },
});

export const { setBrand, setPrice, setColor, setDiscountRange } = FilterSlice.actions;

export default FilterSlice.reducer;
