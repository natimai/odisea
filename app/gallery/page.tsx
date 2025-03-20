'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Metadata } from 'next'
import Footer from '@/components/Footer'
import Head from 'next/head'

const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const metadata: Metadata = {
  title: 'גלריית תמונות | אודיסאה - אולם אירועים יוקרתי בבאר שבע',
  description: 'צפו בגלריית התמונות של אולם האירועים אודיסאה. תמונות מאירועים, עיצובים מרהיבים, והחללים המפוארים שלנו.',
  keywords: 'אולם אירועים, גלריית תמונות, אירועים בבאר שבע, חתונות, בר מצוות, אירועים יוקרתיים, אודיסאה',
  openGraph: {
    title: 'גלריית תמונות | אודיסאה - אולם אירועים יוקרתי בבאר שבע',
    description: 'צפו בגלריית התמונות של אולם האירועים אודיסאה. תמונות מאירועים, עיצובים מרהיבים, והחללים המפוארים שלנו.',
    images: [
      {
        url: '/images/gallery/hall/hall1.JPG',
        width: 1200,
        height: 800,
        alt: 'אולם האירועים אודיסאה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'גלריית תמונות | אודיסאה - אולם אירועים יוקרתי בבאר שבע',
    description: 'צפו בגלריית התמונות של אולם האירועים אודיסאה. תמונות מאירועים, עיצובים מרהיבים, והחללים המפוארים שלנו.',
    images: ['/images/gallery/hall/hall1.JPG'],
  },
}

const categories = [
  { id: 'all', name: 'הכל', count: 0 },
  { id: 'hall', name: 'האולם', count: 0 },
  { id: 'garden', name: 'הגן', count: 0 },
  { id: 'food', name: 'קולינריה', count: 0 },
]

// מערך התמונות המעודכן
const galleryItems = [
  // תמונות האולם
  {
    id: 1,
    category: 'hall',
    src: '/images/gallery/hall/hall1.JPG',
    alt: 'אולם האירועים המרכזי',
    description: 'אולם מרהיב עם תאורה דרמטית ועיצוב יוקרתי המתאים לכל סוגי האירועים',
  },
  {
    id: 2,
    category: 'hall',
    src: '/images/gallery/hall/hall2.JPG',
    alt: 'תאורת אולם דרמטית',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 3,
    category: 'hall',
    src: '/images/gallery/hall/hall3.JPG',
    alt: 'עיצוב פנים מרהיב',
    description: 'עיצוב פנים מודרני המשלב אלגנטיות עם יוקרה',
  },
  {
    id: 4,
    category: 'hall',
    src: '/images/gallery/hall/hall4.JPG',
    alt: 'אולם אירועים מרווח',
    description: 'חלל מרווח ומזמין המתאים לאירועים גדולים',
  },
  {
    id: 5,
    category: 'hall',
    src: '/images/gallery/hall/hall5.JPG',
    alt: 'תצפית פנורמית של האולם',
    description: 'תצפית מרהיבה של חלל האולם המרכזי',
  },
  {
    id: 6,
    category: 'hall',
    src: '/images/gallery/hall/hall6.JPG',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם תאורה דרמטית',
  },
  {
    id: 7,
    category: 'hall',
    src: '/images/gallery/hall/hall7.JPG',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 8,
    category: 'hall',
    src: '/images/gallery/hall/hall8.JPG',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 9,
    category: 'hall',
    src: '/images/gallery/hall/hall9.JPG',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 10,
    category: 'hall',
    src: '/images/gallery/hall/hall10.JPG',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 11,
    category: 'hall',
    src: '/images/gallery/hall/hall11.JPG',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 12,
    category: 'hall',
    src: '/images/gallery/hall/hall12.JPG',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 13,
    category: 'hall',
    src: '/images/gallery/hall/hall13.JPG',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 14,
    category: 'hall',
    src: '/images/gallery/hall/hall14.JPG',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 15,
    category: 'hall',
    src: '/images/gallery/hall/hall15.JPG',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 16,
    category: 'hall',
    src: '/images/gallery/hall/hall16.JPG',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 17,
    category: 'hall',
    src: '/images/gallery/hall/hall17.JPG',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 18,
    category: 'hall',
    src: '/images/gallery/hall/hall18.JPG',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 19,
    category: 'hall',
    src: '/images/gallery/hall/hall19.JPG',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 20,
    category: 'hall',
    src: '/images/gallery/hall/hall20.JPG',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 21,
    category: 'hall',
    src: '/images/gallery/hall/hall21.JPG',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 22,
    category: 'hall',
    src: '/images/gallery/hall/hall22.JPG',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 23,
    category: 'hall',
    src: '/images/gallery/hall/hall23.JPG',
    alt: 'תצפית פנורמית של האולם',
    description: 'תצפית מרהיבה של חלל האולם המרכזי',
  },
  {
    id: 24,
    category: 'hall',
    src: '/images/gallery/hall/hall24.JPG',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם תאורה דרמטית',
  },
  {
    id: 25,
    category: 'hall',
    src: '/images/gallery/hall/hall25.JPG',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 26,
    category: 'hall',
    src: '/images/gallery/hall/hall26.JPG',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 27,
    category: 'hall',
    src: '/images/gallery/hall/hall27.JPG',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 28,
    category: 'hall',
    src: '/images/gallery/hall/hall28.JPG',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 29,
    category: 'hall',
    src: '/images/gallery/hall/hall29.JPG',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 30,
    category: 'hall',
    src: '/images/gallery/hall/hall30.JPG',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 31,
    category: 'hall',
    src: '/images/gallery/hall/hall31.JPG',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  // תמונות נוספות מהאולם (32-61)
  {
    id: 32,
    category: 'hall',
    src: '/images/gallery/hall/hall32.jpeg',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 33,
    category: 'hall',
    src: '/images/gallery/hall/hall33.jpeg',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 34,
    category: 'hall',
    src: '/images/gallery/hall/hall34.jpeg',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 35,
    category: 'hall',
    src: '/images/gallery/hall/hall35.jpeg',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 36,
    category: 'hall',
    src: '/images/gallery/hall/hall36.jpeg',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 37,
    category: 'hall',
    src: '/images/gallery/hall/hall37.jpeg',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 38,
    category: 'hall',
    src: '/images/gallery/hall/hall38.jpeg',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 39,
    category: 'hall',
    src: '/images/gallery/hall/hall39.jpeg',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 40,
    category: 'hall',
    src: '/images/gallery/hall/hall40.jpeg',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 41,
    category: 'hall',
    src: '/images/gallery/hall/hall41.jpeg',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 42,
    category: 'hall',
    src: '/images/gallery/hall/hall42.jpeg',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 43,
    category: 'hall',
    src: '/images/gallery/hall/hall43.jpeg',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 44,
    category: 'hall',
    src: '/images/gallery/hall/hall44.jpeg',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 45,
    category: 'hall',
    src: '/images/gallery/hall/hall45.jpeg',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 46,
    category: 'hall',
    src: '/images/gallery/hall/hall46.jpeg',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 47,
    category: 'hall',
    src: '/images/gallery/hall/hall47.jpeg',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 48,
    category: 'hall',
    src: '/images/gallery/hall/hall48.jpeg',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 49,
    category: 'hall',
    src: '/images/gallery/hall/hall49.jpeg',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 50,
    category: 'hall',
    src: '/images/gallery/hall/hall50.jpeg',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 51,
    category: 'hall',
    src: '/images/gallery/hall/hall51.jpeg',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 52,
    category: 'hall',
    src: '/images/gallery/hall/hall52.jpeg',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 53,
    category: 'hall',
    src: '/images/gallery/hall/hall53.jpeg',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 54,
    category: 'hall',
    src: '/images/gallery/hall/hall54.jpeg',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 55,
    category: 'hall',
    src: '/images/gallery/hall/hall55.jpeg',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },
  {
    id: 56,
    category: 'hall',
    src: '/images/gallery/hall/hall56.jpeg',
    alt: 'תאורת אולם מדויקת',
    description: 'מערכת תאורה מתקדמת היוצרת אווירה קסומה',
  },
  {
    id: 57,
    category: 'hall',
    src: '/images/gallery/hall/hall57.jpeg',
    alt: 'עיצוב פנים אלגנטי',
    description: 'עיצוב פנים אלגנטי עם דגש על פרטים',
  },
  {
    id: 58,
    category: 'hall',
    src: '/images/gallery/hall/hall58.jpeg',
    alt: 'חלל אירועים מרווח',
    description: 'חלל אירועים מרווח ומזמין',
  },
  {
    id: 59,
    category: 'hall',
    src: '/images/gallery/hall/hall59.jpeg',
    alt: 'תאורת אולם דרמטית',
    description: 'תאורת אולם דרמטית יוצרת אווירה קסומה',
  },
  {
    id: 60,
    category: 'hall',
    src: '/images/gallery/hall/hall60.jpeg',
    alt: 'עיצוב פנים מודרני',
    description: 'עיצוב פנים מודרני עם דגש על אלגנטיות',
  },
  {
    id: 61,
    category: 'hall',
    src: '/images/gallery/hall/hall61.jpeg',
    alt: 'חלל אירועים יוקרתי',
    description: 'חלל אירועים יוקרתי עם תאורה מדויקת',
  },

  // תמונות הגן
  {
    id: 62,
    category: 'garden',
    src: '/images/gallery/garden/830feb12-3386-4d9f-9bfb-77e96044a49a.JPG',
    alt: 'הגן המרהיב',
    description: 'גן ירוק ומטופח המושלם לקבלות פנים וטקסים בטבע',
  },

  // תמונות הקולינריה
  {
    id: 63,
    category: 'food',
    src: '/images/gallery/food/167dfa00-d26f-4e3b-b572-5fdfceba54dc.JPG',
    alt: 'מנות שף מיוחדות',
    description: 'חוויה קולינרית עם מנות שף ייחודיות ועיצוב צלחות מרהיב',
  },
]

// עדכון מספר התמונות בכל קטגוריה
categories.forEach(category => {
  if (category.id === 'all') {
    category.count = galleryItems.length
  } else {
    category.count = galleryItems.filter(item => item.category === category.id).length
  }
})

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const filteredImages = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <Head>
        <title>גלריית תמונות | אודיסאה - אולם אירועים יוקרתי בבאר שבע</title>
        <meta name="description" content="צפו בגלריית התמונות של אולם האירועים אודיסאה. תמונות מאירועים, עיצובים מרהיבים, והחללים המפוארים שלנו." />
        <meta name="keywords" content="אולם אירועים, גלריית תמונות, אירועים בבאר שבע, חתונות, בר מצוות, אירועים יוקרתיים, אודיסאה" />
        <meta property="og:title" content="גלריית תמונות | אודיסאה - אולם אירועים יוקרתי בבאר שבע" />
        <meta property="og:description" content="צפו בגלריית התמונות של אולם האירועים אודיסאה. תמונות מאירועים, עיצובים מרהיבים, והחללים המפוארים שלנו." />
        <meta property="og:image" content="/images/gallery/hall/hall1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="גלריית תמונות | אודיסאה - אולם אירועים יוקרתי בבאר שבע" />
        <meta name="twitter:description" content="צפו בגלריית התמונות של אולם האירועים אודיסאה. תמונות מאירועים, עיצובים מרהיבים, והחללים המפוארים שלנו." />
        <meta name="twitter:image" content="/images/gallery/hall/hall1.JPG" />
      </Head>

      <main className="min-h-screen bg-black">
        <div className="h-16 sm:h-20" />
        
        {/* Hero Section */}
        <motion.section 
          style={{ opacity, scale }}
          className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/gallery/hall/hall1.JPG"
              alt="אולם האירועים אודיסאה - גלריית תמונות"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black" />
            <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
          </div>
          
          <div className="relative z-10 text-center px-4">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 relative">
                הגלריה שלנו
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 font-light px-4"
            >
              הצצה לרגעים הקסומים שנוצרו באודיסאה
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 sm:gap-3 text-amber-500"
            >
              <span className="text-base sm:text-lg md:text-xl">גלול למטה לגלריה</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </div>
        </motion.section>

        {/* Gallery Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4" aria-label="גלריית תמונות">
          <div className="container mx-auto max-w-7xl">
            {/* Categories */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16"
              role="tablist"
              aria-label="קטגוריות גלריה"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 flex items-center gap-2 sm:gap-3 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
                      : 'bg-zinc-800/50 text-gray-400 hover:bg-zinc-700/50 hover:text-gray-200'
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === category.id}
                  aria-controls={`gallery-${category.id}`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs sm:text-sm opacity-60">({category.count})</span>
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              role="grid"
              aria-label="תמונות גלריה"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedImage(item.id)}
                    role="gridcell"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 6}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2">{item.alt}</h3>
                        <p className="text-sm sm:text-base text-gray-200/80">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="תצוגת תמונה מורחבת"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-[95vh] sm:max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={galleryItems.find(item => item.id === selectedImage)?.src || ''}
                    alt={`${galleryItems.find(item => item.id === selectedImage)?.alt || ''} - אודיסאה אולם אירועים`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                <button
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white text-3xl sm:text-4xl hover:text-amber-500 transition-colors"
                  onClick={() => setSelectedImage(null)}
                  aria-label="סגור תצוגה מורחבת"
                >
                  ×
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl sm:text-2xl font-medium mb-1 sm:mb-2">
                    {galleryItems.find(item => item.id === selectedImage)?.alt}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200/80">
                    {galleryItems.find(item => item.id === selectedImage)?.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </>
  )
} 