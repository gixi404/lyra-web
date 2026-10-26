import React from "react";

const features = [
  {
    title: "Almacenamiento Local Directo",
    description:
      "Tus documentos se guardan directamente en tu equipo en formato Markdown (.md). Sin formatos cerrados, sin bases de datos binarias. Tus notas son y serán siempre tuyas.",
    code: "~/Documents/lyra/",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Privacidad Total y Absoluta",
    description:
      "Cero telemetría, cero recolección de estadísticas y cero cuentas de usuario. Ningún carácter que escribas abandona tu ordenador. Funciona 100% fuera de línea.",
    code: "100% sin conexión · Sin telemetría",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Interfaz Auto-ocultable",
    description:
      "En el instante en que presionas la primera tecla, cualquier elemento accesorio de la interfaz desaparece silenciosamente. Queda únicamente tu texto y tu concentración.",
    code: "Modo zen · Sin distracciones",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Rendimiento Nativo",
    description:
      "Arranque casi instantáneo y consumo mínimo de memoria. Construido con arquitectura de bajo nivel para responder a cada pulsación de teclado con fluidez y sin retrasos.",
    code: "Ligero · Sin latencia de entrada",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Tipografía iA Writer Duo",
    description:
      "Tipografía dúo-espaciada de referencia para la escritura editorial. Ofrece la disciplina estructural del espaciado regular combinada con la fluidez de lectura natural.",
    code: "Tipografía: iA Writer Duo",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    title: "Software Libre y Abierto",
    description:
      "Publicado bajo la licencia libre The Unlicense en el dominio público. Todo el código fuente está disponible abiertamente en GitHub para ser auditado, adaptado o utilizado libremente sin restricciones.",
    code: "Licencia The Unlicense · GitHub",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
];

function Features() {
  return (
    <section id="filosofia" className="features-section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Filosofía de diseño</span>
          <h2 className="section-title">
            Diseñado en torno a la calma y la concentración
          </h2>
          <p className="section-description">
            Lyra elimina todas las capas superfluas para dejar únicamente lo que
            importa: el espacio limpio donde tus ideas toman forma.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-box">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
              <div className="feature-code">{feature.code}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
