import React from "react";
import ServiceHeaderRight from "../serviceHeaderRight/ServiceHeaderRight";
import About from "../about/About";
import { isMobile } from "react-device-detect";

const AboutUs = ({ reference, data }) => {
  return (
    <>
      {isMobile ? (
        <div
          style={{
            position: "relative",
            width: "100vw",
            // paddingBottom: "80px"
          }}
          id="container"
          touch-action="none"
          className="background-main-color"
          ref={reference}
        >
          <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
          <About />
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            paddingBottom: "80px",
          }}
          id="container"
          touch-action="none"
          className="background-main-color"
          ref={reference}
        >
          <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
          <About data={data.header} />
        </div>
      )}
    </>
  );
};

export default AboutUs;
