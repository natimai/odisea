'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-b from-red-900/20 to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              צרו איתנו קשר
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              נשמח לעזור לכם להפוך את האירוע שלכם למושלם
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              פרטי התקשרות
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-red-500 mt-1" />
                <div className="mr-4">
                  <p className="font-medium text-white">טלפון</p>
                  <p className="text-gray-300">072-394-6356</p>
                  <p className="text-gray-300">08-623-3404</p>
                </div>
              </div>

              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-red-500 mt-1" />
                <div className="mr-4">
                  <p className="font-medium text-white">דוא"ל</p>
                  <p className="text-gray-300">odisea.evnt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-red-500 mt-1" />
                <div className="mr-4">
                  <p className="font-medium text-white">כתובת</p>
                  <p className="text-gray-300">הנרייטה סאלד 4, באר שבע</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              התקשרו עכשיו
            </h3>
            <p className="text-gray-300 mb-8">
              נשמח לענות על כל שאלה ולעזור לכם בתכנון האירוע המושלם
            </p>
            <a
              href="tel:072-394-6356"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors text-lg"
            >
              <PhoneIcon className="h-6 w-6 ml-2" />
              התקשרו עכשיו
            </a>
          </motion.div>
        </div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-8">שעות פעילות</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-300">
              <span>ראשון - חמישי</span>
              <span>10:00 - 20:00</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>שישי</span>
              <span>10:00 - 14:00</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>שבת</span>
              <span>סגור</span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 