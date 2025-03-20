'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false)

  const accessibilityOptions = [
    { label: 'הגדלת טקסט', action: () => document.documentElement.style.fontSize = '18px' },
    { label: 'הקטנת טקסט', action: () => document.documentElement.style.fontSize = '16px' },
    { label: 'ניגודיות גבוהה', action: () => document.body.classList.toggle('high-contrast') },
    { label: 'הצהרת נגישות', action: () => window.location.href = '/accessibility' },
  ]

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
        aria-label="הגדרות נגישות"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 min-w-[200px]"
        >
          <div className="space-y-2">
            {accessibilityOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  option.action()
                  setIsOpen(false)
                }}
                className="w-full text-right py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
} 