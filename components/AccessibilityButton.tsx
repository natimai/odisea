'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SunIcon, MoonIcon, ArrowPathIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize')
    const savedHighContrast = localStorage.getItem('highContrast')
    const savedDarkMode = localStorage.getItem('darkMode')
    const savedMuted = localStorage.getItem('muted')

    if (savedFontSize) setFontSize(Number(savedFontSize))
    if (savedHighContrast === 'true') setIsHighContrast(true)
    if (savedDarkMode === 'true') setIsDarkMode(true)
    if (savedMuted === 'true') setIsMuted(true)
  }, [])

  const accessibilityOptions = [
    {
      label: 'הגדלת טקסט',
      action: () => {
        const newSize = Math.min(fontSize + 2, 24)
        setFontSize(newSize)
        document.documentElement.style.fontSize = `${newSize}px`
        localStorage.setItem('fontSize', newSize.toString())
      },
      icon: <span className="text-lg">A+</span>
    },
    {
      label: 'הקטנת טקסט',
      action: () => {
        const newSize = Math.max(fontSize - 2, 12)
        setFontSize(newSize)
        document.documentElement.style.fontSize = `${newSize}px`
        localStorage.setItem('fontSize', newSize.toString())
      },
      icon: <span className="text-sm">A-</span>
    },
    {
      label: 'ניגודיות גבוהה',
      action: () => {
        setIsHighContrast(!isHighContrast)
        document.body.classList.toggle('high-contrast')
        localStorage.setItem('highContrast', (!isHighContrast).toString())
      },
      icon: <ArrowPathIcon className="w-5 h-5" />
    },
    {
      label: 'מצב לילה',
      action: () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('darkMode', (!isDarkMode).toString())
      },
      icon: isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />
    },
    {
      label: isMuted ? 'הפעלת קולות' : 'השתקה',
      action: () => {
        setIsMuted(!isMuted)
        document.body.classList.toggle('muted')
        localStorage.setItem('muted', (!isMuted).toString())
      },
      icon: isMuted ? <SpeakerXMarkIcon className="w-5 h-5" /> : <SpeakerWaveIcon className="w-5 h-5" />
    },
    {
      label: 'הצהרת נגישות',
      action: () => window.location.href = '/accessibility',
      icon: <span className="text-sm">📋</span>
    },
  ]

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        aria-label="הגדרות נגישות"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 left-0 bg-white dark:bg-zinc-800 rounded-lg shadow-xl p-4 min-w-[250px]"
          >
            <div className="space-y-2">
              {accessibilityOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    option.action()
                    if (option.label !== 'הצהרת נגישות') {
                      setIsOpen(false)
                    }
                  }}
                  className="w-full text-right py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{option.icon}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 