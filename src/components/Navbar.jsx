import { UtensilsCrossed } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex items-center        bg-slate-100   rounded-b-2xl  ">
      <div className="w-full      bg-slate-100 h-28 flex flex-col justify-center  px-5 py-14  ">
        <h3 className="text-3xl font-semibold  text-slate-700 ">Fast Food,</h3>
        <h3 className="text-3xl font-bold  text-slate-800   ">Fast Delivery </h3>
      </div>

      <UtensilsCrossed  className="w-24 bg-red-500  h-14 p-3 rounded-full "/>
      {/* <img src="log.svg" alt="Logo" className="w-24 object-contain" /> */}
    </div>
  );
}
