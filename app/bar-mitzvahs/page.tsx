import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BarMitzvahsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/bar-mitzvah-hero.jpg"
          alt="בר מצווה באודיסאה"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              בר מצוות באודיסאה
            </h1>
            <p className="text-xl text-gray-200">
              חגיגה בלתי נשכחת ליום המיוחד
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">אולם בר מצווה מושלם</h2>
            <p className="text-lg text-gray-600 mb-6">
              אודיסאה הוא המקום המושלם לחגוג את בר המצווה. האולם שלנו מציע
              חלל מרווח ונעים, מערכת סאונד ותאורה מקצועית, ומטבח מאובזר
              להפליא.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                קיבולת של עד 300 אורחים
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                מערכת סאונד ותאורה מקצועית
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                מטבח מאובזר
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                חניה חינמית
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/bar-mitzvah-interior.jpg"
              alt="פנים אולם בר מצווה"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">חבילות מותאמות</h3>
            <p className="text-gray-600">
              אנחנו מציעים חבילות מותאמות אישית לכל משפחה, כולל אפשרויות
              שונות לקייטרינג, די.ג'יי, ועוד.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">צוות מקצועי</h3>
            <p className="text-gray-600">
              הצוות שלנו מנוסה ומקצועי, ויעשה הכל כדי להפוך את היום המיוחד
              למושלם.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">גמישות מלאה</h3>
            <p className="text-gray-600">
              אנחנו מאמינים בגמישות מלאה, ומאפשרים לכם להביא ספקים חיצוניים
              לפי בחירתכם.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            מוכנים לתכנן את בר המצווה?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            צרו איתנו קשר ונשמח לעזור לכם לתכנן את היום המיוחד
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            צור קשר
          </Link>
        </div>

        <Link href="/" className="text-red-600 hover:text-red-700">
          חזרה לדף הבית
        </Link>
      </div>

      <Footer />
    </div>
  )
} 