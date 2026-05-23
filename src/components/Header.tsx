import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, MessageCircle, Menu, X, Globe } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang-kami" },
    { name: "Menu", path: "/menu" },
    { name: "Kontak", path: "/kontak" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo Dapure Cakra, saya ingin memesan catering.");
    window.open(`https://wa.me/6285747273415`, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="w-full z-50 flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-darkgray text-white/90 text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-white/5 font-sans z-50">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-accentred transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-accentred" />
            <span>{BRAND_INFO.phoneFormatted}</span>
          </a>
          <a
            href={`mailto:${BRAND_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-accentred transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-accentred" />
            <span>{BRAND_INFO.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 hidden sm:inline">Purwokerto, Indonesia</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/dapurecakra.pwt/"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-white/80 hover:text-accentred hover:scale-115 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-white/80 hover:text-accentred hover:scale-115 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-white/80 hover:text-accentred hover:scale-115 transition-all duration-200"
              aria-label="Twitter / X"
            >
              {/* Simple elegant X layout placeholder using a custom path or globe icon fallback */}
              <span className="font-bold flex items-center text-[10px] tracking-wide">X</span>
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="p-1 text-white/80 hover:text-emerald-400 hover:scale-115 transition-all duration-200 cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-navbar"
        className={`w-full transition-all duration-300 z-40 ${
          isScrolled
            ? "sticky top-0 bg-white shadow-md py-3 text-darkgray"
            : "relative bg-transparent py-5 text-darkgray md:text-white"
        }`}
        style={{
          boxShadow: isScrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo & Brand */}
<Link to="" className="flex items-center gap-3 group">
  <img
    src="https://edu-dapurecakra.odoo.com/web/image/website/1/logo/Dapure%20Cakra?unique=223b349"
    alt="Dapure Cakra Logo"
    className="w-10 h-10 rounded-full object-cover overflow-hidden transition-all duration-300 border border-gray-200"
  />

  <div className="flex flex-col">
    <span className="font-serif font-bold text-lg md:text-xl tracking-wide group-hover:text-primary transition-colors duration-200">
      {BRAND_INFO.name}
    </span>

    <span
      className={`text-[10px] uppercase tracking-widest font-sans ${
        isScrolled
          ? "text-primary font-semibold"
          : "text-primary md:text-white/80 font-medium"
      }`}
    >
      Premium Catering
    </span>
  </div>
</Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-beigeactive font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={handleWhatsAppClick}
              className="ml-4 bg-accentred text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="bg-accentred text-white p-2 rounded-full hover:bg-red-700 transition"
              aria-label="Contact WA"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col py-4 px-6 md:hidden z-30 transition-all duration-300">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-3 px-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-beigeactive text-primary"
                      : "text-darkgray hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <div className="flex flex-col gap-1 px-4 text-xs text-gray-500">
                <p className="font-semibold text-gray-700">Hubungi Kami:</p>
                <p>{BRAND_INFO.phoneFormatted}</p>
                <p>{BRAND_INFO.email}</p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-darkgreen active:scale-95 transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan Sekarang Melalui WA</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
