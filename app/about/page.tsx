'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import { 
  UserGroupIcon, ShieldCheckIcon,
  StarIcon, SparklesIcon, HandRaisedIcon,
  TrophyIcon, ChartBarIcon, FireIcon, CheckBadgeIcon
} from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'

const _metadata: Metadata = {
  title: 'אודות אודיסאה | אולם אירועים יוקרתי בבאר שבע - 35 שנות מצוינות',
  description: 'הכירו את אודיסאה - אולם האירועים המוביל בבאר שבע. מסורת של 35 שנות מצוינות, צוות מקצועי מנוסה, וחוויית אירוח יוצאת דופן. הצטרפו לאלפי הזוגות שבחרו בנו.',
  openGraph: {
    title: 'אודות אודיסאה | אולם האירועים יוקרתי בבאר שבע - 35 שנות מצוינות',
    description: 'הכירו את אודיסאה - אולם האירועים המוביל בבאר שבע. מסורת של 35 שנות מצוינות, צוות מקצועי מנוסה, וחוויית אירוח יוצאת דופן. הצטרפו לאלפי הזוגות שבחרו בנו.',
    images: ['/images/about-hero.jpg'],
  },
}

const milestones = [
  {
    year: '1989',
    title: 'תחילת המסע',
    description: 'פתיחת אולם האירועים הראשון בבאר שבע עם חזון להביא סטנדרט חדש לעיר'
  },
  {
    year: '2005',
    title: 'שיפוץ והתחדשות',
    description: 'שדרוג מקיף של האולם עם טכנולוגיות חדישות ועיצוב מודרני'
  },
  {
    year: '2015',
    title: 'הרחבת המתחם',
    description: 'פתיחת הגן המפואר וחידוש מערכות הסאונד והתאורה'
  },
  {
    year: '2023',
    title: 'חדשנות ומצוינות',
    description: 'זכייה בפרס מצוינות בשירות ושדרוג חווית האירוח'
  }
]

const values = [
  {
    title: 'מצוינות ללא פשרות',
    description: '35 שנות ניסיון וידע מקצועי שמבטיחים אירוע מושלם',
    icon: <StarIcon className="w-6 h-6" />
  },
  {
    title: 'חדשנות מתמדת',
    description: 'שילוב טכנולוגיות מתקדמות ורעיונות יצירתיים',
    icon: <SparklesIcon className="w-6 h-6" />
  },
  {
    title: 'אמינות ומסירות',
    description: 'מחויבות אישית להצלחת כל אירוע ואירוע',
    icon: <ShieldCheckIcon className="w-6 h-6" />
  },
  {
    title: 'שירות מעל ומעבר',
    description: 'צוות מסור שנותן מענה לכל בקשה ודרישה',
    icon: <HandRaisedIcon className="w-6 h-6" />
  }
]

const achievements = [
  {
    number: '1,100+',
    title: 'מקומות ישיבה',
    description: 'אולם מרווח המתאים לכל סוגי האירועים',
    icon: <UserGroupIcon className="w-8 h-8" />
  },
  {
    number: '15,000+',
    title: 'אירועים מוצלחים',
    description: 'אלפי זוגות ומשפחות שמחות',
    icon: <ChartBarIcon className="w-8 h-8" />
  },
  {
    number: '35+',
    title: 'שנות ניסיון',
    description: 'מסורת של מצוינות ומקצועיות',
    icon: <TrophyIcon className="w-8 h-8" />
  },
  {
    number: '98%',
    title: 'שביעות רצון',
    description: 'המלצות חמות מלקוחות מרוצים',
    icon: <CheckBadgeIcon className="w-8 h-8" />
  }
]

