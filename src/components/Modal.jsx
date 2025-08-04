import React from "react";

const Modal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={imageUrl} alt="Enlarged cat" />
    </div>
  );
};

export default Modal;
