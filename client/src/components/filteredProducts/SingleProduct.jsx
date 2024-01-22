// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Tooltip, Button } from "@material-tailwind/react";
// import { addToCart } from "../../features/slices/cartSlice";

// const SingleProduct = () => {
//   const product = useSelector((state) => state.products.singleProduct);
//   //   console.log("singleProduct", product);
//   const productSize = product[0].size ? product[0].size[0] : "";
//   const productColor = product[0].color[0];
//   const [size, setSize] = useState();
//   const [color, setColor] = useState(productColor);
//   //   console.log("size", size);
//   //   console.log("color", color);
//   const { id } = useParams(productSize);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       {product
//         .filter((product) => product.id === id)
//         .map((item, index) => {
//           return (
//             <div key={index} className="flex justify-center items-center py-10">
//               <div className="pl-44 grow-[2]">
//                 <img
//                   className="h-[850px] rounded-lg"
//                   src={item.img}
//                   alt={item.name}
//                 />
//               </div>
//               <div className="grow-[3]">
//                 <div className="max-w-lg">
//                   <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
//                     {item.name}
//                   </h5>
//                   <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
//                     15% OFF
//                   </p>
//                   <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
//                     {item.text}
//                   </p>
//                   <div className="pb-4">
//                     {item.size ? (
//                       <div>
//                         <label
//                           htmlFor="size"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           Pick a size
//                         </label>
//                         <select
//                           id="size"
//                           name="size"
//                           value={size}
//                           onChange={(e) => setSize(e.target.value)}
//                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                           {item.size.map((item, index) => {
//                             return (
//                               <option key={index} value={item}>
//                                 {item}
//                               </option>
//                             );
//                           })}
//                         </select>
//                       </div>
//                     ) : (
//                       <div>
//                         <label
//                           htmlFor="size"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           Pick a size
//                         </label>
//                         <select
//                           id="size"
//                           disabled={true}
//                           name="size"
//                           value={size}
//                           onChange={(e) => setSize(e.target.value)}
//                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                           {item?.size?.map((item, index) => {
//                             return (
//                               <option key={index} value={item}>
//                                 {item}
//                               </option>
//                             );
//                           })}
//                         </select>
//                       </div>
//                     )}
//                   </div>

//                   <div className="pb-4">
//                     <label
//                       htmlFor="size"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       Pick a color
//                     </label>
//                     <select
//                       id="color"
//                       name="color"
//                       value={color}
//                       onChange={(e) => setColor(e.target.value)}
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     >
//                       {item.color.map((color, index) => {
//                         return (
//                           <option key={index} value={color}>
//                             {color}
//                           </option>
//                         );
//                       })}
//                     </select>
//                   </div>
//                   <Tooltip content="Add to Cart" placement="bottom">
//                     <Button
//                       color="gray"
//                       size="lg"
//                       variant="outlined"
//                       ripple={true}
//                       onClick={() =>
//                         dispatch(
//                           addToCart({
//                             id: item.id,
//                             name: item.name,
//                             img: item.img,
//                             text: item.text,
//                             size: size,
//                             color: color,
//                             price: item.price,
//                             amount: 1,
//                             totalPrice: item.price,
//                           })
//                         )
//                       }
//                     >
//                       Add to Cart
//                     </Button>
//                   </Tooltip>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState();
  const [color, setColor] = useState(productColor);
  const [showSnackbar, setShowSnackbar] = useState(false); // State for showing success message
  const { id } = useParams(productSize);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product[0].id,
        name: product[0].name,
        img: product[0].img,
        text: product[0].text,
        size: size,
        color: color,
        price: product[0].price,
        amount: 1,
        totalPrice: product[0].price,
      })
    );

    // Show the Snackbar
    setShowSnackbar(true);

    // Hide the Snackbar after 3 seconds (adjust the timeout as needed)
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  className="h-[850px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((color, index) => {
                        return (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}

      {/* Snackbar for "Added to Cart successfully" message */}
      {showSnackbar && (
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            background: "green",
            color: "white",
            padding: "10px",
          }}
        >
          Added to Cart successfully
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
