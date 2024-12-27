'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    <html lang="es">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
