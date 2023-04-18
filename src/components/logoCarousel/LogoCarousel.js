import React from "react";
import Marquee from "react-fast-marquee";
import CardCarouselComponent from "./LogoCarouselComponent";
import { logoImages } from "../../data/logos";
import './LogoCarousel.css';

const LogoCarousel = () => {
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
            speed={70}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
            play={true}
            direction="left"
            loop={0}
            // gradientColor={[25, 255, 25]}
          >
            <CardCarouselComponent image={logoImages[0]} />
            <CardCarouselComponent image={logoImages[1]} />
            <CardCarouselComponent image={logoImages[2]} />
            <CardCarouselComponent image={logoImages[3]} />
            <CardCarouselComponent image={logoImages[0]} />
            <CardCarouselComponent image={logoImages[1]} />
            <CardCarouselComponent image={logoImages[2]} />
            <CardCarouselComponent image={logoImages[3]} />
            <CardCarouselComponent image={logoImages[0]} />
            <CardCarouselComponent image={logoImages[1]} />
            <CardCarouselComponent image={logoImages[2]} />
            <CardCarouselComponent image={logoImages[3]} />
            <CardCarouselComponent image={logoImages[0]} />
            <CardCarouselComponent image={logoImages[1]} />
            <CardCarouselComponent image={logoImages[2]} />
            <CardCarouselComponent image={logoImages[3]} />
            <CardCarouselComponent image={logoImages[0]} />
            <CardCarouselComponent image={logoImages[1]} />
            <CardCarouselComponent image={logoImages[2]} />
            <CardCarouselComponent image={logoImages[3]} />
          </Marquee>
        </div>
      {/* </div> */}
    </div>
  );
};

export default LogoCarousel;
