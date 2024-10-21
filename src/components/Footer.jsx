
import { useState, useEffect } from "react";
import { Bell, Heart, HouseIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [selectedButton, setSelectedButton] = useState("home");
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        setIsFooterVisible(false);
      } else if (currentScrollY < lastScrollY) {

        setIsFooterVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full p-2 flex justify-around shadow-lg items-center h-14 backdrop-blur-md bg-white/80 rounded-lg transition-transform duration-300 ${
        isFooterVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link to="/" onClick={() => handleButtonClick("home")}>
        <button
          className={`flex flex-col items-center transition-transform duration-300 ${
            selectedButton === "home" ? "translate-y-[-11px] rounded-full" : ""
          }`}
        >
          <HouseIcon
            className={`w-6 h-6 ${
              selectedButton === "home" ? "text-red-600" : "text-black"
            }`}
          />
        </button>
      </Link>

      <Link to="/favorites" onClick={() => handleButtonClick("heart")}>
        <button
          className={`flex flex-col items-center transition-transform duration-300 ${
            selectedButton === "heart" ? "translate-y-[-11px] rounded-full" : ""
          }`}
        >
          <Heart
            className={`w-6 h-6 ${
              selectedButton === "heart" ? "text-red-600" : "text-black"
            }`}
          />
        </button>
      </Link>

      <Link to="/cart" onClick={() => handleButtonClick("cart")}>
        <button
          className={`flex flex-col items-center transition-transform duration-300 ${
            selectedButton === "cart" ? "translate-y-[-11px] rounded-full" : ""
          }`}
        >
          <ShoppingCart
            className={`w-6 h-6 ${
              selectedButton === "cart" ? "text-red-600" : "text-black"
            }`}
          />
        </button>
      </Link>

      <Link
        to="/notifications"
        onClick={() => handleButtonClick("notification")}
      >
        <button
          className={`flex flex-col items-center transition-transform duration-300 ${
            selectedButton === "notification"
              ? "translate-y-[-11px] rounded-full"
              : ""
          }`}
        >
          <Bell
            className={`w-6 h-6 ${
              selectedButton === "notification" ? "text-red-600" : "text-black"
            }`}
          />
        </button>
      </Link>
    </div>
  );
};
