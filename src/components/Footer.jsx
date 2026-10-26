import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <span>Lyra</span>
              <img
                src={logo}
                alt="Isotipo Lyra"
                className="brand-logo-img"
                width={18}
                height={18}
              />
            </div>
            <p className="footer-desc">
              Espacio de escritura minimalista, zen y libre de distracciones.
              Diseñado para el flujo creativo y la concentración pura.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">Navegación</span>
            <a href="#filosofia" className="footer-link">
              Filosofía
            </a>
            <a href="#descargas" className="footer-link">
              Descargas
            </a>
            <a href="#" className="footer-link">
              Volver arriba
            </a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">Proyecto</span>
            <a
              href="https://github.com/gixi404/lyra"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Código fuente en GitHub
            </a>
            <a
              href="https://github.com/gixi404/lyra/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Historial de versiones
            </a>
            <a
              href="https://github.com/gixi404/lyra/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Reportar un problema
            </a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">Contacto</span>
            <a href="mailto:gixi.tsx@gmail.com" className="footer-link">
              gixi.tsx@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Lyra · Software libre bajo Licencia The Unlicense</span>
          <span>Archivos locales · Privacidad por diseño</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
