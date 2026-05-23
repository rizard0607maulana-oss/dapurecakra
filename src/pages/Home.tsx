import React from "react";
import { useNavigate } from "react-router-dom";
import { Utensils, Package, Croissant, Cake, Star, Quote, ChevronRight, Check, CheckCircle, MessageCircle } from "lucide-react";
import { MENU_CATEGORIES, SERVICE_CARDS, TESTIMONIALS, BRAND_INFO } from "../data";

export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate("/menu", { state: { selectedCategory: categoryName } });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo Dapure Cakra, saya ingin bertanya tentang menu catering.");
    window.open(`wa.me/6285747273415`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full flex flex-col font-sans bg-softgray">
      {/* 1. Main Viewport Split Layout (Described in "Sleek Interface" Spec) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-16">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-150/50 shadow-sm flex flex-col lg:flex-row min-h-[680px]">
          
          {/* Left Column: Hero & About Pitch */}
          <div className="w-full lg:w-1/2 relative bg-white border-b lg:border-b-0 lg:border-r border-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-10">
            <div>
              <span className="text-accentred font-bold text-xs uppercase tracking-widest bg-red-50 text-accentred px-3.5 py-1.5 rounded-full inline-block mb-4">
                ✦ Catering & Food Service
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-darkgray tracking-tight">
                Hidangan Terbaik untuk <span className="italic font-normal text-primary">Setiap Momen</span> Anda.
              </h1>
              
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-8">
                Dapure Cakra menyajikan cita rasa otentik dengan sentuhan modern khas Banyumas untuk syukuran pernikahan, kudapan rapat kantor, hingga hantaran keluarga di wilayah Purwokerto.
              </p>
              
              {/* Sleek Stats Counters with elegant separators */}
              <div className="flex gap-10 items-center">
                <div id="stat-sold" className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-primary">10k+</span>
                  <span className="text-[10px] uppercase font-bold tracking-tight text-gray-400 mt-0.5">Box Terjual</span>
                </div>
                <div className="h-10 w-[1px] bg-gray-200" />
                <div id="stat-events" className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-primary">500+</span>
                  <span className="text-[10px] uppercase font-bold tracking-tight text-gray-400 mt-0.5">Acara Sukses</span>
                </div>
                <div className="h-10 w-[1px] bg-gray-200" />
                <div id="stat-rating" className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-primary flex items-center gap-1">
                    4.9<Star className="w-5 h-5 text-amber-500 fill-amber-500 inline shrink-0" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-tight text-gray-400 mt-0.5">Skor Ulasan</span>
                </div>
              </div>
            </div>

            {/* Feature Highlight boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F9F9F7] p-5 rounded-2xl border border-gray-100 flex items-center gap-4 transition-all hover:bg-beigeactive/35">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accentred shadow-xs shrink-0">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-darkgray leading-tight">
                  Kualitas Premium
                </div>
              </div>
              <div className="bg-[#F9F9F7] p-5 rounded-2xl border border-gray-100 flex items-center gap-4 transition-all hover:bg-beigeactive/35">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accentred shadow-xs shrink-0">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-darkgray leading-tight">
                  Pesan Antar Cepat
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Category Grid & Instant Trust Banner */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between bg-[#FBFBFA]">
            
            {/* Upper half: Grid Categories */}
            <div className="p-8 md:p-12 lg:p-12 flex-1">
              <div className="flex justify-between items-end mb-8 border-b border-gray-150/45 pb-4">
                <div>
                  <h2 className="font-serif text-2.5xl md:text-3xl tracking-tight text-darkgray">
                    Menu Kami
                  </h2>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span>Pilihan rasa terbaik untuk Anda</span>
                  </p>
                </div>
                <button
                  onClick={() => navigate("/menu")}
                  className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-accentred hover:border-accentred transition-colors duration-200 cursor-pointer"
                >
                  Lihat Semua
                </button>
              </div>

              {/* 4 Interactive Category Cards with Starting Prices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Catering Category Card */}
                <div
                  onClick={() => handleCategoryClick("Catering")}
                  className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-softgray rounded-full mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-darkgray mb-1 group-hover:text-primary transition-colors">
                    Catering
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-3.5 leading-relaxed">
                    Paket nasi lengkap untuk berbagai kebutuhan acara formal.
                  </p>
                  <span className="text-[10px] font-extrabold text-accentred uppercase tracking-wider block">
                    Mulai Rp 16.000
                  </span>
                </div>

                {/* Snack Box Category Card */}
                <div
                  onClick={() => handleCategoryClick("Snack Box")}
                  className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-softgray rounded-full mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-darkgray mb-1 group-hover:text-primary transition-colors">
                    Snack Box
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-3.5 leading-relaxed">
                    Kudapan manis dan gurih untuk isian acara yang berkesan.
                  </p>
                  <span className="text-[10px] font-extrabold text-accentred uppercase tracking-wider block">
                    Mulai Rp 5.500
                  </span>
                </div>

                {/* Bolen & Pastry Category Card */}
                <div
                  onClick={() => handleCategoryClick("Bolen")}
                  className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-softgray rounded-full mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Croissant className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-darkgray mb-1 group-hover:text-primary transition-colors">
                    Bolen & Pastry
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-3.5 leading-relaxed">
                    Homemade bakery dengan pisang raja dan coklat pilihan.
                  </p>
                  <span className="text-[10px] font-extrabold text-accentred uppercase tracking-wider block">
                    Mulai Rp 20.000
                  </span>
                </div>

                {/* Tumpeng Category Card */}
                <div
                  onClick={() => handleCategoryClick("Tumpeng")}
                  className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-softgray rounded-full mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Cake className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-darkgray mb-1 group-hover:text-primary transition-colors">
                    Tumpeng
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-3.5 leading-relaxed">
                    Nasi tumpeng megah untuk syukuran dan pesta besar.
                  </p>
                  <span className="text-[10px] font-extrabold text-accentred uppercase tracking-wider block">
                    Mulai Rp 150.000
                  </span>
                </div>

              </div>
            </div>

            {/* Lower half: Client Trust Mini Section (Dark-Green) */}
            <div className="bg-darkgreen text-white p-8 md:p-10 lg:p-12 rounded-b-3xl lg:rounded-bl-none lg:rounded-br-3xl flex flex-col justify-center gap-2">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold leading-none">
                Kata Pelanggan kami
              </span>
              <p className="text-sm md:text-base font-serif italic text-white/95 leading-relaxed">
                "Makanannya enak sekali, porsinya melimpah, dan pelayanannya sangat profesional untuk acara kantor kami di Unsoed."
              </p>
              <div className="flex items-center justify-between gap-4 mt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/50">— dr. Sarah, Purwokerto</span>
                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2.5 overflow-hidden">
                  <img
                    alt="Customer trust thumbnail 1"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-darkgreen object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    alt="Customer trust thumbnail 2"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-darkgreen object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="h-8 w-8 rounded-full bg-primary ring-2 ring-darkgreen flex items-center justify-center text-[9px] font-bold text-white uppercase select-none">
                    +5k
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Full Width Premium Food Photography Display (Hero presentation element) */}
      <section className="w-full relative py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
              alt="Dapure Cakra Premium Catering Presentation"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[6000ms] ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/90 via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-6 sm:left-12 max-w-xl text-white">
              <span className="text-[10px] uppercase font-black bg-accentred text-white px-3.5 py-1.5 rounded-full mb-3.5 inline-block tracking-widest leading-none">
                Bumbu Melimpah
              </span>
              <h2 className="font-serif text-3xl md:text-4.5xl font-black mb-3 text-white leading-tight">
                Cita Rasa Nusantara Autentik Purwokerto
              </h2>
              <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed mb-4">
                Sajian prasmanan istimewa dan nasi box berciri kuliner lokal Banyumas yang dimurnikan dengan kebersihan total, higienis, serta bersertifikasi Halal LPPOM MUI.
              </p>
              <button
                onClick={() => navigate("/menu")}
                className="bg-white text-primary font-bold text-xs px-6 py-3 rounded-xl hover:bg-beigeactive hover:text-darkgray transition duration-200 cursor-pointer"
              >
                Pilih Paket Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid Section (Full-width Dark Green Background) */}
      <section id="services-section" className="w-full py-20 bg-darkgreen text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-beigeactive uppercase tracking-widest text-xs font-bold leading-none bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Pelayanan Profesional
            </span>
            <h2 className="font-serif font-black text-3xl md:text-4.5xl mb-4 tracking-tight">
              Layanan yang Kami Sediakan
            </h2>
            <div className="w-16 h-1 bg-accentred mx-auto mb-6 rounded-full" />
            <p className="text-white/85 text-sm md:text-base leading-relaxed font-light">
              Kami siap melayani kebutuhan konsumsi sehat dengan pelayanan ramah dalam berbagai acara skala kecil, menengah, maupun resepsi besar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_CARDS.map((srv, index) => (
              <div
                key={index}
                className="bg-emerald-950/40 rounded-2xl overflow-hidden border border-emerald-900 group flex flex-col justify-between hover:border-emerald-700 transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-112 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-emerald-200 mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-xs md:text-sm text-emerald-100 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
              <span className="font-bold text-accentred flex items-center gap-1.5 shrink-0">
                <CheckCircle className="w-4 h-4" /> Higienis Total
              </span>
              <span className="text-emerald-500 hidden sm:inline">•</span>
              <span className="font-bold text-emerald-300 flex items-center gap-1.5 shrink-0">
                <CheckCircle className="w-4 h-4" /> HALAL LPPOM MUI
              </span>
              <span className="text-emerald-500 hidden sm:inline">•</span>
              <span className="font-bold text-amber-300 flex items-center gap-1.5 shrink-0">
                <CheckCircle className="w-4 h-4" /> Koki Berpengalaman
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section (Light Gray Background) */}
      <section id="testimonials-section" className="w-full py-20 bg-softgray">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accentred uppercase tracking-wider text-xs font-bold bg-accentred/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Kisah Kepuasan Pelanggan
            </span>
            <h2 className="font-serif font-black text-3xl md:text-4.5xl text-darkgray mb-4 tracking-tight">
              Kata Mereka
            </h2>
            <div className="w-16 h-1 bg-accentred mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Suatu kehormatan bagi kami untuk menjadi bagian dari kisah penting Anda melalui hidangan bercita rasa tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col justify-between shadow-xs relative group hover:shadow-md transition-shadow duration-300"
              >
                <Quote className="absolute top-4 right-6 w-10 h-10 text-gray-100/50 pointer-events-none group-hover:text-amber-100 transition-colors" />

                <div>
                  <h3 className="font-serif font-black text-lg text-accentred mb-3">
                    &ldquo;{test.quoteTitle}&rdquo;
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed italic antialiased mb-6">
                    {test.review}
                  </p>
                </div>

                <div>
                  <div className="w-full h-[1px] bg-gray-100 mb-6" />
                  <div className="flex items-center gap-4">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-11 h-11 rounded-full object-cover border border-accentred/20 shadow-inner"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-sm text-darkgray">
                        {test.name}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {test.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
