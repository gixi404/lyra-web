import React from "react";
import logo from "../assets/logo.png";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="brand-wrapper" aria-label="Lyra - Inicio">
          <span>Lyra</span>
          <img src={logo} alt="Isotipo Lyra" className="brand-logo-img" width={22} height={22} />
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#filosofia" className="nav-link">
            Filosofía
          </a>
          <a href="#descargas" className="nav-link">
            Descargas
          </a>
          <a
            href="https://github.com/gixi404/lyra"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="Repositorio de Lyra en GitHub"
          >
            GitHub
          </a>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {theme === "dark" ? (
              /* Sun Icon */
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
