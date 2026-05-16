import React, { useState } from 'react'
import Navigation from '../components/Navigation.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { useCarousel } from '../hooks/useCarousel.js'
import { useDragSwipe } from '../hooks/useDragSwipe.js'

const projectSlides = [
  'Godrej Iconic Project 1 - Residential Tower',
  'Godrej Iconic Project 2 - Commercial Complex',
  'Godrej Iconic Project 3 - Industrial Facility',
  'Godrej Iconic Project 4 - Infrastructure Bridge',
  'Godrej Iconic Project 5 - Smart City Development',
  'Godrej Iconic Project 6 - Green Building',
  'Godrej Iconic Project 7 - Metro Station',
  'Godrej Iconic Project 8 - Airport Terminal',
  'Godrej Iconic Project 9 - Hospital Building',
  'Godrej Iconic Project 10 - University Campus',
  'Godrej Iconic Project 11 - Shopping Mall',
]

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const { move, goTo } = useCarousel(projectSlides.length, { autoPlay: true, interval: 3000 })

  const onDrag = (dir) => {
    move(dir)
    setActiveIndex((c) => (c + dir + projectSlides.length) % projectSlides.length)
  }

  const { dragDelta, handlers } = useDragSwipe(onDrag, 58)

  const visibleOffsets = [-1, 0, 1, 2, 3]

  return (
    <main className="screen about-screen projects-screen title-simple-page">
      <section className="about-panel projects-panel">
        <PageHeader title="ICONIC PROJECTS" />
        
        <section className="projects-content">
          <div 
            className="project-carousel"
            {...handlers}
            style={{ '--project-drag-x': `${dragDelta}px` }}
          >
            <div className="project-strip">
              {visibleOffsets.map((offset) => {
                const idx = (activeIndex + offset + projectSlides.length) % projectSlides.length
                return (
                  <button
                    key={`${idx}-${offset}`}
                    className={`project-frame offset-${offset}`}
                    onClick={() => setLightboxOpen(true)}
                    type="button"
                  >
                    <img src="" alt={projectSlides[idx]} draggable="false" />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="project-pager">
            <button onClick={() => onDrag(-1)} type="button">‹</button>
            <button onClick={() => onDrag(1)} type="button">›</button>
          </div>

          <h2>
            A Legacy of Excellence and Innovation, Shaping Skylines &amp; Transforming<br />
            Communities with Unmatched Quality and Vision
          </h2>
        </section>

        <Navigation />

        {lightboxOpen && (
          <div className="project-lightbox" role="dialog" aria-modal="true">
            <button className="project-lightbox-close" onClick={() => setLightboxOpen(false)}>×</button>
            <button className="project-lightbox-nav project-lightbox-prev" onClick={() => move(-1)}>‹</button>
            <div className="project-lightbox-stage">
              <img src="" alt={projectSlides[activeIndex]} draggable="false" />
            </div>
            <button className="project-lightbox-nav project-lightbox-next" onClick={() => move(1)}>›</button>
            <div className="project-lightbox-dots">
              {projectSlides.map((_, idx) => (
                <button key={idx} className={idx === activeIndex ? 'active' : ''} onClick={() => goTo(idx)} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}