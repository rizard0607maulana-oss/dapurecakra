import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, CheckCircle, Search, FilterX } from "lucide-react";
import { MENU_DATA, BRAND_INFO } from "../data";
import { MenuItem } from "../types";

export default function Menu() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Check if navigate from home page passed category state
  useEffect(() => {
    if (location.state && (location.state as any).selectedCategory) {
      setSelectedCategory((location.state as any).selectedCategory);
      // Clean up state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const categories = ["All", "Catering", "Snack Box", "Bolen", "Brownies", "Tumpeng"];

  const filteredMenu = MENU_DATA.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleOrderWhatsApp = (item: MenuItem) => {
    const messageText = `Halo Dapure Cakra, saya ingin memesan menu ini:\n\n- Nama Menu: ${item.name}\n- Kategori: ${item.category}\n- Harga: ${formatPrice(item.price)}\n\nMohon informasi ketersediaan untuk pesanan saya. Terima kasih.`;
    const encoded = encodeURIComponent(messageText);
    window.open(`wa.me/6285747273415`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full flex flex-col font-sans">
      {/* Hero Header */}
      <section className="relative bg-darkgreen text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
            alt="Dapure Cakra Menu Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-white/75 uppercase tracking-widest text-xs font-bold leading-none bg-white/10 px-4 py-2 rounded-full inline-block mb-4 backdrop-blur-sm">
            Daftar Hidangan Resto & Katering
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl tracking-tight mb-4">
            Our Menu
          </h1>
          <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Temukan berbagai pilihan menu catering terbaik untuk setiap kebutuhan acara Anda. Diracik segar harian dengan bumbu rempah melimpah khas Banyumasan.
          </p>
        </div>
      </section>

      {/* Main Filter & Grid Container */}
      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Controls Bar: Category Filter & Search Input */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-6 border-b border-gray-100">
            {/* Horizontal Scrollable Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transform active:scale-95 transition-all duration-300 cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? "bg-accentred text-white shadow-md"
                      : "bg-softgray text-darkgray hover:bg-gray-200"
                  }`}
                >
                  {cat === "All" ? "Semua Menu" : cat}
                </button>
              ))}
            </div>

            {/* Simple Elegant Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Cari hidangan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-softgray text-darkgray font-medium text-xs md:text-sm rounded-xl py-3 pl-10 pr-4 border border-transparent focus:border-accentred/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-accentred/5 transition-all outline-none"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Quick Disclaimer */}
          <div className="flex items-center gap-2.5 mb-8 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl p-4 text-xs md:text-sm">
            <CheckCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <p>
              <strong>Informasi Kemasan:</strong> Seluruh menu catering dapat dipesan dalam bentuk Nasi Box kertas ramah lingkungan maupun nampan bento komplit. Hubungi kami untuk kustomisasi wadah/kemasan khusus.
            </p>
          </div>

          {/* Menu Grid: Desktop 4 columns, Tablet 2 columns, Mobile 1 column */}
          {filteredMenu.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMenu.map((item, index) => (
                <div
                  key={index}
                  className="bg-softgray rounded-2xl overflow-hidden border border-gray-150/50 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-350 ease-out group"
                >
                  {/* Food Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gray-200 shrink-0 select-none">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ contentVisibility: "auto" }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-primary font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-gray-100">
                      {item.category}
                    </span>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-5 flex flex-col gap-2 flex-grow">
                    <h3 className="font-serif font-black text-base md:text-lg text-darkgray leading-tight group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Primary WA action */}
                  <div className="p-5 pt-0 border-t border-gray-200/45 mt-auto flex items-center justify-between gap-2 shrink-0">
                    <span className="text-primary font-bold font-serif text-sm md:text-base leading-none">
                      {formatPrice(item.price)}
                    </span>
                    <button
                      onClick={() => handleOrderWhatsApp(item)}
                      className="bg-primary text-white hover:bg-accentred font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer transform active:scale-95 transition-all duration-200"
                      aria-label={`Order ${item.name}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <FilterX className="w-8 h-8" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-darkgray">Menu tidak ditemukan</p>
                <p className="text-gray-500 text-sm mt-1">Coba gunakan kata kunci pencarian yang lain atau ubah filter kategori Anda.</p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="bg-primary text-white font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-darkgreen transition-all"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
