import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  console.log(width);
  console.log(height);
  return (
    <div className="about-container">
      {/* full ball */}
      <div
        className="about-full-ball-image"
        style={{
          position: "absolute",
          top: (height * 2) / 6,
          left: width * 2.5,
        }}
      >
        <img
          src="https://res.cloudinary.com/midefulness/image/upload/v1679902913/WASISCO/About/image_26_hxyyjk.png"
          alt="Background Ball"
        />
      </div>
      {/* half ball */}
      <div
        className="about-half-full-ball-image"
        style={{
          position: "absolute",
          top: height / 6,
          left: "0",
        }}
      >
        <img
          src="https://res.cloudinary.com/midefulness/image/upload/v1679902911/WASISCO/About/image_25_rfvthy.png"
          alt="Background Ball"
        />
      </div>
      <div className="about-content">
        Every project made by wasisco team is created at the intersection
        between design and technology, making the future — today
      </div>
    </div>
  );
};

export default About;
