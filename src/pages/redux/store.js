import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    ui: uiReducer,
  },
});
