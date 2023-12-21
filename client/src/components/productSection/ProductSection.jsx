import React from "react";
import { footerData } from "../../assets/data/homePageData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-white my-2 text-center text-lg font-inter font-bold tracking-normal leading-none">
          New Year Special
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {footerData.slice(0, 15).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
