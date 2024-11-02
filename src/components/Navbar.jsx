import { Search, UtensilsCrossed } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full  flex items-center   bg-red-500   justify-center      flex-col    py-8 ">
      <div className="w-full flex ">
        <div className="w-full        h-28 flex flex-col justify-center  px-5 py-14  ">
          <h3 className="text-3xl font-semibold  text-slate-700 ">Street</h3>
          <h3 className="text-3xl font-bold  text-slate-800   ">Food </h3>
        </div>

        <div className="w-full flex    justify-end items-center">
          <UtensilsCrossed className="w-24 bg-red-500  h-14 p-3 rounded-full " />
        </div>
      </div>
      <div className="w-80 max-w-md flex items-center bg-white rounded-full shadow-md px-4 py-2  ">
        <Search className="w-6 h-6 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Recherche..."
          className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
        />
      </div>
      {/* <img src="log.svg" alt="Logo" className="w-24 object-contain" /> */}
    </div>
  );
}
