'use client'

import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('./sections/HeroSection'), { ssr: false })
const SolutionsEmpresasSection = dynamic(() => import('./sections/SolutionsEmpresasSection'), { ssr: false })
const SolutionsUsuariosSection = dynamic(() => import('./sections/SolutionsUsuariosSection'), { ssr: false })
const TestimoniosSection = dynamic(() => import('./sections/TestimoniosSection'), { ssr: false })
const CTASection = dynamic(() => import('./sections/CTASection'), { ssr: false })

export default function ClientLayout() {
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