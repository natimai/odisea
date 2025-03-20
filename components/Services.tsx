export default function Services() {
  const services = [
    {
      title: 'חתונות',
      description: 'אולם מרווח ומרשים, מושלם לחתונות בסגנונות שונים',
    },
    {
      title: 'בר מצוות',
      description: 'חלל חגיגי ומזמין, מתאים לאירועי בר מצווה',
    },
    {
      title: 'אירועי חברה',
      description: 'מקום אידיאלי לאירועי חברה, ימי עיון ופעילויות קבוצתיות',
    },
    {
      title: 'ועידות',
      description: 'מתקנים מתקדמים ותשתית מקצועית לוועידות וסמינרים',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">השירותים שלנו</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-right"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 