import React from "react";

// Gallery component receives an array of images and a click handler for opening the modal
const Gallery = ({ images, onImageClick }) => {
  return (
    // Main gallery container styled as a grid
    <div className="gallery">
      {images.map((img, index) => (
        // Each image is wrapped in a clickable div
        <div key={index} onClick={() => onImageClick(img.url)}>
          {/* Display the cat image */}
          <img src={img.url} alt="Random cat" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
