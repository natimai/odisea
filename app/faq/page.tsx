'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { FadeIn, SlideUp } from '@/components/Animations'
import Link from 'next/link'

const faqCategories = [
  {
    title: 'מידע כללי',
    questions: [
      {
        question: 'מהו אולם אודיסאה?',
        answer: 'אולם אודיסאה הוא אולם אירועים מודרני ומרווח הממוקם בלב העיר. האולם מציע חלל גמיש המתאים למגוון אירועים, החל מחתונות ועד לאירועים עסקיים.',
      },
      {
        question: 'מהי קיבולת האולם?',
        answer: 'האולם יכול להכיל עד 300 אורחים בישיבה מסודרת. החלל הגמיש מאפשר התאמה למגוון סידורי ישיבה שונים.',
      },
      {
        question: 'האם יש חניה במקום?',
        answer: 'כן, יש חניה חינמית בשפע בסמוך לאולם. בנוסף, יש גישה נוחה בתחבורה ציבורית.',
      },
    ],
  },
  {
    title: 'הזמנות ותנאים',
    questions: [
      {
        question: 'כיצד מזמינים את האולם?',
        answer: 'ניתן להזמין את האולם דרך הטלפון או באמצעות טופס יצירת הקשר באתר. נשמח לקבל את פניכם לפגישת ייעוץ אישית.',
      },
      {
        question: 'מהי מדיניות הביטולים?',
        answer: 'מדיניות הביטולים גמישה ומתחשבת. יש צורך בתשלום מקדמה של 30% בעת ההזמנה, והשאר ניתן לשלם עד שבוע לפני האירוע.',
      },
      {
        question: 'האם יש צורך בתשלום מקדמה?',
        answer: 'כן, נדרש תשלום מקדמה של 30% בעת ההזמנה כדי להבטיח את התאריך המבוקש.',
      },
    ],
  },
  {
    title: 'שירותים נוספים',
    questions: [
      {
        question: 'האם יש אפשרות להוסיף קייטרינג?',
        answer: 'כן, אנו מציעים שירותי קייטרינג איכותיים במגוון אפשרויות. ניתן להתאים את התפריט בדיוק לצרכים שלכם.',
      },
      {
        question: 'האם יש מערכת סאונד ותאורה?',
        answer: 'כן, האולם מצויד במערכת סאונד ותאורה מתקדמת. ניתן להוסיף גם תאורה דקורטיבית נוספת לפי הצורך.',
      },
      {
        question: 'האם יש אפשרות להוסיף שולחנות וכיסאות?',
        answer: 'כן, אנו מספקים שולחנות וכיסאות במגוון סגנונות. ניתן להתאים את הכמות והסגנון לאירוע שלכם.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index.toString() ? null : index.toString())
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              שאלות נפוצות
            </h1>
            <p className="text-xl text-gray-200">
              כל המידע שחשוב לדעת על אולם אודיסאה
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-center text-lg text-gray-600 mb-12">
              מצאתם את התשובה שחיפשתם? אם לא, אנחנו כאן בשבילכם
            </p>
          </FadeIn>

          <div className="space-y-8">
            {faqCategories.map((category, index) => (
              <SlideUp key={category.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenCategory(openCategory === category.title ? null : category.title)}
                    className="w-full px-6 py-4 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-between"
                  >
                    <h2 className="text-xl font-bold text-blue-900">{category.title}</h2>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        openCategory === category.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openCategory === category.title && (
                    <div className="p-6 space-y-4">
                      {category.questions.map((item, qIndex) => (
                        <div key={item.question} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => handleQuestionClick(qIndex)}
                            className="w-full text-right flex items-center justify-between"
                          >
                            <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                            <svg
                              className={`w-5 h-5 transform transition-transform ${
                                openQuestion === qIndex.toString() ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openQuestion === qIndex.toString() && (
                            <p className="mt-2 text-gray-600">{item.answer}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </SlideUp>
            ))}
          </div>

          <div className="mt-16 text-center">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-4">עדיין יש לכם שאלות?</h2>
              <p className="text-lg text-gray-600 mb-8">
                אנחנו כאן בשבילכם. צרו איתנו קשר ונשמח לעזור
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