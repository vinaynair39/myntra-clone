import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filter from "./filter/reducer";

const rootReducer = combineReducers({
  filter,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
