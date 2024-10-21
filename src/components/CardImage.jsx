

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { addToCart, addToFav } from "../features/burgers/BurgerSlice"; 
import "swiper/css";
import "swiper/css/autoplay"; 
import { Autoplay } from "swiper/modules";
import {
  BookHeart,
  Heart,
  HeartHandshake,
  HeartIcon,
  HeartPulse,
  Pizza,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const CardImage = () => {
  const categories = useSelector((state) => state.category.items); 
  const products = useSelector((state) => state.burger.items);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id); 
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.burger.favorites); 
  
  const filteredProducts = products.filter(
    (product) => product.categoryId === selectedCategory
  );

  useEffect(() => {
    console.log(cartItems); 
  }, [filteredProducts]);

  return (
    <div className="w-full ">
   
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        // autoplay={{ delay: 3000 }} 
        // loop={true}
        modules={[]} 
        className="my-5"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              onClick={() => setSelectedCategory(category.id)} 
              className={`w-full h-11 flex gap-2 hover:bg-yellow-500 items-center justify-center p-2 rounded-2xl font-semibold  px-5${
                selectedCategory === category.id
                  ? "bg-yellow-300 mx-0.5"
                  : "text-slate-700"
              }`}
            >
              {category.icon}
              {category.name}
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
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </Link>

            <div className="w-full mt-4 text-center">
              <span className="block text-xl   text-slate-700   font-semibold">
                {product.name}
              </span>
              <span className="block text-md   text-slate-700   font-">
                {product.option}
              </span>

              <div className="w-full  flex   ">
                <h3 className="w-full h-full   text-slate-700  flex items-center justify-start text-lg font-bold">
                  ${product.price.toFixed(2)}
                </h3>

                <button
                  onClick={() => dispatch(addToFav(product))}
                  className="flex items-center justify-center w-8 h-8 rounded-full    "
                >
                  <HeartIcon
                    size={16}
                    className="text-red-500 text-xl  font-semibold"
                  />
                </button>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="flex items-center justify-center w-8 h-8 rounded-full    "
                >
                  <ShoppingBag
                    size={16}
                    className="text-yellow-500 text-xl  font-semibold"
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
