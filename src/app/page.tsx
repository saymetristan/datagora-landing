import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('./components/sections/HeroSection'), { ssr: false })
const SolutionsEmpresasSection = dynamic(() => import('./components/sections/SolutionsEmpresasSection'), { ssr: false })
const SolutionsUsuariosSection = dynamic(() => import('./components/sections/SolutionsUsuariosSection'), { ssr: false })
const TestimoniosSection = dynamic(() => import('./components/sections/TestimoniosSection'), { ssr: false })
const CTASection = dynamic(() => import('./components/sections/CTASection'), { ssr: false })

export default function Home() {
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
