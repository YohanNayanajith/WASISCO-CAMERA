import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  OrbitControls,
  useGLTF,
  Environment,
  Center,
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { state } from "./Store";
import { easing } from "maath";
import { useEffect } from "react";
import * as THREE from "three";
import { mobileAndTabletCheck } from "webgi";
import { gsap } from "gsap";
import MainSectionHeader from "../mainSectionHeader/MainSectionHeader";
import VideoPlayer from "../videoPlayer/VideoPlayer";

function Model({ ...props }) {
  const modelRef = useRef();
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  // const { nodes, materials } = useGLTF("/models/camera-without-scroll.glb");
  const { nodes, materials } = useGLTF("/models/camera-lens-without-strap.glb");

  useEffect(() => {
    // Set the initial color of the material
    // materials["Material.001"].color.set("#902E8E");
  }, []);

  const isMobile = mobileAndTabletCheck();

  // useFrame(({ clock }) => {
  //   group.current.rotation.y = clock.getElapsedTime()
  // })
  useFrame((state) => {
    // Get the mouse position
    const { x, y } = state.mouse;

    // Get the distance from the camera to the model
    // const distance = group.current.position.distanceTo(state.camera.position);

    // // Check if the mouse is within a certain distance from the model
    // if (distance < 2) {
    //   // Rotate the model based on the horizontal mouse movement
    group.current.rotation.y = (x * Math.PI) / 4;
    // }
  });
    function handlePointerOver() {
      setHovered(true);
      materials["Camera_01_lens_body"].color.set("hotpink");
      // materials["Material.001"].color.set("#3C0071");
    }

    function handlePointerOut() {
      setHovered(false);
      materials["Camera_01_lens_body"].color.set("#902E8E");
    }
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        // rotation={[0, -Math.PI / 2, 0]}
        scale={isMobile ? 80 : 140}
      >
        <mesh
          geometry={nodes.Mesh016.geometry}
          material={materials.Camera_01_lens_body}
          material-roughness={1}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          {...props}
          dispose={null}
        />
      </group>
    </group>
  );
}

export function CameraLenseWithoutStrap() {
  const containerRef = useRef(null);
  const modelRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  let scale = 1;
  let maximumScaleValue = 26;
  let minimumScaleValue = 1;
  let increaseDecreaseScaleValue = 4.5;
  let maximumScaleValueForOpenNextSection = 30;
  let videoRotationValue = 0; // initial rotation value for the video
  let videoWidth = 640;
  let videoHeight = 360;

  useEffect(() => {
    const container = containerRef.current;
    const model = modelRef.current;
    const content = contentRef.current;
    const video = videoRef.current;

    const textAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".text", // The element that triggers the animation
        start: "top center", // The position of the trigger element when the animation starts
        end: "bottom center", // The position of the trigger element when the animation ends
        scrub: true, // Whether or not to scrub the animation
      },
    });

    const handleScroll = (e) => {
      e.preventDefault();
      const delta =
        e.deltaY > 0 ? increaseDecreaseScaleValue : -increaseDecreaseScaleValue; // increase or decrease scale based on scroll direction
      scale += delta;
      // gsap.to(model, {
      //   scale: scale,
      //   duration: 0.3,
      //   transformOrigin: "center center",
      // });
      if (e.deltaY > 0) {
        textAnimation.to(content, {
          opacity: 0,
          // y: 100,
          duration: 0.01,
          ease: "expo.out",
        });
      } else if (scale <= minimumScaleValue) {
        textAnimation.to(content, {
          opacity: 1,
          // y: 100,
          duration: 0.01,
          ease: "expo.out",
        });
      }

      if(scale >= maximumScaleValue){
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: "smooth",
        }); // scroll to the next section
      }else {
        window.scrollBy({
          top: 0,
          left: 0,
          behavior: "smooth",
        }); // scroll to the next section
      }

      if(scale >= 17 && scale<=28){
        
        setShowVideo(true);
        // gsap.fromTo("#image", {scale: 0.5}, {duration: 1, scale: 3, ease: "expoScale(0.5, 3, power2.inOut)"});
        gsap.to(video, {
          scrollTrigger: {
            trigger: ".video-player", 
            start: "top center", // The position of the trigger element when the animation starts
            end: "bottom center", // The position of the trigger element when the animation ends
            scrub: true, // Whether or not to scrub the animation
          },
          scale: 2,
          // xPercent: -50,
          // yPercent: -50,
          duration: 0.01,
          ease: "power2.inOut",
          onComplete: () => {
            setShowVideo(true);
            
          },
        });
      }

      if (scale >= maximumScaleValue) {
        // adjust the maximum zoom scale as needed

        // gsap.to(model, {
        //   scale: scale,
        //   duration: 0.3,
        //   transformOrigin: "center center",
        //   onComplete: () => {
        //     gsap.to(video, {
        //       duration: 0.5,
        //       opacity: 1,
        //       pointerEvents: "all",
        //     });
        //   },
        // });
        

        scale = maximumScaleValue; // reset the scale
      } else if (scale <= minimumScaleValue) {
        // adjust the minimum zoom scale as needed
        scale = minimumScaleValue; // set the minimum scale
        gsap.to(model, {
          scale: scale,
          duration: 2,
          ease: "expo.out",
        });
        setShowVideo(false);
      } else {
        gsap.to(model, {
          scale: scale,
          duration: 2,
          transformOrigin: "center center",
          ease: "expo.out",
        }); // zoom the model
        // setShowVideo(true);

        gsap.to(video, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.killTweensOf(video); // stop the rotation animation when the video is hidden
          },
        });

        // gsap.to(content, {
        //   // scale: scale,
        //   duration: 2,
        //   transformOrigin: "center center",
        //   ease: "expo.out",
        // });
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <section
      className="main-section-camera-3d"
      style={{ zIndex: 10, position: "relative" }}
      ref={containerRef}
    >
      {showVideo && (
        <div
          className="video-player"
          id="image"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
          }}
        >
          {/* <video ref={videoRef} controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          {/* <video
            ref={videoRef}
            className="video"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            muted
          /> */}
          <VideoPlayer reference={videoRef} />
        </div>
      )}
      <Canvas camera={{ fov: 70, position: [0, 0, 15] }} ref={modelRef}>
        <Suspense fallback={null}>
          {/* <ScrollControls damping={1}> */}
          {/* <Scroll> */}
          <ambientLight />
          <directionalLight intensity={0.5} position={[0, 0, 50]} />
          <Environment preset="city" />
          {/* <CameraRig> */}
          {/* <Backdrop /> */}
          <Center>
            <Model />
            {/* <Shirt /> */}
          </Center>
          {/* </CameraRig> */}

          <OrbitControls
            enablePan={true}
            enableZoom={false}
            enableRotate={false}
          />
          {/* <OrbitControls enablePan={true} enableZoom={false} enableRotate={false} /> */}
          {/* </Scroll> */}
          {/* <Scroll html> */}

          {/* <h1
                style={{
                  position: "absolute",
                  top: "60vh",
                  left: "0.5em",
                  color: "white",
                }}
              >
                to
              </h1>
              <h1
                style={{
                  position: "absolute",
                  top: "120vh",
                  left: "60vw",
                  color: "white",
                }}
              >
                be
              </h1> */}
          {/* </Scroll> */}
          {/* </ScrollControls> */}
          <Preload />
        </Suspense>
      </Canvas>
      <MainSectionHeader reference={contentRef} />
    </section>
  );
};

useGLTF.preload("/models/camera-lens-without-strap.glb");
