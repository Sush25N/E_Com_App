// import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Tooltip,
//   Button,
// } from "@material-tailwind/react";
// import { useDispatch } from "react-redux";
// import {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
// } from "../../features/slices/cartSlice";

// const ProductSectionItem = ({
//   id,
//   img,
//   name,
//   text,
//   size,
//   price,
//   color,
//   totalPrice,
// }) => {
//   const dispatch = useDispatch();
//   const defaultSize = size[0];
//   const defaultColor = color[0];

//   const [amount, setAmount] = useState(0);

//   const handleIncrement = () => {
//     setAmount((prevAmount) => prevAmount + 1);
//     dispatch(
//       incrementQuantity({ id: id, size: defaultSize, color: defaultColor })
//     );
//   };

//   const handleDecrement = () => {
//     if (amount > 0) {
//       setAmount((prevAmount) => prevAmount - 1);
//       dispatch(
//         decrementQuantity({ id: id, size: defaultSize, color: defaultColor })
//       );
//     }
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         id: id,
//         img: img,
//         text: text,
//         amount: amount,
//         price: price,
//         totalPrice: totalPrice,
//         name: name,
//         size: defaultSize,
//         color: defaultColor,
//       })
//     );
//   };

//   return (
//     <div>
//       <Card className="w-96 relative">
//         <Typography
//           variant="h4"
//           className="mb-2 absolute -rotate-360 top-8 left-8 z-10 text-green-400"
//         >
//           30% OFF
//         </Typography>
//         <CardHeader floated={false} className="h-96">
//           <img src={img} alt={name} />
//         </CardHeader>
//         <CardBody className="text-center">
//           <Typography variant="h4" color="blue-gray" className="mb-2">
//             {name}
//           </Typography>
//           <Typography color="gray" className="font-medium" textGradient>
//             {text}
//           </Typography>
//           <div className="flex justify-between items-center pt-4">
//             <Typography color="red" className="font-medium" textGradient>
//               <span style={{ color: "gray" }}>Size-left: {defaultSize}</span>
//             </Typography>
//             <Typography color="gray" className="font-medium" textGradient>
//               Color:{" "}
//               <span
//                 className="px-2 rounded-full ml-2"
//                 style={{ backgroundColor: defaultColor }}
//               ></span>
//             </Typography>
//           </div>
//           <Typography variant="h5" color="green" className="mt-4">
//             Price: ₹{price.toFixed(2)}
//           </Typography>
//         </CardBody>
//         <CardFooter className="flex justify-center gap-7 pt-2">
//           <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
//             {/* Decrement Button */}
//             <Button
//               size="sm"
//               color="red"
//               ripple={true}
//               onClick={handleDecrement}
//             >
//               -
//             </Button>
//             {/* Add to Cart Button */}
//             <Tooltip content="Add to Cart" placement="bottom">
//               <Button
//                 onClick={handleAddToCart}
//                 size="lg"
//                 color="gray"
//                 variant="outlined"
//                 ripple={true}
//               >
//                 {amount > 0 ? `${amount}` : "Add to Cart"}
//               </Button>
//             </Tooltip>
//             {/* Increment Button */}
//             <Button
//               size="sm"
//               color="green"
//               ripple={true}
//               onClick={handleIncrement}
//             >
//               +
//             </Button>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default ProductSectionItem;

// <----------ADDED LOADER---------->

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../features/slices/cartSlice";
import ContentLoader from "react-content-loader";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Simulate fetching product details
  useEffect(() => {
    // Simulate a longer loading time by increasing the delay to 3000 milliseconds (3 seconds)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  const handleIncrement = () => {
    setAmount((prevAmount) => prevAmount + 1);
    dispatch(
      incrementQuantity({ id: id, size: defaultSize, color: defaultColor })
    );
  };

  const handleDecrement = () => {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1);
      dispatch(
        decrementQuantity({ id: id, size: defaultSize, color: defaultColor })
      );
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
        img: img,
        text: text,
        amount: amount,
        price: price,
        totalPrice: totalPrice,
        name: name,
        size: defaultSize,
        color: defaultColor,
      })
    );
  };

  if (loading) {
    // Placeholder for loading state
    return (
      <ContentLoader
        speed={2}
        width={400}
        height={400}
        viewBox="0 0 400 400"
        backgroundColor="#dbd9d9"
        foregroundColor="#ecebeb"
      >
        {/* Placeholder for the product image */}
        <rect x="0" y="0" rx="12" ry="12" width="100%" height="60%" />

        {/* Placeholder for the product title */}
        <rect x="40" y="65%" rx="3" ry="3" width="70%" height="12" />

        {/* Placeholder for the product description */}
        <rect x="30" y="70%" rx="3" ry="3" width="80%" height="20" />

        {/* Placeholder for the product size */}
        <rect x="20" y="80%" rx="3" ry="3" width="30%" height="8" />

        {/* Placeholder for the product color */}
        <rect x="60%" y="80%" rx="3" ry="3" width="30%" height="8" />

        {/* Placeholder for the product price */}
        <rect x="120" y="85%" rx="3" ry="3" width="30%" height="8" />

        {/* Placeholder for the add to cart button */}
        <rect x="20%" y="92%" rx="3" ry="3" width="50%" height="8" />
      </ContentLoader>
    );
  }

  return (
    <div>
      <Card className="w-96 relative">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-360 top-8 left-8 z-10 text-green-400"
        >
          30% OFF
        </Typography>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-medium" textGradient>
              <span style={{ color: "gray" }}>Size-left: {defaultSize}</span>
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
          <Typography variant="h5" color="green" className="mt-4">
            Price: ₹{price.toFixed(2)}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
            {/* Decrement Button */}
            <Button
              size="sm"
              color="red"
              ripple={true}
              onClick={handleDecrement}
            >
              -
            </Button>
            {/* Add to Cart Button */}
            <Tooltip content="Add to Cart" placement="bottom">
              <Button
                onClick={handleAddToCart}
                size="lg"
                color="gray"
                variant="outlined"
                ripple={true}
              >
                {amount > 0 ? `${amount}` : "Add to Cart"}
              </Button>
            </Tooltip>
            {/* Increment Button */}
            <Button
              size="sm"
              color="green"
              ripple={true}
              onClick={handleIncrement}
            >
              +
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
