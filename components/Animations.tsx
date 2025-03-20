'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
}

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
}

interface AnimationProps {
  children: ReactNode
  delay?: number
}

export const FadeIn = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeIn}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export const SlideUp = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={slideUp}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={scaleIn}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
) 