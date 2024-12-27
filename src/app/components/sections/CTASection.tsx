'use client'

import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Scene3D = dynamic(() => import('../3d/Scene3D'), { ssr: false })

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const elements = contentRef.current?.querySelectorAll('.animate-content')
    if (elements) {
      gsap.from(elements, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen">
      <Scene3D />
      
      <div 
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-gradient-to-b from-transparent via-dark/80 to-dark"
      >
        <h2 className="animate-content text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          El Futuro se Construye Hoy
        </h2>
        
        <p className="animate-content text-xl text-gray-300 max-w-2xl mb-12">
          Toma la delantera y conviértete en el referente de tu industria con soluciones IA de Datagora.
        </p>

        <button className="animate-content px-8 py-4 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Agenda una Demo
        </button>
      </div>
    </section>
  )
}
