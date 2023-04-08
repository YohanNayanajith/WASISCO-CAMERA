import React from "react";
import "./HandShake.css";
import { isMobile } from "react-device-detect";

const HandShake = () => {
  return (
    <>
      {isMobile ? (
        <div className="our-team-background">
          <div className="hand-shake-container">
            <div className="hand-shake-image">
              <img
                // src="https://res.cloudinary.com/midefulness/image/upload/v1678091923/WASISCO/handShake/image_24_mjtnlp.png"
                src="https://res.cloudinary.com/midefulness/image/upload/v1680995299/WASISCO/handShake/Handshake_gesture_3d_cartoon_style_icon_Converted_ub3foh.png"
                alt="hand-shake"
              />
            </div>
            <div className="hand-shake-content">
              WE WORK <span>SYNERGY</span> WITH YOU!
            </div>
          </div>
        </div>
      ) : (
        <div className="our-team-background">
          <div className="hand-shake-container">
            <div className="hand-shake-image">
              <img
                src="https://res.cloudinary.com/midefulness/image/upload/v1680995299/WASISCO/handShake/Handshake_gesture_3d_cartoon_style_icon_Converted_ub3foh.png"
                alt="hand-shake"
              />
            </div>
            <div className="hand-shake-content">
              WE WORK <span>SYNERGY</span> WITH YOU!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HandShake;
