'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import FuturisticBackground from './FuturisticBackground'

function Lights() {
  const { scene } = useThree()
  
  useEffect(() => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    const pointLight = new THREE.PointLight(0xffffff, 1, 100)
    pointLight.position.set(10, 10, 10)
    
    scene.add(ambientLight)
    scene.add(pointLight)
    
    return () => {
      scene.remove(ambientLight)
      scene.remove(pointLight)
    }
  }, [scene])
  
  return null
}

export default function Scene3D() {
  return (
    <Suspense fallback={null}>
      <Canvas className="absolute inset-0">
        <Lights />
        <FuturisticBackground />
      </Canvas>
    </Suspense>
  )
} 