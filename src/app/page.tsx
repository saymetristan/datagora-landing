import HeroSection from './components/sections/HeroSection'
import SolutionsEmpresasSection from './components/sections/SolutionsEmpresasSection'
import SolutionsUsuariosSection from './components/sections/SolutionsUsuariosSection'
import TestimoniosSection from './components/sections/TestimoniosSection'
import CTASection from './components/sections/CTASection'

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
