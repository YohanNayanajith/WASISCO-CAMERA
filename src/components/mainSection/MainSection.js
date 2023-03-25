import React, { useRef, useState } from "react";
import "./MainSection.css";
import Typewriter from "typewriter-effect";
import NavBar from "../navbar/Navbar";
import Logo from "../../images/logo/wasisco.png";
import MainSectionHeader from "../mainSectionHeader/MainSectionHeader";

const MainSection = ({
  reference,
  mainSectionClick,
  wasiscoImageSectionClick,
  timelineClick,
  praposalSubmissionClick,
  whatTheySayClick,
  sponsersClick,
  pricesClick,
  contactClick,
}) => {
  const [display, setdisplay] = useState(false);

  const displayNavBar = () => {
    if (window.scrollY > 0) {
      setdisplay(true);
    } else if (window.scrollY <= 0) {
      setdisplay(false);
    }
  };

  window.addEventListener("scroll", displayNavBar);

  return (
    <div ref={reference}>
      <div className="main-section-cnt">
        <NavBar
          mainSectionClick={mainSectionClick}
          wasiscoImageSectionClick={wasiscoImageSectionClick}
          timelineClick={timelineClick}
          praposalSubmissionClick={praposalSubmissionClick}
          whatTheySayClick={whatTheySayClick}
          sponsersClick={sponsersClick}
          pricesClick={pricesClick}
          display={display}
          contactClick={contactClick}
        />
        <MainSectionHeader />
      </div>
    </div>
  );
};

export default MainSection;
