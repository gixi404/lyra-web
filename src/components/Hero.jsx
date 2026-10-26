import React, { useState } from "react";
import oneImg from "../assets/lyra-one-img.webp";
import twoImg from "../assets/lyra-two-img.webp";
import threeImg from "../assets/lyra-three-img.webp";

const views = [
  {
    id: "list",
    label: "Lista",
    img: oneImg,
    caption: "Vista de lista para explorar y organizar tus notas con rapidez.",
  },
  {
    id: "focus",
    label: "Modo Enfoque",
    img: twoImg,
    caption: "Espacio de texto despejado: la interfaz retrocede para dejar paso a tus pensamientos.",
  },
  {
    id: "settings",
    label: "Preferencias",
    img: threeImg,
    caption: "Configuración clara y personalizada adaptada a tu ritmo de trabajo.",
  },
];

function Hero() {
  const [activeTab, setActiveTab] = useState(views[0].id);
  const currentView = views.find((v) => v.id === activeTab) || views[0];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            <span>Lyra · Software libre y local</span>
          </div>

          <h1 className="hero-title">
            Espacio de escritura sin fricción ni distracciones
          </h1>

          <p className="hero-subtitle">
            Un editor de texto sobrio y minimalista concebido para la claridad mental.
            Tus notas se guardan en tu equipo en Markdown estándar, sin telemetría,
            sin cuentas y con una interfaz que se disuelve mientras tecleas.
          </p>

          <div className="hero-actions">
            <a href="#descargas" className="btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Descargar Lyra</span>
            </a>
            <span className="hero-meta">
              Gratuito y de código abierto · Linux, Windows, macOS
            </span>
          </div>
        </div>

        {/* Marco de vista previa con borde sutil de 1px sin sombras pesadas */}
        <div className="mockup-wrapper">
          <div className="mockup-frame">
            <div className="mockup-topbar">
              <div className="mockup-topbar-left">
                <div className="mockup-dots" aria-hidden="true">
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                </div>
                <span className="mockup-title">
                  ~/Documents/lyra/pensamiento-claro.md
                </span>
              </div>

              <div className="mockup-tab-group" role="tablist" aria-label="Vistas de Lyra">
                {views.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`mockup-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mockup-image-container">
              <img
                src={currentView.img}
                alt={`Captura de pantalla de Lyra - ${currentView.label}`}
                className="mockup-image"
                loading="eager"
              />
            </div>

            <div className="mockup-caption">
              <span>{currentView.caption}</span>
              <span>100% sin conexión</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
