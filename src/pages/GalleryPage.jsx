import React, { useState } from "react";
import { Play } from "lucide-react";

import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import VideoLightbox from "../components/VideoLightbox.jsx";

/* =========================================================
   PHOTOS
========================================================= */

const photos = [
  { image: "/images/gallery/photo1.jpg" },
  { image: "/images/gallery/photo2.jpg" },
  { image: "/images/gallery/photo3.jpg" },
  { image: "/images/gallery/photo4.jpg" },
  { image: "/images/gallery/photo5.jpg" },
  { image: "/images/gallery/photo6.jpg" },
  { image: "/images/gallery/photo7.jpg" },
  { image: "/images/gallery/photo8.jpg" },
  { image: "/images/gallery/photo9.jpg" },
  { image: "/images/gallery/photo10.jpg" },
];

/* =========================================================
   VIDEOS
========================================================= */

const videos = [
  {
    video: "/videos/video1.mp4",
    poster: "/images/posters/poster1.jpg",
    alt: "Godrej Brand Anthem",
  },
  {
    video: "/videos/video2.mp4",
    poster: "/images/posters/poster2.jpg",
    alt: "Godrej TMT Campaign",
  },
  {
    video: "/videos/video3.mp4",
    poster: "/images/posters/poster3.jpg",
    alt: "World Cup Commercial",
  },
  {
    video: "/videos/video4.mp4",
    poster: "/images/posters/poster4.jpg",
    alt: "Director Speech",
  },
  {
    video: "/videos/video5.mp4",
    poster: "/images/posters/poster5.jpg",
    alt: "Construction Documentary",
  },
  {
    video: "/videos/video6.mp4",
    poster: "/images/posters/poster6.jpg",
    alt: "Celebrity TVC",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("photos");

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="screen gallery-screen">
      <section className="gallery-panel">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <PageHeader title="MEDIA GALLERY" />

        {/* =========================================================
            FILTER BUTTONS
        ========================================================= */}

        <div className="gallery-filter-bar">
          <button
            className={`gallery-filter-btn ${
              activeTab === "photos" ? "active" : ""
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </button>

          <button
            className={`gallery-filter-btn ${
              activeTab === "videos" ? "active" : ""
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {/* =========================================================
            SCROLL AREA
        ========================================================= */}

        <div className="gallery-scroll-area">
          <div className="gallery-grid">
            {/* =========================================================
                PHOTOS
            ========================================================= */}

            {activeTab === "photos" &&
              photos.map((item, idx) => (
                <div className="gallery-card" key={idx}>
                  <img
                    src={item.image}
                    alt={`Gallery ${idx + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}

            {/* =========================================================
                VIDEOS
            ========================================================= */}

            {activeTab === "videos" &&
              videos.map((item, idx) => (
                <button
                  key={idx}
                  className="gallery-card"
                  onClick={() => setActiveVideo(idx)}
                  type="button"
                  aria-label={`Play ${item.alt}`}
                >
                  <video
                    src={item.video}
                    poster={item.poster}
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
          </div>
        </div>

        {/* =========================================================
            FOOTER NAVIGATION
        ========================================================= */}

        <Navigation />

        {/* =========================================================
            VIDEO LIGHTBOX
        ========================================================= */}

        {activeVideo !== null && (
          <VideoLightbox
            src={videos[activeVideo].video}
            alt={videos[activeVideo].alt}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </section>
    </main>
  );
}