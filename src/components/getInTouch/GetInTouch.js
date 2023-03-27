import React from "react";
import "./GetInTouch.css";
import HoverArrowImage from "../hoverArrowImage/HoverArrowImage";

const GetInTouch = ({ reference }) => {
  return (
    <div ref={reference} className="background-main-color">
      <div className="get-in-touch-container">
        <div className="get-in-touch-left">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1678096233/WASISCO/getInTouch/Black_eygvna.png"
            alt="video"
          />
        </div>
        <div className="get-in-touch-right">
          <div className="get-in-touch-right-header">Get in Touch!</div>
          <div className="get-in-touch-right-description">
            We keep looking towards the future, at the same time recognizing
            that behavior change takes place only with a clear awareness of the
            current state. Before we get down to the design, our team conducts a
            thorough audit of how your audience feels. Then we implement an
            emotional solution,
          </div>
          <div className="get-in-touch-right-arrow-image">
            <HoverArrowImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
