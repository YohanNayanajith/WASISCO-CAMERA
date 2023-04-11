import React from "react";
import "./ServiceHeaderLeft.css";
import Typewriter from "typewriter-effect";

const ServiceHeaderLeft = (props) => {
  return (
    <div>
      <div className="service-header-main">
        <div className="service-header-offset"></div>
        <div className="service-header-main-number">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677867835/WASISCO/serviceHeader/Ellipse_22_1_xc66or.png"
            alt="white-eclipse"
          />
          <div>{props.headerNumber}</div>
        </div>
        <div className="service-header-main-content">
          {props.header}
          {/* <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(props.header)
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceHeaderLeft;
