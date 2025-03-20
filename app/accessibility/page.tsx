'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function AccessibilityPage() {
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
              הצהרת נגישות
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              מחויבותנו לנגישות ושוויון הזדמנויות
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              אולם אירועים אודיסאה רואה חשיבות רבה בשוויון הזדמנויות לכלל הציבור, ומחויב לנגישות של אתר האינטרנט שלו. האתר נגיש לאנשים עם מוגבלות, כך שאנשים עם מוגבלות יכולים לקבל שירות באותה רמה ואיכות, בנוחות ובעצמאות.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">אמצעי נגישות</h2>
            <p className="text-gray-300 mb-6">
              האתר כולל אמצעי נגישות שונים, לרבות:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>אפשרות להגדלת טקסט</li>
              <li>ניגודיות צבעים מותאמת</li>
              <li>תמיכה בתוכנות הקראה</li>
              <li>מבנה ברור ופשוט</li>
              <li>תיאורי תמונות</li>
              <li>כותרות ברורות</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">יצירת קשר</h2>
            <p className="text-gray-300 mb-6">
              אם נתקלתם בבעיית נגישות באתר, אנא דווחו לנו ואנו נשמח לתקן אותה. ניתן ליצור איתנו קשר בטלפון: 072-394-6356 או בדוא"ל: odisea.evnt@gmail.com
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">מידע נוסף</h2>
            <p className="text-gray-300 mb-6">
              האתר נבדק על ידי חברת נגישות מוסמכת, ונמצא כי הוא עומד בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
            </p>

            <p className="text-gray-300">
              אנו ממשיכים לפעול לשיפור הנגישות של האתר באופן שוטף, ומעודכנים בטכנולוגיות החדשות ביותר בתחום הנגישות.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 