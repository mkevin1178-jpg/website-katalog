# WORKFLOW — Website Katalog Pempek Kevin

Dokumen alur kerja dari nol sampai deploy. Acuan: PDF *Analisis Kebutuhan Sistem Website Katalog Pempek Kevin*.

---

## 1. Ringkasan Proyek

| Item | Isi |
|---|---|
| Nama | Website Katalog Pempek Kevin |
| Jenis | Katalog digital UMKM + profil usaha |
| Tentang usaha | UMKM kuliner khas Palembang, Bogor, berdiri 12 Feb 2009, pernah kirim ke Australia, Oman, Qatar |
| Masalah | Promosi masih word-of-mouth + WhatsApp, belum ada katalog digital, foto produk terbatas |
| Tujuan | Memperkenalkan produk, identitas, dan keunggulan secara digital + mempermudah pemesanan |
| Persona | Ibu Rina, 35 th, karyawan swasta, beli makanan untuk keluarga, butuh harga dan foto jelas |
| Konversi utama | **Order via WhatsApp** |

## 2. Kebutuhan Sistem

**Fungsional**
- Profil dan sejarah UMKM
- Katalog produk: detail, foto, harga, produk unggulan
- Lokasi usaha (Google Maps), kontak WhatsApp, video profil
- Galeri

**Non-fungsional**
- Responsif di mobile (mobile-first)
- Mudah dipakai, menarik, profesional
- Cepat, navigasi sederhana

## 3. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animasi | Framer Motion (secukupnya) |
| Komponen UI | shadcn/ui (opsional) |
| Data produk | File TypeScript/JSON lokal (`/data/products.ts`) |
| Gambar | `next/image` |
| Video | YouTube embed, lazy-load |
| Lokasi | Google Maps embed |
| Pemesanan | Link `wa.me` dengan pesan prefilled |
| Deploy | Vercel |
| CMS (nanti, opsional) | Sanity / Supabase |

## 4. Palet Warna

| Token | Hex | Pemakaian |
|---|---|---|
| `brand-yellow` | `#FFAE03` | Aksen, badge, highlight. Pakai **teks gelap** di atasnya |
| `brand-red` | `#B01F24` | Warna utama: tombol, heading penting |
| `brand-red-dark` | `#9F1C21` | Hover/active, footer |
| `white` | `#FFFFFF` | Background bersih, teks di atas merah |

Catatan kontras: teks putih di atas `#FFAE03` kurang terbaca. Teks putih di atas merah aman.

## 5. Sitemap dan Halaman

```
/                  Landing (hero, produk unggulan, cerita singkat, CTA WA)
/tentang           Profil, sejarah, video profil
/produk            Katalog (filter kategori, kartu produk + harga)
/produk/[slug]     Detail produk (foto, deskripsi, harga, tombol pesan WA)
/galeri            Galeri foto + dokumentasi proses produksi
/lokasi            Google Maps + jam operasional + kontak
```

Komponen global: Navbar, Footer, tombol WhatsApp sticky (mobile).

## 6. Struktur Folder

```
pempek-kevin/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ tentang/page.tsx
│  ├─ produk/page.tsx
│  ├─ produk/[slug]/page.tsx
│  ├─ galeri/page.tsx
│  └─ lokasi/page.tsx
├─ components/
│  ├─ layout/ (Navbar, Footer, WhatsAppFloat)
│  ├─ home/ (Hero, FeaturedProducts, StorySection)
│  ├─ produk/ (ProductCard, ProductGrid, CategoryFilter)
│  └─ ui/
├─ data/
│  ├─ products.ts
│  └─ site.ts          # nama usaha, no WA, alamat, link maps, link video
├─ lib/
│  └─ whatsapp.ts      # helper bikin link wa.me
├─ public/
│  └─ images/
├─ AGENTS.md
└─ WORKFLOW.md
```

## 7. Model Data Produk

