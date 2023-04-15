import React, { useState, useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import './MouseMove.css'
import HoverButton from "../hoverButton/HoverButton";

function limitRange(number, min, max) {
  return Math.min(Math.max(parseInt(number), min), max);
}

function Poly({ children }) {
  const polyRef = useRef(null);
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState({ x: 0, y: 0 });
  const [mouseTimeout, setMouseTimeout] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top } = polyRef.current.getBoundingClientRect();
      const fromCenter = {
        x: polyRef.current.offsetWidth / 2 - (e.clientX - left),
        y:
          polyRef.current.offsetHeight / 2 - (e.clientY - top + window.scrollY),
      };
      setTarget({
        x: limitRange(fromCenter.x, -40, 40),
        y: limitRange(fromCenter.y, -40, 40),
      });
    };

    const handleMouseLeave = () => {
      setTarget({ x: 0, y: 0 });
      setMouseTimeout(
        setTimeout(() => {
          setCurrent({ x: 0, y: 0 });
        }, 2000)
      );
    };

    const render = () => {
      setCurrent((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.1,
        y: prev.y + (target.y - prev.y) * 0.1,
      }));
      console.log(polyRef.current);
      console.log(polyRef.current.querySelector);
      console.log(polyRef.current.querySelector(".poly__link__container"));
      if (polyRef.current && polyRef.current.querySelector) {
        TweenMax.set(polyRef.current.querySelector(".poly__link__container"), {
          x: -current.x,
          y: -current.y,
        });
      }
      requestAnimationFrame(render);
    };

    const polyElement = polyRef.current;
    polyElement.addEventListener("mouseleave", handleMouseLeave);
    polyElement.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(render);

    return () => {
      polyElement.removeEventListener("mouseleave", handleMouseLeave);
      polyElement.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(render);
      clearTimeout(mouseTimeout);
    };
  }, [mouseTimeout, target]);

  return (
    <div ref={polyRef} className="poly">
      {children}
    </div>
  );
}

export default function MouseMove() {
  return (
    <div style={{height:"100vh", width:"100vw", backgroundColor:"black"}}>
      <Poly>
        <a href="#" className="poly__link">
          <div className="poly__link__container">
            <div className="poly__link__container__wrapper">
              {/* <HoverButton /> */}
              Yohan
            </div>
          </div>
        </a>
      </Poly>
    </div>
  );
}
