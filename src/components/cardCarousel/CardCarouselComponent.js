import React from "react";
import "./CardCarousel.css";

const CardCarouselComponent = (props) => {
  return (
    <section className="background-main-color">
      <div className="card-carousel-container">
        <div className="card-carousel-image">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677871535/WASISCO/marquee/Ellipse_176_a3res0.png"
            alt="eclipse"
          />
        </div>
        <div className="card-carousel-header">{props.header}</div>
        <div className="card-carousel-number">{props.number}</div>
      </div>
    </section>
  );
};

export default CardCarouselComponent;
