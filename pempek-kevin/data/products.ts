export type ProductCategory =
  | "signature"
  | "paket"
  | "khas-palembang"
  | "frozen";

export type Product = {
  slug: string;
  name: string;
  /** Nama asli menu sesuai daftar menu. */
  originalName?: string;
  /** Alternatif nama lain yang dipakai untuk menu yang sama. */
  aliases?: string[];
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  /** Warna kartu di FeaturedBento. Default: bergantian merah/kuning. */
  tone?: "red" | "yellow";
};

/** Gambar tile "Semua" di CategoryTabs. */
export const allCategoryImage = "/images/semua-menu.webp";

export const categories: {
  value: ProductCategory;
  label: string;
  image: string;
}[] = [
  {
    value: "signature",
    label: "Pempek Signature",
    image: "/images/Pempek-Signature.webp",
  },
  { value: "paket", label: "Paket Pempek", image: "/images/Paket-pempek.webp" },
  {
    value: "khas-palembang",
    label: "Kuliner Khas Palembang",
    image: "/images/kuliner-khas-palembang.webp",
  },
  { value: "frozen", label: "Frozen Food", image: "/images/frozen-food.webp" },
];

export function categoryLabel(value: ProductCategory): string {
  return categories.find((c) => c.value === value)?.label ?? value;
}

export const products: Product[] = [
  // 1. Kategori Pempek Signature
  {
    slug: "kapal-selam-jumbo",
    name: "Kapal Selam Jumbo",
    originalName: "Kapal Selam",
    category: "signature",
    price: 20000,
    description: "Pempek kapal selam ukuran jumbo.",
    image: "/images/Kapal-selam-jumbo.webp",
    featured: true,
  },
  {
    slug: "lenjer-jumbo",
    name: "Lenjer Jumbo",
    originalName: "Lenjer Besar",
    category: "signature",
    price: 20000,
    description:
      "Pempek lenjer ukuran besar, dengan nama asli menu Lenjer Besar.",
    image: "/images/Lenjer-Jumbo.webp",
  },
  {
    slug: "selam-mini",
    name: "Selam Mini",
    originalName: "Selam Kecil",
    category: "signature",
    price: 5000,
    description:
      "Pempek kapal selam ukuran kecil, dengan nama asli menu Selam Kecil.",
    image: "/images/selam-mini.webp",
  },
  {
    slug: "lenjer",
    name: "Lenjer",
    originalName: "Lenjer",
    category: "signature",
    price: 5000,
    description: "Pempek lenjer klasik berbentuk panjang, nama asli Lenjer.",
    image: "/images/lenjer.webp",
  },
  {
    slug: "adaan",
    name: "Adaan",
    originalName: "Adaan",
    category: "signature",
    price: 5000,
    description: "Pempek bulat khas Palembang, nama asli Adaan.",
    image: "/images/adaan.webp",
  },
  {
    slug: "kulit-crispy",
    name: "Kulit Crispy",
    originalName: "Kulit",
    category: "signature",
    price: 5000,
    description: "Pempek dari kulit ikan, dengan nama asli menu Kulit.",
    image: "/images/kulit-crispy.webp",
  },

  // 2. Kategori Paket Pempek
  {
    slug: "paket-keluarga-20-pcs",
    name: "Paket Keluarga — 20 Pcs",
    category: "paket",
    price: 100000,
    description:
      "Paket pempek campur isi 20, bisa request varian. Cocok untuk dinikmati bersama keluarga atau rame-rame.",
    image: "/images/Paket-keluarga.webp",
    featured: true,
  },
  {
    slug: "paket-serbu-10-pcs",
    name: "Paket Serbu — 10 Pcs",
    aliases: ["Paket Rame-Rame Tenggiri"],
    category: "paket",
    price: 50000,
    description:
      "Paket pempek campur isi 10, bisa request varian. Cocok untuk berbagi bersama teman atau keluarga.",
    image: "/images/Paket-serbu.webp",
    featured: true,
  },
  {
    slug: "paket-mini-5-pcs",
    name: "Paket Mini — 5 Pcs",
    aliases: ["Paket Duo Tenggiri"],
    category: "paket",
    price: 25000,
    description:
      "Paket pempek campur isi 5, bisa request varian. Cocok untuk porsi kecil atau dinikmati berdua.",
    image: "/images/pempek-mini.webp",
    featured: true,
  },

  // 3. Kategori Kuliner Khas Palembang
  {
    slug: "lenggang",
    name: "Lenggang",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang berbahan pempek.",
    image: "/images/Lenggang.webp",
    featured: true,
  },
  {
    slug: "rujak-mie",
    name: "Rujak Mie",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang.",
    image: "/images/RujakMie.webp",
  },
  {
    slug: "tekwan",
    name: "Tekwan",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang berupa sajian berkuah.",
    image: "/images/tekwan.webp",
    featured: true,
  },
  {
    slug: "model",
    name: "Model",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang.",
    image: "/images/Model.webp",
    featured: true,
  },

  // 4. Kategori Frozen Food
  {
    slug: "paket-frozen-serbu",
    name: "Paket Frozen Serbu",
    category: "frozen",
    price: 50000,
    description: "Pempek campur beku isi 10, bisa request varian.",
    image: "/images/paket-frozen-serbu.webp",
  },
  {
    slug: "paket-frozen-mini",
    name: "Paket Frozen Mini",
    category: "frozen",
    price: 25000,
    description: "Pempek campur beku isi 5, bisa request varian.",
    image: "/images/paket-frozen-mini.webp",
  },
];

/** Menu favorit pelanggan sesuai daftar favorit (paket + favorit satuan). */
export const favoriteSlugs: string[] = [
  "paket-keluarga-20-pcs",
  "paket-serbu-10-pcs",
  "paket-mini-5-pcs",
  "kapal-selam-jumbo",
  "tekwan",
  "model",
  "lenggang",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return favoriteSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
}
