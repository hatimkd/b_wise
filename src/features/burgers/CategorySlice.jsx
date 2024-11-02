import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/instance";

// Créez une action asynchrone pour récupérer les catégories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await axiosInstance.get("/categories"); // Remplacez par l'URL de votre API

    console.log(response.data); // Vérifiez ce qui est récupéré
    return response.data; // Retourne les données récupérées
  }
);

export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    items: [], // Initialisez avec un tableau vide
    status: "idle", // Pour suivre l'état de la requête
    error: null, // Pour gérer les erreurs
  },
  reducers: {
    addToCatg: (state, action) => {
      state.items.push(action.payload); // Utilisez state.items pour ajouter une catégorie
    },
    removeFromCart: (state, action) => {
      // Implémentez la logique pour supprimer une catégorie si nécessaire
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading"; // Met à jour l'état pendant le chargement
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded"; // Réussite de la requête
        state.items = action.payload; // Met à jour les éléments avec les catégories récupérées
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed"; // Échec de la requête
        state.error = action.error.message; // Capture l'erreur
      });
  },
});

export const { addToCatg, removeFromCart } = CategorySlice.actions;
export default CategorySlice.reducer;
