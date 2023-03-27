import React from "react";
import ServiceHeaderRight from "../serviceHeaderRight/ServiceHeaderRight";
import About from "../about/About";

const AboutUs = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
      id="container"
      touch-action="none"
      className="background-main-color"
    >
      <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
      <About />
    </section>
  );
};

export default AboutUs;
