import React from "react";
import Marquee from "react-fast-marquee";
import CardCarouselComponent from "./CardCarouselComponent";
import './CardCarousel.css';

const CardCarousel = () => {
  return (
    <div className="card-carousel-background">
      {/* <div style={{ position: "relative" }}> */}
        <div
          style={{
            padding: "60px 0 0"
          }}
        >
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
            play={true}
            direction="left"
            loop={0}
            // gradientColor={[25, 255, 25]}
          >
            <CardCarouselComponent header={"PROJECTS"} number={"200+"} />
            <CardCarouselComponent header={"COUNTRIES"} number={"4"} />
            <CardCarouselComponent header={"EXPERIENCE"} number={"3+"} />
            <CardCarouselComponent header={"PROJECTS"} number={"200+"} />
            <CardCarouselComponent header={"COUNTRIES"} number={"4"} />
            <CardCarouselComponent header={"EXPERIENCE"} number={"3+"} />
            <CardCarouselComponent header={"PROJECTS"} number={"200+"} />
            <CardCarouselComponent header={"COUNTRIES"} number={"4"} />
            <CardCarouselComponent header={"EXPERIENCE"} number={"3+"} />
            <CardCarouselComponent header={"PROJECTS"} number={"200+"} />
            <CardCarouselComponent header={"COUNTRIES"} number={"4"} />
            <CardCarouselComponent header={"EXPERIENCE"} number={"3+"} />
            <CardCarouselComponent header={"PROJECTS"} number={"200+"} />
            <CardCarouselComponent header={"COUNTRIES"} number={"4"} />
            <CardCarouselComponent header={"EXPERIENCE"} number={"3+"} />
            <CardCarouselComponent header={"PROJECTS"} number={"200+"} />
            <CardCarouselComponent header={"COUNTRIES"} number={"4"} />
            <CardCarouselComponent header={"EXPERIENCE"} number={"3+"} />
          </Marquee>
        </div>
      {/* </div> */}
    </div>
  );
};

export default CardCarousel;
