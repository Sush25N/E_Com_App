// import React from "react";
// import { useSelector } from "react-redux";
// import ProductCard from "./filteredProducts/ProductCard";

// const ProductsPage = () => {
// //   const products = useSelector((state) => state.products.allProducts);
// const products = useSelector((state) => state.products.allProducts);

//   return (
//     <div className="pt-16">
//       <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
//         {products.map((product, index) => (
//           <div key={index}>
//             <ProductCard
//               id={product.id}
//               name={product.name}
//               text={product.text}
//               img={product.img}
//               price={product.price}
//               colors={product.color}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./filteredProducts/ProductCard";

const ProductsPage = () => {
  //   const products = useSelector((state) => state.products.allProducts);
  const products = useSelector((state) => state.products.allProducts);

  return (
    <div className="pt-16">
      <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
        {products &&
          products.map((product, index) => (
            <div key={index}>
              {
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                />
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
