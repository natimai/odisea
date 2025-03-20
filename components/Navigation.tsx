'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const menuItems = [
  { title: 'בית', href: '/' },
  { 
    title: 'שירותים',
    href: '/services',
    submenu: [
      { title: 'חתונות', href: '/services/weddings' },
      { title: 'בר/בת מצווה', href: '/services/bar-mitzvah' },
      { title: 'אירועים עסקיים', href: '/services/corporate' },
    ]
  },
  { title: 'גלריה', href: '/gallery' },
  { title: 'אודות', href: '/about' },
  { title: 'צור קשר', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-900/90 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="אודיסאה"
                width={140}
                height={50}
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-200 hover:text-amber-500 transition-colors duration-300 text-lg relative group"
                  >
                    {item.title}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </motion.div>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-zinc-900/90 backdrop-blur-md rounded-lg shadow-xl border border-zinc-800/50 overflow-hidden"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-3 text-gray-200 hover:text-amber-500 hover:bg-zinc-800/50 transition-all duration-300"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl relative group"
              >
                <span className="relative z-10">צור קשר</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-200 hover:text-amber-500 transition-colors duration-300"
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/50"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item, index) => (
                <div key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-200 hover:text-amber-500 transition-colors duration-300 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>

                  {item.submenu && (
                    <div className="pr-4 border-r border-zinc-800/50 mr-2 mt-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index + subIndex) * 0.1 }}
                        >
                          <Link
                            href={subItem.href}
                            className="block py-2 text-gray-300 hover:text-amber-500 transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 