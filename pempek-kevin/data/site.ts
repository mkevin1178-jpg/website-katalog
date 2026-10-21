const FOUNDED_YEAR = 2009;

export type OpeningHour = {
  day: string;
  hours: string;
};

export const site = {
  name: "Pempek Kevin",
  tagline: "Cita Rasa Tenggiri, Favorit Sepanjang Hari.",
  description:
    "Pempek Kevin homemade khas Palembang di Bogor sejak 2009. Dibuat dari ikan tenggiri pilihan, pengiriman hingga Australia, Oman, dan Qatar.",
  foundedYear: FOUNDED_YEAR,
  foundedDate: "2009-02-12",
  url: "https://pempek-kevin.vercel.app",

  // Nomor WhatsApp resmi (format internasional tanpa "+", contoh: 628512xxxxxxx).
  // Bisa dioverride lewat env var NEXT_PUBLIC_WA_NUMBER (lihat .env.example).
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "6285122973291",
  /** Bentuk tampilan nomor (untuk ditulis di halaman, bukan untuk tautan). */
  whatsappDisplay: "0851-2297-3291",

  address: {
    street: "Taman Yasmin Sektor 7, Jl. Bambu Apus Raya No. 40",
    city: "Bogor",
    province: "Jawa Barat",
    // Kode pos belum dikonfirmasi owner — dikosongkan agar tidak menampilkan data karangan.
    postalCode: "",
    country: "Indonesia",
  },

  maps: {
    embedUrl:
      "https://www.google.com/maps?q=Taman+Yasmin+Sektor+7%2C+Jl.+Bambu+Apus+Raya+No.+40%2C+Bogor&output=embed",
    shareUrl: "https://maps.app.goo.gl/Fkh7CjWyZTU6n7Mm7",
  },

  // GANTI dengan ID video YouTube profil asli
  youtubeId: "dQw4w9WgXcQ",

  openingHours: [
    { day: "Selasa–Minggu", hours: "13.30–19.30 WIB" },
    { day: "Senin", hours: "Tutup" },
  ] as OpeningHour[],

  social: {
    instagram:
      "https://www.instagram.com/kedaipempekevin_/?srtk=MWM2NXY0cjF0cmp5NA==",
    tiktok: "https://www.tiktok.com/@kedaipempekkevin_?_r=1&_t=ZS-9Ak4eUNY7xE",
    instagramProfile: "https://www.instagram.com/kedaipempekevin_/",
    tiktokProfile: "https://www.tiktok.com/@kedaipempekkevin_/",
  },

  /** Handle yang ditampilkan di footer. */
  socialHandles: {
    instagram: "@kedaipempekevin_",
    tiktok: "@kedaipempekkevin_",
  },

  hero: {
    eyebrow: "Homemade Since 2009",
    titleLines: ["Pempek", "Kevin,", "Asli Ikan", "Tenggiri", "dari Bogor!"],
    description:
      "Dibuat secara homemade denganepenuh hati sejak 2009, Pempek Kevin menghadirkan kelezatan pempek khas Palembang menggunakan ikan tenggiri pilihan. Berawal dari resep keluarga, setiap sajian kami hadir untuk menemani momen hangat bersama orang-orang tersayang.",
  },

  featuredSection: {
    eyebrow: "Produk Unggulan",
    title: "Yang Paling Dicari",
  },

  /** Preview "Tentang Kami" di beranda. */
  story: {
    paragraphs: [
      "Berawal dari kecintaan Bu Tata terhadap kuliner khas Palembang, Pempek Kevin hadir sejak 2009 dengan keinginan sederhana: menghadirkan pempek berkualitas dengan cita rasa autentik bagi keluarga di Bogor.",
      "Dengan resep keluarga dan komitmen menggunakan ikan tenggiri pilihan, kami terus menjaga kelezatan pempek yang telah menjadi bagian dari perjalanan kami selama bertahun-tahun.",
    ],
    ctaLabel: "Lihat Selengkapnya",
  },

  aboutSection: {
    eyebrow: "Tentang Kami",
    title: "Pempek dengan Cita Rasa Autentik",
  },

  /** Preview katalog produk di beranda. */
  categorySectionTitle: "Temukan Pempek Favoritmu!",
  categorySectionDescription: [
    "Mau menikmati pempek sendiri, berbagi bersama keluarga, atau membawa pulang cita rasa khas Palembang? Temukan beragam pilihan menu yang dibuat untuk menemani setiap momen.",
    "Jelajahi pempek signature, paket pempek untuk dinikmati bersama, kuliner khas Palembang, hingga frozen food praktis untuk stok di rumah. Pilih favoritmu dan pesan dengan mudah melalui WhatsApp.",
  ],

  gallerySection: {
    title: "Momen di Balik Kelezatan",
    ctaLabel: "Lihat Galeri",
  },

  cta: {
    titleLines: ["Pesan Sekarang,", "Lebih Mudah!"],
    sentence:
      "Tanya menu, harga, atau langsung pesan lewat WhatsApp — untuk pengiriman luar daerah, silakan hubungi kami terlebih dahulu.",
  },

  /** Teks footer. */
  footer: {
    slogan: "Lemakk niannn oyyy!",
    description:
      "Nikmati gurihnya pempek homemade asli ikan tenggiri dengan cita rasa khas Palembang yang dibuat denganepenuh hati sejak 2009. Dari menu favorit hingga sajian untuk keluarga, Pempek Kevin hadir menemani momen kebersamaan dengan kelezatan yang bikin ingin nambah lagi.",
    tagline: "Pempek homemade khas Palembang · Bogor · Sejak 2009",
  },

  // TODO: ganti dengan foto asli (cut-out transparan WebP/PNG untuk hero/dekorasi/CTA).
  assets: {
    hero: "/images/hero-pempek.webp",
    heroAlt: "Aneka pempek Pempek Kevin di atas piring dengan cuko dan mentimun",
    heroDecorations: [
      "/images/hero/deco-cuka.svg",
      "/images/hero/deco-cabai.svg",
      "/images/hero/deco-mentimun.svg",
    ],
    story: "/images/20250903_111800.webp",
    storyAlt: "Dokumentasi usaha Pempek Kevin",
    ctaLeft: "/images/hero/cta-kiri.svg",
    ctaRight: "/images/hero/cta-kanan.svg",
  },
} as const;

export type Site = typeof site;

/** Alamat ringkas (tanpa negara) untuk footer. */
export const addressShort = [
  site.address.street,
  site.address.city,
  site.address.province,
  site.address.postalCode,
]
  .filter(Boolean)
  .join(", ");

/** Alamat lengkap (dengan negara) untuk halaman lokasi. */
export const addressFull = [
  site.address.street,
  site.address.city,
  site.address.province,
  site.address.postalCode,
  site.address.country,
]
  .filter(Boolean)
  .join(", ");
