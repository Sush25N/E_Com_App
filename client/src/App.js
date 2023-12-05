import React from "react";
import "./App.css";
import Main from "./components/main/Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Router, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/filteredProducts/FilteredProducts.jsx";
import SingleProduct from "./components/filteredProducts/SingleProduct.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
