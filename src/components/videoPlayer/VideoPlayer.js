import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import { Hand } from "../threeJsModels/Hand";
import OverlayHand from "../overlay/OverlayHand";

const VideoPlayer = () => {

  return (
    <section style={{ position:"relative" ,height: '100vh', width: '100vw', backgroundColor: "orange" }} id="container" touch-action="none" className="contact-us-background">
        <OverlayHand />
        <Hand />
    </section>
  );
};

export default VideoPlayer;
