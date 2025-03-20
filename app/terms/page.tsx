'use client'

import React from 'react'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              תנאי שימוש ומדיניות פרטיות
            </h1>
            <p className="text-xl text-gray-200">
              מידע חשוב לגבי השימוש באתר אודיסאה
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>תנאי שימוש</h2>
          <p>
            ברוכים הבאים לאתר אודיסאה. השימוש באתר זה כפוף לתנאים הבאים:
          </p>
          <ul>
            <li>
              כל המידע באתר הוא בבעלות אודיסאה ומוגן בזכויות יוצרים.
            </li>
            <li>
              אסור להעתיק, להפיץ או להשתמש במידע מהאתר ללא אישור בכתב.
            </li>
            <li>
              אנו שומרים על זכותנו לשנות את התנאים בכל עת ללא הודעה מוקדמת.
            </li>
            <li>
              השימוש באתר הוא על אחריות המשתמש בלבד.
            </li>
          </ul>

          <h2>מדיניות פרטיות</h2>
          <p>
            אנו מכבדים את פרטיות המשתמשים באתר שלנו. הנה המדיניות שלנו:
          </p>
          <ul>
            <li>
              אנו אוספים מידע אישי רק כאשר הוא נדרש לשירותים שאנו מספקים.
            </li>
            <li>
              המידע שנאסף משמש אותנו רק למטרות שלשמן נאסף.
            </li>
            <li>
              אנו לא משתפים את המידע עם צדדים שלישיים ללא הסכמת המשתמש.
            </li>
            <li>
              אנו נוקטים אמצעי אבטחה מתאימים להגנה על המידע.
            </li>
          </ul>

          <h2>עוגיות</h2>
          <p>
            האתר שלנו משתמש בעוגיות לשיפור חווית המשתמש. השימוש בעוגיות
            הוא בהתאם למדיניות הפרטיות שלנו.
          </p>

          <h2>תקשורת</h2>
          <p>
            כאשר אתם מתקשרים איתנו דרך האתר, אנו שומרים את המידע לצורך מענה
            לבקשתכם ולשיפור השירות שלנו.
          </p>

          <h2>שינויים במדיניות</h2>
          <p>
            אנו שומרים על זכותנו לעדכן את מדיניות הפרטיות בכל עת. שינויים
            משמעותיים יפורסמו באתר.
          </p>

          <h2>צור קשר</h2>
          <p>
            אם יש לכם שאלות לגבי התנאים או מדיניות הפרטיות, אתם מוזמנים
            ליצור איתנו קשר:
          </p>
          <ul>
            <li>טלפון: 08-1234567</li>
            <li>דוא&quot;ל: info@odisea.co.il</li>
            <li>כתובת: רחוב הרצל 123, באר שבע</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
} 