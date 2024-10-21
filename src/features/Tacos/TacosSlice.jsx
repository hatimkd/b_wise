// TacosSlice.js
import { createSlice } from "@reduxjs/toolkit";
import tacosData from "./tacosData"; // Assurez-vous d'importer les données

const tacosSlice = createSlice({
  name: "tacos",
  initialState: {
    items: tacosData,  
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },


    
  },
});

export const { addToCart } = tacosSlice.actions;
export default tacosSlice.reducer;
