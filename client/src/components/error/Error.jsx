import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="grid grid-cols-1 h-screen items-center justify-items-center">
      <div className="w-[96]">
        <Alert color="red" className="text-xl font-inter font-bold">
          <p>Sorry, No Products match your filter search....🥲</p>
          <p>Clear filter and try again 😀</p>
        </Alert>
      </div>
    </div>
  );
};

export default Error;
