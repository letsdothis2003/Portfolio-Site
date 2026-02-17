import React, { useState, useEffect, Suspense } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import "./components/theme.css";

const About = React.lazy(() => import("./pages/About/About"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

// Component to handle scroll restoration on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  // Effect to sync theme with document body and storage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div className={`app-layout ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="main-content">
          <div className="theme-toggle-container">
            <button className="theme-switch-btn" onClick={toggleTheme}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<About />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;