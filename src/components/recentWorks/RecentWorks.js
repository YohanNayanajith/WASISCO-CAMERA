import React from "react";
import "./RecentWorks.css";
import { recentWorkData } from "../../data/recentWorkData";
import { motion } from "framer-motion";

const RecentWorks = () => {
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
  );
};

export default RecentWorks;
