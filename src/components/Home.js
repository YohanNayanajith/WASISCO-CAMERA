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
import BackToTop from "./backToTop/BackToTop";
import {
  firstContent,
  secondContent,
  thirdContent,
} from "../data/secondSectionData";
import { aboutContentData } from "../data/aboutContent";
import LogoCarousel from "./logoCarousel/LogoCarousel";
import MainSection from "./mainSection/MainSection";

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

  // const [scrollTimeout, setScrollTimeout] = useState(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   clearTimeout(scrollTimeout);
  //   setScrollTimeout(
  //     setTimeout(() => {
  //       const currentPosition = window.pageYOffset;
  //       const targetPosition =
  //         Math.round(currentPosition / window.innerHeight) * window.innerHeight;
  //       const distance = targetPosition - currentPosition;
  //       const duration = Math.abs(distance) / 3;
  //       const startTime = performance.now();

  //       function animateScroll(currentTime) {
  //         const elapsedTime = currentTime - startTime;
  //         const position = easeInOutCubic(
  //           elapsedTime,
  //           currentPosition,
  //           distance,
  //           duration
  //         );

  //         window.scrollTo(0, position);

  //         if (elapsedTime < duration) {
  //           requestAnimationFrame(animateScroll);
  //         }
  //       }

  //       requestAnimationFrame(animateScroll);
  //     }, 100)
  //   );
  // };

  // function easeInOutCubic(t, b, c, d) {
  //   if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
  //   return (c / 2) * ((t -= 2) * t * t + 2) + b;
  // }

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

      <SecondSection active={true} data={firstContent} />
      {/* <MouseMove /> */}
      {/* <HoverButton /> */}
      <Services reference={services} />
      <SecondSection active={true} data={secondContent} />
      <CardCarousel />
      <RecentWorksService reference={recent} />
      {/* <NameCarousel active={false} /> */}
      <LogoCarousel />
      <HandShake />
      <Blogs reference={blogs} />
      <AboutUs reference={about} data={aboutContentData} />
      {/* our team */}
      <OurTeam />
      <SecondSection active={false} data={thirdContent} />
      <ContactService reference={contact} />

      <GetInTouch />
      {/* <Footer /> */}
      {/* <ThreeFooter /> */}
      <BackToTop />
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
