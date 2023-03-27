import React from "react";
import ServiceHeaderRight from "../serviceHeaderRight/ServiceHeaderRight";
import About from "../about/About";
import { isMobile } from "react-device-detect";

const AboutUs = () => {
  return (
    <>
      {isMobile ? (
        <div
          style={{
            position: "relative",
            width: "100vw",
            paddingBottom: "80px"
          }}
          id="container"
          touch-action="none"
          className="background-main-color"
        >
          <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
          <About />
        </div>
      ) : (
        <section
          style={{
            position: "relative"
          }}
          id="container"
          touch-action="none"
          className="background-main-color"
        >
          <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
          <About />
        </section>
      )}
    </>
  );
};

export default AboutUs;
