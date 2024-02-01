import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdMovieEdit } from "react-icons/md";
import { MdDirectionsCarFilled } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbMassage } from "react-icons/tb";
import { MdMenu } from "react-icons/md";

function CategoryCard({ item }) {
  
const categoryIcons = {
  Food: IoFastFoodOutline,
  Entertainment: MdMovieEdit,
  Travel: MdDirectionsCarFilled,
  "Personal Care":TbMassage ,
  Shopping: MdOutlineShoppingCart,
  Donations:IoIosMan ,
  Petrol: MdOutlineLocalGasStation,
  Other:MdMenu
};

function getCategoryIcon(category) {
  return categoryIcons[category] || MdMenu; 
}

// Usage
const Icon = getCategoryIcon(item.category); 

  return (
    <div className=" flex flex-col bg-gray-400 rounded-md p-3 gap-3 flex-grow min-w-40  shadow-md">
      <div className="font-bold text-md text-left text-white ">
        {item.category}
      </div>
      <div className="flex items-center justify-between">
        <div><Icon className='w-6 h-6 text-white'/></div>
        <div className="font-bold text-lg text-white ">
          {item.amount.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
