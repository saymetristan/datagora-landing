import ClientProvider from './components/ClientProvider'
import ClientLayout from './components/ClientLayout'

export default function Home() {
  return (
    <ClientProvider>
      <ClientLayout />
    </ClientProvider>
  )
}
