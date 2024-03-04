// import React, { useState } from "react";
// import Navbar from "../navbar/Navbar";
// import Slider from "../slider/Slider";
// import NavigateButtons from "../navigateButtons/NavigateButtons";
// import ProductSection from "../productSection/ProductSection";
// import Footer from "../footer/Footer";
// import ChatBotModal from "../chatbot/ChatBotModal";
// import { createContext } from "react";
// import ReactSwitch from "react-switch";

// export const ThemeContext = createContext(null);

// const Main = () => {
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className="main" id={theme}>
//         <Navbar />
//         <div className="switch">
//           <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
//           <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
//         </div>
//         <Slider />
//         <NavigateButtons />
//         <ChatBotModal />
//         <ProductSection />
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default Main;

// import React, { useState, useEffect } from "react";
// import Navbar from "../navbar/Navbar";
// import Slider from "../slider/Slider";
// import NavigateButtons from "../navigateButtons/NavigateButtons";
// import ProductSection from "../productSection/ProductSection";
// import Footer from "../footer/Footer";
// import ChatBotModal from "../chatbot/ChatBotModal";
// import { createContext } from "react";
// import ReactSwitch from "react-switch";
// import "./main.css"; // Adjust the path accordingly

// export const ThemeContext = createContext(null);

// const Main = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.body.classList.toggle("dark-mode", theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className="main">
//         <Navbar />
//         <div className="switch">
//           <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
//           <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
//         </div>
//         <Slider />
//         <NavigateButtons />
//         <ChatBotModal />
//         <ProductSection />
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import NavigateButtons from "../navigateButtons/NavigateButtons";
import ProductSection from "../productSection/ProductSection";
import Footer from "../footer/Footer";
import ChatBotModal from "../chatbot/ChatBotModal";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import "./main.css"; // Adjust the path accordingly

export const ThemeContext = createContext(null);

const Main = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main">
        <Navbar />
        <div className="switch-container">
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
        <Slider />
        <NavigateButtons />
        <ChatBotModal />
        <ProductSection />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Main;
