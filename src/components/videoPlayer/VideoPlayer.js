import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import { Hand } from "../threeJsModels/Hand";
import OverlayHand from "../overlay/OverlayHand";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";

const VideoPlayer = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor: "orange",
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
          zIndex: 9999,
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

export default VideoPlayer;
