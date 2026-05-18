import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/product.css";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* =========================
     DATA
  ========================= */

  const galleryData = [
    {
      category: "Homecare",
      images: [
        {
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          title: "Nature",
          description: "Beautiful nature",
        },
        {
          image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
          title: "Mountain",
          description: "Mountain view",
        },
        {
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          title: "Living Room",
          description: "Modern home interior",
        },
        {
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          title: "Luxury Home",
          description: "Luxury home setup",
        },
      ],
    },
    {
      category: "Office",
      images: [
        {
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          title: "Office",
          description: "Office workspace",
        },
        {
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          title: "Team Work",
          description: "Team collaboration",
        },
        {
          image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
          title: "Conference",
          description: "Conference room",
        },
        {
          image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
          title: "Workspace",
          description: "Professional workspace",
        },
      ],
    },
    {
      category: "Coding",
      images: [
        {
          image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
          title: "Laptop",
          description: "Laptop setup",
        },
        {
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          title: "Coding",
          description: "Coding in progress",
        },
        {
          image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
          title: "Development",
          description: "Software development",
        },
        {
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
          title: "Programming",
          description: "Programming setup",
        },
      ],
    },
  ];

  /* =========================
     CATEGORIES
  ========================= */

  const categories = ["All", ...galleryData.map((item) => item.category)];

  /* =========================
     ACTIVE IMAGES
  ========================= */

  const activeImages =
    activeCategory === "All"
      ? galleryData.flatMap((item) => item.images)
      : galleryData.find((item) => item.category === activeCategory)
          ?.images || [];

  /* =========================
     CATEGORY SWITCH
  ========================= */

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  /* =========================
     MODAL OPEN
  ========================= */

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  /* =========================
     MODAL NAV
  ========================= */

  const nextSlide = () => {
    const next =
      currentIndex + 1 >= activeImages.length
        ? 0
        : currentIndex + 1;

    setCurrentIndex(next);
    setSelectedImage(activeImages[next]);
  };

  const prevSlide = () => {
    const prev =
      currentIndex - 1 < 0
        ? activeImages.length - 1
        : currentIndex - 1;

    setCurrentIndex(prev);
    setSelectedImage(activeImages[prev]);
  };

  /* =========================
     KEYBOARD SUPPORT
  ========================= */

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  /* =========================
     JSX
  ========================= */

  return (
    <main className="gallery-page">
      <PageHeader title="PRODUCTS" />

      <section className="gallery-layout">
        {/* LEFT */}
        <aside className="left-panel">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`side-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        {/* RIGHT GRID */}
        <section className="right-panel">
          <div className="image-grid">
            {activeImages.map((item, index) => (
              <div
                className="image-card"
                key={index}
                onClick={() => openModal(item, index)}
              >
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedImage(null)}>
              ×
            </button>

            <button className="modal-arrow left" onClick={prevSlide}>
              ‹
            </button>

            <button className="modal-arrow right" onClick={nextSlide}>
              ›
            </button>

            <div className="modal-image-wrapper">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="modal-image"
              />
            </div>

            <div className="modal-text">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>

              <span className="image-counter">
                {currentIndex + 1} / {activeImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <Navigation />
    </main>
  );
}