import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "",
    category: "Catering",
    date: "",
    portions: "",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactMethod) {
      alert("Silakan isi nama dan nomor kontak/email Anda.");
      return;
    }

    // Format highly specific WA query string
    const textQuery = 
      `Halo Dapure Cakra,\n\nSaya ingin bertanya mengenai layanan catering. Berikut rincian kebutuhan saya:\n` +
      `- Nama: ${formData.name}\n` +
      `- Kontak: ${formData.contactMethod}\n` +
      `- Jenis Menu: ${formData.category}\n` +
      `- Rencana Tanggal Acara: ${formData.date || "-"}\n` +
      `- Estimasi Porsi: ${formData.portions || "-"}\n` +
      `- Catatan Khusus: ${formData.notes || "- "}\n\n` +
      `Mohon segera dibales nggih. Terima kasih.`;

    const encoded = encodeURIComponent(textQuery);
    setIsSuccess(true);
    
    // Smooth delay before launching WA
    setTimeout(() => {
      window.open(`wa.me/6285747273415`, "_blank", "noopener,noreferrer");
      setIsSuccess(false);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col font-sans">
      {/* Banner */}
      <section className="relative bg-darkgreen text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
            alt="Dapure Cakra Hubungi Kami"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-white/75 uppercase tracking-widest text-xs font-bold leading-none bg-white/10 px-4 py-2 rounded-full inline-block mb-3.5 backdrop-blur-sm">
            Hubungi Saja Kami
          </span>
          <h1 className="font-serif font-black text-3xl md:text-5xl tracking-normal mb-3">
            Kontak & Lokasi
          </h1>
          <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Kami siap menjawab pertanyaan Anda seputar pesanan nasi box harian, syukuran, prasmanan pernikahan, atau pemesanan bolen & brownies.
          </p>
        </div>
      </section>

      {/* Grid Layout Contact info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Information cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                Informasi Kontak
              </span>
              <h2 className="font-serif font-black text-2xl md:text-4.5xl text-darkgray leading-tight">
                Mari Diskusikan <span className="text-primary italic font-normal">Menu Acara</span> Anda
              </h2>
              <div className="w-16 h-1 bg-accentred rounded-full mt-2" />
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed leading-relaxed mb-4">
              Ada pertanyaan mengenai daftar harga, request menu khusus/diet tertentu, atau penawaran harga porsi besar? Jam pelayanan admin kami sangat cepat. Klik kontak di bawah atau isi formular di samping.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Phone Node */}
              <div className="flex gap-4 p-5 rounded-2xl bg-softgray border border-gray-150/40">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-sm text-darkgray">WhatsApp / Telepon</span>
                  <a href={`tel:${BRAND_INFO.phone}`} className="text-xs md:text-sm text-gray-600 hover:text-primary hover:font-semibold transition">
                    {BRAND_INFO.phoneFormatted}
                  </a>
                  <span className="text-[10px] text-gray-500">Tersedia panggilan suara & chat</span>
                </div>
              </div>

              {/* Email Node */}
              <div className="flex gap-4 p-5 rounded-2xl bg-softgray border border-gray-150/40">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-sm text-darkgray">Email Kantor</span>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-xs md:text-sm text-gray-600 hover:text-primary hover:font-semibold transition">
                    {BRAND_INFO.email}
                  </a>
                  <span className="text-[10px] text-gray-500">Untuk proposal penawaran resmi</span>
                </div>
              </div>

              {/* Address Node */}
              <div className="flex gap-4 p-5 rounded-2xl bg-softgray border border-gray-150/40">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-sm text-darkgray">Dapur & Kantor</span>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                  <span className="text-[10px] text-primary font-medium">Banyumas, Central Java</span>
                </div>
              </div>

              {/* Hour Node */}
              <div className="flex gap-4 p-5 rounded-2xl bg-softgray border border-gray-150/40">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-sm text-darkgray">Jam Operasional</span>
                  <p className="text-xs md:text-sm text-gray-600">
                    {BRAND_INFO.workingHours}
                  </p>
                  <span className="text-[10px] text-emerald-600 font-semibold">Tutup pada Hari Libur Nasional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom interactive form */}
          <div className="lg:col-span-7 bg-softgray rounded-3xl p-6 md:p-10 border border-gray-150/50">
            <h3 className="font-serif font-black text-xl md:text-2xl text-darkgray mb-2">
              Kirim Inquiry Konsumsi
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed">
              Isi data berikut untuk menyusun pesan WhatsApp penawaran secara otomatis. Admin kami akan segera menyapa Anda kembali.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="bg-white text-darkgray text-xs md:text-sm rounded-xl p-3 border border-gray-250 focus:border-accentred focus:bg-white outline-none focus:ring-4 focus:ring-accentred/5 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Kontak WA / Email</label>
                  <input
                    type="text"
                    name="contactMethod"
                    required
                    value={formData.contactMethod}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567xxx / budi@email.com"
                    className="bg-white text-darkgray text-xs md:text-sm rounded-xl p-3 border border-gray-250 focus:border-accentred focus:bg-white outline-none focus:ring-4 focus:ring-accentred/5 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Kategori Acara</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="bg-white text-darkgray text-xs md:text-sm rounded-xl p-3 border border-gray-250 focus:border-accentred outline-none transition"
                  >
                    <option value="Catering">Catering / Nasi Box</option>
                    <option value="Snack Box">Snack Box</option>
                    <option value="Bolen">Bolen Pisang</option>
                    <option value="Brownies">Brownies Fudgy</option>
                    <option value="Tumpeng">Nasi Tumpeng</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Rencana Tanggal</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-white text-darkgray text-xs md:text-sm rounded-xl p-3 border border-gray-250 focus:border-accentred outline-none transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Estimasi Porsi / Box</label>
                  <input
                    type="number"
                    name="portions"
                    value={formData.portions}
                    onChange={handleChange}
                    min="1"
                    placeholder="Contoh: 50"
                    className="bg-white text-darkgray text-xs md:text-sm rounded-xl p-3 border border-gray-250 focus:border-accentred outline-none transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Catatan Tambahan & Alamat Kirim</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ceritakan rincian menu yang ingin Anda kustomisasi (pilihan kuah, lauk pauk, alergi, atau lokasi antar)..."
                  className="bg-white text-darkgray text-xs md:text-sm rounded-xl p-3 border border-gray-250 focus:border-accentred outline-none transition resize-none"
                />
              </div>

              {isSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2.5 text-xs md:text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Sukses! Membuka WhatsApp Web / Aplikasi untuk mengirimkan pesan kustom...</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-accentred text-white font-bold text-sm py-4 rounded-xl shadow-lg hover:bg-emerald-600 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Google Maps Visual Location Section */}
      <section className="w-full h-96 bg-gray-100 border-t border-gray-200">
        <iframe
          src={BRAND_INFO.mapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.15) contrast(1.1)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer"
          title="Dapure Cakra Purwokerto Maps Location"
        />
      </section>
    </div>
  );
}
