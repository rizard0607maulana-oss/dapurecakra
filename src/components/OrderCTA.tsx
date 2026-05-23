import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function OrderCTA() {
  const handleWhatsAppAction = () => {
    const message = encodeURIComponent("Halo Dapure Cakra, saya ingin memesan catering.");
    window.open(`wa.me/6285747273415`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full py-16 bg-softgray">
      <div className="max-w-5xl mx-auto px-4">
        <div id="cta-card" className="bg-accentred text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
          {/* Subtle design circles in background */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-white/80 uppercase tracking-widest text-xs font-bold leading-none bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Dapure Cakra Purwokerto
              </span>
              <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-5xl tracking-normal text-white mb-4">
                Ayo Pesan Sekarang!
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-sans mb-6">
                Nikmati kemudahan pemesanan hidangan terbaik untuk melengkapi kebahagiaan acara penting Anda. Konsultasikan menu katering impian Anda secara gratis langsung bersama koki kami.
              </p>
              
              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm text-white/90 border-t border-white/20 pt-6">
                <a 
                  href={`tel:${BRAND_INFO.phone}`} 
                  className="flex items-center justify-center lg:justify-start gap-2.5 hover:text-white transition duration-200"
                >
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <span>{BRAND_INFO.phoneFormatted}</span>
                </a>
                <a 
                  href={`mailto:${BRAND_INFO.email}`} 
                  className="flex items-center justify-center lg:justify-start gap-2.5 hover:text-white transition duration-200"
                >
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <span>{BRAND_INFO.email}</span>
                </a>
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <MapPin className="w-4 h-4 text-white shrink-0" />
                  <span>{BRAND_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="shrink-0 w-full sm:w-auto relative group">
              <button
                onClick={handleWhatsAppAction}
                id="cta-whatsapp-btn"
                className="w-full sm:w-auto bg-white text-accentred font-bold text-base px-8 py-4.5 rounded-2xl shadow-lg hover:bg-beigeactive transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2.5"
              >
                {/* Custom message square icon instead of standard WA */}
                <MessageSquare className="w-5.5 h-5.5" />
                <span>Pesan Lebih Cepat</span>
              </button>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/20 rounded-2xl -z-10 blur-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
