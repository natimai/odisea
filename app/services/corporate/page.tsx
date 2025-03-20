'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function CorporatePage() {
  const features = [
    {
      title: 'אולם מרשים',
      description: 'אולם מרווח ומעוצב בסטנדרט גבוה, המתאים לכל סוגי האירועים העסקיים',
      icon: '🏛️',
    },
    {
      title: 'ציוד טכני מתקדם',
      description: 'מערכות סאונד, תאורה והקרנה מהמתקדמות בשוק',
      icon: '🎯',
    },
    {
      title: 'קייטרינג איכותי',
      description: 'תפריטים מגוונים המותאמים לאירועים עסקיים',
      icon: '🍽️',
    },
    {
      title: 'צוות מקצועי',
      description: 'צוות מנוסה שילווה אתכם משלב התכנון ועד לביצוע האירוע',
      icon: '👥',
    },
  ]

  const eventTypes = [
    {
      title: 'כנסים',
      description: 'אירוח כנסים מקצועיים עם כל הציוד הנדרש',
      image: '/images/gallery/hall/hall50.jpeg',
    },
    {
      title: 'ערבי חברה',
      description: 'אירועי גיבוש וערבי חברה בלתי נשכחים',
      image: '/images/gallery/hall/hall52.jpeg',
    },
    {
      title: 'השקות מוצרים',
      description: 'אירועי השקה מרשימים שישאירו רושם',
      image: '/images/gallery/hall/hall54.jpeg',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/hall/hall46.jpeg"
            alt="אירועים עסקיים באולם אודיסאה"
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
            אירועים עסקיים
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            המקום המושלם לאירועים העסקיים שלכם
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
          למה לבחור באולם אודיסאה?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/10 to-red-800/10 rounded-lg p-6"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Types */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          סוגי אירועים
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
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
          <h2 className="text-3xl font-bold text-white mb-6">
            מעוניינים לקיים אירוע עסקי?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            צוות המומחים שלנו ישמח לסייע לכם בתכנון האירוע העסקי המושלם
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-red-700"
          >
            צרו קשר
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 