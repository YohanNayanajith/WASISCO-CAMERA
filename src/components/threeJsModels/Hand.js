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
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { state } from "./Store";
import { easing } from "maath";
import { useEffect } from "react";
import * as THREE from "three";
import {
  mobileAndTabletCheck
} from "webgi";

function Model({ ...props }) {
  const modelRef = useRef();
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { nodes, materials } = useGLTF("/models/hand.glb");

  useEffect(() => {
    // Set the initial color of the material
    materials["Material.001"].color.set("#902E8E");
  }, []);

  const isMobile = mobileAndTabletCheck()

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
    materials["Material.001"].color.set("hotpink");
    // materials["Material.001"].color.set("#3C0071");
  }

  function handlePointerOut() {
    setHovered(false);
    materials["Material.001"].color.set("#902E8E");
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={isMobile ? 0.06 : 0.07}>
        <mesh
          geometry={nodes.uploads_files_77692_PeaceSign__Cut_1_.geometry}
          material={materials["Material.001"]}
          material-roughness={1}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          {...props}
          dispose={null}
          //   position={[-2.46, 21.98, 3.71]}
        />
      </group>
    </group>
  );
}

// function Shirt(props) {
//   const snap = useSnapshot(state)
//   // const texture = useTexture(`/${snap.decal}.png`)
//   const { nodes, materials } = useGLTF('/hand.glb')
//   useFrame((state, delta) => easing.dampC(materials['Material.001'].color, snap.color, 0.25, delta))
//   return (
//     <group position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.01}>
//     <mesh
//       castShadow
//       geometry={nodes.uploads_files_77692_PeaceSign__Cut_1_.geometry}
//       material={materials['Material.001']}
//       material-roughness={1}
//       {...props}
//       dispose={null}>
//       <Decal position={[0, 0.04, 0.15]} rotation={[0, 0, 0]} scale={0.01} />
//     </mesh>
//     </group>
//   )
// }

export function Hand(props) {
  return (
    <section className="wrapper">
      <Canvas camera={{ fov: 70, position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0, 0, 50]} />
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
            enableRotate={true}
          />
          {/* <OrbitControls enablePan={true} enableZoom={false} enableRotate={false} /> */}
        </Suspense>
      </Canvas>
    </section>
  );
}

// function Backdrop() {
//   const shadows = useRef()
//   useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta))
//   return (
//     <AccumulativeShadows
//       ref={shadows}
//       temporal
//       frames={60}
//       alphaTest={0.85}
//       scale={10}
//       rotation={[Math.PI / 2, 0, 0]}
//       position={[0, 0, -0.14]}>
//       <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
//       <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
//     </AccumulativeShadows>
//   )
// }

function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

useGLTF.preload("/hand.glb");
