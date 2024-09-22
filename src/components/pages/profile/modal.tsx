import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal: React.FC<{
  onClose: () => void;
  onSave: (address: string) => void;
}> = ({ onClose, onSave }) => {
  const [newAddress, setNewAddress] = useState<string>("");

  const handleSave = () => {
    onSave(newAddress);
    setNewAddress("");
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Update Address</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter new address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <div className="flex justify-end space-x-4 mt-4">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
