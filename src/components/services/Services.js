import React from "react";
import "./Services.css";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";
import Gallery from "../gallery/Gallery";

const Services = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
        //   backgroundColor: "red",
        }}
        touch-action="none"
        className="background-main-color"
      >
        <ServiceHeaderLeft header={"SERVICES"} headerNumber={"01"} />
      </div>
      <Gallery />
    </div>
  );
};

export default Services;
