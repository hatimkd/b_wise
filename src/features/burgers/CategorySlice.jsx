import { createSlice } from "@reduxjs/toolkit";
import { categoryData } from "./burgerData";

export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    items: categoryData, 
  },
  reducers: {
    addToCatg: (state, action) => {
      state.category.push(action.payload);
    },
    removeFromCart: (state, action) => {
     
    },
  },
});

export const { addToCatg, removeFromCart } = CategorySlice.actions;
export default CategorySlice.reducer;
