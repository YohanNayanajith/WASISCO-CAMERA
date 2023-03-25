import React from "react";
import Marquee from "react-fast-marquee";
import { namesData } from "../../data/nameData";
import "./NameCarousel.css";

const NameCarousel = ({ active }) => {
  return (
    <div>
      {active ? (
        <section className="background-main-color">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(0%, 0%) rotate(7deg)"
            }}
          >
          {/* <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: "100%",
              height: "100%",
            }}
          > */}
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
              {namesData.map((name, id) => (
                <h1 key={id} className="name-carousel">
                  &nbsp;{"— " + name}&nbsp;
                </h1>
              ))}
            </Marquee>
          </div>
          {/* </div> */}
        </section>
      ) : (
        <section>
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
            {namesData.map((name, id) => (
              <h1 key={id} className="name-carousel">
                &nbsp;{"— " + name}&nbsp;
              </h1>
            ))}
          </Marquee>
        </section>
      )}
    </div>
  );
};

export default NameCarousel;
