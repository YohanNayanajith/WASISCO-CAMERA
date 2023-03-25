import React from "react";
import "./Gallery.css";

const GalleryCardComponent = ({ index, image }) => {
  return (
    <section className="background-main-color">
      <div className="gallery-card-component-container">
        <img key={index} src={image} alt="gallery" />
      </div>
    </section>
  );
};

export default GalleryCardComponent;
