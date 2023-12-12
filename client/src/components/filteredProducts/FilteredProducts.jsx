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

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import ProductCard from "./ProductCard";
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
//             .map((product, index) => (
//               <div key={index}>
//                 <ProductCard
//                   id={product.id}
//                   name={product.name}
//                   text={product.text}
//                   img={product.img}
//                   price={product.price}
//                   colors={product.color}
//                   onAddToCart={(cartItem) => dispatch(addToCart(cartItem))}
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FilteredProducts;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { addToCart } from "../../features/slices/cartSlice";

// const FilteredProduct = () => {
//   const { productId } = useParams();
//   const product = useSelector((state) => {
//     // Assuming your state structure includes a property called 'products'
//     return state.products.filteredProducts.find(
//       (product) => product.id === productId
//     );
//   });

//   const dispatch = useDispatch();

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         id: product.id,
//         name: product.name,
//         img: product.img,
//         text: product.text,
//         size: product.size, // Assuming your product has a 'size' property
//         color: product.color, // Assuming your product has a 'color' property
//         price: product.price,
//         amount: 1,
//         totalPrice: product.price,
//       })
//     );
//   };

//   return (
//     <div className="pt-16">
//       <div className="pl-14">
//         <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
//           {product.name}
//         </h1>
//       </div>
//       <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
//         <div>
//           <img src={product.img} alt={product.name} className="w-full" />
//           <p>{product.text}</p>
//           <p>Price: {product.price}</p>
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilteredProduct;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/slices/cartSlice";

const FilteredProduct = () => {
  const { productId } = useParams();
  const product = useSelector((state) => {
    return state.products.filteredProducts.find(
      (product) => product.id === productId
    );
  });

  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        img: product.img,
        text: product.text,
        size: product.size,
        color: product.color,
        price: product.price,
        amount: 1,
        totalPrice: product.price,
      })
    );
  };

  return (
    <div className="pt-16">
      <div className="pl-14">
        <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
          {product.name}
        </h1>
      </div>
      <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
        <div>
          <img src={product.img} alt={product.name} className="w-full" />
          <p>{product.text}</p>
          <p>Price: {product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
