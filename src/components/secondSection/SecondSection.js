import React from "react";
import "./SecondSection.css";

const SecondSection = ({ reference, active }) => {
  const imageSection = () => {
    return (
      <div className="container second-section-container">
        <div className="second-section-container-image">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677783910/WASISCO/secondSection/ellipseWithArrow_xhqwkl.png"
            alt="Eclipse"
          />
        </div>
        <div className="second-section-container-content">
          <div>
            With a background in design, We work closely with design focused
            teams to build websites and micro-sites for companies and
            individuals. we have years of experience working and collaborating
            on freelance works and managing all kind of projects.
          </div>
          <div style={{paddingTop:"10px"}}>
            With our experience in Product Designing, we solve product problems
            and build appealing usable web experiences.
          </div>
        </div>
      </div>
    );
  };
  const titleSection = () => {
    return (
      <div className="container second-section-header">
        <div className="justify-content-center second-section-container-second">
          Every project made by wasisco team is created at the intersection
          between design and technology, making the future — today
        </div>
      </div>
    );
  };
  return (
    <section ref={reference} className="background-main-color">
      {active ? (
        <div className="second-section">
          {titleSection()}
          {imageSection()}
        </div>
      ) : (
        <div className="second-section">{imageSection()}</div>
      )}
    </section>
  );
};

export default SecondSection;
