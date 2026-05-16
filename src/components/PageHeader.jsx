import React from 'react';

export default function PageHeader({ title }) {
  return (
    <header className="page-header">
      <div className="header-spacer" />

      <h1 className="page-title">{title}</h1>

      <img
        className="page-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1280px-Godrej_Logo.svg.png"
        alt="Godrej Official Logo"
      />

      <style jsx>{`
        .page-header {
          height: 14vh;

          min-height: 100px;

          width: 100%;

          display: grid;
          grid-template-columns: 1fr auto 1fr;

          align-items: center;

          padding: 0 2vw;

          box-sizing: border-box;
        }

        .header-spacer {
          width: 100%;
        }

        .page-title {
          color: white;

          font-size: clamp(1.8rem, 4vw, 10rem);

          font-weight: 900;

          text-transform: uppercase;

          letter-spacing: 2px;

          text-align: center;

          white-space: nowrap;
        }

        .page-logo {
          justify-self: end;

          height: clamp(60px, 10vh, 150px);

          object-fit: contain;

          user-select: none;

          -webkit-user-drag: none;
        }

        @media (max-width: 768px) {
          .page-header {
            min-height: 80px;
          }

          .page-title {
            font-size: 1.2rem;
          }

          .page-logo {
            height: 50px;
          }
        }
      `}</style>
    </header>
  );
}