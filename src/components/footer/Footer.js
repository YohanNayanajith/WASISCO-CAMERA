import React from "react";
import "./Footer.css";

const Footer = ({ reference }) => {
  return (
    <div ref={reference} className="background-main-color">
      <div className="footer-container">
        <div className="footer-address1">
          WASISCO FOOD MARKETING <br />
          VIA AMADEO MODIGLIANI 73 <br />
          50142 <br />
          FIRENZE <br />
          ITALY <br />
          <a href="mailto:INFO@WASISCO.COM">INFO@WASISCO.COM</a>
        </div>
        <div className="footer-address2">
          WASISCO GLOBAL SOLUTIONS <br />
          GEDARA KITTUWA <br />
          PALLEHA PATHTHE <br />
          COLOMBO <br />
          SRI LANKA <br />
          <a href="mailto:INFO@WASISCO.COM">INFO@WASISCO.COM</a>
        </div>
        <div className="footer-social-media">
          <a href="#">FACEBOOK</a>
          <br />
          <a href="#">INSTAGRAM</a>
          <br />
          <a href="#">TIKTOK</a>
          <br />
          <a href="#">LINKEDIN</a>
        </div>
        <div className="footer-address3">
          Business inquiries
          <br />
          <a href="mailto:INFO@WASISCO.COM">INFO@WASISCO.COM</a>
          <br />
          be advanced
        </div>
      </div>
    </div>
  );
};

export default Footer;
