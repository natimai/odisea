'use client'

import Image from 'next/image'
import { FadeIn, ScaleIn } from './Animations'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: '/images/hall-1.jpg',
    alt: 'חתונה באודיסאה',
    title: 'חתונות',
    description: 'אולם מרהיב לאירועי חתונה',
  },
  {
    src: '/images/hall-2.jpg',
    alt: 'בר מצווה באודיסאה',
    title: 'בר מצוות',
    description: 'חגיגת בר מצווה מושלמת',
  },
  {
    src: '/images/garden-1.jpg',
    alt: 'אירועי חברה באודיסאה',
    title: 'אירועי חברה',
    description: 'אירועים עסקיים ברמה גבוהה',
  },
  {
    src: '/images/garden-2.jpg',
    alt: 'פנים אולם החתונות',
    title: 'פנים האולם',
    description: 'עיצוב מודרני ומרשים',
  },
  {
    src: '/images/atmosphere-1.jpg',
    alt: 'פנים אולם בר מצווה',
    title: 'מתחם בר מצווה',
    description: 'אווירה צעירה ותוססת',
  },
  {
    src: '/images/atmosphere-2.jpg',
    alt: 'פנים אולם אירועי חברה',
    title: 'מתחם אירועי חברה',
    description: 'מתחם מרווח לאירועים גדולים',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            גלריה
          </motion.h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <ScaleIn key={image.src} delay={index * 0.1}>
              <motion.div
                className="relative h-80 cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(index)}
                onHoverStart={() => setHoveredImage(index)}
                onHoverEnd={() => setHoveredImage(null)}
                whileHover={{ scale: 1.03 }}
                layoutId={`image-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredImage === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: hoveredImage === index ? 0 : 20, opacity: hoveredImage === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: hoveredImage === index ? 0 : 20, opacity: hoveredImage === index ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {image.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.button
                className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                ×
              </motion.button>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
                <p>{images[selectedImage].description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 