import Footer from '@/components/Footer'
import { FadeIn, SlideUp } from '@/components/Animations'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              הצעות מותאמות אישית
            </h1>
            <p className="text-xl text-gray-200">
              כל אירוע הוא ייחודי, וכך גם ההצעה שלנו
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">איך זה עובד?</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <SlideUp delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">פגישת ייעוץ</h3>
                <p className="text-gray-600">נפגש לשיחה אישית להבנת הצרכים והדרישות שלכם</p>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">הצעה מותאמת</h3>
                <p className="text-gray-600">נכין עבורכם הצעה אישית המתאימה בדיוק לאירוע שלכם</p>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">התאמה אישית</h3>
                <p className="text-gray-600">נעזור לכם להתאים את כל הפרטים בדיוק כמו שרציתם</p>
              </div>
            </SlideUp>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6">מה כלול בהצעות שלנו?</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <SlideUp delay={0.1}>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>השכרת האולם לפי שעות</span>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>מערכת סאונד ותאורה</span>
                </div>
              </SlideUp>
              <SlideUp delay={0.3}>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>שירותי ניקיון</span>
                </div>
              </SlideUp>
              <SlideUp delay={0.4}>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>שולחנות וכיסאות</span>
                </div>
              </SlideUp>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-4">מוכנים להתחיל?</h2>
              <p className="text-lg text-gray-600 mb-8">
                צרו איתנו קשר לקבלת הצעה מותאמת אישית לאירוע שלכם
              </p>
              <a
                href="/#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                צור קשר
              </a>
            </FadeIn>
          </div>
        </div>
      </div>

      <Footer />

      <Link href="/" className="text-red-600 hover:text-red-700">
        חזרה לדף הבית
      </Link>
    </div>
  )
} 