import React, { useEffect } from "react";
import "./RecentWorks.css";
import { recentWorkData } from "../../data/recentWorkData";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import Cursor from "react-cursor-follow";
import ReactHover, { Trigger, Hover } from "react-hover";
import VideoButton from "../videoPlayer/VideoButton";

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: 0,
};

const RecentWorks = () => {
  useEffect(() => {
    ScrollReveal().reveal(".recent-work-left", {
      interval: 20,
      reset: true,
    });

    ScrollReveal().reveal(".recent-work-right", {
      interval: 20,
      reset: true,
    });
  }, []);
  const getParticularTags = (tag) => {
    return (
      <motion.div
        key={tag.id}
        className="recent-work-tag-tag1"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {tag}
      </motion.div>
      // <div key={tag.id} className="recent-work-tag-tag1">
      //   {tag}
      // </div>
    );
  };

  const getParticularContent = (recentWork) => {
    return (
      <div className="recent-work-right">
        <div className="recent-work-right-header">{recentWork.header}</div>
        <div className="recent-work-right-content">
          {recentWork.description}
        </div>
        <div className="recent-work-tag">
          {recentWork.tags.map((tag, index) => {
            return getParticularTags(tag);
          })}
        </div>
        {/* <Cursor
            hollow
            color={"#c24040"}
            // color={colors[i]}
            duration={0.8}
            size={100}
            // custom={true}
            className="cursor-follow-mouse"
          /> */}
      </div>
    );
  };

  const getParticularImage = (imageUrl) => {
    return (
      <motion.div
        className="recent-work-left"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="recent-work-left-image">
          <img src={imageUrl} alt="recent-work" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="background-main-color ">
      <ReactHover options={optionsCursorTrueWithMargin}>
        <Trigger type="trigger">
          <div className="trigger">
            {recentWorkData.map((recentWork, index) => {
              return recentWork.left ? (
                <div key={recentWork.id} className="recent-work-container">
                  {getParticularImage(recentWork.imageUrl)}
                  {getParticularContent(recentWork)}
                </div>
              ) : (
                <div key={recentWork.id} className="recent-work-container">
                  {getParticularContent(recentWork)}
                  {getParticularImage(recentWork.imageUrl)}
                </div>
              );
            })}
          </div>
        </Trigger>
        <Hover type="hover">
          <VideoButton />
        </Hover>
      </ReactHover>
    </div>
  );
};

export default RecentWorks;
