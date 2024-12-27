'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUpNumber from '../ui/CountUpNumber'

const metrics = [
  {
    value: 30,
    suffix: '%',
    description: 'en Ventas con Agentes de Prospección Inteligente'
  },
  {
    value: 40,
    suffix: '%',
    description: 'de Eficiencia al Clasificar Imágenes en Eventos Deportivos'
  },
  {
    value: 50,
    suffix: '%',
    description: 'de Apertura en Campañas de Email Hiperpersonalizadas'
  }
]

export default function TestimoniosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(titleRef.current?.querySelectorAll('.animate-text'), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-dark px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="animate-text text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
            Casos de Éxito y Resultados Reales
          </h2>
          <p className="animate-text text-xl text-gray-400 max-w-3xl mx-auto">
            Desde el aumento de ventas hasta la transformación de la experiencia de usuario, hemos generado valor tangible en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div 
              key={metric.description}
              className="bg-dark-800 p-8 rounded-xl text-center hover:bg-dark-700 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl text-neon-blue mb-4">
                <CountUpNumber
                  prefix="+"
                  end={metric.value}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
