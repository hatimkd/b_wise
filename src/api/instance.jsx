// axiosInstance.js
import axios from "axios";

// Créer une instance Axios avec une configuration de base
const axiosInstance = axios.create({
  baseURL: "https://devqrit.b-wise.ma/api/", // Remplacez par votre URL de base
  timeout: 5000, // Temps limite de la requête (5 secondes dans cet exemple)
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur de réponse pour gérer les erreurs de manière centralisée
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erreur de réponse:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
