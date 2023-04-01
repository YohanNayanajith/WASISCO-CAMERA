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
import { mobileAndTabletCheck } from "webgi";

function Model({ ...props }) {
  const modelRef = useRef();
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { nodes, materials } = useGLTF("/models/camera-without-scroll.glb");

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
    // group.current.rotation.y = (x * Math.PI) / 4;
    // }
  });
  //   function handlePointerOver() {
  //     setHovered(true);
  //     materials["Material.001"].color.set("hotpink");
  //     // materials["Material.001"].color.set("#3C0071");
  //   }

  //   function handlePointerOut() {
  //     setHovered(false);
  //     materials["Material.001"].color.set("#902E8E");
  //   }
  return (
    //   <group ref={group} {...props} dispose={null}>
    //     <group position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={isMobile ? 0.06 : 0.07}>
    //       <mesh
    //         geometry={nodes.uploads_files_77692_PeaceSign__Cut_1_.geometry}
    //         material={materials["Material.001"]}
    //         material-roughness={1}
    //         onPointerOver={handlePointerOver}
    //         onPointerOut={handlePointerOut}
    //         {...props}
    //         dispose={null}
    //         //   position={[-2.46, 21.98, 3.71]}
    //       />
    //     </group>
    //   </group>
    <group {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        // rotation={[0, -Math.PI / 2, 0]}
        scale={isMobile ? 40 : 100}
      >
        <mesh
          geometry={nodes.Mesh016.geometry}
          material={materials.Camera_01_lens_body}
        />
        <mesh
          geometry={nodes.Mesh016_1.geometry}
          material={materials.Camera_01_lens}
        />
        <mesh
          geometry={nodes.Mesh016_2.geometry}
          material={materials.Camera_01_body}
        />
        <mesh
          geometry={nodes.Mesh016_3.geometry}
          material={materials.Camera_01_strap}
        />
      </group>
    </group>
  );
}

const Camera = () => {
  return (
    <section className="wrapper" style={{ backgroundColor: "black", zIndex:10 }}>
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
};

export default Camera;
