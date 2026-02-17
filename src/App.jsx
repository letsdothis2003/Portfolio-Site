import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // New: Added Footer
import Loader from "./components/Loader/Loader"; // New: Visual feedback
import "./components/theme.css";

// Lazy loading for better performance (Code Splitting)
const About = React.lazy(() => import("./pages/About/About"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

// Helper component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  // PERSISTENCE: Check localStorage so theme stays after refresh
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("user-theme") || "light";
  });

  // Sync theme with body class and localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("user-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router basename="/Portfolio-Site">
      <ScrollToTop />
      
      <div className={`app-container ${theme}`}>
        {/* Pass theme logic to Navbar if you want the toggle there */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="content-wrapper">
          {/* Theme Toggle Floating Button */}
          <div className="theme-control">
            <button 
              className="theme-btn" 
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>

          {/* Suspense handles the loading state for lazy-loaded pages */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* 404 Catch-all Route */}
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