import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../features/burgers/BurgerSlice";
import { ArrowLeft, ShoppingBag, CheckCircle } from "lucide-react";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [extras, setExtras] = useState([]); 
  const [showSuccess, setShowSuccess] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products?.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  
  const availableExtras = [
    { name: "sauce", price: 1 },
    { name: "fromage", price: 1.5 },
    { name: "bacon", price: 2 },
    { name: "avocat", price: 1.8 },
  ];

  const handleExtraChange = (extra) => {
    setExtras((prevExtras) =>
      prevExtras.includes(extra)
        ? prevExtras.filter((e) => e !== extra)
        : [...prevExtras, extra]
    );
  };

  const totalPrice =
    product.price +
    extras.reduce((total, extra) => {
      const extraDetail = availableExtras.find((e) => e.name === extra);
      return total + (extraDetail ? extraDetail.price : 0);
    }, 0);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, price: totalPrice, extras }));
    setShowSuccess(true);  
    setTimeout(() => {
      setShowSuccess(false); 
    }, 2000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-5">
     
      {showSuccess && (
        <div className="fixed top-0 left-1/2 transform  -translate-x-1/2 mt-4 z-50 flex items-center   gap-3  font-semibold text-white bg-green-500 p-3 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
          <CheckCircle className="" />
          Produit ajouté au panier avec succès !
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="flex h-full items-center justify-center text-yellow-500"
      >
        <ArrowLeft className="mr-2" /> Retour
      </button>

      <img
        src={"http://localhost:3000/" + product.img}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-2"
      />
      <h2 className="text-3xl font-bold text-slate-800 mb-2">{product.name}</h2>
      <p className="text-lg text-slate-600 mb-4">{product.option}</p>

       
      <div className="flex flex-col gap-4 mb-2">
        {availableExtras.map((extra) => (
          <label
            key={extra.name}
            className="flex items-center gap-2 text-lg font-medium text-slate-700"
          >
            <input
              type="checkbox"
              checked={extras.includes(extra.name)}
              onChange={() => handleExtraChange(extra.name)}
              className="form-checkbox h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            Ajouter {extra.name} (+{extra.price} $)
          </label>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Total: ${totalPrice.toFixed(2)}
      </h3>

      <button
        onClick={handleAddToCart}
        className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
      >
        <ShoppingBag className="mr-2 inline-block" /> Ajouter au panier
      </button>
    </div>
  );
};

export default ProductDetails;
