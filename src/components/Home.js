import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";
import ThreeFooter from "./footer/ThreeFooter";
import FooterWithThree from "./threeJsModels/FooterWithThree";
import { Link } from "react-scroll";

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
  // Home
  const scrollToDiv = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const mainSection = useRef(); //mainSection
  const services = useRef();
  const recent = useRef();
  const blogs = useRef();
  const about = useRef();
  const contact = useRef();

  return (
    <div>
      <MainSection
        reference={mainSection}
        mainSectionClick={() => scrollToDiv(mainSection)}
        servicesClick={() => scrollToDiv(services)}
        recentClick={() => scrollToDiv(recent)}
        blogsClick={() => scrollToDiv(blogs)}
        aboutClick={() => scrollToDiv(about)}
        contactClick={() => scrollToDiv(contact)}
      />

      {/* <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll> */}
      {/* <VideoPlayer /> */}
      {/* <NameCarousel active={true} /> */}
      {/* <Link to="elementId" smooth={true} duration={500}>
        <VideoPlayer />
      </Link> */}

      <SecondSection active={true} />
      <Services reference={services} />
      <SecondSection active={true} />
      <CardCarousel />
      <RecentWorksService reference={recent} />
      <NameCarousel active={false} />
      <HandShake />
      <Blogs reference={blogs} />
      <AboutUs reference={about} />
      {/* our team */}
      <OurTeam />
      <SecondSection active={false} />
      <ContactService reference={contact} />

      <GetInTouch />
      {/* <Footer /> */}
      {/* <ThreeFooter /> */}
      <FooterWithThree />
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
