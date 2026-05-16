import React, { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemePicker() {

  const [isOpen, setIsOpen] = useState(false)

  const { theme: activeTheme, setTheme, themes } = useTheme()

  const pickerRef = useRef(null)

  /* ===============================
     CLOSE ON OUTSIDE CLICK
  =============================== */

  useEffect(() => {

    const handleOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)

    return () => document.removeEventListener('mousedown', handleOutside)

  }, [])

  /* ===============================
     ESC KEY CLOSE (IMPORTANT FOR KIOSK)
  =============================== */

  useEffect(() => {

    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleEsc)

    return () => document.removeEventListener('keydown', handleEsc)

  }, [])

  /* ===============================
     UI
  =============================== */

  return (

    <div className="theme-picker" ref={pickerRef}>

      {/* TOGGLE BUTTON */}
      <button
        className={`theme-mark ${isOpen ? 'open' : ''}`}
        aria-label="Choose theme"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="moon">
          <span className="moon-cut" />
          <span className="star star-large" />
          <span className="star star-small" />
        </span>
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="theme-menu" role="menu">

          {themes.map((themeItem) => {

            const isActive = themeItem.id === activeTheme

            return (

              <button
                key={themeItem.id}
                className={`theme-option ${isActive ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  setTheme(themeItem.id)
                  setIsOpen(false)
                }}
              >

                {/* COLORS */}
                <span className="theme-swatches">
                  {themeItem.colors.map((color) => (
                    <span
                      key={color}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>

                {/* LABEL */}
                <span className="theme-label">
                  {themeItem.label}
                </span>

                {/* CHECK */}
                {isActive && <Check size={16} className="theme-check" />}

              </button>

            )

          })}

        </div>
      )}

    </div>

  )
}