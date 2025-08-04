import React from "react";

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index} onClick={() => onImageClick(img.url)}>
          <img src={img.url} alt="Random cat" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
