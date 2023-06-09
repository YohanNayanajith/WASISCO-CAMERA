/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 camera-lens-without-strap.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/camera-lens-without-strap.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh016.geometry} material={materials.Camera_01_lens_body} position={[0.33, -0.45, -0.82]} scale={11.5} />
    </group>
  )
}

useGLTF.preload('/camera-lens-without-strap.glb')
