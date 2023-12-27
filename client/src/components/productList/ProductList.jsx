import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);

  // Fetch products or trigger actions based on your application logic
  useEffect(() => {
    // You can fetch initial products or dispatch other actions here if needed
  }, [dispatch]);

  const handleFilterGender = (gender) => {
    dispatch(filterGender(gender));
  };

  const handleSortByPrice = () => {
    dispatch(sortByPrice());
  };

  const handleFilterByColor = (color) => {
    dispatch(filterByColor(color));
  };

  const handleFilterBySize = (size) => {
    dispatch(filterBySize(size));
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <button onClick={() => handleFilterGender("male")}>Filter Male</button>
      <button onClick={() => handleSortByPrice()}>Sort by Price</button>
      <button onClick={() => handleFilterByColor("red")}>Filter Red</button>
      <button onClick={() => handleFilterBySize("large")}>Filter Large</button>
    </div>
  );
};

export default ProductList;
