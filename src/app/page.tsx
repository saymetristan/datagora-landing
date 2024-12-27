import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('./components/MainContent'), {
  loading: () => (
    <div className="h-screen bg-dark flex items-center justify-center">
      <div className="animate-pulse text-2xl text-neon-blue">Cargando...</div>
    </div>
  )
})

export default function Home() {
  return <MainContent />
}
