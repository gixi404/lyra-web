import React, { useState, useEffect } from "react";

const INITIAL_DOWNLOAD_OPTIONS = [
  {
    platformId: "linux",
    platformName: "Linux",
    note: "Compatibilidad nativa con distribuciones basadas en Debian, Fedora, Arch y universales.",
    icon: (
      <svg
        className="platform-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    files: [
      {
        name: "Debian / Ubuntu / Mint",
        format: ".deb",
        url: "https://github.com/gixi404/lyra/releases/download/v2.0.12/Lyra_2.0.12_amd64.deb",
      },
      {
        name: "Fedora / openSUSE / RHEL",
        format: ".rpm",
        url: "https://github.com/gixi404/lyra/releases/download/v2.0.12/Lyra-2.0.12-1.x86_64.rpm",
      },
      {
        name: "Paquete universal portátil",
        format: ".AppImage",
        url: "https://github.com/gixi404/lyra/releases/download/v2.0.12/Lyra_2.0.12_amd64.AppImage",
      },
    ],
  },
  {
    platformId: "windows",
    platformName: "Windows",
    note: "Compatible con Windows 10 y Windows 11 (arquitectura de 64 bits).",
    icon: (
      <svg
        className="platform-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
    files: [
      {
        name: "Instalador MSI",
        format: ".msi",
        url: "https://github.com/gixi404/lyra/releases/download/v2.0.12/Lyra_2.0.12_x64_es-ES.msi",
      },
      {
        name: "Instalador autónomo EXE",
        format: ".exe",
        url: "https://github.com/gixi404/lyra/releases/download/v2.0.12/Lyra_2.0.12_x64-setup.exe",
      },
    ],
  },
  {
    platformId: "macos",
    platformName: "macOS",
    note: "Paquete universal para procesadores Apple Silicon e Intel.",
    icon: (
      <svg
        className="platform-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20.94c1.5 0 2.75-.74 4-2.14 1.25-1.4 2.25-2.8 3-4.2-.8-.4-1.5-1-2.1-1.8-.6-.8-.9-1.7-.9-2.7 0-1.2.4-2.2 1.2-3.1.8-.9 1.8-1.4 3-1.6-.7-1.3-1.6-2.3-2.8-3-1.2-.7-2.5-1.1-4-1.1-1.3 0-2.4.3-3.3.9-.9.6-1.7 1.1-2.4 1.1-.7 0-1.5-.5-2.4-1.1-.9-.6-2-.9-3.3-.9-1.5 0-2.8.4-4 1.1-1.2.7-2.1 1.7-2.8 3 1.2.2 2.2.7 3 1.6.8.9 1.2 1.9 1.2 3.1 0 1-.3 1.9-.9 2.7-.6.8-1.3 1.4-2.1 1.8.75 1.4 1.75 2.8 3 4.2 1.25 1.4 2.5 2.14 4 2.14.7 0 1.5-.5 2.4-1.1.9-.6 2-.9 3.3-.9 1.3 0 2.4.3 3.3.9.9.6 1.7 1.1 2.4 1.1z" />
        <path d="M12 2c.6 1.1.4 2.4-.4 3.4-.8 1-2.1 1.6-3.3 1.4-.4-1.2-.1-2.5.7-3.4.8-1 2.1-1.6 3-1.4z" />
      </svg>
    ),
    files: [
      {
        name: "Paquete universal DMG",
        format: ".dmg",
        url: "https://github.com/gixi404/lyra/releases/download/v2.0.12/Lyra_2.0.12_universal.dmg",
      },
    ],
  },
];

function Downloads() {
  const [downloadOptions, setDownloadOptions] = useState(INITIAL_DOWNLOAD_OPTIONS);
  const [detectedOS, setDetectedOS] = useState(null);

  // Detección del sistema operativo del visitante
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes("linux")) {
      setDetectedOS("linux");
    } else if (ua.includes("win")) {
      setDetectedOS("windows");
    } else if (ua.includes("mac")) {
      setDetectedOS("macos");
    }
  }, []);

  // Obtención dinámica y automática de la última versión subida a GitHub Releases
  useEffect(() => {
    const fetchLatestReleases = async () => {
      try {
        const cacheKey = "lyra_latest_release";
        let releaseData = null;

        // Caché de sesión para evitar peticiones repetitivas al navegar
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          try {
            releaseData = JSON.parse(cached);
          } catch {
            releaseData = null;
          }
        }

        if (!releaseData) {
          const res = await fetch("https://api.github.com/repos/gixi404/lyra/releases/latest");
          if (res.ok) {
            releaseData = await res.json();
            sessionStorage.setItem(cacheKey, JSON.stringify(releaseData));
          }
        }

        if (!releaseData || !Array.isArray(releaseData.assets)) return;

        const assets = releaseData.assets.filter(
          (a) => !a.name.endsWith(".sig") && !a.name.endsWith(".json")
        );

        const debUrl = assets.find((a) => a.name.endsWith(".deb"))?.browser_download_url;
        const rpmUrl = assets.find((a) => a.name.endsWith(".rpm"))?.browser_download_url;
        const appImageUrl = assets.find((a) => a.name.endsWith(".AppImage"))?.browser_download_url;
        const msiUrl = assets.find((a) => a.name.endsWith(".msi"))?.browser_download_url;
        const exeUrl = assets.find((a) => a.name.endsWith(".exe") || a.name.endsWith("-setup.exe"))?.browser_download_url;
        const dmgUrl = assets.find((a) => a.name.endsWith(".dmg"))?.browser_download_url;

        setDownloadOptions((prev) =>
          prev.map((platform) => {
            if (platform.platformId === "linux") {
              return {
                ...platform,
                files: platform.files.map((file) => {
                  if (file.format === ".deb" && debUrl) return { ...file, url: debUrl };
                  if (file.format === ".rpm" && rpmUrl) return { ...file, url: rpmUrl };
                  if (file.format === ".AppImage" && appImageUrl) return { ...file, url: appImageUrl };
                  return file;
                }),
              };
            }
            if (platform.platformId === "windows") {
              return {
                ...platform,
                files: platform.files.map((file) => {
                  if (file.format === ".msi" && msiUrl) return { ...file, url: msiUrl };
                  if (file.format === ".exe" && exeUrl) return { ...file, url: exeUrl };
                  return file;
                }),
              };
            }
            if (platform.platformId === "macos") {
              return {
                ...platform,
                files: platform.files.map((file) => {
                  if (file.format === ".dmg" && dmgUrl) return { ...file, url: dmgUrl };
                  return file;
                }),
              };
            }
            return platform;
          })
        );
      } catch {
        // En caso de estar sin conexión o fallo de red, se mantienen las URLs de reserva
      }
    };

    fetchLatestReleases();
  }, []);

  return (
    <section id="descargas" className="downloads-section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Descargas oficiales</span>
          <h2 className="section-title">Instala Lyra en tu ordenador</h2>
          <p className="section-description">
            Descarga directa sin registros ni publicidad. Escoge el formato
            adecuado para tu sistema operativo y empieza a redactar en segundos.
          </p>
        </div>

        <div className="downloads-grid">
          {downloadOptions.map((opt) => {
            const isDetected = detectedOS === opt.platformId;
            return (
              <div
                key={opt.platformId}
                className={`download-card ${isDetected ? "highlight" : ""}`}
              >
                {isDetected && (
                  <span className="detected-badge">Detectado</span>
                )}

                <div className="platform-header">
                  {opt.icon}
                  <h3 className="platform-name">{opt.platformName}</h3>
                </div>

                <p className="platform-note">{opt.note}</p>

                <div className="download-links-list">
                  {opt.files.map((file, idx) => (
                    <a
                      key={idx}
                      href={file.url}
                      className="download-btn"
                      download
                    >
                      <span>{file.name}</span>
                      <span className="download-format">{file.format}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota de verificación y seguridad editorial y sobria */}
        <div className="security-note">
          <svg
            className="security-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div className="security-text">
            <h4>Software libre y verificación transparente</h4>
            <p>
              Al tratarse de una herramienta comunitaria independiente distribuida
              sin certificados comerciales corporativos de pago, los filtros de
              protección preventiva de tu sistema operativo o navegador pueden
              solicitar una confirmación habitual en la primera apertura. Lyra es
              100% de código abierto, en el dominio público y libre de cualquier
              software malicioso o rastreador. Puedes consultar o compilar el
              código fuente directamente desde el{" "}
              <a
                href="https://github.com/gixi404/lyra"
                target="_blank"
                rel="noopener noreferrer"
              >
                repositorio oficial en GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Downloads;
