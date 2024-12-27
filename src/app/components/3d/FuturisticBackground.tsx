'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function FuturisticBackground() {
  const sphereRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    sphereRef.current.rotation.x = Math.sin(t / 4)
    sphereRef.current.rotation.y = Math.sin(t / 2)
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#0066FF"
        attach="material"
        distort={0.4}
        speed={4}
        roughness={0}
        metalness={1}
      />
    </Sphere>
  )
} 