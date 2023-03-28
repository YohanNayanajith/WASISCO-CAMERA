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

const VideoPlayer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const src = "https://www.youtube.com/embed/d-f1TTE6WZg?list=RD4g7wxrjWBoA";
  return (
    <div className="background-main-color d-flex flex-column justify-content-center">
      <div
        style={{
          color: "white",
          // padding: "300px",
          position: "relative",
          paddingTop: "60px",
          // backgroundColor:"blue"
        }}
      >
        <MDBContainer className="p-4">
          <div className="">
            <MDBRow className="d-flex align-items-center justify-content-center">
              <MDBCol lg="9">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    title="YouTube video"
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699="true"
                    id="388567449"
                    // style={{
                    //   position: "absolute",
                    //   top: "50%",
                    //   left: "50%",
                    //   transform: "translate(-50%, -50%)",
                    //   width: "100%",
                    //   height: "100%",
                    // }}
                  ></iframe>
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
