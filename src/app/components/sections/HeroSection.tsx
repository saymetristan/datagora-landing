'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleField from '../3d/ParticleField'

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center',
        end: 'bottom center',
      }
    })

    tl.from(textRef.current?.querySelectorAll('.animate-text'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    })
  }, [])

  return (
    <section className="relative h-screen w-full">
      <Canvas className="absolute inset-0">
        <ParticleField />
      </Canvas>
      
      <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="animate-text text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
          Redefine el Presente.<br/>
          Conquista el Futuro con IA.
        </h1>
        
        <p className="animate-text mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
          En Datagora diseñamos soluciones de Inteligencia Artificial que impulsan a empresas y usuarios finales hacia un nuevo paradigma de eficiencia y crecimiento.
        </p>
        
        <button className="animate-text mt-12 px-8 py-4 bg-neon-blue hover:bg-neon-blue/80 text-white rounded-full transition-all duration-300 transform hover:scale-105">
          Conoce Cómo
        </button>
      </div>
    </section>
  )
}
