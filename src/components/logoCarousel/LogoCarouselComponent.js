import React from "react";
import "./LogoCarousel.css";

const LogoCarouselComponent = (props) => {
  return (
    <div>
      <div className="card-carousel-container">
        <div className="card-carousel-image">
          <img src={props.image} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LogoCarouselComponent;
