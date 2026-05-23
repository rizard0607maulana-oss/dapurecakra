import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import { BRAND_INFO, INSTAGRAM_PHOTOS } from "../data";

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo Dapure Cakra, saya ingin memesan catering.");
    window.open(`wa.me/6285747273415`, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-darkgreen text-white pt-16 pb-8 border-t border-emerald-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Left Column: Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-serif font-bold text-xl">
              DC
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide text-white">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-semibold">
                Premium Catering & Bakery
              </span>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed antialiased">
            Sajian kuliner premium dengan cita rasa nusantara otentik. Melayani pesanan katering, tumpeng, snack box, bolen pisang, dan brownies fudgy lezat di Purwokerto dan sekitarnya.
          </p>
          <div className="flex items-center gap-3.5 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-accentred flex items-center justify-center text-white transition-all duration-300"
              aria-label="Facebook Link"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/dapurecakra.pwt/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-accentred flex items-center justify-center text-white transition-all duration-300"
              aria-label="Instagram Link"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center text-white cursor-pointer transition-all duration-300"
              aria-label="WhatsApp Link"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center-Left Column: Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif font-bold text-lg text-emerald-200 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accentred">
            Peta Navigasi
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/" className="text-white/80 hover:text-emerald-300 hover:translate-x-1.5 transition-all duration-250 inline-flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-accentred" />
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami" className="text-white/80 hover:text-emerald-300 hover:translate-x-1.5 transition-all duration-250 inline-flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-accentred" />
                <span>Tentang Kami</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-white/80 hover:text-emerald-300 hover:translate-x-1.5 transition-all duration-250 inline-flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-accentred" />
                <span>Menu Pilihan</span>
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="text-white/80 hover:text-emerald-300 hover:translate-x-1.5 transition-all duration-250 inline-flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-accentred" />
                <span>Hubungi Kami</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleWhatsAppClick}
                className="text-white/80 hover:text-emerald-300 hover:translate-x-1.5 transition-all duration-250 text-left inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0"
              >
                <ArrowRight className="w-3.5 h-3.5 text-accentred" />
                <span>Pesan Layanan Antar</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Center-Right Column: Contact & Location details */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif font-bold text-lg text-emerald-200 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accentred">
            Kontak Resmi
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accentred shrink-0" />
              <span className="leading-relaxed">
                Purwokerto, Kabupaten Banyumas, Jawa Tengah, Indonesia.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accentred shrink-0" />
              <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-amber-300 transition-colors">
                {BRAND_INFO.phoneFormatted}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accentred shrink-0" />
              <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-amber-300 transition-colors">
                {BRAND_INFO.email}
              </a>
            </li>
            <li className="text-xs text-white/60 pt-2 border-t border-white/10">
              <p className="font-semibold text-white/80 mb-1">Jam Pelayanan:</p>
              <p>{BRAND_INFO.workingHours}</p>
            </li>
          </ul>
        </div>

        {/* Right Column: Instagram Gallery 2x2 */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif font-bold text-lg text-emerald-200 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accentred">
            Instagram Feed
          </h3>
          <p className="text-xs text-white/70 -mt-2">Dokumentasi hasil hidangan dapur kami.</p>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {INSTAGRAM_PHOTOS.map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden border border-white/10 group relative"
              >
                <img
                  src={src}
                  alt={`Dapure Cakra Instagram Gallery Food ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <a
                  href="https://www.instagram.com/dapurecakra.pwt/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-darkgreen/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-white/10 text-center text-xs text-white/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>Copyright © 2026 Digital Business Telkom University Purwokerto. All Rights Reserved.</span>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hover:text-white transition-colors cursor-pointer">Syarat & Ketentuan</span>
          <span>•</span>
          <span className="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</span>
        </div>
      </div>
    </footer>
  );
}
