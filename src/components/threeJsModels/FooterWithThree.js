import React from "react";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";
import ThreeFooter from "../footer/ThreeFooter";
import Footer from "../footer/Footer";

const FooterWithThree = ({ reference }) => {
  return (
    <div
      style={{
        position: "relative",
        // height: "100vh",
        // width: "100vw",
      }}
      id="container"
      touch-action="none"
      // className="contact-us-background"
      ref={reference}
    >
      {/* <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "100%",
          height: "100%",
          // backgroundColor:"pink"
        }}
      >
        
      </div> */}
      <Footer />
      <ThreeFooter />
      <div
        className="text-center p-3"
        style={{ backgroundColor: "black", width: "100vw" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://www.linkedin.com/in/yohan-nayanajith/">
          Yohan Nayanajith
        </a>
      </div>
    </div>
  );
};

export default FooterWithThree;
