import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import InfrastructurePage from './pages/InfrastructurePage.jsx'
import Partner from './pages/Partner.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import CertificatePage from './pages/CertificatePage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const themes = [
  { id: 'steel', label: 'Steel', colors: ['#414b5f', '#e9c76d'] },
  { id: 'black', label: 'Dark Black', colors: ['#050507', '#f0c65f'] },
  { id: 'mono', label: 'B & W', colors: ['#ffffff', '#111111'] },
  { id: 'glass', label: 'iOS Glass', colors: ['#eef7ff', '#7ab8ff'] },
  { id: 'ivory', label: 'Ivory', colors: ['#f6efe2', '#c99554'] },
  { id: 'mint', label: 'Mint', colors: ['#eaf7ef', '#299b62'] },
  { id: 'sky', label: 'Sky', colors: ['#edf5ff', '#357abd'] },
  { id: 'rose', label: 'Rose', colors: ['#fff1f3', '#c85c73'] },
]

export const ThemeContext = React.createContext()

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('godrej-theme') || 'steel')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('godrej-theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/partner" element={<Partner />} />
      </Routes>
    </ThemeContext.Provider>
  )
}