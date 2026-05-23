import React from "react";
import { Phone, Mail, MapPin, Award, ShieldCheck, HeartPulse, Building2, CheckCircle2 } from "lucide-react";
import { BRAND_INFO, CLIENT_LOGOS } from "../data";
import OrderCTA from "../components/OrderCTA";

export default function About() {
  const handleWhatsAppAction = () => {
    const message = encodeURIComponent("Halo Dapure Cakra, saya ingin memesan catering.");
    window.open(`wa.me/6285747273415`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full flex flex-col font-sans">
      {/* Visual Header Banner */}
      <section className="relative bg-darkgreen text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=80"
            alt="Dapure Cakra Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-accentred uppercase tracking-widest text-xs font-bold leading-none bg-white px-3.5 py-1.5 rounded-full inline-block mb-3.5 shadow-sm">
            Tentang Dapure Cakra
          </span>
          <h1 className="font-serif font-black text-3xl md:text-5xl tracking-normal mb-3">
            Dapur Tradisional Premium
          </h1>
          <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Mengenal komitmen kualitas kami dalam meracik bahan masakan segar harian demi menyuguhkan santapan bercita rasa legendaris.
          </p>
        </div>
      </section>

      {/* Split Layout: Left Image, Right Text */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Large premium food image) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-accentred pointer-events-none" />
            <div className="rounded-3xl overflow-hidden shadow-2xl overflow-hidden aspect-[4/5] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&w=800&q=80"
                alt="Hidangan Terbaik Dapure Cakra Purwokerto"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay statistics */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center justify-around">
              <div className="text-center">
                <p className="font-serif font-bold text-xl text-primary font-serif">100%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Bahan Halal</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="text-center">
                <p className="font-serif font-bold text-xl text-primary font-serif">A+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Skor Higienis</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="text-center">
                <p className="font-serif font-bold text-xl text-primary font-serif">2018</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Tahun Berdiri</p>
              </div>
            </div>
          </div>

          {/* Right Column (Branding copy) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-primary uppercase tracking-widest text-xs font-bold leading-none">
              Hidangan Terbaik untuk Setiap Momen
            </span>
            <h2 className="font-serif font-black text-3xl md:text-4.5xl leading-tight text-darkgray">
              Sajian Istimewa dari <span className="text-primary italic font-normal">Purwokerto</span> untuk Selera Nusantara
            </h2>
            <div className="w-16 h-1 bg-accentred rounded-full" />
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed antialiased">
              Berawal dari kecintaan keluarga terhadap khazanah cita rasa tradisional Indonesia, <strong>Dapure Cakra</strong> didirikan di Purwokerto untuk menghadirkan katering premium dengan kualitas restoran berbintang. Kami meyakini bahwa masakan istimewa lahir dari bumbu rempah berkualitas tinggi, dimasak dengan rasa cinta, serta disajikan secara profesional.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed antialiased">
              Kami mematuhi standar kebersihan ketat sejak pemilahan bahan mentah hingga tahap delivery ke meja makan Anda. Dapure Cakra dipercaya dalam menyediakan katering akad pernikahan, tumpeng syukuran adat Jawa, snack box rapat korporasi, hingga bolen pisang gurih khas Purwokerto yang senantiasa habis dipesan harian.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accentred shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-sm text-darkgray">Cita Rasa Autentik</span>
                  <span className="text-xs text-gray-500">Resep warisan keluarga dengan racikan bumbu melimpah.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-accentred shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-sm text-darkgray">Keamanan & Halal</span>
                  <span className="text-xs text-gray-500">Seluruh bahan dimasak higienis dan terbukti 100% Halal.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartPulse className="w-5 h-5 text-accentred shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-sm text-darkgray">Segar Setiap Hari</span>
                  <span className="text-xs text-gray-500">Masakan baru dibuat hangat sesuai waktu kirim pesanan Anda.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-accentred shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-sm text-darkgray">Layanan Korporasi</span>
                  <span className="text-xs text-gray-500">Dokumen administrasi lengkap untuk invoice instansi resmi.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Client Trust Section (Dark Green background with local logos representation) */}
      <section className="py-20 bg-darkgreen text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-beigeactive uppercase tracking-widest text-xs font-bold leading-none bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
              Dipercaya oleh Puluhan Instansi
            </span>
            <h2 className="font-serif font-black text-3xl md:text-4.5xl mb-3 tracking-normal">
              Sudah terjual 10.000+ box.
            </h2>
            <div className="w-16 h-1 bg-accentred mx-auto mb-5 rounded-full" />
            <p className="text-emerald-100 text-sm md:text-base leading-relaxed antialiased font-light">
              Terima kasih untuk kepercayaan instansi pemerintahan, rumah sakit, perguruan tinggi, serta berbagai komunitas di Purwokerto selama ini kepada Dapure Cakra.
            </p>
          </div>

          {/* Grid representing hospital, university, and corporate logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 xl:gap-8 items-center justify-center">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 group hover:bg-white/10 hover:border-emerald-500 transition-all duration-300"
              >
                {/* Simulated Logo Emblem with initials */}
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-accentred group-hover:text-white flex items-center justify-center font-bold text-xs text-teal-200 transition-colors">
                  {logo.keyword.substring(0, 3)}
                </div>
                <div className="text-center">
                  <p className="font-serif font-semibold text-xs text-white leading-tight">
                    {logo.name}
                  </p>
                  <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-semibold block mt-1">
                    {logo.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red CTA Contact Card Section (Render our OrderCTA section) */}
      <div className="-mt-8 relative z-20">
        <OrderCTA />
      </div>
    </div>
  );
}
