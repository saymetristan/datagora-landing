'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const links = {
  legal: [
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos de Uso', href: '/terminos' },
    { name: 'Aviso Legal', href: '/aviso-legal' }
  ],
  social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' }
  ]
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(footerRef.current?.querySelectorAll('.animate-footer'), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom-=100',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <footer ref={footerRef} className="bg-dark-800 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="animate-footer">
          <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
          <div className="space-y-2">
            <p>Email: contacto@datagora.com</p>
            <p>Tel: +34 900 123 456</p>
            <p>Madrid, España</p>
          </div>
        </div>

        <div className="animate-footer">
          <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            {links.legal.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="hover:text-neon-blue transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-footer">
          <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
          <ul className="space-y-2">
            {links.social.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-blue transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="animate-footer mt-12 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {new Date().getFullYear()} Datagora. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
