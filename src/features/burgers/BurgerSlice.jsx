import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/instance";

// Action asynchrone pour récupérer les produits depuis l'API
export const fetchProducts = createAsyncThunk(
  "burger/fetchProducts",
  async () => {
    const response = await axiosInstance.get("/products"); // Remplacez "/products" par l'URL complète si nécessaire
    return response.data;
  }
);

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    items: [],
    cart: [],
    favorites: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Mettre à jour les items avec les produits de l'API
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, addToFav } = burgerSlice.actions;
export default burgerSlice.reducer;
