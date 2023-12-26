// // // SearchBar.jsx
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setQuery, setSuggestions } from "../../features/slices/searchSlice";
// import { useNavigate } from "react-router-dom";
// import { storeData } from "../../assets/data/dummyData"; // Adjust the path accordingly

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const history = useNavigate();
//   const query = useSelector((state) => state.search.query);

//   const handleSearch = (event) => {
//     const value = event.target.value;
//     dispatch(setQuery(value));

//     // Fetch suggestions from dummy data based on the partial match of categories and product names
//     const suggestions = storeData.filter(
//       (product) =>
//         product.name.toLowerCase().includes(value.toLowerCase()) ||
//         product.category.toLowerCase().includes(value.toLowerCase())
//     );

//     dispatch(setSuggestions(suggestions));
//   };

//   const handleSuggestionClick = (product) => {
//     // Navigate to the product page using navigate
//     history.push(`/filteredProducts/${product.category}/${product.id}`);

//     // Optionally, clear the search query and suggestions after clicking
//     dispatch(setQuery(""));
//     dispatch(setSuggestions([]));
//   };

//   return (
//     <div className="search-bar-container">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleSearch}
//       />
//       {query && (
//         <ul className="suggestions-list">
//           {suggestions.map((product) => (
//             <li key={product.id} onClick={() => handleSuggestionClick(product)}>
//               <div>
//                 <strong>{product.name}</strong> - {product.category}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
