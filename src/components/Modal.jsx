import React from "react";

// Modal component shows an enlarged image when imageUrl is provided
// onClose is called when the user clicks outside the image or on the close icon
const Modal = ({ imageUrl, onClose }) => {
  // If no image URL is passed, do not render anything
  if (!imageUrl) return null;

  return (
    // Modal overlay; clicking it triggers the onClose callback
    <div className="modal" onClick={onClose}>
      {/* Close icon (× symbol) */}
      <span className="close">&times;</span>

      {/* Enlarged image shown inside the modal */}
      <img className="modal-content" src={imageUrl} alt="Enlarged cat" />
    </div>
  );
};

export default Modal;
