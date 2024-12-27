'use client'

import dynamic from 'next/dynamic'
import GSAPProvider from './GSAPProvider'

const HeroSection = dynamic(() => import('./sections/HeroSection'))
const SolutionsEmpresasSection = dynamic(() => import('./sections/SolutionsEmpresasSection'))
const SolutionsUsuariosSection = dynamic(() => import('./sections/SolutionsUsuariosSection'))
const TestimoniosSection = dynamic(() => import('./sections/TestimoniosSection'))
const CTASection = dynamic(() => import('./sections/CTASection'))

export default function ClientLayout() {
  return (
    <GSAPProvider>
      <main>
        <HeroSection />
        <SolutionsEmpresasSection />
        <SolutionsUsuariosSection />
        <TestimoniosSection />
        <CTASection />
      </main>
    </GSAPProvider>
  )
} 