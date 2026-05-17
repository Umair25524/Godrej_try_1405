import React, { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play } from 'lucide-react'

import ThemePicker from '../components/ThemePicker.jsx'
import VideoLightbox from '../components/VideoLightbox.jsx'

const cards = [
  {
    alt: 'History',
    page: '/about',
    color: '#c9a84c',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkKluS8G1iwPOAtV_i1TSVVZmT4KmbSBd8A&s'
  },
  {
    alt: 'Layout',
    page: '/infrastructure',
    color: '#b8953e',
    image:
      'https://www.yhataw.com/wp-content/uploads/2020/12/GodrejIcon_SitePlan-900x600.jpg'
  },
  {
    alt: 'Categories',
    page: '/products',
    color: '#d4b85a',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6P5XgEG-G_5geZ3v1HJTflQMnxejneRCnQ&s'
  },
  {
    alt: 'Employee Details',
    page: '/projects',
    color: '#c9a84c',
    image:
      'https://img.etimg.com/thumb/width-420,height-315,imgsize-327623,resizemode-75,msid-48042312/news/company/corporate-trends/indias-best-companies-to-work-for-2015-godrej-consumer-products-masters-the-art-of-employee-retention.jpg'
  },
  {
    alt: 'Know Our Partners',
    page: '/partner',
    color: '#b8953e',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMkp7UVMym9BMQo9B-PJY7mnA1UYqz1cFHg&s'
  },
  {
    alt: 'Gallery',
    page: '/achievements',
    color: '#c9a84c',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawx2lAf9rSpKVBIbvnYbC1tZxMVTz_tDh0g&s'
  },
  {
    alt: 'Certification & Licenses',
    page: '/certificate',
    color: '#b8953e',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VQifprz1viaQTIZ5pcfffa41_ZH7HKw_4g&s'
  },
  {
    alt: 'Achievements',
    page: '/categories',
    color: '#b8953e',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4Ub3E2beCXQsrQWWNURp3yarKL0rTGydpQ&s'
  },
  {
    alt: 'Contact Us',
    page: '/contact',
    color: '#b8953e',
    image:
      'https://msmedevelopmentforum.com/wp-content/uploads/2024/02/contact-us-rposnsive.jpg'
  }
]

const corporateVideo = ''

export default function HomePage() {
  const navigate = useNavigate()

  const [videoOpen, setVideoOpen] = useState(false)

  const scrollRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)

  const [startX, setStartX] = useState(0)

  const [scrollLeft, setScrollLeft] = useState(0)

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  /* ======================================================
     DRAG SCROLL
  ====================================================== */

  const handlePointerDown = useCallback((e) => {
    setIsDragging(true)

    const x = e.pageX || e.touches?.[0]?.pageX || 0

    setStartX(x)

    setScrollLeft(scrollRef.current.scrollLeft)
  }, [])

  const handlePointerMove = useCallback(
    (e) => {
      if (!isDragging) return

      e.preventDefault()

      const x = e.pageX || e.touches?.[0]?.pageX || 0

      const walk = (x - startX) * 1.4

      scrollRef.current.scrollLeft = scrollLeft - walk
    },
    [isDragging, startX, scrollLeft]
  )

  const stopDragging = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <main className="screen">

      <section className="front-panel">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <header className="top-bar">

          <p className="date-text">
            {today}
          </p>

          <img
            className="brand-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1280px-Godrej_Logo.svg.png"
            alt="Godrej"
          />

          <ThemePicker />

        </header>

        {/* ======================================================
            CARDS SECTION
        ====================================================== */}

        <section className="home-cards-wrapper">

          <div
            ref={scrollRef}
            className={`home-cards-column ${isDragging ? 'dragging' : ''}`}

            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}

            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={stopDragging}

            style={{
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >

            {cards.map((card, idx) => (

              <button
                key={idx}
                type="button"
                className="home-card"
                aria-label={card.alt}
                onClick={() => !isDragging && navigate(card.page)}
              >

                {/* IMAGE */}

                <div className="home-card-image-wrap">

                  {card.image ? (

                    <img
                      src={card.image}
                      alt={card.alt}
                      className="home-card-image"
                      loading="lazy"
                      draggable={false}
                    />

                  ) : (

                    <div className="home-card-image-placeholder">
                      <span>📷</span>
                    </div>

                  )}

                </div>

                {/* TEXT */}

                <div
                  className="home-card-text"
                  style={{
                    background: card.color
                  }}
                >
                  <span>{card.alt}</span>
                </div>

              </button>

            ))}

          </div>

        </section>

        {/* ======================================================
            FOOTER
        ====================================================== */}

        <footer className="bottom-bar">

          <button
            className="video-link"
            type="button"
            onClick={() => setVideoOpen(true)}
          >

            <span className="play-ring">
              <Play fill="currentColor" strokeWidth={1.8} />
            </span>

            <span>
              CORPORATE
              <br />
              VIDEO
            </span>

          </button>

          <button
            className="ads-button"
            type="button"
          >
            Click here to watch
            <br />
            Godrej ADS
          </button>

        </footer>

      </section>

      {/* ======================================================
          VIDEO LIGHTBOX
      ====================================================== */}

      {videoOpen && (
        <VideoLightbox
          src={corporateVideo}
          onClose={() => setVideoOpen(false)}
        />
      )}

    </main>
  )
}