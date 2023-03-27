import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
// import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "yWtFb9LJs3o",
      provider: "youtube"
    }
  ]
};

const VideoPlayer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const src = "https://www.youtube.com/embed/d-f1TTE6WZg?list=RD4g7wxrjWBoA";
  return (
    <section className="background-main-color-with-height">
      <div
        style={{
          color: "white",
          // padding: "300px",
        }}
      >
        {/* <Plyr source={videoSrc} /> */}
      </div>
    </section>
  );
};

export default VideoPlayer;
