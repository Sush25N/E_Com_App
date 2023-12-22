import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filteredProducts } from "../../features/slices/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  const gradientColors = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-yellow-500 via-orange-500 to-red-500",
    "from-green-500 via-teal-500 to-cyan-500",
    "from-pink-500 via-purple-500 to-indigo-500",
    "from-indigo-500 via-blue-500 to-cyan-500",
    "from-red-500 via-yellow-500 to-orange-500",
    "from-emerald-500 via-green-500 to-lime-500",
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          const gradientClass = gradientColors[index % gradientColors.length];
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  className={`bg-gradient-to-r ${gradientClass} hover:bg-transparent duration-300 ease-in-out`}
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
