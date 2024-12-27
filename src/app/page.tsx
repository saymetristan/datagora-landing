import DynamicCTASection from './components/sections/DynamicCTASection'
import SolutionsEmpresasSection from './components/sections/SolutionsEmpresasSection'
import SolutionsUsuariosSection from './components/sections/SolutionsUsuariosSection'
import TestimoniosSection from './components/sections/TestimoniosSection'

export default function Home() {
  return (
    <main>
      <DynamicCTASection />
      <SolutionsEmpresasSection />
      <SolutionsUsuariosSection />
      <TestimoniosSection />
    </main>
  )
}
