// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "../features/burgers/BurgerSlice";
import tacosSlice from "../features/Tacos/TacosSlice";
import CategorySlice from "../features/burgers/CategorySlice";

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    tacos: tacosSlice,
    category: CategorySlice,
  },
});
