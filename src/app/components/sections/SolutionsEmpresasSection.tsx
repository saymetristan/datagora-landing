'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SolutionCard from '../ui/SolutionCard'

const solutions = [
  {
    title: 'Agente de Prospección Inteligente',
    description: 'Investiga leads, redacta correos en frío hiperpersonalizados y acelera tus ventas.',
    icon: '🎯'
  },
  {
    title: 'Traducción Masiva de Excel',
    description: 'Procesa miles de líneas en segundos sin perder precisión.',
    icon: '📊'
  },
  {
    title: 'Automatización de Contenido',
    description: 'Genera y publica posts en redes al instante, optimizados para tu audiencia.',
    icon: '🤖'
  },
  {
    title: 'Agentes de Venta 24/7',
    description: 'Atención constante y cerrando ventas sin interrupciones.',
    icon: '💬'
  },
  {
    title: 'ERP Somos Oliver + IA',
    description: 'Integra IA en la gestión de tu negocio para facturar, organizar e impulsar resultados.',
    icon: '⚡'
  }
]

export default function SolutionsEmpresasSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const elements = titleRef.current?.querySelectorAll('.animate-text')
    if (elements) {
      gsap.from(elements, {
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
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-dark px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="animate-text text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Soluciones IA para Empresas
          </h2>
          <p className="animate-text text-xl text-gray-400 max-w-3xl mx-auto">
            Potencia tus procesos, minimiza tus costos y maximiza tus ingresos con automatizaciones creadas a la medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
