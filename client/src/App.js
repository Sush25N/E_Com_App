// import React from "react";
// import "./App.css";
// import Main from "./components/main/Main.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { Router, Routes, Route } from "react-router-dom";
// import FilteredProducts from "./components/filteredProducts/FilteredProducts.jsx";
// import SingleProduct from "./components/filteredProducts/SingleProduct.jsx";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route
//             path="/filteredProducts/:type"
//             element={<FilteredProducts />}
//           />
//           <Route
//             path="/filteredProducts/:type/:id"
//             element={<SingleProduct />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductsPage from "./components/ProductPage.jsx";
// import FilteredProducts from "./components/filteredProducts/FilteredProducts.jsx";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" component={ProductsPage} />
//         <Route path="/filtered/:type" component={FilteredProducts} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductsPage from "./components/ProductPage";
// import FilteredProducts from "./components/filteredProducts/FilteredProducts";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductsPage />} />
//         <Route path="/filtered/:type" element={<FilteredProducts />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductsPage from "./components/ProductsPage";
// import FilteredProducts from "./components/filteredProducts/FilteredProducts";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductsPage />} />
//         <Route path="/filtered/:type" element={<FilteredProducts />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import ProductsPage from "./components/ProductsPage";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/filtered/:type" element={<FilteredProducts />} />
        <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
