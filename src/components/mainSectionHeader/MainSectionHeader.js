import React from "react";
import "./MainSectionHeader.css";
import Typewriter from "typewriter-effect";

const MainSectionHeader = ({reference}) => {
  return (
    <section
      // className="background-main-color-with-height"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      ref={reference}
    >
      <div className="main-section-animation"></div>
      <div className="main-section-header-container">
        <div className="main-section-header" style={{zIndex: 99}}>
          Advanced Team ®<br /> Digital Design <br />
          Boutique with Focus <br />
          on Aesthetics
        </div>
        <div className="main-section-header-button" style={{zIndex: 99}}>
          <a href="#">Learn More</a>
        </div>
        <div className="main-section-header-description">
          <div className="main-section-header-content" style={{zIndex: 99}}>
            With many years of experience in digital product development, we
            understand how to create user-friendly and memorable interfaces for
            the leading world companies. Properly and harmoniously, we integrate
            modern technologies into the classical graphic design aesthetics.
          </div>
          <div className="main-section-header-image">
            <img
              src="https://res.cloudinary.com/midefulness/image/upload/v1678112507/WASISCO/mainSection/image_21_dtqt2l.png"
              alt="ball"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSectionHeader;
