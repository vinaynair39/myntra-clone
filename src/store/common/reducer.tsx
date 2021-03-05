import { createSlice } from "@reduxjs/toolkit";

interface CommonState {
  showSimilar: boolean;
  queryForSimilar: string;
  similarFor: string;
  totalAmount: number;
}

const initialState = { showSimilar: false, queryForSimilar: "", similarFor: "", totalAmount: 0 } as CommonState;

const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setShowSimilar: (state, action) => {
      state.showSimilar = !state.showSimilar;
      state.queryForSimilar = action.payload.query;
      state.similarFor = action.payload.id;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount += action.payload;
    },
  },
});

export const { setShowSimilar, setTotalAmount } = CommonSlice.actions;

export default CommonSlice.reducer;
