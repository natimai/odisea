'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { SparklesIcon, MusicalNoteIcon, CameraIcon, CakeIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline'

export default function BarMitzvahPage() {
  const features = [
    {
      title: 'אולם מרהיב',
      description: 'אולם מעוצב בסטנדרטים הגבוהים ביותר עם תאורה מרהיבה ואווירה קסומה המתאימה במיוחד לחגיגות בר/בת מצווה',
      icon: <SparklesIcon className="w-8 h-8" />,
    },
    {
      title: 'מערכות סאונד ותאורה',
      description: 'מערכות סאונד ותאורה מתקדמות שיהפכו את האירוע לחוויה בלתי נשכחת עם מוזיקה מושלמת ואווירה מדהימה',
      icon: <MusicalNoteIcon className="w-8 h-8" />,
    },
    {
      title: 'צילום מקצועי',
      description: 'אפשרות לצילום מקצועי של האירוע כולל צילום דיגיטלי וצילום וידאו שישמרו את הזיכרונות לנצח',
      icon: <CameraIcon className="w-8 h-8" />,
    },
    {
      title: 'קייטרינג משובח',
      description: 'תפריטים מגוונים המותאמים במיוחד לחגיגות בר/בת מצווה, כולל עוגות מיוחדות ומטעמים ייחודיים',
      icon: <CakeIcon className="w-8 h-8" />,
    },
    {
      title: 'צוות מקצועי',
      description: 'צוות מנוסה שילווה אתכם משלב התכנון ועד לסיום האירוע, ויבטיח חוויה מושלמת',
      icon: <UsersIcon className="w-8 h-8" />,
    },
    {
      title: 'חוויה ייחודית',
      description: 'אפשרויות עיצוב מגוונות שיהפכו את האירוע לחוויה ייחודית ובלתי נשכחת',
      icon: <StarIcon className="w-8 h-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/hall/hall35.jpeg"
            alt="בר מצווה באולם אודיסאה"
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
            בר/בת מצווה באולם אודיסאה
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            חגיגה בלתי נשכחת באווירה מושלמת המשלבת יוקרה עם שמחה
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
          למה לבחור באודיסאה לחגיגת בר/בת מצווה?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/10 to-red-800/10 rounded-xl p-6 hover:from-red-900/20 hover:to-red-800/20 transition-all duration-300"
            >
              <div className="text-amber-500 mb-4">{feature.icon}</div>
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
              className="relative h-64 overflow-hidden rounded-lg group"
            >
              <Image
                src={`/images/gallery/hall/hall${index + 30}.JPG`}
                alt={`תמונת בר מצווה ${index}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            מוכנים לתכנן את חגיגת בר/בת המצווה?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            צוות המומחים שלנו ישמח לעזור לכם להפוך את החלום למציאות ולעצב את האירוע המושלם
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300"
          >
            צרו קשר עכשיו
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 