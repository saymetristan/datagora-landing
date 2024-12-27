'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SolutionCardProps {
  title: string
  description: string
  icon?: string
  delay?: number
}

export default function SolutionCard({ title, description, icon, delay = 0 }: SolutionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(cardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })
  }, [delay])

  return (
    <div ref={cardRef} className="bg-dark-800 p-6 rounded-xl hover:bg-dark-700 transition-all duration-300 transform hover:-translate-y-2">
      {icon && <div className="text-neon-blue mb-4 text-3xl">{icon}</div>}
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
} 