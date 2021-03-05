import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filter from "./filter/reducer";
import bag from "./bag/reducer";
import sortBy from "./sort/reducer";
import common from "./common/reducer";

const rootReducer = combineReducers({
  filter,
  bag,
  sortBy,
  common,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
