import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minHeight: "200px",
      width: "50%"
    },
  };
 function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn btn-success">Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>

      </Modal>
    </div>
  );
}

export default ModalPage