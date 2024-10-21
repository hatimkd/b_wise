import { createSlice } from "@reduxjs/toolkit";
import burgerData from "./burgerData";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    items: burgerData, 
    cart: [],
    favorites: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },


    addToFav: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart , addToFav } = burgerSlice.actions;
export default burgerSlice.reducer;
