import React from "react";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import NavigateButtons from "../navigateButtons/NavigateButtons";
import ProductSection from "../productSection/ProductSection";
import Footer from "../footer/Footer";
import ChatBotModal from "../chatbot/ChatBotModal";

const Main = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ChatBotModal />
      <ProductSection />
      <Footer />
    </>
  );
};

export default Main;
