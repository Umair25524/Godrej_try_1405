import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// main.jsx or App.jsx
import './styles/base.css'
import './styles/home.css'
import './styles/about.css'
import './styles/product.css'
import "./styles/contact.css";
import "./styles/certificate.css";
import "./styles/gallery.css";
import "./styles/projects.css";
// Add more page CSS as needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)