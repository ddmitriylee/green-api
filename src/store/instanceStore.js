import { configureStore } from "@reduxjs/toolkit";
import reducer from "./instanceSlice";

export const instanceStore = configureStore({
  reducer: reducer,
});
