import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../features/burgers/BurgerSlice"; 
import { ShoppingBag, HeartIcon } from "lucide-react";

const ProductCard = () => {
  const items = useSelector((state) => state.burger.items); 
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleAddToFavorites = (item) => {
    // dispatch(addToFavorites(item)); 
  };

  return <div className="w-full flex flex-col ">


    <div className="w-full  flex ">

    </div>
  </div>;
};

export default ProductCard;
