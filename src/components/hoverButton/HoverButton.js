import React from "react";
import './HoverButton.css';

const HoverButton = () => {
  return (
    // <div style={{ height: "100vh", width: "100vw", backgroundColor:"black" }}>
    <div style={{ display: 'flex', justifyContent: 'center' }} className="readmore-button-container">
      <div className="v-al readmore-button angle-45">
        {/* <span>Read more about our services</span> */}
        <i className="readmore-button__outer">
          <span className="readmore-button__text">
            <img
              src="https://res.cloudinary.com/midefulness/image/upload/v1681418782/WASISCO/secondSection/readmore-text_i7xmyt.svg"
              alt="Read more about our services"
            />
          </span>
          <span className="readmore-button__ico">
            <svg
              width="30"
              height="40"
              viewBox="0 0 30 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 40C15 40 15 18.9683 15 -9.53674e-07M15 -9.53674e-07C15 13.7026 1 16.2319 1 16.2319M15 -9.53674e-07C15 13.7026 29 16.2319 29 16.2319"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </span>
        </i>
      </div>
    </div>
    // </div>
  );
};

export default HoverButton;
