import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  gender: "MEN" | "WOMEN" | "BOYS" | "GIRLS" | null;
  brand: string[];
  price: string[];
  color: string[];
  discountRange: number | null;
  categories: string[];
  text: string;
}

const initialState = { gender: null, brand: [], price: [], color: [], discountRange: null, text: "", categories: [] } as FilterState;

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenderFilter: (state, action) => {
      state.gender = action.payload;
    },
    setBrandFilter: (state, action) => {
      state.brand = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    setColorFilter: (state, action) => {
      state.color = action.payload;
    },
    setDiscountRangeFilter: (state, action) => {
      state.discountRange = action.payload;
    },
    setTextFilter: (state, action) => {
      state.text = action.payload;
    },
    setCategoriesFilter: (state, action) => {
      state.categories = action.payload;
    },
    clearFilter: (state) => {
      state = initialState;
    },
  },
});

export const {
  setBrandFilter,
  setPriceFilter,
  setColorFilter,
  setDiscountRangeFilter,
  setGenderFilter,
  setTextFilter,
  setCategoriesFilter,
  clearFilter,
} = FilterSlice.actions;

export default FilterSlice.reducer;
