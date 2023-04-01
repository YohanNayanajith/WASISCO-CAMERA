import React from "react";
import "./Team.css";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div
      className="our-team-background"
      style={{ position: "relative", paddingTop:"80px" }}
    >
      {/* <div style={{ position: "relative", height: "100vh" }}>
        <div className="our-team-name-center">
          <div>
            OUR TEAM
            <br /> WASISCO
          </div>
        </div>
      </div> */}
      {/* <div class="ball-container">
        <div class="ball"></div>
        <div class="color-ball red"></div>
        <div class="color-ball orange"></div>
        <div class="color-ball yellow"></div>
        <div class="color-ball green"></div>
        <div class="color-ball blue"></div>
      </div> */}
      <div className="our-team-container">
        <div className="our-team-container-detail">
          <div className="our-team-container-detail-header">OUR TEAM</div>
          <div className="our-team-container-detail-content">WASISCO</div>
        </div>

        <div className="ball-container">
          <motion.div
            className="color-ball color-ball-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ></motion.div>
          <motion.div
            className="color-ball color-ball-2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ></motion.div>
          <motion.div
            className="color-ball color-ball-3"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ></motion.div>
          <motion.div
            className="color-ball color-ball-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ></motion.div>
          <motion.div
            className="color-ball color-ball-5"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ></motion.div>
          <motion.div
            className="color-ball color-ball-6"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ></motion.div>
          {/* <div class="color-ball color-ball-1"></div> */}
          {/* <div class="color-ball color-ball-2"></div>
          <div class="color-ball color-ball-3"></div>
          <div class="color-ball color-ball-4"></div>
          <div class="color-ball color-ball-5"></div>
          <div class="color-ball color-ball-6"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
