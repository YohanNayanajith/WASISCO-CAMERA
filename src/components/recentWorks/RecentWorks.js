import React from "react";
import "./RecentWorks.css";
import { recentWorkData } from "../../data/recentWorkData";

const RecentWorks = () => {
  const getParticularTags = (tag) => {
    return (
      <div key={tag.id} className="recent-work-tag-tag1">
        {tag}
      </div>
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
      <div className="recent-work-left">
        <div className="recent-work-left-image">
          <img src={imageUrl} alt="recent-work" />
        </div>
      </div>
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
