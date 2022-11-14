import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/registerSlice";

export const Store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
