import React, { useState } from 'react'
import Navigation from '../components/Navigation.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { useCarousel } from '../hooks/useCarousel.js'
import { useDragSwipe } from '../hooks/useDragSwipe.js'

const certificateSlides = [
  'Godrej ISO 9001 Quality Management Certificate',
  'Godrej ISO 14001 Environmental Management Certificate',
  'Godrej ISO 45001 Occupational Health Certificate',
  'Godrej GreenPro Sustainability Certificate',
  'Godrej BIS Certification Mark',
  'Godrej NABL Laboratory Accreditation',
  'Godrej CII Green Building Certificate',
  'Godrej LEED Platinum Certification',
]

const awardSlides = [
  'Godrej Best Employer Award 2024',
  'Godrej Sustainability Leadership Award',
  'Godrej Innovation Excellence Trophy',
  'Godrej Make in India Champion Award',
  'Godrej Export Excellence Recognition',
  'Godrej Digital Transformation Award',
  'Godrej Safety Excellence Certificate',
  'Godrej Community Impact Award',
  'Godrej Industry 4.0 Pioneer Award',
]

export default function CertificatePage() {
  const [mode, setMode] = useState('certificates')
  const [activeIndex, setActiveIndex] = useState(0)

  const activeSlides = mode === 'certificates' ? certificateSlides : awardSlides
  const { move, goTo } = useCarousel(activeSlides.length)

  const onDrag = (dir) => {
    move(dir)
    setActiveIndex((c) => (c + dir + activeSlides.length) % activeSlides.length)
  }

  const { dragDelta, handlers } = useDragSwipe(onDrag, 48)

  const selectMode = (nextMode) => {
    setMode(nextMode)
    setActiveIndex(0)
  }

  const visibleOffsets = [-2, -1, 0, 1, 2]

  return (
    <main className="screen about-screen certificate-screen title-simple-page">
      <section className="about-panel certificate-panel">
        <PageHeader title="CERTIFICATES & AWARDS" />
        
        <section className="certificate-stage">
          <div 
            className="certificate-carousel"
            {...handlers}
            style={{ '--certificate-drag-x': `${dragDelta}px` }}
          >
            <div className="certificate-track">
              {visibleOffsets.map((offset) => {
                const idx = (activeIndex + offset + activeSlides.length) % activeSlides.length
                return (
                  <button
                    key={`${mode}-${idx}-${offset}`}
                    className={`certificate-frame offset-${offset}`}
                    onClick={() => setActiveIndex(idx)}
                    type="button"
                  >
                    <img src="" alt={activeSlides[idx]} draggable="false" />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="certificate-actions">
            <button className={mode === 'certificates' ? 'active' : ''} onClick={() => selectMode('certificates')}>
              CERTIFICATES
            </button>
            <div className="certificate-pager">
              <button onClick={() => onDrag(-1)}>‹</button>
              <button onClick={() => onDrag(1)}>›</button>
            </div>
            <button className={mode === 'awards' ? 'active' : ''} onClick={() => selectMode('awards')}>
              AWARDS
            </button>
          </div>
        </section>

        <Navigation />
      </section>
    </main>
  )
}