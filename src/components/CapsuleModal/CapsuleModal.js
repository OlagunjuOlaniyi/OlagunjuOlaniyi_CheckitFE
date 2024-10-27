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
          width: "400px",
          padding: "20px",
        },
      }}
    >
      {children}
      <button onClick={onRequestClose} style={{ marginTop: "20px" }}>
        Close
      </button>
    </Modal>
  );
};

export default CapsuleModal;