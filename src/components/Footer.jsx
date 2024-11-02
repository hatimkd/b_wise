import { useState, useEffect } from "react";
import {
  Bell,
  Diameter,
  Gamepad2Icon,
  Heart,
  HouseIcon,
  Percent,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { DisclosureButton } from "@headlessui/react";

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

      if (currentScrollY > lastScrollY && currentScrollY > 19) {
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

      {/* <Link to="/favorites" onClick={() => handleButtonClick("heart")}>
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
      </Link> */}

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

      <Link to="/games" onClick={() => handleButtonClick("notification")}>
        <button
          className={`flex flex-col items-center transition-transform duration-300 ${
            selectedButton === "games" ? "translate-y-[-11px] rounded-full" : ""
          }`}
        >
          <Gamepad2Icon
            className={`w-6 h-6 ${
              selectedButton === "notification" ? "text-red-600" : "text-black"
            }`}
          />
        </button>
      </Link>
      <Link to="/discount"  onClick={() => handleButtonClick("discount")}>
        <button
          className={`flex flex-col items-center transition-transform duration-300 ${
            selectedButton === "discount"
              ? "translate-y-[-11px] rounded-full"
              : ""
          }`}
        >
          <Percent
            className={`w-6 h-6 ${
              selectedButton === "discount" ? "text-red-600" : "text-black"
            }`}
          />
        </button>
      </Link>
    </div>
  );
};
