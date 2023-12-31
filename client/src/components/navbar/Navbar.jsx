import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import Cart from "../cart/Cart";
import { logout } from "../../features/slices/authSlice";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { singleProduct } from "../../features/slices/productSlice";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // Fetch filteredProducts from the state
  const products = useSelector((state) => state.products.filteredProducts);

  // Filter products based on search query
  const filteredProductsList = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // State to track the number of results to display
  const [displayCount, setDisplayCount] = useState(3);

  // Function to load more results
  const loadMoreResults = () => {
    setDisplayCount(displayCount + 3);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-4 w-full flex justify-center items-center">
        <div className="flex items-center">
          <h3 className="text-white font-inter text-2xl font-bold">
            Shopping_Karo
          </h3>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img className="h-28 w-full" src={logo} alt="store" />
        </div>
        <div className="flex justify-around">
          <div className="relative">
            <Tooltip content="Search" placement="bottom">
              <FaSearch className="absolute text-black top-1/2 transform -translate-y-1/2 left-3" />
            </Tooltip>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md pl-10 pr-4 py-1 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 w-36 mr-4"
            />
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.a375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
              Shopping Cart
            </p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              ></Avatar>
            )}
            <div onClick={() => dispatch(logout())}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="font-inter text-sm font-medium tracking-normal leading-none">
                  Hi {name.charAt(0).toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* {searchQuery && (
        <div className="search-results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
          {filteredProductsList.slice(0, displayCount).map((product) => (
            <Card
              key={product.id}
              className="w-80 sm:w-96 border border-gray-300 rounded-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <CardHeader
                color="blue"
                className="relative h-72 sm:h-96 overflow-hidden"
                onClick={() => dispatch(singleProduct(product.id))}
              >
                <img
                  src={product.img}
                  alt="img-blur-shadow"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-4 text-center">
                <Typography
                  variant="h5"
                  className="mb-2 font-bold text-gray-800"
                >
                  {product.name}
                </Typography>
                <Typography className="text-gray-600">
                  {product.text || ""}
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3 bg-gray-100"
              >
                <Typography
                  variant="small"
                  className="font-semibold text-blue-500"
                >
                  ${product.price}
                </Typography>
                <div className="flex gap-1">
                  {product.colors?.map((color, index) => (
                    <i
                      key={index}
                      className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2"
                      style={{ backgroundColor: color }}
                    ></i>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}

          {filteredProductsList.length > displayCount && (
            <p
              className="see-more mt-4 ml-2 text-center text-white cursor-pointer hover:underline hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-xl transition-all duration-300"
              onClick={loadMoreResults}
            >
              See more results...
            </p>
          )}
        </div>
      )} */}

      {searchQuery && (
        <div className="search-results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
          {filteredProductsList.slice(0, displayCount).map((product) => (
            <Card
              key={product.id}
              className="w-80 sm:w-96 border border-gray-300 rounded-md overflow-hidden transition-transform transform hover:scale-105  p-2"
            >
              <CardHeader
                color="blue"
                className="relative h-72 sm:h-96 overflow-hidden"
                onClick={() => dispatch(singleProduct(product.id))}
              >
                <img
                  src={product.img}
                  alt="img-blur-shadow"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-4 text-center">
                <Typography
                  variant="h5"
                  className="mb-2 font-bold text-gray-800"
                >
                  {product.name}
                </Typography>
                <Typography className="text-gray-600">
                  {product.text || ""}
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3 bg-gray-100"
              >
                <Typography
                  variant="small"
                  className="font-semibold text-blue-500"
                >
                  ${product.price}
                </Typography>
                <div className="flex gap-1">
                  {product.colors?.map((color, index) => (
                    <i
                      key={index}
                      className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2"
                      style={{ backgroundColor: color }}
                    ></i>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}

          {filteredProductsList.length > displayCount && (
            <p
              className="see-more mt-4 ml-2 text-center text-white cursor-pointer hover:underline hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-xl transition-all duration-300"
              onClick={loadMoreResults}
            >
              See more results...
            </p>
          )}
        </div>
      )}

      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-4 w-full flex justify-around">
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          50% OFF
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          Free shipping and returns
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          Different payment methods
        </div>
      </div>
    </>
  );
};

export default Navbar;
