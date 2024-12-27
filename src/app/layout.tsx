import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datagora - Soluciones IA',
  description: 'Redefine el presente y conquista el futuro con soluciones de IA personalizadas'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
