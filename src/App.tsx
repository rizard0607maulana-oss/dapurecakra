import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

// Utility component to reset scroll position on every page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll-To-Top Utility for seamless UX transitions */}
      <ScrollToTop />
      
      <div id="app-wrapper" className="min-h-screen flex flex-col bg-softgray">
        {/* Top Header Contact Bar & Main Navbar Navigation */}
        <Header />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/kontak" element={<Contact />} />
            {/* Fallback to homepage */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer Navigation & Instagram Gallery */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
