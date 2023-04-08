import React from "react";
import "./Services.css";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";
import Gallery from "../gallery/Gallery";

const Services = ({ reference }) => {
  return (
    <div className="background-main-color" ref={reference} >
    {/* <div className="background-main-color-services" ref={reference} > */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          //   backgroundColor: "red",
        }}
        touch-action="none"
      >
        <ServiceHeaderLeft header={"SERVICES"} headerNumber={"01"} />
      </div>
      <Gallery />
    </div>
  );
};

export default Services;
