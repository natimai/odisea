'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'בית' },
    { href: '/about', label: 'אודות' },
    { href: '/gallery', label: 'גלריה' },
    { href: '/contact', label: 'צור קשר' },
  ]

  const services = [
    { href: '/services/weddings', label: 'חתונות' },
    { href: '/services/bar-mitzvah', label: 'בר/בת מצווה' },
    { href: '/services/corporate', label: 'אירועים עסקיים' },
  ]

  const contact = [
    { 
      label: 'טלפון ראשי',
      value: '072-394-6356',
      href: 'tel:072-394-6356',
      icon: <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
    },
    { 
      label: 'טלפון נוסף',
      value: '08-623-3404',
      href: 'tel:08-623-3404',
      icon: <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
    },
    { 
      label: 'דוא"ל',
      value: 'odisea.evnt@gmail.com',
      href: 'mailto:odisea.evnt@gmail.com',
      icon: <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6" />
    },
    { 
      label: 'כתובת',
      value: 'הנרייטה סאלד 4, באר שבע',
      href: 'https://maps.google.com/?q=הנרייטה+סאלד+4+באר+שבע',
      icon: <MapPinIcon className="w-5 h-5 md:w-6 md:h-6" />
    }
  ]

  const social = [
    { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
    { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
    { href: 'https://wa.me/972723946356', label: 'WhatsApp', icon: 'whatsapp' },
  ]

  return (
    <footer className="bg-[#0A0A0A] text-white py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-3"
          >
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-6">ניווט מהיר</h3>
            <ul className="space-y-2 md:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-3"
          >
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-6">שירותים</h3>
            <ul className="space-y-2 md:space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm md:text-base text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-6"
          >
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-6">צור קשר</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-3 md:space-x-4 space-x-reverse text-gray-400 hover:text-red-500 transition-colors duration-300 p-2 md:p-4 rounded-lg hover:bg-red-900/10"
                >
                  {item.icon}
                  <div>
                    <p className="font-medium text-white text-base md:text-lg">{item.label}</p>
                    <p className="text-sm md:text-base mt-0.5 md:mt-1">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 pt-4 md:pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-400">
              © {currentYear} אולם אירועים אודיסאה. כל הזכויות שמורות.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 space-x-reverse">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 