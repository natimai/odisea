'use client'

import Image from 'next/image'
import { FadeIn, SlideUp } from './Animations'
import ParallaxBackground from './ParallaxBackground'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative h-screen overflow-hidden">
      <ParallaxBackground>
        <Image
          src="/images/hero-bg.jpg"
          alt="אולם אודיסאה"
          fill
          className="object-cover scale-110"
          priority
        />
      </ParallaxBackground>
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isHovered ? 0.7 : 0.5 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div>
          <FadeIn>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              אודיסאה
            </motion.h1>
          </FadeIn>
          <SlideUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              אולם אירועים מודרני ומרווח במיקום מרכזי
            </p>
          </SlideUp>
          <SlideUp delay={0.4}>
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">צור קשר</span>
                <motion.div
                  className="absolute inset-0 bg-blue-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          </SlideUp>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#gallery" className="text-white">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  )
} 