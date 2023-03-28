import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Home from "./components/Home";
import {
  ClipLoader,
  CircleLoader,
  RingLoader,
  ScaleLoader,
  HashLoader,
} from "react-spinners";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showDust, setShowDust] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowDust(true);
  };

  const handleMouseLeave = () => {
    setShowDust(false);
  };

  return (
    <div className="app">
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader color={"#902E8E"} loading={loading} size={200} />
        </div>
      ) : (
        <>
          <AnimatedCursor
            color="255,255,255"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
              border: "3px solid #fff",
              zIndex:9999
            }}
          />
          <div
            //   className="background-main-color-with-height"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="cursor"
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              {showDust && (
                <div className="cursor-dust">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              <div className="cursor-inner"></div>
            </div>
            <div className="hover-element">
              <Home />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