```ts
export type Product = {
  slug: string;
  name: string;
  category: "pempek" | "makanan-khas" | "paket" | "pelengkap";
  price: number;          // dalam Rupiah
  description: string;
  image: string;          // path di /public/images
  featured?: boolean;
};
```

## 8. Link Pemesanan WhatsApp

```ts
// lib/whatsapp.ts
export function buildWhatsAppLink(phone: string, productName?: string) {
  const text = productName
    ? `Halo Pempek Kevin, saya mau pesan ${productName}.`
    : `Halo Pempek Kevin, saya mau tanya menu dan harga.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
```

Nomor pakai format internasional tanpa `+` (contoh: `62812xxxxxxx`).

## 9. Langkah Kerja

### Fase 0 — Persiapan
1. Install Node.js LTS dan Git.
2. Siapkan akun GitHub dan Vercel.
3. Kumpulkan **konten asli** dari owner: daftar produk + harga, foto produk, nomor WA, alamat + link Google Maps, link video profil, teks sejarah.
4. Install OpenCode (lihat `OPENCODE_PROMPT.md`).

### Fase 1 — Setup Project
1. Jalankan `npx create-next-app@latest pempek-kevin` (pilih TypeScript, Tailwind, App Router, ESLint).
2. Masuk folder: `cd pempek-kevin`.
3. Init git dan push ke GitHub.
4. Jalankan `opencode`, lalu `/init` untuk bikin `AGENTS.md`.
5. Daftarkan token warna ke Tailwind (lihat bagian 4).

### Fase 2 — Fondasi
1. Bikin `data/site.ts` dan `data/products.ts` (isi data dummy dulu kalau konten asli belum ada).
2. Bikin `lib/whatsapp.ts`.
3. Bikin layout global: Navbar, Footer, WhatsAppFloat.

### Fase 3 — Halaman
1. Landing page: hero, produk unggulan, cerita singkat, CTA WA.
2. Halaman katalog + filter kategori.
3. Halaman detail produk (`generateStaticParams` supaya SSG).
4. Halaman tentang (sejarah + video profil).
5. Halaman galeri dan lokasi.

### Fase 4 — Polish
1. Animasi halus (Framer Motion), jangan berlebihan.
2. Cek responsif di lebar 360px, 768px, 1280px.
3. Optimasi gambar (`next/image`, ukuran + `alt` jelas).
4. Metadata SEO per halaman (title, description, Open Graph), `sitemap.xml`, `robots.txt`.
5. Cek kontras warna dan aksesibilitas dasar.

### Fase 5 — QA
1. `npm run lint` dan `npm run build` harus lolos tanpa error.
2. Tes user journey penuh (lihat bagian 10).
3. Tes semua link WA di HP asli.
4. Lighthouse mobile: target Performance dan SEO di atas 90.

### Fase 6 — Deploy
1. Push ke GitHub.
2. Import repo di Vercel, deploy.
3. Pasang domain (opsional).
4. Tes ulang di HP setelah live.

## 10. Checklist User Journey (QA)

- [ ] 1. Mencari: halaman muncul rapi di hasil pencarian (metadata benar)
- [ ] 2. Menemukan: tampilan Open Graph bagus saat link dibagikan
- [ ] 3. Mengunjungi: landing page kebuka cepat di HP
- [ ] 4. Mengenal: profil, sejarah, dan video profil mudah ditemukan
- [ ] 5. Menjelajahi: katalog bisa difilter, harga terlihat di kartu
- [ ] 6. Memilih: detail produk lengkap
- [ ] 7. Memesan: tombol WA terisi pesan produk yang benar

## 11. Definition of Done

- Semua halaman di sitemap jadi dan responsif
- Harga tampil di kartu produk dan detail
- Tombol WA berfungsi di semua tempat
- `npm run build` sukses, tidak ada error lint
- Palet warna konsisten
- Sudah live di Vercel

## 12. Pengembangan Lanjutan (opsional)

- CMS (Sanity/Supabase) supaya owner bisa edit produk sendiri
- Pencarian produk
- Testimoni pelanggan
- Analytics (Vercel Analytics / GA4)
