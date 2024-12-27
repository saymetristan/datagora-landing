'use client'

import { useRef, useEffect, Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('../3d/Scene3D'), {
  loading: () => null,
  ssr: false
})

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const elements = textRef.current?.querySelectorAll('.animate-text')
    if (elements) {
      gsap.from(elements, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      })
    }
  }, [])

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      
      <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-gradient-to-b from-transparent via-dark/80 to-dark">
        <h1 className="animate-text text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
          Redefine el Presente.<br/>
          Conquista el Futuro con IA.
        </h1>
        
        <p className="animate-text text-xl text-gray-300 max-w-2xl mb-12">
          En Datagora diseñamos soluciones inteligentes para impulsar a empresas y usuarios finales hacia nuevas fronteras.
        </p>

        <button 
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
          className="animate-text px-8 py-4 bg-neon-blue hover:bg-neon-blue/80 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Conoce Cómo
        </button>
      </div>
    </section>
  )
}
