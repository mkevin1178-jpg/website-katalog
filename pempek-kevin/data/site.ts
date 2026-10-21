const FOUNDED_YEAR = 2009;

export type OpeningHour = {
  day: string;
  hours: string;
};

export const site = {
  name: "Pempek Kevin",
  tagline: "Cita Rasa Tenggiri, Favorit Sepanjang Hari.",
  description:
    "Pempek Kevin adalah UMKM kuliner khas Palembang di Bogor yang berdiri sejak 2009. Menyajikan pempek signature ikan tenggiri, paket pempek, kuliner khas Palembang, hingga frozen food, dibuat dari ikan segar dengan resep keluarga dan pernah dikirim hingga ke Australia, Oman, dan Qatar.",
  foundedYear: FOUNDED_YEAR,
  foundedDate: "2009-02-12",
  url: "https://pempek-kevin.vercel.app",

  // GANTI dengan nomor asli owner (format internasional tanpa "+", contoh: 62812xxxxxxx)
  whatsapp: "62XXXXXXXXXX",

  // GANTI dengan alamat asli
  address: {
    street: "Jl. Contoh Raya No. 123",
    city: "Bogor",
    province: "Jawa Barat",
    postalCode: "16100",
    country: "Indonesia",
  },

  // GANTI dengan link Google Maps asli (embed & share)
  maps: {
    embedUrl:
      "https://www.google.com/maps?q=Bogor,Indonesia&output=embed",
    shareUrl: "https://www.google.com/maps/search/?api=1&query=Bogor,Indonesia",
  },

  // GANTI dengan ID video YouTube profil asli
  youtubeId: "dQw4w9WgXcQ",

  openingHours: [
    { day: "Senin - Jumat", hours: "08.00 - 20.00 WIB" },
    { day: "Sabtu - Minggu", hours: "08.00 - 21.00 WIB" },
  ] as OpeningHour[],

  social: {
    // GANTI dengan akun asli
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    facebook: "https://facebook.com/",
  },

  categorySectionTitle: "Pilih Kategori Favoritmu",

  hero: {
    titleLines: ["Pempek Kevin"],
  },

  featuredSection: {
    eyebrow: "Produk Unggulan",
    title: "Yang Paling Dicari",
  },

  story: {
    title: "Sejak 2009, kami masak pakai hati",
    paragraphs: [
      "Pempek Kevin berawal dari kecintaan pada masakan khas Palembang dan keinginan menghadirkan pempek berkualitas bagi keluarga di Bogor. Sejak 2009, kami konsisten menggunakan ikan segar dan resep keluarga yang terjaga.",
      "Kepercayaan pelanggan membawa produk kami hingga dikirim ke Australia, Oman, dan Qatar. Kini kami ingin lebih dekat dengan Anda lewat katalog digital ini.",
    ],
    ctaLabel: "Selengkapnya",
  },

  aboutSection: {
    eyebrow: "Tentang Kami",
    title: "Pempek dengan Cita Rasa Autentik",
  },

  gallerySection: {
    title: "Momen di Balik Kelezatan",
    ctaLabel: "Lihat Galeri",
  },

  cta: {
    titleLines: ["Pesan Sekarang,", "Lebih Mudah!"],
    sentence:
      "Tanya menu, harga, atau langsung pesan lewat WhatsApp — untuk pengiriman luar daerah, silakan hubungi kami terlebih dahulu.",
  },

  // TODO: ganti dengan foto asli (cut-out transparan WebP/PNG untuk hero/dekorasi/CTA).
  assets: {
    hero: "/images/hero-pempek.png",
    heroAlt: "Aneka pempek Pempek Kevin di atas piring dengan cuko dan mentimun",
    heroDecorations: [
      "/images/hero/deco-cuka.svg",
      "/images/hero/deco-cabai.svg",
      "/images/hero/deco-mentimun.svg",
    ],
    story: "/images/20250903_111800.jpg",
    storyAlt: "Dokumentasi usaha Pempek Kevin",
    ctaLeft: "/images/hero/cta-kiri.svg",
    ctaRight: "/images/hero/cta-kanan.svg",
  },
} as const;

export type Site = typeof site;
