import { createSlice } from "@reduxjs/toolkit";

interface Review {
  images: [];
  comment: string;
}

export interface Product {
  id: string;
  brandName: string;
  productName: string;
  soldBy: string;
  size: number;
  price: number;
  originalPrice: number;
  discountPercent: number;
  reviews: Review[];
  images: string[];
  color: string[];
  postedAt: number;
  rating: number;
  category: string;
  gender: "MEN" | "WOMEN" | "BOYS" | "GIRLS";
}

interface Bag {
  bag: Product[];
  wishList: Product[];
  allProducts: Product[];
}

const initialState = { bag: [], wishList: [], allProducts: [] } as Bag;

const BagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addInBag: (state, action) => {
      state.bag.push(action.payload);
    },
    addInWishlist: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeInWishList: (state, action) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload);
    },
    removeInBag: (state, action) => {
      state.bag = state.bag.filter((item) => item.id !== action.payload);
    },
    updateInBag: (state, action) => {
      state.bag = state.bag.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else return item;
      });
    },
  },
});

export const { addInBag, addInWishlist, removeInBag, removeInWishList, setAllProducts } = BagSlice.actions;

export default BagSlice.reducer;
