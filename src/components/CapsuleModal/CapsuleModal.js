import React, { useEffect } from "react";
import Modal from "react-modal";

// Modal.setAppElement("page"); // Set app element after mount

const CapsuleModal = ({ isOpen, onRequestClose, children }) => {
  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement("#__next");
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Capsule Form Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          padding: "20px",
        },
      }}
      // className="lg:w-[40%]"
    >
      {children}
      <div className="flex justify-end">
        <button
          onClick={onRequestClose}
          style={{ marginTop: "20px" }}
          className="text-gray bg-[#ebe8e8] py-2 px-5 rounded-sm"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default CapsuleModal;
