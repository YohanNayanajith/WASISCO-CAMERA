import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import NameCarousel from "../nameCarousel/NameCarousel";
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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const src = "https://www.youtube.com/embed/d-f1TTE6WZg?list=RD4g7wxrjWBoA";
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
          <div className="">
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
                    <source src="../../videos/sample-video.mp4" type="video/mp4" />
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
      </div>
    </div>
  );
};

export default VideoPlayer;
