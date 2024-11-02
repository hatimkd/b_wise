import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Discount from "./pages/Discount";
import { useSelector } from "react-redux";
import ProductDetails from "./components/ProductDetails";
import TicTacToe from "./pages/TicTacToe";
const Approutes = () => {

  


  
  const products = useSelector((state) => state.burger.items); 
    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/favorites" element={<Favorites />} /> */}
              <Route path="/product/:id" element={<ProductDetails products={products} />} />
              <Route path="/games" element={<TicTacToe />} />

              <Route path="/discount" element={<Discount  />} /> {/* Add Discount route */}



            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  };
  
  export default Approutes;