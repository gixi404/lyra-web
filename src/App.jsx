import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Downloads from "./components/Downloads.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lyra-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark"; // Modo oscuro por defecto
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("lyra-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="lyra-app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Downloads />
      </main>
      <Footer />
    </div>
  );
}

export default App;
