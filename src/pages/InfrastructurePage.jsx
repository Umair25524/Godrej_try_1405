import React, { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import Navigation from '../components/Navigation.jsx'
import PageHeader from '../components/PageHeader.jsx'
import "../styles/infrastructure.css"
const infrastructureVideo = '' // ADD YOUR VIDEO URL
const corporateOfficeMapsUrl = 'https://maps.app.goo.gl/ciCL7L8AsFjnfAgj7'
const corporateOfficeEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15342314.586427856!2d72.04263331159248!3d20.147298795613192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ebaaaaaaab%3A0xc76718465c4bc088!2sGodrej%20Consumer%20Products%20Limited!5e0!3m2!1sen!2sin!4v1778939667629!5m2!1sen!2sin" // ADD GOOGLE MAPS EMBED URL

function GoogleMapsIcon() {
  return (
    <img
      className="google-map-icon"
      src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png"
      alt="Google Maps Navigation Icon"
    />
  )
}

export default function InfrastructurePage() {
  const [activeMap, setActiveMap] = useState(null)

  return (
    <main className="screen about-screen infrastructure-screen title-simple-page">
      <section className="about-panel infrastructure-panel">
        <PageHeader title="INFRASTRUCTURE" />
        
        <section className="infrastructure-content">
          <aside className="infra-left-actions">
            <button type="button">CORPORATE<br />OFFICE</button>
            <button className="active" type="button">VIKHROLI<br />PLANT</button>
            <p>Click to view images</p>
          </aside>

          <article className="infra-video-card">
            <video className="infra-video" src={infrastructureVideo} controls preload="metadata" />
            <h2>Modern Integrated Manufacturing Unit located at<br />Vikhroli,<br />Mumbai under Godrej Industries Limited</h2>
            <div className="infra-pager"><span /><span /></div>
          </article>

          <aside className="infra-location-actions">
            <button type="button" onClick={() => setActiveMap('corporate')}>
              <GoogleMapsIcon />
              <span className="google-map-label">Google Maps</span>
              <span className="location-kicker">Click to view</span>
              <strong>CORPORATE OFFICE LOCATION</strong>
            </button>
            <button type="button">
              <GoogleMapsIcon />
              <span className="google-map-label">Google Maps</span>
              <span className="location-kicker">Click to view</span>
              <strong>FACTORY LOCATION</strong>
            </button>
          </aside>
        </section>

        <Navigation />

        {activeMap === 'corporate' && (
          <div className="map-floating-layer" onClick={() => setActiveMap(null)}>
            <section className="map-floating-tab" onClick={(e) => e.stopPropagation()}>
              <header className="map-floating-header">
                <div>
                  <span>Google Maps</span>
                  <h2>Corporate Office Location</h2>
                </div>
                <div className="map-floating-actions">
                  <a href={corporateOfficeMapsUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={19} />
                  </a>
                  <button onClick={() => setActiveMap(null)}><X size={21} /></button>
                </div>
              </header>
              <iframe className="map-floating-frame" src={corporateOfficeEmbedUrl} loading="lazy" allowFullScreen title="Godrej Corporate Office" />
            </section>
          </div>
        )}
      </section>
    </main>
  )
}