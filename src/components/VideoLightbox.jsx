import React, { useEffect } from 'react'

export default function VideoLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      className="corporate-lightbox"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="corporate-modal">
        <button className="corporate-close" onClick={onClose} aria-label="Close video">
          ×
        </button>
        <video
          className="corporate-video"
          src={src || ''}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  )
}