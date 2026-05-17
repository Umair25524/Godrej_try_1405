import React, { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/product.css";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [animate, setAnimate] = useState(false);

  // Gallery data with categories assigned to each image
  const galleryData = [
    {
      category: "Homecare",
      images: [
        { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Nature", description: "Beautiful nature" },
        { image: "https://images.unsplash.com/photo-1494526585095-c41746248156", title: "Mountain", description: "Mountain view" },
      ],
    },
    {
      category: "Office",
      images: [
        { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", title: "Office", description: "Office workspace" },
        { image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", title: "Team Work", description: "Team work" },
      ],
    },
    {
      category: "Coding",
      images: [
        { image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58", title: "Laptop", description: "Laptop setup" },
        { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", title: "Coding", description: "Coding in progress" },
      ],
    },
  ];

  // Compute the list of categories including "All"
  const categories = ["All", ...galleryData.map(item => item.category)];

  // Compute active images based on selected category
  const activeImages =
    activeCategory === "All"
      ? galleryData.flatMap(item => item.images)
      : galleryData.find(item => item.category === activeCategory)?.images || [];

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setAnimate(true); // start fade out
    setTimeout(() => {
      setActiveCategory(category); // switch images
      setAnimate(false); // fade in
    }, 300); // match CSS transition duration
  };

  return (
    <main className="gallery-page">
      {/* Header */}
      <PageHeader title="PRODUCTS" />

      {/* Gallery layout */}
      <section className="gallery-layout">
        {/* Left panel buttons */}
        <aside className="left-panel">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`side-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        {/* Right panel image grid */}
        <section className="right-panel">
          <div className={`image-grid ${animate ? "animate" : ""}`}>
            {activeImages.map((item, index) => (
              <div
                className="image-card"
                key={index}
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Image modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
            <div className="modal-text">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Navigation */}
      <Navigation />
    </main>
  );
}