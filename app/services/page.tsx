'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: 'חתונות',
      description: 'הפכו את היום המיוחד שלכם לבלתי נשכח באולם אודיסאה',
      image: '/images/wedding.jpg',
      href: '/services/weddings',
    },
    {
      title: 'בר/בת מצווה',
      description: 'חגגו את האירוע המשמעותי באווירה מושלמת',
      image: '/images/bar-mitzvah.jpg',
      href: '/services/bar-mitzvah',
    },
    {
      title: 'אירועים עסקיים',
      description: 'אירועי חברה, כנסים והשקות במיקום יוקרתי',
      image: '/images/corporate.jpg',
      href: '/services/corporate',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            השירותים שלנו
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            אנו מציעים מגוון פתרונות לאירועים שונים, עם דגש על איכות, שירות ותשומת לב לפרטים הקטנים
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </Link>
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
            רוצים לשמוע עוד?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            צוות המומחים שלנו ישמח לענות על כל שאלה ולהתאים עבורכם את החבילה המושלמת
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