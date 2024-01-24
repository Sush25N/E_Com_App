import React from "react";
import "./LogoutModal.css"; // Import the LogoutModal.css for styles

const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <div className={`modal ${isOpen ? "visible" : "hidden"}`}>
      <div className="modal-content bg-white p-6 rounded-md shadow-md">
        <p className="mb-4 text-xl font-semibold">
          Are you sure...! <br />
          You want to logout?
        </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
