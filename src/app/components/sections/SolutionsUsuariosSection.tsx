'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SolutionCard from '../ui/SolutionCard'

const solutions = [
  {
    title: 'Agente Personal en WhatsApp',
    description: 'Gestiona tus finanzas con alertas y seguimientos automáticos desde tu móvil.',
    icon: '📱'
  },
  {
    title: 'Asistente de Rutinas de Ejercicio',
    description: 'Recibe planes personalizados que evolucionan contigo.',
    icon: '💪'
  },
  {
    title: 'Plataforma IA para Carreras Deportivas',
    description: 'Busca, compra y gestiona fotos con reconocimiento facial o de dorsales.',
    icon: '🏃'
  },
  {
    title: 'Mejora Inteligente de Imágenes',
    description: 'Iluminación optimizada sin perder detalles ni estilo.',
    icon: '📸'
  }
]

export default function SolutionsUsuariosSection() {
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
    <section ref={sectionRef} className="py-20 bg-dark-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="animate-text text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent">
            Soluciones IA para Usuarios
          </h2>
          <p className="animate-text text-xl text-gray-400 max-w-3xl mx-auto">
            Transforma tu día a día con asistentes inteligentes diseñados para simplificar tus finanzas, salud y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
