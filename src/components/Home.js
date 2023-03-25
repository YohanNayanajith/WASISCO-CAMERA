import React, { useEffect, useRef, useState } from "react";
import MainSection from "./mainSection/MainSection";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import ContactService from "./contactService/ContactService";
import NameCarousel from "./nameCarousel/NameCarousel";
import SecondSection from "./secondSection/SecondSection";

const Home = () => {
  const scrollToDiv = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const mainSection = useRef();
  const videoPlayer = useRef();
  const timeline = useRef();
  const praposalSubmission = useRef();
  const whatTheySay = useRef();
  const sponsers = useRef();
  const prices = useRef();
  const contact = useRef();
  const secondSection = useRef();

  const getInTouch = useRef();
  const footer = useRef();
  return (
    <div>
      <MainSection
        reference={mainSection}
        mainSectionClick={() => scrollToDiv(mainSection)}
        videoPlayerClick={() => scrollToDiv(videoPlayer)}
        timelineClick={() => scrollToDiv(timeline)}
        praposalSubmissionClick={() => scrollToDiv(praposalSubmission)}
        whatTheySayClick={() => scrollToDiv(whatTheySay)}
        sponsersClick={() => scrollToDiv(sponsers)}
        pricesClick={() => scrollToDiv(prices)}
        contactClick={() => scrollToDiv(contact)}
      />

      {/* <VideoPlayer /> */}
      <NameCarousel active={true} />
      <SecondSection reference={secondSection} active={true} />
      <ContactService />
    </div>
  );
};

export default Home;
