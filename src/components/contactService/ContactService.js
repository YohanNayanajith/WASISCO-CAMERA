import React from "react";
import "./ContactService.css";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";
import OverlayHand from "../overlay/OverlayHand";
import { Hand } from "../threeJsModels/Hand";

const ContactService = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
      id="container"
      touch-action="none"
      className="contact-us-background"
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          // transform: "translate(-50%, -50%)",
          zIndex: 99,
          width: "100%",
          //   height: "100%",
          // backgroundColor:"pink"
        }}
      >
        <ServiceHeaderLeft header={"CONTACT"} headerNumber={"05"} />
      </div>

      <OverlayHand />
      <Hand />
    </section>
  );
};

export default ContactService;
