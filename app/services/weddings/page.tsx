'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function WeddingsPage() {
  const features = [
    {
      title: 'אולם מרהיב',
      description: 'אולם מעוצב בסטנדרטים הגבוהים ביותר עם תאורה מרהיבה ואווירה קסומה',
    },
    {
      title: 'קייטרינג משובח',
      description: 'תפריט עשיר ומגוון המותאם אישית לטעמכם ולדרישותיכם',
    },
    {
      title: 'צוות מקצועי',
      description: 'צוות מנוסה שילווה אתכם משלב התכנון ועד לסיום האירוע',
    },
    {
      title: 'עיצוב מותאם אישית',
      description: 'אפשרויות עיצוב מגוונות להתאמה מושלמת לסגנון שלכם',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/hall/hall23.JPG"
            alt="חתונות באולם אודיסאה"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            חתונות באולם אודיסאה
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            הפכו את היום המיוחד שלכם לחוויה בלתי נשכחת באולם האירועים היוקרתי שלנו
          </motion.p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          למה לבחור באודיסאה?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-900/10 to-red-800/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          גלריית תמונות
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={`/images/gallery/hall/hall${index + 10}.JPG`}
                alt={`תמונת חתונה ${index}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            מוכנים להתחיל לתכנן את החתונה שלכם?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            צוות המומחים שלנו ישמח לענות על כל שאלה ולעזור לכם להפוך את החלום למציאות
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            צרו קשר עכשיו
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 