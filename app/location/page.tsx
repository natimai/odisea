import Footer from '@/components/Footer'

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              מיקום וגישה
            </h1>
            <p className="text-xl text-gray-200">
              איך להגיע לאולם אודיסאה
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Address & Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-8">כתובת ופרטי קשר</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">כתובת</h3>
                <p className="text-gray-600">
                  רחוב הרצל 123, באר שבע
                  <br />
                  קומה 2
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">טלפון</h3>
                <p className="text-gray-600">08-1234567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">אימייל</h3>
                <p className="text-gray-600">info@odisea.co.il</p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div>
            <h2 className="text-3xl font-bold mb-8">הוראות הגעה</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">מכביש 40</h3>
                <p className="text-gray-600">
                  יורדים במחלף באר שבע מערב
                  <br />
                  פונים ימינה לכיוון מרכז העיר
                  <br />
                  ממשיכים ישר עד רחוב הרצל
                  <br />
                  פונים שמאלה לרחוב הרצל
                  <br />
                  האולם נמצא כ-200 מטר משמאל
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">מכביש 60</h3>
                <p className="text-gray-600">
                  יורדים במחלף באר שבע מזרח
                  <br />
                  פונים שמאלה לכיוון מרכז העיר
                  <br />
                  ממשיכים ישר עד רחוב הרצל
                  <br />
                  פונים ימינה לרחוב הרצל
                  <br />
                  האולם נמצא כ-200 מטר משמאל
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parking */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">חניה</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-4">
              חניה חינמית זמינה ל-100 רכבים במגרש החניה של האולם
            </p>
            <p className="text-lg text-gray-600">
              חניה נוספת זמינה ברחובות הסמוכים
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.902442238123!2d34.789123!3d31.251234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1513844f1c7f0bd1%3A0x5e0c3a3f5e0c3a3f!2sOdisea%20Event%20Hall!5e0!3m2!1sen!2sil!4v1234567890!5m2!1sen!2sil"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">מידע נוסף</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              האולם ממוקם במרכז באר שבע, עם גישה נוחה מכל חלקי העיר
            </p>
            <p className="text-lg text-gray-600 mb-6">
              מומלץ להגיע כ-15 דקות לפני תחילת האירוע
            </p>
            <p className="text-lg text-gray-600">
              לשאלות נוספות, צרו איתנו קשר בטלפון או באימייל
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 