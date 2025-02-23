"use client"

import type React from "react"
import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface AnimateOnScrollProps {
  children: ReactNode
  animation: string
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, animation }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={`transition-all duration-1000 ${inView ? `${animation} opacity-100` : "opacity-0"}`}>
      {children}
    </div>
  )
}

export default AnimateOnScroll

