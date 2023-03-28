import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";
const MainSection = React.lazy(() => import("./mainSection/MainSection"));
const VideoPlayer = React.lazy(() => import("./videoPlayer/VideoPlayer"));
const ContactService = React.lazy(() =>
  import("./contactService/ContactService")
);
const NameCarousel = React.lazy(() => import("./nameCarousel/NameCarousel"));
const SecondSection = React.lazy(() => import("./secondSection/SecondSection"));
const Services = React.lazy(() => import("./services/Services"));
const CardCarousel = React.lazy(() => import("./cardCarousel/CardCarousel"));
const RecentWorksService = React.lazy(() =>
  import("./recentWorkService/RecentWorksService")
);
const HandShake = React.lazy(() => import("./handShake/HandShake"));
const GetInTouch = React.lazy(() => import("./getInTouch/GetInTouch"));
const Footer = React.lazy(() => import("./footer/Footer"));
const AboutUs = React.lazy(() => import("./aboutUs/AboutUs"));
const Blogs = React.lazy(() => import("./blogs/Blogs"));
const OurTeam = React.lazy(() => import("./ourTeam/OurTeam"));

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

      {/* <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll> */}
      {/* <VideoPlayer /> */}
      <NameCarousel active={true} />
      <VideoPlayer />
      <SecondSection reference={secondSection} active={true} />
      <Services />
      <SecondSection reference={secondSection} active={true} />
      <CardCarousel />
      <RecentWorksService />
      <NameCarousel active={false} />
      <HandShake />
      <Blogs />
      <AboutUs />
      {/* our team */}
      {/* <OurTeam /> */}
      <SecondSection reference={secondSection} active={false} />
      <ContactService />

      <GetInTouch />
      <Footer reference={footer} />
      {/* </Scroll> */}
      {/* <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
          </Scroll> */}
      {/* </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas> */}
    </div>
  );
};

export default Home;
