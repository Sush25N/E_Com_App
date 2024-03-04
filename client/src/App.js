// import React from "react";
// import "./App.css";
// import Main from "./components/main/Main.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { Router, Routes, Route } from "react-router-dom";
// import FilteredProducts from "./components/filteredProducts/FilteredProducts.jsx";
// import SingleProduct from "./components/filteredProducts/SingleProduct.jsx";
// import Login from "./components/login/Login.jsx";
// import { useSelector } from "react-redux";

// function App() {
//   const user = useSelector((state) => state.user.user);
//   const { authUser } = user;
//   console.log("user", user);
//   console.log("authUser", authUser);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={authUser ? <Main /> : <Login />} />
//           {/* <Route path="/login" element={<Login />} /> */}
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

import React from "react";
import "./App.css";
import Main from "./components/main/Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Router, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/filteredProducts/FilteredProducts.jsx";
import SingleProduct from "./components/filteredProducts/SingleProduct.jsx";
import Login from "./components/login/Login.jsx";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user", user);
  console.log("authUser", authUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
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
