'use client'

import dynamic from 'next/dynamic'

const CTASection = dynamic(() => import('./CTASection'), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-dark flex items-center justify-center">
      <div className="animate-pulse text-2xl text-neon-blue">Cargando...</div>
    </div>
  )
})

export default CTASection 