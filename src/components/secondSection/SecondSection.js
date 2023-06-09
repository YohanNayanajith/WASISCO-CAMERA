import React from "react";
import "./SecondSection.css";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import MouseMove from "../mouseMove/MouseMove";
import HoverButton from "../hoverButton/HoverButton";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const SecondSection = ({ active, data }) => {
  useEffect(() => {
    ScrollReveal().reveal(".second-section", {
      interval: 20,
      reset: true,
    });
  }, []);
  const imageSection = () => {
    return (
      <div className="container second-section-container">
        <div className="second-section-container-image">
          <HoverButton direction="center" />
        </div>
        <div className="second-section-container-content">
          <div>{data.firstLayer}</div>
          {data.secondLayer ? (
            <div style={{ paddingTop: "10px" }}>{data.secondLayer}</div>
          ) : (
            <></>
          )}
          {/* <motion.div>
            <motion.svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="30"
                stroke="#ffffff"
                variants={draw}
                custom={2}
              />
            </motion.svg>
          </motion.div> */}
        </div>
      </div>
    );
  };
  const titleSection = () => {
    return (
      <div className="container second-section-header">
        <div className="justify-content-center second-section-container-second">
          {data.header}
        </div>
      </div>
    );
  };
  return (
    <>
      {isMobile ? (
        <div
          className="background-main-color"
          style={{ paddingBottom: "100px" }}
        >
          {active ? (
            <div className="second-section">
              {titleSection()}
              {imageSection()}
            </div>
          ) : (
            <div className="second-section">{imageSection()}</div>
          )}
        </div>
      ) : (
        <div className="background-main-color">
          {active ? (
            <div className="second-section">
              {titleSection()}
              {imageSection()}
            </div>
          ) : (
            <div className="second-section" style={{ paddingTop: "80px" }}>
              {imageSection()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SecondSection;
