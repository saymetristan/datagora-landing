'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './sections/HeroSection'
import SolutionsEmpresasSection from './sections/SolutionsEmpresasSection'
import SolutionsUsuariosSection from './sections/SolutionsUsuariosSection'
import TestimoniosSection from './sections/TestimoniosSection'
import CTASection from './sections/CTASection'

export default function MainContent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }
  }, [])

  return (
    <main>
      <HeroSection />
      <SolutionsEmpresasSection />
      <SolutionsUsuariosSection />
      <TestimoniosSection />
      <CTASection />
    </main>
  )
} 