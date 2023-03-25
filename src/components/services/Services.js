import React from "react";
import "./Services.css";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";
import Gallery from "../gallery/Gallery";

const Services = () => {
  return (
    <div>
      <section
        style={{
          position: "relative",
          height: "30vh",
          width: "100vw",
        //   backgroundColor: "red",
        }}
        touch-action="none"
        className="background-main-color-with-height"
      >
        <ServiceHeaderLeft header={"SERVICES"} headerNumber={"01"} />
      </section>
      <Gallery />
    </div>
  );
};

export default Services;
