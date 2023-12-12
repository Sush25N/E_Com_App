// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   Typography,
// } from "@material-tailwind/react";

// const ProductCard = ({ id, name, text, img, price, colors }) => {
//   return (
//     <Card className="w-96">
//       <CardHeader color="blue" className="relative h-96">
//         <img src={img} alt="img-blur-shadow" className="h-full w-full" />
//       </CardHeader>
//       <CardBody className="text-center">
//         <Typography variant="h5" className="mb-2">
//           {name}
//         </Typography>
//         <Typography>{text}</Typography>
//       </CardBody>
//       <CardFooter divider className="flex items-center justify-between py-3">
//         <Typography variant="small">${price}</Typography>
//         <Typography variant="small" color="gray" className="flex gap-1">
//           {colors?.map((color, index) => {
//             return (
//               <i
//                 className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full m-4"
//                 key={index}
//                 style={{ backgroundColor: color }}
//               ></i>
//             );
//           })}
//         </Typography>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ProductCard;

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productSlice";
import { Link, useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";

// const ProductCard = ({ id, name, text, img, price, colors }) => {
//   const dispatch = useDispatch();
//   const { type } = useParams();

//   return (
//     <div className="relative">
//       <Link to={id}>
//         <Card className="w-96">
//           <CardHeader
//             color="blue"
//             className="relative h-96"
//             onClick={() => dispatch(singleProduct(id))}
//           >
//             <img src={img} alt="img-blur-shadow" className="h-full w-full" />
//           </CardHeader>
//           <CardBody className="text-center">
//             <Typography variant="h5" className="mb-2">
//               {name}
//             </Typography>
//             <Typography>{text || ""}</Typography>
//           </CardBody>
//           <CardFooter
//             divider
//             className="flex items-center justify-between py-3"
//           >
//             <Typography variant="small">{price}$</Typography>
//             <Typography variant="small" color="gray" className="flex gap-1">
//               {colors?.map((color, index) => (
//                 <i
//                   className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4"
//                   key={index}
//                   style={{ backgroundColor: color }}
//                 ></i>
//               ))}
//             </Typography>
//           </CardFooter>
//         </Card>
//       </Link>

//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-white opacity-90">
//         <Tooltip content="Add to Cart" placement="bottom">
//           <Button
//             color="gray"
//             size="lg"
//             variant="outlined"
//             ripple={true}
//             onClick={() =>
//               addToCart({
//                 id,
//                 name,
//                 img,
//                 text,
//                 size: colors[0].size,
//                 color: colors[0].name,
//                 price,
//                 amount: 1,
//                 totalPrice: price,
//               })
//             }
//           >
//             Add to Cart
//           </Button>
//         </Tooltip>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch(); // Ensure you have this line

  return (
    <div className="relative">
      <Link to={id}>
        <Card className="w-96">
          <CardHeader
            color="blue"
            className="relative h-96"
            onClick={() => dispatch(singleProduct(id))}
          >
            <img src={img} alt="img-blur-shadow" className="h-full w-full" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {name}
            </Typography>
            <Typography>{text || ""}</Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">{price}$</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              {colors?.map((color, index) => (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              ))}
            </Typography>
          </CardFooter>
        </Card>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white opacity-90">
        <Tooltip content="Add to Cart" placement="bottom">
          <Button
            color="gray"
            size="lg"
            variant="outlined"
            ripple={true}
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  name,
                  img,
                  text,
                  size: colors[0].size,
                  color: colors[0].name,
                  price,
                  amount: 1,
                  totalPrice: price,
                })
              )
            }
          >
            Add to Cart
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductCard;
