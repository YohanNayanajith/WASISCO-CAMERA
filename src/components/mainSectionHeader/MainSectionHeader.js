import React from "react";
import "./MainSectionHeader.css";
import Typewriter from "typewriter-effect";

const MainSectionHeader = ({ reference }) => {
  return (
    <section
      // className="background-main-color-with-height"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        // width: "100vw",
        // backgroundColor:"pink",
        // height: "100vh",
      }}
      ref={reference}
    >
      <div className="main-section-animation"></div>
      <div className="main-section-header-container">
        <div className="main-section-header" style={{ zIndex: 99 }}>
          Connettiamo
          <br /> sapori e <br />
          successo
        </div>
        <div className="main-section-header-button" style={{ zIndex: 99 }}>
          <a href="#">Learn More</a>
        </div>
        <div className="main-section-header-description">
          <div className="main-section-header-content" style={{ zIndex: 99 }}>
            Esplora il Foodverso di Wasisco! Il nostro Team di professionisti
            coniuga esperienza, passione, inventiva e conoscenze settoriali per
            proporre soluzioni di marketing e consulenza innovative e ad hoc.
            Entra nel nostro mondo e scopri come possiamo trasformare il tuo
            brand in un simbolo di sapore e rilevanza nel panorama Food &
            Beverage.
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
