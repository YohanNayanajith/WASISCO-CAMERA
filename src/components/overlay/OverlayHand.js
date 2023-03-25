import React from "react";
import Marquee from "react-fast-marquee";
import { contactHeaderData } from "../../data/nameData";
import './Overlay.css'

const OverlayHand = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        // width: "100%",
        // height: "100%",
        // backgroundColor:"pink"
      }}
    >
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={false}
        pauseOnClick={false}
        delay={0}
        play={true}
        direction="left"
        loop={0}
        // gradientColor={[25, 255, 25]}
      >
        {contactHeaderData.map((title, id) => (
          <h1 key={id} className="contact-title-carousel">
            &nbsp;{"— " + title}&nbsp;
          </h1>
        ))}
      </Marquee>
    </div>
  );
};

export default OverlayHand;
