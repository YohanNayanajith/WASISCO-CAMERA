import React, { useRef, useState } from "react";
import "./MainSection.css";
import Typewriter from "typewriter-effect";
import NavBar from "../navbar/Navbar";
import Logo from "../../images/logo/wasisco.png";
import MainSectionHeader from "../mainSectionHeader/MainSectionHeader";

const MainSection = ({
  reference,
  mainSectionClick,
  servicesClick,
  recentClick,
  blogsClick,
  aboutClick,
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
    <section>
      <div className="main-section-cnt">
        <NavBar
          mainSectionClick={mainSectionClick}
          servicesClick={servicesClick}
          recentClick={recentClick}
          blogsClick={blogsClick}
          aboutClick={aboutClick}
          display={display}
          contactClick={contactClick}
        />
        <MainSectionHeader reference={reference} />
      </div>
    </section>
  );
};

export default MainSection;
