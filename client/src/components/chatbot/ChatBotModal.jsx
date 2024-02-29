// import React, { useState } from "react";
// import ChatBot from "react-simple-chatbot";
// import { MessagesSquare, X } from "lucide-react";

// const ChatBotModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const steps = [
//     {
//       id: "Greet",
//       message: "Hello! Welcome to Shopping_Karo. How can I assist you today?",
//       trigger: "AskCategory",
//     },
//     {
//       id: "AskCategory",
//       message: "Are you looking for something specific? Choose a category.",
//       trigger: "CategoryOptions",
//     },
//     {
//       id: "CategoryOptions",
//       options: [
//         { value: "Electronics", label: "Electronics", trigger: "Electronics" },
//         { value: "Clothing", label: "Clothing", trigger: "Clothing" },
//         { value: "HomeDecor", label: "Home Decor", trigger: "HomeDecor" },
//       ],
//     },
//     {
//       id: "Electronics",
//       message:
//         "Great! Explore our latest electronics. What are you interested in?",
//       trigger: "ElectronicsOptions",
//     },
//     {
//       id: "ElectronicsOptions",
//       options: [
//         { value: "Laptops", label: "Laptops", trigger: "ShowProducts" },
//         { value: "Smartphones", label: "Smartphones", trigger: "ShowProducts" },
//         // Add more options based on the available products in Electronics
//       ],
//     },
//     {
//       id: "Clothing",
//       message:
//         "Awesome! Check out our trendy clothing. What type are you looking for?",
//       trigger: "ClothingOptions",
//     },
//     {
//       id: "ClothingOptions",
//       options: [
//         { value: "T-Shirts", label: "T-Shirts", trigger: "ShowProducts" },
//         { value: "Jeans", label: "Jeans", trigger: "ShowProducts" },
//         // Add more options based on the available products in Clothing
//       ],
//     },
//     {
//       id: "HomeDecor",
//       message:
//         "Discover stunning home decor items. What are you searching for?",
//       trigger: "HomeDecorOptions",
//     },
//     {
//       id: "HomeDecorOptions",
//       options: [
//         { value: "Furniture", label: "Furniture", trigger: "ShowProducts" },
//         {
//           value: "Decorative Accents",
//           label: "Decorative Accents",
//           trigger: "ShowProducts",
//         },
//         // Add more options based on the available products in Home Decor
//       ],
//     },
//     {
//       id: "ShowProducts",
//       message: "Here are some popular products. Click on them for details.",
//       trigger: "EndChat",
//     },
//     {
//       id: "EndChat",
//       message:
//         "If you have more questions or need assistance, feel free to ask. Enjoy shopping!",
//       trigger: "AskContactOption",
//     },
//     {
//       id: "AskContactOption",
//       message: "Would you like to get in touch with us?",
//       trigger: "ContactOptions",
//     },
//     {
//       id: "ContactOptions",
//       options: [
//         { value: "Call", label: "Call", trigger: "Call" },
//         { value: "Chat", label: "Chat", trigger: "Chat" },
//       ],
//     },
//     {
//       id: "Call",
//       message:
//         "Our team is ready to assist you over the phone. Click 'Call' to connect.",
//       end: true,
//     },
//     {
//       id: "Chat",
//       message:
//         "Chat with our team for instant assistance. Click 'Chat' to start.",
//       end: true,
//     },
//   ];

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed right-4 bottom-4">
//       <button
//         className="bg-blue-500 text-white rounded-full p-2 focus:outline-none flex items-center"
//         onClick={toggleChat}
//       >
//         {isOpen ? (
//           <>
//             <X className="w-6 h-6 mr-2" />
//             Close
//           </>
//         ) : (
//           <>
//             <MessagesSquare className="w-6 h-6 mr-2" />
//             Chat
//           </>
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute right-4 bottom-16">
//           <div className="w-96 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
//             <ChatBot steps={steps} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBotModal;

import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { MessagesSquare, X } from "lucide-react";

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: "Greet",
      message: "Hello! Welcome to Shopping_Karo. How can I assist you today?",
      trigger: "AskCategory",
    },
    {
      id: "AskCategory",
      message: "Are you looking for something specific? Choose a category.",
      trigger: "CategoryOptions",
    },
    {
      id: "CategoryOptions",
      options: [
        { value: "Electronics", label: "Electronics", trigger: "Electronics" },
        { value: "Clothing", label: "Clothing", trigger: "Clothing" },
        { value: "HomeDecor", label: "Home Decor", trigger: "HomeDecor" },
      ],
    },
    {
      id: "Electronics",
      message:
        "Great! Explore our latest electronics. What are you interested in?",
      trigger: "ElectronicsOptions",
    },
    {
      id: "ElectronicsOptions",
      options: [
        { value: "Laptops", label: "Laptops", trigger: "ShowProducts" },
        { value: "Smartphones", label: "Smartphones", trigger: "ShowProducts" },
        // Add more options based on the available products in Electronics
      ],
    },
    {
      id: "Clothing",
      message:
        "Awesome! Check out our trendy clothing. What type are you looking for?",
      trigger: "ClothingOptions",
    },
    {
      id: "ClothingOptions",
      options: [
        { value: "T-Shirts", label: "T-Shirts", trigger: "ShowProducts" },
        { value: "Jeans", label: "Jeans", trigger: "ShowProducts" },
        // Add more options based on the available products in Clothing
      ],
    },
    {
      id: "HomeDecor",
      message:
        "Discover stunning home decor items. What are you searching for?",
      trigger: "HomeDecorOptions",
    },
    {
      id: "HomeDecorOptions",
      options: [
        { value: "Furniture", label: "Furniture", trigger: "ShowProducts" },
        {
          value: "Decorative Accents",
          label: "Decorative Accents",
          trigger: "ShowProducts",
        },
        // Add more options based on the available products in Home Decor
      ],
    },
    {
      id: "ShowProducts",
      message: "Here are some popular products. Click on them for details.",
      trigger: "EndChat",
    },
    {
      id: "EndChat",
      message:
        "If you have more questions or need assistance, feel free to ask. Enjoy shopping!",
      trigger: "AskContactOption",
    },
    {
      id: "AskContactOption",
      message: "Would you like to get in touch with us?",
      trigger: "ContactOptions",
    },
    {
      id: "ContactOptions",
      options: [
        { value: "Call", label: "Call", trigger: "Call" },
        { value: "Chat", label: "Chat", trigger: "Chat" },
      ],
    },
    {
      id: "Call",
      message:
        "Our team is ready to assist you over the phone. Click 'Call' to connect.",
      end: true,
    },
    {
      id: "Chat",
      message:
        "Chat with our team for instant assistance. Click 'Chat' to start.",
      end: true,
    },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-8 bottom-10">
      <button
        className="bg-blue-500 text-white rounded-full p-6 focus:outline-none flex items-center"
        onClick={toggleChat}
      >
        {isOpen ? (
          <>
            <X className="w-6 h-6 mr-2" />
            Close
          </>
        ) : (
          <>
            <MessagesSquare className="w-6 h-6 mr-2" />
            Chat
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-4 bottom-16">
          <div className="w-96 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            <ChatBot steps={steps} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotModal;
