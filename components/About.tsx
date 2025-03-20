import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/avi-lev.jpg"
              alt="Avi Lev"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold mb-6">על אודות</h2>
            <p className="text-lg mb-6">
              אולם אירועים אודיסאה, בניהולו של אבי לב, מביא איתו ניסיון של שנים בתחום האירועים.
              אבי, עם רקע עשיר בניהול אירועים, מביא את המומחיות והמקצועיות שלו לכל אירוע.
            </p>
            <p className="text-lg">
              האולם שלנו מציע חלל ייחודי ומרווח, המשלב אלגנטיות עם נוחות, ומתאים למגוון רחב של אירועים:
              חתונות, בר מצוות, אירועי חברה, ועידות ועוד.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 