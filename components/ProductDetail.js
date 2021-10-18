import React from "react";
//import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

const ProductDetail = ({ product }) => {
  return (
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
        
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-gray-700 uppercase text-lg">{product.product_title}</h3>
        <span className="text-gray-500 mt-3">${product.price}</span>
        <hr className="my-3" />
        
        <div className="flex items-center mt-6">
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;