// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import ProductCard from "./ProductCard";
// import { Tooltip, Button } from "@material-tailwind/react";
// import { addToCart } from "../../features/slices/cartSlice";

// const FilteredProducts = () => {
//   console.log("FilteredProducts component rendered");
//   const products = useSelector((state) => state.products.filteredProducts);
//   console.log("products", products);
//   const { type } = useParams();
//   console.log("params", type);

//   const dispatch = useDispatch();
//   return (
//     <>
//       <div className="pt-16">
//         <div className="pl-14">
//           <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
//             {type}
//           </h1>
//         </div>
//         <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
//           {products
//             .filter((product) => product.type === type)
//             .map((product, index) => {
//               return (
//                 <>
//                   <div key={index}>
//                     <ProductCard
//                       id={product.id}
//                       name={product.name}
//                       text={product.text}
//                       img={product.img}
//                       price={product.price}
//                       colors={product.color}
//                     />
//                     <div>
//                       <Tooltip content="Add to Cart" placement="bottom">
//                         <Button
//                           color="gray"
//                           size="lg"
//                           variant="outlined"
//                           ripple={true}
//                           onClick={() =>
//                             dispatch(
//                               addToCart({
//                                 id: product.id,
//                                 name: product.name,
//                                 img: product.img,
//                                 text: product.text,
//                                 size: product.size,
//                                 color: product.color,
//                                 price: product.price,
//                                 amount: 1,
//                                 totalPrice: product.price,
//                               })
//                             )
//                           }
//                         >
//                           Add to Cart
//                         </Button>
//                       </Tooltip>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FilteredProducts;

// FilteredProducts.js

// ... (imports)

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { addToCart } from "../../features/slices/cartSlice";

const FilteredProducts = () => {
  console.log("FilteredProducts component rendered");
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);

  const dispatch = useDispatch();

  return (
    <>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => (
              <div key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                  onAddToCart={(cartItem) => dispatch(addToCart(cartItem))}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FilteredProducts;
