'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface CountUpNumberProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function CountUpNumber({ end, duration = 2, prefix = '', suffix = '' }: CountUpNumberProps) {
  const [value, setValue] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!startedRef.current) {
      ScrollTrigger.create({
        trigger: elementRef.current,
        start: 'top center+=100',
        onEnter: () => {
          startedRef.current = true
          gsap.to({}, {
            duration: duration,
            onUpdate: () => {
              const progress = gsap.getProperty({}, 'progress') as number
              setValue(Math.round(end * progress))
            }
          })
        }
      })
    }
  }, [end, duration])

  return (
    <span ref={elementRef} className="font-bold">
      {prefix}{value}{suffix}
    </span>
  )
} 