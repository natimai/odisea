'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, windowHeight], [0, 200])
  const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0.5])

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      style={{
        y: backgroundY,
        opacity
      }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  )
} 