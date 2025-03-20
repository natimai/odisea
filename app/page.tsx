'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowLeftIcon, SparklesIcon, PhoneIcon, PhotoIcon, CalendarIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

export default function HomePage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const features = [
    {
      title: 'אולם מרהיב',
      description: 'אולם מפואר המכיל עד 1,100 מוזמנים עם עיצוב מודרני ותאורה מרהיבה',
      icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
      title: 'גן אירועים',
      description: 'גן ייחודי לקבלת פנים ואירועי חוץ עם נוף מרהיב',
      icon: <CalendarIcon className="w-6 h-6" />,
    },
    {
      title: 'חניה מרווחת',
      description: 'חניון פרטי ומאובטח לנוחות האורחים',
      icon: <ShieldCheckIcon className="w-6 h-6" />,
    },
    {
      title: 'מיקום מרכזי',
      description: 'ממוקם בלב באר שבע, סמוך למלון ליאונרדו ונגיש לכל האורחים',
      icon: <MapPinIcon className="w-6 h-6" />,
    },
  ]

  const events = [
    {
      title: 'חתונות',
      image: '/images/gallery/hall/hall23.JPG',
      href: '/services/weddings',
      description: 'הפכו את היום המיוחד שלכם לחגיגה בלתי נשכחת'
    },
    {
      title: 'בר/בת מצווה',
      image: '/images/gallery/hall/hall35.jpeg',
      href: '/services/bar-mitzvah',
      description: 'חגגו את הרגע המשמעותי בסטייל מושלם'
    },
    {
      title: 'אירועים עסקיים',
      image: '/images/gallery/hall/hall46.jpeg',
      href: '/services/corporate',
      description: 'אירועים עסקיים ברמה הגבוהה ביותר'
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Floating Phone Button */}
      <motion.a
        href="tel:072-394-6356"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-600 to-amber-700 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <PhoneIcon className="w-6 h-6 text-white" />
      </motion.a>

      {/* Hero Section */}
      <div ref={targetRef} className="relative h-screen">
        <motion.div 
          className="absolute inset-0"
          style={{ scale, opacity }}
        >
          <Image
            src="/images/gallery/hall/hall1.JPG"
            alt="אולם האירועים אודיסאה"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900" />
        </motion.div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg blur opacity-30"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative">
              אולם אירועים אודיסאה
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-12"
          >
            הופכים את הרגעים המיוחדים שלכם לבלתי נשכחים
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-xl hover:shadow-2xl relative group"
              >
                <span className="relative z-10">צור קשר</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/gallery"
                className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 relative group"
              >
                <PhotoIcon className="w-5 h-5" />
                <span className="relative z-10">גלריה</span>
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ y }}
        >
          <motion.div 
            className="animate-bounce"
            whileHover={{ scale: 1.2 }}
          >
            <ArrowLeftIcon className="w-8 h-8 text-amber-500 rotate-90" />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              חוויה יוצאת דופן
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              אנו מציעים את המקום המושלם לאירוע שלכם, עם כל מה שצריך כדי להפוך אותו לבלתי נשכח
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl p-6 text-center backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div 
                  className="text-amber-500 mb-4 flex justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              סוגי אירועים
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              מגוון אפשרויות לכל סוג של אירוע, עם דגש על איכות ושירות ללא פשרות
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {event.description}
                  </p>
                  <Link
                    href={event.href}
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-amber-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      לפרטים נוספים
                    </span>
                    <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center relative"
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg blur opacity-30"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              מוכנים להתחיל לתכנן את האירוע שלכם?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              צוות המקצוענים שלנו ישמח לעזור לכם להפוך את החלום למציאות
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-xl hover:shadow-2xl relative group"
              >
                <span className="relative z-10">דברו איתנו</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
