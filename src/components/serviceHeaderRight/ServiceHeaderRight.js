import React from "react";
import "./ServiceHeaderRight.css";
import Typewriter from "typewriter-effect";

const ServiceHeaderRight = (props) => {
  return (
    <section className="background-main-color">
      <div className="service-header-main-right">
        <div className="service-header-main-content-right">
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(props.header)
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div className="service-header-main-number-right">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677867835/WASISCO/serviceHeader/Ellipse_22_1_xc66or.png"
            alt="white-eclipse"
          />
          <div>{props.headerNumber}</div>
        </div>
        <div className="service-header-offset-right"></div>
      </div>
    </section>
  );
};

export default ServiceHeaderRight;
