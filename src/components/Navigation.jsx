import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'HOME', alt: 'Godrej Home Navigation Icon', path: '/', className: 'home-icon' },
  { label: 'HISTORY', alt: 'Godrej About Us Navigation Icon', path: '/about' },
  { label: 'LAYOUT', alt: 'Godrej Layout Navigation Icon', path: '/layoutpage' },
  { label: 'BRANDS', alt: 'Godrej Brands Navigation Icon', path: '/products' },
  { label: 'PARTNERS', alt: 'Godrej Partners Navigation Icon', path: '/partner' },
  { label: 'EMPLOYEE DETAILS', alt: 'Godrej Employee Details Navigation Icon', path: '/projects' },
  { label: 'CERTIFICATE', alt: 'Godrej Certificate Navigation Icon', path: '/certificate' },
  { label: 'GALLERY', alt: 'Godrej Gallery Navigation Icon', path: '/gallery' },
  { label: 'CONTACT', alt: 'Godrej Contact Navigation Icon', path: '/contact' },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="footer-nav" aria-label="Primary navigation">
      {navItems.map((item) => (
        <button
          key={item.label}
          className={`footer-nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
          type="button"
        >
          {/* Placeholder for icon if needed */}
          {item.className && <span className={`icon ${item.className}`} aria-label={item.alt}></span>}
          <span>{item.label}</span>
        </button>
      ))}

      <style jsx>{`
.footer-nav {
  display: flex;
  flex-wrap: nowrap;

  justify-content: center;

  gap: 1.3vw;

  padding: 26px 2vw;

  min-height: 120px;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;

  box-shadow: 0 -2px 10px rgba(0,0,0,0.15);
}

.footer-nav::-webkit-scrollbar {
  display: none;
}

.footer-nav-item {
  flex: 0 0 auto;

  min-width: 180px;
  height: 110px;

  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 18px;

  border: 3px solid #2d2417;

  background: #d4b85a;

  color: #24160d;

  font-size: 1.8rem;

  font-weight: 900;

  text-transform: uppercase;
  letter-spacing: 1.5px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  box-shadow: 0 10px 25px rgba(0,0,0,0.25);

  white-space: nowrap;
}
.footer-nav-item:hover {
  transform: translateY(-6px);

  box-shadow: 0 22px 40px rgba(0,0,0,0.35);
}
  .footer-nav-item.active {
  background: #f1d06b;
}

.icon {
  width: 18px;
  height: 18px;

  border-radius: 4px;

  display: inline-block;
}

@media (max-width: 768px) {
  .footer-nav-item {
    min-width: 140px;
    height: 60px;
    font-size: 0.85rem;
  }

  .footer-nav {
    gap: 10px;
  }
}
      `}</style>
    </nav>
  );
}