const team = [
  {
    name: 'אבי לב',
    role: 'מנכ"ל ומייסד',
    description: '35 שנות ניסיון בניהול אירועים, מומחה בתחום האירוח והקולינריה',
    image: '/images/team/ceo.jpg',
    expertise: ['ניהול אירועים', 'תכנון קולינרי', 'חווית לקוח']
  },
  {
    name: 'צוות השפים',
    role: 'המטבח שלנו',
    description: 'צוות קולינרי מקצועי המתמחה במטבח ישראלי מודרני ובינלאומי',
    image: '/images/team/chefs.jpg',
    expertise: ['מטבח ישראלי', 'מטבח בינלאומי', 'קינוחים מיוחדים']
  },
  {
    name: 'צוות האירוח',
    role: 'שירות ואירוח',
    description: 'צוות מלצרים ואנשי שירות מקצועיים עם ניסיון עשיר באירועים',
    image: '/images/team/service.jpg',
    expertise: ['שירות VIP', 'ניהול אירועים', 'תשומת לב לפרטים']
  }
]

const images = [
  {
    id: 1,
    src: '/images/gallery/hall/hall1.JPG',
    alt: 'אולם האירועים אודיסאה',
  },
  {
    id: 2,
    src: '/images/gallery/hall/hall23.JPG',
    alt: 'אולם האירועים אודיסאה - מבט פנורמי',
  },
  {
    id: 3,
    src: '/images/gallery/hall/hall35.jpeg',
    alt: 'אולם האירועים אודיסאה - תאורה',
  },
  {
    id: 4,
    src: '/images/gallery/hall/hall46.jpeg',
    alt: 'אולם האירועים אודיסאה - עיצוב פנים',
  },
  {
    id: 5,
    src: '/images/gallery/hall/hall58.jpeg',
    alt: 'אולם האירועים אודיסאה - חלל מרכזי',
  },
]

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000) // החלף תמונה כל 5 שניות

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      <div className="h-20"></div>
      
      {/* Hero Section with Rotating Images */}
      <section className="relative h-screen w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              className="object-cover w-full h-full"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900" />
          </motion.div>
        </AnimatePresence>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-gray-400/50 hover:bg-amber-400/50'
              }`}
              aria-label={`עבור לתמונה ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg blur opacity-30"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white relative">
              הסיפור שמאחורי אודיסאה
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">המסע שלנו</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              מאז 1989, אודיסאה מובילה את תחום אירועי היוקרה בבאר שבע והדרום. 
              הסיפור שלנו הוא סיפור של חזון, התמדה ומחויבות למצוינות.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              תחת הנהגתו של אבי לב, הפכנו למותג סינונימי לאיכות, חדשנות ושירות ללא פשרות.
              בכל אירוע, אנו מחדשים את המחויבות שלנו ליצירת חוויות בלתי נשכחות.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-zinc-900/50 to-black/50">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ציוני דרך משמעותיים
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative bg-zinc-900/80 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-amber-500 text-2xl font-bold mb-3">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ההישגים שלנו במספרים
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl p-6 text-center backdrop-blur-sm relative group"
              >
                <div className="text-amber-500 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <h3 className="text-xl font-bold text-amber-500 mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-zinc-900/50 to-black/50">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              הערכים שמנחים אותנו
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl p-6 text-center backdrop-blur-sm relative transform transition-all duration-300 hover:scale-105">
                  <div className="text-amber-500 mb-4 flex justify-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {value.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              הצוות המקצועי שלנו
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              מאחורי כל אירוע מוצלח עומד צוות מסור של אנשי מקצוע מנוסים
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-amber-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-zinc-900/50 to-black/50">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block text-amber-500 mb-6">
              <FireIcon className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              החזון שלנו
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              אנו מאמינים שכל אירוע הוא הזדמנות ליצור זיכרונות בלתי נשכחים.
              המחויבות שלנו היא להעניק לכל לקוח חוויה יוצאת דופן, עם תשומת לב לכל פרט.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-xl hover:shadow-2xl relative group"
              >
                <span className="relative z-10">צרו איתנו קשר</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 