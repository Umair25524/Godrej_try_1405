import React, { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/partner.css";

export default function PartnerPage() {
  const [activeCity, setActiveCity] =
    useState("kolkata");

  // MAP URLS
  const cityMaps = {
    kolkata:
      "https://maps.google.com/maps?q=22.5726,88.3639&t=&z=15&ie=UTF8&iwloc=&output=embed",

    bangalore:
      "https://maps.google.com/maps?q=Bangalore&t=&z=12&ie=UTF8&iwloc=&output=embed",

    delhi:
      "https://maps.google.com/maps?q=Delhi&t=&z=12&ie=UTF8&iwloc=&output=embed",

    mumbai:
      "https://maps.google.com/maps?q=Mumbai&t=&z=12&ie=UTF8&iwloc=&output=embed",

    chennai:
      "https://maps.google.com/maps?q=Chennai&t=&z=12&ie=UTF8&iwloc=&output=embed",
  };

  return (
    <div className="dashboard-page">
      {/* HEADER */}
      <header className="dashboard-header">
        <PageHeader title="PARTNER LOCATIONS" />
      </header>

      {/* MAIN */}
      <div className="dashboard-main">
        {/* CONTENT AREA */}
        <div className="dashboard-content">
          <iframe
            title="Google Map"
            src={cityMaps[activeCity]}
            className="map-frame"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="dashboard-sidebar">
          <button
            className={
              activeCity === "kolkata"
                ? "side-btn active"
                : "side-btn"
            }
            onClick={() =>
              setActiveCity("kolkata")
            }
          >
            Kolkata
          </button>

          <button
            className={
              activeCity === "bangalore"
                ? "side-btn active"
                : "side-btn"
            }
            onClick={() =>
              setActiveCity("bangalore")
            }
          >
            Bangalore
          </button>

          <button
            className={
              activeCity === "delhi"
                ? "side-btn active"
                : "side-btn"
            }
            onClick={() =>
              setActiveCity("delhi")
            }
          >
            Delhi
          </button>

          <button
            className={
              activeCity === "mumbai"
                ? "side-btn active"
                : "side-btn"
            }
            onClick={() =>
              setActiveCity("mumbai")
            }
          >
            Mumbai
          </button>

          <button
            className={
              activeCity === "chennai"
                ? "side-btn active"
                : "side-btn"
            }
            onClick={() =>
              setActiveCity("chennai")
            }
          >
            Chennai
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <>
        <Navigation />
      </>
    </div>
  );
}