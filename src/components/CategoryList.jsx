import React from "react";
import CategoryCard from "./CategoryCard";
import { useGobalState } from "../context/ContextApi";

function CategoryList() {
  const{transaction,groupExpenses}=useGobalState()

  
  
  const groupedExpenses = groupExpenses(transaction);
  return (
    <div className="border max-w-[400px] p-4  outline-none rounded-lg shadow-xl">
      <h1 className="text-2xl text-left pb-3 font-bold ">Each Category</h1>
      <div className="grid grid-cols-2 gap-4">
        {groupedExpenses.map((item,index)=>
        <CategoryCard item={item} />
        )}
   
      </div>
    </div>

  );
}

export default CategoryList;
