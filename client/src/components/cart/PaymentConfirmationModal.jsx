import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const PaymentConfirmationModal = ({ product }) => {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    // Trigger the confetti animation when the component mounts
    setConfetti(true);

    // Set a timeout to stop the confetti after a certain duration
    const timeoutId = setTimeout(() => {
      setConfetti(false);
    }, 15000); // Stop confetti after 5 seconds (adjust as needed)

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 p-6 mx-40">
      <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 w-full mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between mb-1">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {product.name}
          </p>
          <span className="ml-2 font-bold">Product Count: 1</span>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {product.price}₹
          </p>
        </div>
        <div className="flex justify-between p-6 pt-4">
          <h1 className="font-bold">Amount Paid: {product.totalPrice}₹</h1>
          <p className="font-bold">Total Count: {product.amount}</p>
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>Cheers : 🍻🍺</div>
          <div style={{ fontWeight: "bold" }}>
            Payment Done Successfully 🎉🎉✅✅🎊🎊
          </div>
          {confetti && <Confetti />}
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;
