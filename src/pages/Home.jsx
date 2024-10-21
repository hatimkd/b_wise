import React from "react";
import CardImage from "../components/CardImage";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="w-full h-full  flex-col   flex">
      <CardImage />

      <ProductCard />
    </div>
  );
};

export default Home;
