import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/burgers/BurgerSlice"; 
import { QRCodeSVG } from "qrcode.react"; 

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.burger.cart); 
  const [showQRCode, setShowQRCode] = useState(false); 

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2); 

  const handleCheckout = () => {
    setShowQRCode(true);  
  };

  


  const qrData = {
    items: cartItems,
    total: totalAmount,
  };

  return (
    <div className="w-full h-full p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Mon Panier</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Votre panier est vide.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 mb-2 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.option}</p>
                  <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <div className="mt-4 p-4 bg-gray-200 rounded-lg text-lg font-bold">
            Total : ${totalAmount}
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Checkout
          </button>

          {showQRCode && (
            <div className="mt-4 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">
                Code QR pour votre commande
              </h3>
              <QRCodeSVG value={JSON.stringify(qrData)} size={256} />
            

              <p className="mt-2 text-sm text-gray-500">
                donné au serveur de café
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
