import { MenuItem, Testimonial, ServiceCard, CategoryCard } from "./types";

export const BRAND_INFO = {
  name: "Dapure Cakra",
  type: "Catering & Food Service",
  location: "Purwokerto, Banyumas, Central Java",
  phone: "wa.me/62857472734155",
  phoneFormatted: "+62 857-4727-3415",
  email: "dapurecakra.pwt@gmail.com",
  address: "Purwokerto, Banyumas, Jawa Tengah",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.28548174415!2d109.16260464673822!3d-7.420839294247551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e657c1b3f9ffc3d%3A0x4027a7650a544c0!2sPurwokerto%2C%20Banyumas%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1716470000000!5m2!1sen!2sid",
  workingHours: "Senin - Minggu: 07.00 - 20.00 WIB"
};

export const MENU_CATEGORIES: CategoryCard[] = [
  {
    id: "Catering",
    title: "Catering",
    description: "Paket nasi box lengkap dengan menu sehat harian maupun event spesial.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "Snack Box",
    title: "Snack Box",
    description: "Kombinasi kue tradisional dan modern yang sangat pas untuk rapat dan jamuan.",
    iconName: "Package",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "Bolen",
    title: "Pastry & Bolen",
    description: "Bolen pisang legendaris dengan kulit pastry yang renyah dan isian melimpah.",
    iconName: "Croissant",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "Brownies",
    title: "Cake & Brownies",
    description: "Fudgy brownies premium dengan tekstur padat, cokelat pekat, dan shiny crust cantik.",
    iconName: "Cake",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  }
];

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Katering Harian & Kantor",
    description: "Pilihan menu makan siang higienis, porsi pas, serta bergizi seimbang untuk menjaga produktivitas kerja.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Acara Ulang Tahun",
    description: "Sajian manis, snack box, hingga tumpeng mini menarik yang membuat momen ulang tahun tak terlupakan.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Konsumsi Pernikahan",
    description: "Prasmanan mewah dengan dekorasi estetik dan pelayan profesional untuk menyambut seluruh tamu spesial Anda.",
    image: "https://weddingmarket.com/storage/images/artikelidea/ffe91be3de823f427431e795d7aba645fac6bbd9.webp"
  },
  {
    title: "Acara Lainnya & Gathering",
    description: "Mulai dari pengajian, arisan, syukuran rumah, hingga seminar korporasi skala besar di Purwokerto.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quoteTitle: "Makanannya Enak",
    review: "Nasi box dari Dapure Cakra tidak pernah mengecewakan. Rasanya pas, bumbunya meresap sampai ke dalam, ayam bakarnya juara banget! Sangat direkomendasikan untuk acara kantor.",
    name: "Dr. Budi Santoso",
    role: "Dosen Unsoed, Purwokerto",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "2",
    quoteTitle: "Mantap Banget",
    review: "Pesan Bolen isi 8 Mix dan brownies 20x20 untuk hantaran mertua. Beliau suka sekali karena bolennya lembut, pisangnya manis legit, cokelatnya lumer. Brownies-nya nyoklat parah!",
    name: "Dewi Lestari",
    role: "Ibu Rumah Tangga, Banyumas",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "3",
    quoteTitle: "Pelayanannya Terbaik",
    review: "Sangat responsif saat dihubungi via WA. Pengiriman snack box tepat waktu pagi-pagi sekali untuk acara seminar. Tamu-tamu memuji kebersihan kemasan dan rasa kuenya luar biasa.",
    name: "Prasetyo Wibowo",
    role: "Event Organizer, Purwokerto",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export const MENU_DATA: MenuItem[] = [
  // Catering Category
  {
    name: "Paket 1 - Catering Nasi",
    price: 16000,
    category: "Catering",
    description: "Nasi Ayam/Lele (bakar atau goreng), dilengkapi dengan pilihan Sayur 1 macam, Sambel khas Dapure Cakra, dan Lalapan segar.",
    image: "https://rumahtumpengjakarta.com/wp-content/uploads/2025/06/Nasi-Box-Bekasi-Utar-scaled.jpg"
  },
  {
    name: "Paket 2 - Catering Nasi",
    price: 18000,
    category: "Catering",
    description: "Nasi Ayam (bakar atau goreng), ditambah Sambel mantap, Sayur pilihan porsi harian, serta pencuci mulut Buah segar atau Kerupuk renyah.",
    image: "https://rumahtumpengjakarta.com/wp-content/uploads/2025/06/Nasi-Box-Bekasi-Timur-scaled.jpg"
  },
  {
    name: "Paket 3 - Catering Nasi",
    price: 20000,
    category: "Catering",
    description: "Nasi Ayam (bakar atau goreng) premium, Sambel, 2 macam Sayur kombinasi, kombinasi nikmat Buah segar, dan Kerupuk.",
    image: "https://rumahtumpengjakarta.com/wp-content/uploads/2025/06/Nasi-Box-Bekasi-Barat-scaled.jpg"
  },
  {
    name: "Paket 4 - Catering Nasi",
    price: 30000,
    category: "Catering",
    description: "Nasi Rendang Sapi empuk / Ayam Kampung asli, lengkap dengan Sambel Goreng Kentang Ati, Sayur Capcay hangat, Buah segar, dan Kerupuk.",
    image: "https://rumahtumpengjakarta.com/wp-content/uploads/2025/06/Nasi-Box-Bekasi-Selatan.jpg"
  },

  // Snack Box Category
  {
    name: "Snack Box Paket 1",
    price: 5500,
    category: "Snack Box",
    description: "Kombinasi pas untuk rapat singkat: Bolu kukus lembut, dipadu dengan Puding manis dingin atau Arem-arem gurih.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIUy-qe1N8oqwNXQSyZV9AxLwBGqKpmgYBg&s"
  },
  {
    name: "Snack Box Paket 2",
    price: 7500,
    category: "Snack Box",
    description: "Sajian lengkap pengganjal lapar: Bolu gulung cantik, Risol Mayo lumer berisi telur & daging asap, serta camilan Kacang asin garing.",
    image: "https://image1ws.indotrading.com/s3/productimages/webp/co261211/p1324544/w600-h600/d1e65a97-bb7e-424e-973e-6cd85aa646a2.png"
  },
  {
    name: "Snack Box Paket 3",
    price: 8500,
    category: "Snack Box",
    description: "Sajian premium: Arem-arem gurih isi daging / Puding buah segar, ditambah Risol Mayo / Martabak mini, dan Bolen Pisang mini khas Cakra.",
    image: "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/08/22/8be3667b47523ab05e09fd7fa982213a.jpg"
  },
  {
    name: "Snack Box Paket 4",
    price: 10000,
    category: "Snack Box",
    description: "Paket VIP termewah: Bolen Pisang / Sus Premium dengan vla, Arem-arem, Risol Mayo / Martabak mini, serta Kacang premium / Permen / Puding mini.",
    image: "https://bosara.sultraprov.go.id/asset/foto_produk/product-rumah-makan-kiwas-sejahtera-20240420123957884.png"
  },

  // Bolen Category
  {
    name: "Bolen Pisang Isi 6",
    price: 20000,
    category: "Bolen",
    description: "Bolen pisang legit dengan pilihan isian Cokelat lumer atau Keju gurih tebal isi 6 biji per box hantaran.",
    image: "https://asset.kompas.com/crops/7GbOhLoiXZgKGYDJALE9GYZtDdA=/130x72:881x573/1200x800/data/photo/2023/12/20/658228791e318.jpeg"
  },
  {
    name: "Bolen Pisang Isi 6 Mix",
    price: 23000,
    category: "Bolen",
    description: "Perpaduan harmonis rasa manis-gurih: Bolen pisang isi mix cokelat dan keju sekaligus dalam isi 6 biji per box hantaran.",
    image: "https://asset.kompas.com/crops/7GbOhLoiXZgKGYDJALE9GYZtDdA=/130x72:881x573/1200x800/data/photo/2023/12/20/658228791e318.jpeg"
  },
  {
    name: "Bolen Pisang Isi 8",
    price: 27000,
    category: "Bolen",
    description: "Porsi berbagi lebih banyak: Bolen pisang bertekstur flaky, isi Cokelat atau Keju spesial isi 8 biji per box.",
    image: "https://asset.kompas.com/crops/7GbOhLoiXZgKGYDJALE9GYZtDdA=/130x72:881x573/1200x800/data/photo/2023/12/20/658228791e318.jpeg"
  },
  {
    name: "Bolen Pisang Isi 8 Mix",
    price: 30000,
    category: "Bolen",
    description: "Favorit pelanggan! Bolen pisang legendaris dengan isi mix cokelat dan keju isi 8 biji per box, cocok untuk oleh-oleh Purwokerto.",
    image: "https://asset.kompas.com/crops/7GbOhLoiXZgKGYDJALE9GYZtDdA=/130x72:881x573/1200x800/data/photo/2023/12/20/658228791e318.jpeg"
  },

  // Brownies Category
  {
    name: "Fudgy Chocolate Brownies (20x20)",
    price: 65000,
    category: "Brownies",
    description: "Fudgy brownies dengan shiny crust mengkilap di permukaannya, tekstur padat & chewy di dalam berukuran 20x20 cm. Topping melimpah.",
    image: "https://down-id.img.susercontent.com/file/8b178f372ff5db17f987df9c6f3876f2"
  },
  {
    name: "Fudgy Chocolate Brownies (10x20)",
    price: 35000,
    category: "Brownies",
    description: "Fudgy brownies cokelat premium yang legit dalam kemasan kompak berukuran 10x20 cm. Cocok dinikmati bersama teh/kopi hangat.",
    image: "https://img.lazcdn.com/g/ff/kf/Sc42ab85023124cf4af8ed2cf41b478a0Z.jpg_720x720q80.jpg"
  },

  // Tumpeng Category
  {
    name: "Nasi Tumpeng Kuning Prasaja (Tumpeng 1)",
    price: 150000,
    category: "Tumpeng",
    description: "Dirancang untuk porsi makan 7-10 orang. Nasi kuning tumpeng lengkap dengan Ayam goreng gurih, Telur balado pedas manis, Mie goreng legendaris, serta Orek tempe kering.",
    image: "https://awsimages.detik.net.id/community/media/visual/2019/08/16/dd3c93fc-1901-4134-bbd9-7329ee521bf3.jpeg?w=1200"
  },
  {
    name: "Nasi Tumpeng Kuning Ageng (Tumpeng 2)",
    price: 300000,
    category: "Tumpeng",
    description: "Sempurna untuk perayaan besar porsi 15-20 orang. Nasi kuning menjulang megah, Ayam goreng bumbu melimpah, Telur balado sachet, Mie goreng, Orek tempe kering, Perkedel kentang lembut, dan Kerupuk udang.",
    image: "https://images.tokopedia.net/img/JFrBQq/2022/8/17/63ee7ccb-4f21-4a87-9d45-299b5cbaffe6.jpg"
  }
];

export const CLIENT_LOGOS = [
  { name: "Universitas Jenderal Soedirman", type: "University", keyword: "UNSOED" },
  { name: "RSUD Prof. Margono Soekarjo", type: "Hospital", keyword: "RS Margono" },
  { name: "Telkom University Purwokerto", type: "University", keyword: "Telkom" },
  { name: "Bank Jateng Purwokerto", type: "Corporate", keyword: "Bank Jateng" },
  { name: "RS Ananda Purwokerto", type: "Hospital", keyword: "RS Ananda" },
  { name: "KAI Daop 5 Purwokerto", type: "Corporate", keyword: "KAI" }
];

export const INSTAGRAM_PHOTOS = [
  "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80"
];
