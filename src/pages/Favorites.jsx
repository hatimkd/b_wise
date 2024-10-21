import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/burgers/BurgerSlice";
import { ShoppingBag } from "lucide-react";

const Favorites = () => {
  const favorites = useSelector((state) => state.burger.favorites);
  const cartItems = useSelector((state) => state.burger.cart);
  const dispatch = useDispatch();

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-5 text-center">
        Vos Favoris
      </h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          Vous n'avez pas encore ajouté de favoris.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-4"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />

              <div className="w-full mt-4 text-center">
                <span className="block text-xl text-slate-700 font-semibold">
                  {product.name}
                </span>
                <span className="block text-md text-slate-700">
                  {product.option}
                </span>
                <div className="w-full flex justify-between mt-2 items-center">
                  <h3 className="text-lg font-bold text-slate-700">
                    ${product.price.toFixed(2)}
                  </h3>

                  <button
                    onClick={() =>
                      !isInCart(product.id) && dispatch(addToCart(product))
                    }
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      isInCart(product.id)
                        ? "bg-gray-400 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                    disabled={isInCart(product.id)}
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
