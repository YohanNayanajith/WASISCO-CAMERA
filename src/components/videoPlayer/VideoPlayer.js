import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import NameCarousel from "../nameCarousel/NameCarousel";
import { motion } from "framer-motion";
// import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "yWtFb9LJs3o",
      provider: "youtube",
    },
  ],
};

const VideoPlayer = ({ reference }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prevX, setPrevX] = useState(null);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event) => {
    const currX = event.clientX;
    if (prevX && currX !== prevX) {
      const direction = currX > prevX ? "right" : "left";
      const className = direction === "right" ? "rotate" : "rotate-backward";
      event.target.classList.add(className);
      setTimeout(() => {
        event.target.classList.remove(className);
      }, 100);
    }
    setPrevX(currX);
  };

  return (
    <div
      className="background-main-color d-flex flex-column justify-content-center"
      id="elementId"
      ref={reference}
    >
      <div
        style={{
          color: "white",
          // padding: "300px",
          position: "relative",
          paddingTop: "60px",
          // backgroundColor: "blue",
          height: "100vh",
          width: "100vw",
        }}
      >
        <MDBContainer className="p-4">
          {/* <div className={`box ${isHovered ? "rotate" : ""}`}> */}
          <div class>
            <MDBRow className="d-flex align-items-center justify-content-center">
              <MDBCol lg="9">
                <div className="ratio ratio-16x9">
                  {/* <iframe
                    className="shadow-1-strong rounded"
                    src="../../videos/sample-video.mp4"
                    title="YouTube video"
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699="true"
                    id="388567449"
                  ></iframe> */}
                  <video controls autoPlay loop>
                    <source
                      src="../../videos/sample-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        >
          <NameCarousel active={true} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
          // onMouseOver={handleMouseOver}
          // onMouseLeave={handleMouseLeave}
          // onMouseMove={handleMouseMove}
          className="rotate-3d"
        >
          <div className="example-container">
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <div className="example-container">Full Video</div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
