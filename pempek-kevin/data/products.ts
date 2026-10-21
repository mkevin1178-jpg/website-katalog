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

const PLACEHOLDER = "/images/products/placeholder.svg";
// TODO: ganti dengan foto/gambar kategori asli
const CATEGORY_PLACEHOLDER = PLACEHOLDER;
/** Gambar tile "Semua" di CategoryTabs. */
export const allCategoryImage = PLACEHOLDER;

export const categories: {
  value: ProductCategory;
  label: string;
  image: string;
}[] = [
  { value: "signature", label: "Pempek Signature", image: CATEGORY_PLACEHOLDER },
  { value: "paket", label: "Paket Pempek", image: CATEGORY_PLACEHOLDER },
  {
    value: "khas-palembang",
    label: "Kuliner Khas Palembang",
    image: CATEGORY_PLACEHOLDER,
  },
  { value: "frozen", label: "Frozen Food", image: CATEGORY_PLACEHOLDER },
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
    image: PLACEHOLDER,
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
    image: PLACEHOLDER,
  },
  {
    slug: "selam-mini",
    name: "Selam Mini",
    originalName: "Selam Kecil",
    category: "signature",
    price: 5000,
    description:
      "Pempek kapal selam ukuran kecil, dengan nama asli menu Selam Kecil.",
    image: PLACEHOLDER,
  },
  {
    slug: "lenjer",
    name: "Lenjer",
    originalName: "Lenjer",
    category: "signature",
    price: 5000,
    description: "Pempek lenjer klasik berbentuk panjang, nama asli Lenjer.",
    image: PLACEHOLDER,
  },
  {
    slug: "adaan",
    name: "Adaan",
    originalName: "Adaan",
    category: "signature",
    price: 5000,
    description: "Pempek bulat khas Palembang, nama asli Adaan.",
    image: PLACEHOLDER,
  },
  {
    slug: "kulit-crispy",
    name: "Kulit Crispy",
    originalName: "Kulit",
    category: "signature",
    price: 5000,
    description: "Pempek dari kulit ikan, dengan nama asli menu Kulit.",
    image: PLACEHOLDER,
  },

  // 2. Kategori Paket Pempek
  {
    slug: "paket-keluarga-20-pcs",
    name: "Paket Keluarga — 20 Pcs",
    category: "paket",
    price: 100000,
    description:
      "Paket pempek campur isi 20, bisa request varian. Cocok untuk dinikmati bersama keluarga atau rame-rame.",
    image: PLACEHOLDER,
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
    image: PLACEHOLDER,
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
    image: PLACEHOLDER,
    featured: true,
  },

  // 3. Kategori Kuliner Khas Palembang
  {
    slug: "lenggang",
    name: "Lenggang",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang berbahan pempek.",
    image: PLACEHOLDER,
    featured: true,
  },
  {
    slug: "rujak-mie",
    name: "Rujak Mie",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang.",
    image: PLACEHOLDER,
  },
  {
    slug: "tekwan",
    name: "Tekwan",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang berupa sajian berkuah.",
    image: PLACEHOLDER,
    featured: true,
  },
  {
    slug: "model",
    name: "Model",
    category: "khas-palembang",
    price: 15000,
    description: "Hidangan khas Palembang.",
    image: PLACEHOLDER,
    featured: true,
  },

  // 4. Kategori Frozen Food
  {
    slug: "paket-frozen-serbu",
    name: "Paket Frozen Serbu",
    category: "frozen",
    price: 50000,
    description: "Pempek campur beku isi 10, bisa request varian.",
    image: PLACEHOLDER,
  },
  {
    slug: "paket-frozen-mini",
    name: "Paket Frozen Mini",
    category: "frozen",
    price: 25000,
    description: "Pempek campur beku isi 5, bisa request varian.",
    image: PLACEHOLDER,
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
