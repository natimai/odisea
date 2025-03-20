import Image from 'next/image'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: 'אבי לוי',
    role: 'מנכ"ל',
    image: '/images/gallery/hall/hall58.jpeg',
    description: 'מנהל אולם האירועים אודיסאה עם ניסיון של למעלה מ-20 שנה בתחום האירועים והקולינריה.',
  },
  {
    name: 'שרה כהן',
    role: 'מנהלת אירועים',
    image: '/images/gallery/hall/hall55.jpeg',
    description: 'אחראית על תכנון וניהול האירועים, עם התמחות בחתונות ואירועים גדולים.',
  },
  {
    name: 'יוסי דוד',
    role: 'שף ראשי',
    image: '/images/gallery/food/167dfa00-d26f-4e3b-b572-5fdfceba54dc.JPG',
    description: 'שף בעל ניסיון בינלאומי, מתמחה במטבח ים תיכוני וקולינריה עכשווית.',
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              הצוות שלנו
            </h1>
            <p className="text-xl text-gray-200">
              צוות מקצועי ומיומן לשירותכם
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">למה אנחנו?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              הצוות שלנו מביא איתו ניסיון של שנים בתחום האירועים, ומבטיח לכם
              שירות מקצועי ואמין לאורך כל הדרך.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              אנחנו מאמינים בשירות אישי ומותאם לכל לקוח, ומלווים אתכם משלב
              התכנון ועד סיום האירוע.
            </p>
            <p className="text-lg text-gray-600">
              צרו איתנו קשר להתייעצות ראשונית ללא עלות.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 