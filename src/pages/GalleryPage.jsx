import React, { useState } from 'react'
import { Play } from 'lucide-react'
import Navigation from '../components/Navigation.jsx'
import PageHeader from '../components/PageHeader.jsx'
import VideoLightbox from '../components/VideoLightbox.jsx'

const galleryVideos = [
  { alt: 'Godrej Brand Anthem featuring celebrity endorsement' },
  { alt: 'Godrej TMT Bars strength testimonial campaign video' },
  { alt: 'Godrej World Cup captains endorsement commercial' },
  { alt: 'Godrej TVC with brand ambassadors' },
  { alt: 'Godrej Director speech at industry summit' },
  { alt: 'Godrej RealFabrica construction hero documentary' },
]

export default function GalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <main className="screen about-screen gallery-screen title-simple-page">
      <section className="about-panel gallery-panel">
        <PageHeader title="MEDIA GALLERY" />
        
        <section className="gallery-grid">
          {galleryVideos.map((video, idx) => (
            <button
              key={idx}
              className="gallery-video-tile"
              onClick={() => setActiveVideo(idx)}
              type="button"
              aria-label={`Play ${video.alt}`}
            >
              <video
                src="" // ADD VIDEO URL
                poster="" // ADD POSTER URL
                alt={video.alt}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
              />
              <span className="gallery-play-dot">
                <Play fill="currentColor" strokeWidth={1.8} />
              </span>
            </button>
          ))}
        </section>

        <Navigation />
        
        {activeVideo !== null && (
          <VideoLightbox 
            src="" // ADD VIDEO URL
            alt={galleryVideos[activeVideo].alt}
            onClose={() => setActiveVideo(null)} 
          />
        )}
      </section>
    </main>
  )
}