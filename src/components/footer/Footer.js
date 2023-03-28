import React from "react";
import "./Footer.css";

const Footer = ({ reference }) => {
  return (
    <div ref={reference} className="background-main-color">
      <div className="footer-container">
        <div className="footer-address1">
          Heroes from Ukraine <br />
          Main Office
          <br />
          Dnipro, 49000
          <br />
          <a href="https://advanced.team/">hello@advanced.team</a>
        </div>
        <div className="footer-address2">
          Heroes from Ukraine <br />
          Main Office
          <br />
          Dnipro, 49000
          <br />
          <a href="https://advanced.team/">hello@advanced.team</a>
        </div>
        <div className="footer-social-media">
          <a href="#">Facebook</a>
          <br />
          <a href="#">Instagram</a>
          <br />
          <a href="#">Dribble</a>
          <br />
          <a href="#">Behance</a>
        </div>
        <div className="footer-address3">
          Business inquiries
          <br />
          <a href="https://advanced.team/">hello@advanced.team</a>
          <br />
          be advanced
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
