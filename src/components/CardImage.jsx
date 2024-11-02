import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { addToCart, fetchProducts } from "../features/burgers/BurgerSlice";
import { fetchCategories } from "../features/burgers/CategorySlice";
import Discount from "../pages/Discount";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CardImage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.items);
  const products = useSelector((state) => state.burger.items);
  const [selectedCategory, setSelectedCategory] = useState(null); // Initialiser à null

  // Filtrez les produits en fonction de la catégorie sélectionnée
  const filteredProducts = products.filter(
    (product) => product.category_id === selectedCategory
  );

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Récupérez les produits et les catégories au montage du composant
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  // Met à jour la catégorie sélectionnée une fois que les catégories sont chargées
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id); // Définit la première catégorie comme sélectionnée
    }
  }, [categories]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      <Discount />
      {showSuccessMessage && (
        <div className="bg-green-500 text-white text-center p-2 mx-3 rounded-lg mb-4">
          Produit ajouté au panier !
        </div>
      )}

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Autoplay]}
        className="my-5"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full h-11 flex gap-2 hover:bg-red-500 items-center justify-center p-2 rounded-2xl font-semibold px-5 ${
                selectedCategory === category.id
                  ? "bg-red-500 mx-0.5"
                  : "text-slate-700"
              }`}
            >
              {category.icon} {category.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 gap-4 mt-5 bg-slate-100 p-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-4"
          >
            <Link to={`/product/${product.id}`} className="w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </Link>

            <div className="w-full mt-4 text-center">
              <span className="block text-xl text-slate-700 font-semibold">
                {product.name}
              </span>
              <span className="block text-md text-slate-700">
                {product.option}
              </span>

              <div className="w-full flex">
                <h3 className="w-full h-full text-slate-700 flex items-center justify-start text-lg font-bold">
                  ${product.price.toFixed(2)}
                </h3>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                >
                  <ShoppingBag
                    size={16}
                    className="text-red-500 text-xl font-semibold"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardImage;
