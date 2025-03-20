'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">צור קשר</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
            <div className="space-y-4">
              <p>
                <strong>כתובת:</strong> רחוב הרצל 123, באר שבע
              </p>
              <p>
                <strong>טלפון:</strong> 08-1234567
              </p>
              <p>
                <strong>אימייל:</strong> info@odisea.co.il
              </p>
            </div>
            <div className="mt-8 h-[300px] bg-gray-200 rounded-lg">
              {/* Here you would embed a Google Maps iframe */}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              שליחה
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 