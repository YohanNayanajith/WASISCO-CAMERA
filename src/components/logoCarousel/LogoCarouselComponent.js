import React from "react";
import "./LogoCarousel.css";

const LogoCarouselComponent = (props) => {
  return (
    <div>
      <div className="card-carousel-container">
        <div className="logo-carousel-image">
          <img src={props.image} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LogoCarouselComponent;
