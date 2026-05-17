import React from 'react';
import Navigation from '../components/Navigation.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { useCarousel } from '../hooks/useCarousel.js';
import { useDragSwipe } from '../hooks/useDragSwipe.js';
import "../styles/certificate.css";

const certificateSlides = [
  { title: 'Godrej ISO 9001 Quality Management Certificate', img: 'src/assets/certificate1.jpg' },
  { title: 'Godrej ISO 14001 Environmental Management Certificate', img: 'src/assets/certificate2.png' },
  { title: 'Godrej ISO 45001 Occupational Health Certificate', img: 'src/assets/certificate3.jpg' },
  { title: 'Godrej GreenPro Sustainability Certificate', img: '/images/certificates/greenpro.jpg' },
  { title: 'Godrej BIS Certification Mark', img: '/images/certificates/bis.jpg' },
  { title: 'Godrej NABL Laboratory Accreditation', img: '/images/certificates/nabl.jpg' },
  { title: 'Godrej CII Green Building Certificate', img: '/images/certificates/cii.jpg' },
  { title: 'Godrej LEED Platinum Certification', img: '/images/certificates/leed.jpg' },
];

const awardSlides = [
  { title: 'Godrej Best Employer Award 2024', img: '/images/awards/best-employer.jpg' },
  { title: 'Godrej Sustainability Leadership Award', img: '/images/awards/sustainability.jpg' },
  { title: 'Godrej Innovation Excellence Trophy', img: '/images/awards/innovation.jpg' },
  { title: 'Godrej Make in India Champion Award', img: '/images/awards/make-in-india.jpg' },
  { title: 'Godrej Export Excellence Recognition', img: '/images/awards/export.jpg' },
  { title: 'Godrej Digital Transformation Award', img: '/images/awards/digital.jpg' },
  { title: 'Godrej Safety Excellence Certificate', img: '/images/awards/safety.jpg' },
  { title: 'Godrej Community Impact Award', img: '/images/awards/community.jpg' },
  { title: 'Godrej Industry 4.0 Pioneer Award', img: '/images/awards/industry4.jpg' },
];

export default function CertificatePage() {
  const [mode, setMode] = React.useState('certificates');
  const slides = mode === 'certificates' ? certificateSlides : awardSlides;
  const slideCount = slides.length;

  const [selectedSlide, setSelectedSlide] = React.useState(slides[0]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { activeIndex, move, goTo, setIsDragging, isDragging } = useCarousel(slideCount);
  const { dragDelta, handlers } = useDragSwipe((dir) => move(dir), 48);

  const enhancedHandlers = {
    ...handlers,
    onPointerDown: (e) => { setIsDragging(true); handlers.onPointerDown(e); },
    onPointerUp: (e) => { setIsDragging(false); handlers.onPointerUp(e); },
    onPointerCancel: (e) => { setIsDragging(false); handlers.onPointerCancel(e); },
    onTouchStart: (e) => { setIsDragging(true); handlers.onTouchStart(e); },
    onTouchEnd: (e) => { setIsDragging(false); handlers.onTouchEnd(e); },
  };

  React.useEffect(() => {
    setSelectedSlide(slides[activeIndex]);
  }, [activeIndex, slides]);

  const visibleOffsets = [-1, 0, 1];
  const visibleSlides = visibleOffsets.map((offset) => {
    const idx = (activeIndex + offset + slideCount) % slideCount;
    return { idx, offset, slide: slides[idx] };
  });

  return (
    <main className="screen certificate-screen title-simple-page">
      <section className="certificate-panel">
        <PageHeader title="CERTIFICATES & AWARDS" />

        {/* Certificates / Awards buttons */}
        <div className="mode-buttons" style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0', gap: '2rem' }}>
          <button
            className={mode === 'certificates' ? 'active' : ''}
            onClick={() => { setMode('certificates'); goTo(0); setSelectedSlide(certificateSlides[0]); }}
          >
            CERTIFICATES
          </button>
          <button
            className={mode === 'awards' ? 'active' : ''}
            onClick={() => { setMode('awards'); goTo(0); setSelectedSlide(awardSlides[0]); }}
          >
            AWARDS
          </button>
        </div>

        <section className="certificate-body">
          {/* LEFT PANEL: Carousel */}
          <div className="left-panel">
            <div
              className="certificate-carousel"
              {...enhancedHandlers}
              style={{ '--certificate-drag-x': `${dragDelta}px` }}
            >
              <div className="certificate-track" style={{ justifyContent: 'center' }}>
                {visibleSlides.map(({ idx, offset, slide }) => {
                  const scale = offset === 0 ? 1 : 0.75;
                  const opacity = offset === 0 ? 1 : 0.4;
                  const zIndex = offset === 0 ? 10 : 5;

                  return (
                    <button
                      key={idx}
                      className={`certificate-frame`}
                      style={{
                        transform: `scale(${scale})`,
                        opacity,
                        zIndex,
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        margin: '0 10px'
                      }}
                      onClick={() => {
                        if (!isDragging) {
                          setSelectedSlide(slide);
                          goTo(idx);
                        }
                      }}
                      type="button"
                    >
                      <img src={slide.img} alt={slide.title} />
                      <span className="certificate-title">{slide.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Carousel pager */}
            <div className="certificate-actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              <button onClick={() => move(-1)}>‹</button>
              <button onClick={() => move(1)}>›</button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="right-panel">
            {selectedSlide && (
              <>
                <img
                  src={selectedSlide.img}
                  alt={selectedSlide.title}
                  onClick={() => setIsModalOpen(true)}
                  style={{ cursor: 'pointer' }}
                />
                <h2>{selectedSlide.title}</h2>
              </>
            )}
          </div>
        </section>

        <Navigation />
      </section>

      {/* FULLSCREEN MODAL */}
{isModalOpen && (
  <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
      <img src={selectedSlide.img} alt={selectedSlide.title} className="modal-image" />
      <h2 className="modal-title">{selectedSlide.title}</h2>
    </div>
  </div>
)}
    </main>
  );
} 