// ProductsPage.jsx

import React, { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/product.css";

export default function ProductsPage() {

  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    {
      category: "Button 1",

      images: [
        {
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          title: "Nature Image",
          description:
            "Beautiful nature description here.",
        },

        {
          image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156",
          title: "Mountain",
          description:
            "Mountain description here.",
        },

        {
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          title: "Office",
          description:
            "Office description here.",
        },
      ],
    },

    {
      category: "Button 2",

      images: [
        {
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          title: "Team Work",
          description:
            "Team work description.",
        },

        {
          image:
            "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
          title: "Laptop",
          description:
            "Laptop setup description.",
        },

        {
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          title: "Coding",
          description:
            "Coding description.",
        },
      ],
    },

    {
      category: "Button 3",

      images: [
        {
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
          title: "Sunset",
          description:
            "Sunset description.",
        },

        {
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
          title: "Technology",
          description:
            "Technology description.",
        },

        {
          image:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
          title: "Travel",
          description:
            "Travel image description.",
        },
      ],
    },
  ];

  const activeImages = galleryData[activeCategory].images;

  return (

    <main className="gallery-page">

      {/* PAGE HEADER */}
      <PageHeader title="PRODUCTS" />

      {/* MAIN SECTION */}
      <section className="gallery-layout">

        {/* LEFT SIDE BUTTONS */}
        <aside className="left-panel">

          {galleryData.map((item, index) => (

            <button
              key={index}
              className={`side-btn ${
                activeCategory === index ? "active" : ""
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {item.category}
            </button>

          ))}

        </aside>

        {/* RIGHT IMAGE GRID */}
        <section className="right-panel">

          <div className="image-grid">

            {activeImages.map((item, index) => (

              <div
                className="image-card"
                key={index}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

            ))}

          </div>

        </section>

      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (

        <div className="image-modal">

          <div className="modal-content">

            {/* CLOSE BUTTON */}
            <button
              className="close-modal"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* LARGE IMAGE */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />

            {/* TEXT CONTENT */}
            <div className="modal-text">

              <h2>{selectedImage.title}</h2>

              <p>
                {selectedImage.description}
              </p>

            </div>

          </div>

        </div>

      )}

      {/* FOOTER NAVIGATION */}
      <Navigation />

    </main>

  );
}