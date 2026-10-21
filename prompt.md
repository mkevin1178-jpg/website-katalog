# prompt.md — Log Percakapan & Progress Website Katalog Pempek Kevin

Log keputusan, percakapan dengan AI, dan kemajuan pengerjaan. Diperbarui setiap
ada fase yang dikerjakan. Teman: `WORKFLOW.md` (strategi) dan `DESIGN.md` (landasan UI).

---

## Status Terakhir

> **Sesi 5 — SELESAI (Pembaruan konten sesuai naskah `konten-website-pempek-kevin.md`):**
> seluruh naskah konten (Hero, preview Tentang Kami, preview Produk, 7 blok
> halaman Tentang Kami, katalog, footer, info kontak) sudah diterapkan; data
> bisnis (WA 0851-2297-3291, alamat Taman Yasmin Sektor 7 Bogor, jam operasional,
> Maps, Instagram, TikTok) diperbarui. Identitas visual, layout, route, dan
> struktur section **tidak** diubah. Lint bersih, build 26 route (1 dynamic: `/produk`).
>
> Catatan: Sesi 4 + 5 sudah di-commit (lihat `git log`).

## 1. Instruksi Awal (Prompt 0 — mode Plan)

Senior frontend engineer. Bikin website katalog UMKM "Pempek Kevin".

**Konteks:** UMKM kuliner khas Palembang di Bogor, berdiri 12 Feb 2009, pernah
kirim ke Australia, Oman, Qatar. Masalah: promosi word-of-mouth + WA saja.

**Persona:** Ibu Rina, 35 th, karyawan swasta — butuh foto, harga jelas, pemesanan praktis.

**User journey:** cari info → temukan media → kunjungi web → kenal profil/video →
jelajahi katalog → pilih produk → **pesan via WhatsApp** (konversi utama).

**Tech stack (tidak boleh diganti tanpa izin):** Next.js App Router + TypeScript,
Tailwind CSS, Framer Motion (secukupnya), `next/image`, data di file TS lokal,
deploy Vercel, halaman statis (SSG) dengan `generateStaticParams`.

**Palet:** `#FFAE03` (brand-yellow, teks gelap di atasnya), `#B01F24` (brand-red),
`#9F1C21` (brand-red-dark), `#FFFFFF`. **Font:** Nunito, Quicksand.

**Tugas:** baca WORKFLOW.md + project, jangan tulis kode, kasih rencana bertahap.

## 2. Keputusan yang Disepakati

| Pertanyaan | Jawaban Pengguna |
|---|---|
| Lokasi project | **Buat subfolder dulu** (`pempek-kevin/`) |
| Versi Next.js | **Next 14 + Tailwind v3** |
| shadcn/ui | "Apa saja **asal ringan**" → diputuskan: tidak pakai shadcn, komponen custom |
| Konten asli | Belum tersedia → **pakai dummy/placeholder** dulu |
| Font | **via `next/font/google`** (Nunito + Quicksand) |
| Tambahan | Buat **`DESIGN.md`** (landasan frontend) dan **`prompt.md`** ini (log + progress, diupdate terus) |

## 3. Rencana yang Disepakati (dari Prompt 0)

Urutan kerja per prompt:
1. **Prompt 1 — Fondasi:** token warna Tailwind, `data/site.ts`, `data/products.ts`,
   `lib/whatsapp.ts`, layout global (Navbar/Footer/WhatsAppFloat).
2. **Prompt 2 — Landing:** Hero → Keunggulan → Produk Unggulan → Cerita → CTA WA.
3. **Prompt 3 — Katalog & Detail:** `/produk` + filter kategori + harga jelas di kartu;
   `/produk/[slug]` dengan `generateStaticParams`, `generateMetadata`, `notFound`.
4. **Prompt 4 — Tentang, Galeri, Lokasi:** 3 halaman sisa.
5. **Prompt 5 — SEO & Polish:** metadata, OG, favicon, sitemap, robots, JSON-LD,
   audit responsif + aksesibilitas.
6. **Prompt 6 — QA & Deploy:** lint/build, user journey, cek link WA, daftar
   placeholder, panduan Vercel.

File yang direncanakan: struktur folder mengikuti `WORKFLOW.md` §6.

## 4. Progress (Log Pengerjaan)

### Sesi 1 — 11 Okt 2026 (hari ini)

**Fase 0 — Setup project**
- `npx create-next-app@14 pempek-kevin` (TypeScript, Tailwind v3, App Router, ESLint)
  → Next **14.2.35**, Tailwind **3.4.1**, React 18. Node v24.
- Install `framer-motion`.
- Token warna brand di `tailwind.config.ts` + font Nunito/Quicksand via `next/font/google`.
- Hapus font bawaan Geist, rapi-kan `globals.css` (fokus ring, `prefers-reduced-motion`).
- `next.config.mjs`: izinkan SVG untuk placeholder (`dangerouslyAllowSVG`).
- Asset placeholder: `logo.svg`, `hero.svg`, `products/placeholder.svg`, `gallery/placeholder.svg`.

**Fase 1 — Fondasi** ✅
- `data/site.ts` — nama, tagline, tahun 2009, nomor/pesan placeholder
- `data/products.ts` — 10 produk dummy (Type Product, 4 kategori, featured)
- `lib/whatsapp.ts` — `buildWhatsAppLink(phone, productName?)`
- `lib/format.ts` — `formatRupiah()`
- UI: `Container`, `Button`, `SectionHeading`, `Badge`, `PageHeader`, `FadeIn`
- Layout: `Navbar` (hamburger mobile), `Footer`, `WhatsAppFloat` (mobile sticky)

**Fase 2 — Landing page** ✅
- `components/home/`: `Hero` (CTA WA + Lihat Katalog), `Advantages` (4 keunggulan),
  `FeaturedProducts` (6 unggulan), `StorySection` (+link `/tentang`), `CtaBanner`.

**Fase 3 — Katalog & Detail** ✅
- `/produk` — `CategoryFilter` (client) + `ProductGrid` + `ProductCard` (harga jelas).
- `/produk/[slug]` — `generateStaticParams` (10 slug), `generateMetadata` (OG), `notFound()`,
  breadcrumb, produk serupa, JSON-LD Product, tombol WA dengan nama produk.

**Fase 4 — Tentang, Galeri, Lokasi** ✅
- `/tentang` — profil, timeline (2009→sekarang), nilai, pencapaian Australia/Oman/Qatar,
  `VideoEmbed` YouTube lazy.
- `/galeri` — `GalleryGrid` client + lightbox (Esc / panah kiri-kanan), 8 item dummy.
- `/lokasi` — `MapEmbed` (lazy), `OpeningHours`, tombol WA + buka Google Maps.

**Fase 5 — SEO & Polish** ✅
- `app/sitemap.ts`, `app/robots.ts`, JSON-LD `Restaurant` di layout, JSON-LD produk.
- Metadata per halaman (title, description, canonical, OG). Ikon = logo.svg.
- `app/not-found.tsx` (404 khusus).

**Verifikasi Fase 1–5**
- `npm run lint` → ✅ no warnings/errors
- `npm run build` → ✅ 21 halaman ter-prerender (○ static / ● SSG)

### Sesi 2 — 20 Okt 2026 (Redesign Layout v2)

Sumber kebenaran: `DESIGN (2).md` (v2) + `WORKFLOW (1).md` (v2). Palet, font,
route, slug, dan struktur data tidak berubah.

| Commit | Isi |
|---|---|
| `5a0eaa4` | Sinkronisasi data produk/galeri/metadata (pra-sesi) |
| `daded1e` | Langkah 1 — `brand-cream #FFF6E3`, `fontImpact`, `.heading-impact`, Nunito 900 |
| `abc3170` | Langkah 2 — `Button` pill (6 varian, 3 ukuran), `SectionTitle`, `BlobPattern`; `/tentang` dimigrasi |
| `7afdbcc` | Langkah 3 — Navbar sticky link-tengah + search, Footer pill sosial terpisah, float ikon gelap |
| `f8a7b82` | Langkah 4 — Landing v2: `Hero` raksasa, `CategoryTabs` (link+filter), `FeaturedBento`, `StoryBento`, `BenefitsPanel`, `CtaBanner`; komponen lama dihapus; 9 SVG placeholder `public/images/hero/` |
| `1f33c10` | Langkah 5 — `ProductCard` krem + pill, `ProductGrid` 2/3 kolom, detail impact + bingkai 3xl |
| `25df2ce` | Langkah 6 — `PageHeader` impact + krem; tentang/galeri/lokasi konsisten v2 |

**Keputusan yang dicatat**
- Keunggulan "Pelanggan dari Berbagai Daerah" didrop (DESIGN §8: panel 3 baris).
- Tile landing pakai `<Link>` (tanpa `aria-pressed`); `aria-pressed` hanya di mode filter.
- `?kategori=` dibaca via `useSearchParams` dalam `<Suspense` sehingga `/produk` tetap static.
- Satu-satunya `next/image priority` di landing = foto hero (logo Navbar tanpa priority).

**Verifikasi Langkah 1–6**
- `npm run lint` → ✅ no warnings/errors
- `npm run build` → ✅ 26 halaman (○ static / ● SSG), `/produk` tetap static

### Sesi 3 — 20 Okt 2026 (Redesign v3)

Sumber kebenaran: **`DESIGN (3).md`** (v3 — menang atas v1/v2). Foto asli pertama
terpasang: `public/images/20250903_111800.jpg` → `assets.story`.

| Commit | Isi |
|---|---|
| `8538e00` | Redesign v3 penuh |

**Perubahan besar v3 vs v2**
- Homepage order: Hero → FeaturedBento ("Yang Paling Dicari") → CategoryShowcase
  ("Pilih Kategori Favoritmu") → CtaBanner ("Pesan Sekarang, Lebih Mudah!") →
  AboutPreview → GalleryPreview ("Momen di Balik Kelezatan").
- `StoryBento` & `BenefitsPanel` dihapus (tidak ada di struktur v3).
- Hero: layout 2 kolom desktop (teks kiri, foto kanan dalam bingkai rounded-3xl);
  ornamen hanya desktop.
- Navbar/Footer: 4 link (Beranda, Produk, Tentang Kami, Kontak→/lokasi).
- Search berfungsi: IconButton + form di navbar → `/produk?q=...`;
  `SearchInput` + `ProductCatalog` (search + filter kategori gabungan,
  `aria-live` status hasil) di /produk.
- Komponen baru: `SearchInput`, `IconButton`, `CategoryShowcase`,
  `AboutPreview`, `GalleryPreview`, `ProductCatalog`.
- `CategoryTabs` direfactor jadi presentational (active + onSelect).
- ProductCard: label "Lihat Detail", foto `object-cover`.

### Sesi 4 — 21 Okt 2026 (Optimasi Performa, SEO, Responsif)

Tanpa mengubah identitas visual (warna, font, layout besar). Palet, font, route,
slug, dan struktur data tetap sama.

| Task | Isi |
|---|---|
| 1. Gambar → WebP | `sharp` (devDep) + `scripts/convert-webp.mjs` (`npm run convert:images`, flag `--delete-originals`) |
| 2. `next/image` | `formats: avif+webp`, `minimumCacheTTL` 30 hari, `sizes` akurat, `priority` hero + 4 produk teratas |
| 3. `/produk` server-rendered | Halaman akses `searchParams` → route `ƒ` (Dynamic), produk + filter ada di HTML awal |
| 4. Responsif mobile | Grid 2/3/4 kolom, tombol kartu stack <420px, tap target 44px, nol horizontal scroll |
| 5. Metadata & detail | `lib/metadata.ts` (`pageMetadata`), canonical + OG + Twitter per halaman, WA terpusat, label "Kontak" → "Lokasi" |

**Penghematan gambar**
| File | Sebelum | Sesudah |
|---|---|---|
| `20250903_111800.jpg` → `.webp` | 2602.0 KB | 159.5 KB (-94%) |
| `hero-pempek.png` → `.webp` | 2142.1 KB | 74.5 KB (-97%) |
| `logo-pempek-kevin.png` → `.webp` | 160.7 KB | 28.9 KB (-82%) |
| **Total raster** | **4904.8 KB** | **262.9 KB (-95%)** |

Total `public/images`: 4912.8 KB → 270.9 KB. File `.jpg`/`.png` asli **dihapus**
(path di `data/site.ts`, Navbar, Footer, layout sudah ke `.webp`).

**Temuan penting — `/produk` sebelumnya hanya skeleton**
`ProductCatalog` (client) memanggil `useSearchParams()` → memicu *static bailout*:
`.next/server/app/produk.html` hanya berisi fallback `animate-pulse`, nama produk
hanya ada di payload RSC (`<script>`). Fix: `app/produk/page.tsx` membaca
`searchParams` → route jadi `ƒ /produk`. Terbukti: `/produk` 15 produk,
`?kategori=paket` 3 produk, `?q=kapal` 1 produk — semuanya di DOM HTML.
Konsekuensi: `/produk` tidak lagi SSG (halaman lain tetap static/SSG).

**Temuan lain**
- Page-level `openGraph` **menggantikan** openGraph parent sepenuhnya → tiap
  halaman wajib openGraph lengkap; daher dibuat `lib/metadata.ts`.
- Bug: `Navbar` pernah memanggil `buildWhatsAppLink(site.whatsapp)` → pesan WA
  berisi nomor telepon. Sudah diperbaiki ke `buildWhatsAppLink()`.
- `og-image.png` **tidak boleh dikonversi** ke WebP (dikecualikan dari script) dan
  memang belum ada → tetap 404 sampai owner menyediakan.

**Verifikasi**
- `npm run lint` → ✅ no warnings/errors
- `npm run build` → ✅ 26 route (`○` static, `●` SSG, `ƒ /produk`)
- Uji responsif otomatis (Chrome headless + CDP, 6 halaman × 360/640/768/1024/1280):
  `scrollWidth == viewport` (nol horizontal scroll), nol teks terpotong, tap
  target ≥44px untuk tombol/ikon (sisa: link teks judul produk — inline, exempt).
- `/produk` HTML (tanpa `<script>`) memuat 15 nama produk; AVIF 19 KB vs JPEG 31 KB.

### Sesi 5 — 21 Okt 2026 (Pembaruan Konten dari Naskah)

Sumber kebenaran: **`konten-website-pempek-kevin.md`** (naskah konten hasil revisi).
Sifat: **content update saja** — palet, font, layout, grid, komponen, aset, route,
dan jumlah/urutan section tidak diubah. Tidak ada dependensi baru.

| Halaman / Section | Konten dari naskah → penerapan |
|---|---|
| `/` Hero | Eyebrow `Homemade Since 2009`; judul `Pempek Kevin, Asli Ikan Tenggiri dari Bogor!` (dipecah 5 baris: `Pempek` / `Kevin,` / `Asli Ikan` / `Tenggiri` / `dari Bogor!`); deskripsi homemade ikan tenggiri; CTA `Lihat Menu` → `/produk` + `Cerita Kami` → `/tentang` |
| `/` Preview Tentang Kami | Judul `Pempek dengan Cita Rasa Autentik`; 2 paragraf narasi (keduanya kini dirender); tombol `Lihat Selengkapnya` → `/tentang` |
| `/` Preview Produk | Judul `Temukan Pempek Favoritmu!`; 2 paragraf narasi; 4 kategori tetap; tombol baru `Lihat Semua Menu` → `/produk` |
| `/tentang` | 7 blok naskah dipetakan ke section yang sudah ada: §2.1 → PageHeader, §2.2 → intro 2 kolom, §2.6 → kolom Perjalanan, §2.3 → kolom Nilai Kami, §2.4 → Pencapaian (Australia/Oman/Qatar tetap "Tujuan pengiriman produk."), §2.5 + §2.7 → section Video Profil (tanpa menambah section), tombol `Jelajahi Menu Kami` → `/produk` |
| `/produk` | Judul `Temukan Pempek Favoritmu!` + 2 paragraf narasi §3.1; filter `Semua` → `Semua Menu` |
| Footer | Judul `Cita Rasa Tenggiri, Favorit Sepanjang Hari.`; slogan `Lemakk niannn oyyy!`; deskripsi; tagline `Pempek homemade khas Palembang · Bogor ·_since 2009`; link WA menampilkan nomor; tombol sosial memakai handle |
| `/lokasi` + JSON-LD | Alamat `Taman Yasmin Sektor 7, Jl. Bambu Apus Raya No. 40, Bogor`; jam `Selasa–Minggu 13.30–19.30 WIB` / `Senin Tutup`; Maps `maps.app.goo.gl/Fkh7CjWyZTU6n7Mm7`; nomor WA ditambahkan; JSON-LD tambah `openingHoursSpecification` + `sameAs`, `postalCode` dihapus bila kosong |

**Data bisnis yang terisi** (`data/site.ts`): WA `6285122973291` (tampil `0851-2297-3291`),
alamat, jam operasional, Maps embed + share, Instagram `@kedaipempekevin_`,
TikTok `@kedaipempekkevin_`. `.env.example` diisi nomor resmi.

**Keputusan & penyesuaian**
- **Headline hero jadi 5 baris** (semula 2 baris visual). Lebar kolom hero 520px pada
  1280px → tiap baris dipecah manual agar tidak wrap di desktop; font **tidak**
  diubah karena itu bagian design system. Pada 768–1023px (hero 2 kolom, kolom
  hanya ~336px) headline membungkus menjadi 7 baris visual → section hero lebih
  tinggi, tanpa horizontal scroll.
- **CTA WhatsApp di hero diganti** `Lihat Menu` + `Cerita Kami` sesuai naskah.
  CTA WA tetap ada di navbar, footer, tombol mengambang, dan kartu produk.
- **Tombol `Lihat Semua Menu` ditambahkan** di preview produk (pola sama dengan
  tombol `Lihat Galeri`) karena naskah menyebutkannya.
- **Tidak menambah section baru** untuk §2.5 & §2.7 → keduanya masuk ke section
  Video Profil (section terakhir).
- **Australia/Oman/Qatar** tetap ditulis sebagai "Tujuan pengiriman produk."
  (tidak ada klaim cabang/toko di luar negeri), sesuai catatan editorial.
- **Kode pos** tidak ada di naskah → `postalCode` dikosongkan dan alamat disusun
  ulang (`addressShort` / `addressFull`) agar tidak menampilkan data karangan.

**Verifikasi**
- `npm run lint` → ✅ no warnings/errors; `npx tsc --noEmit` → ✅ bersih
- `npm run build` → ✅ 26 route (`○` static, `●` SSG, `ƒ /produk`)
- Cek naskah otomatis (fetch HTML 4 halaman): semua string naskah ada, teks lama
  hilang, filter tetap jalan (15 / 3 / 2 / 4 / 6 / 1 produk).
- Uji responsif (Chrome headless + CDP, 5 halaman × 360/768/1280):
  `scrollWidth == viewport` (nol horizontal scroll), nol teks terpotong.
- Uji tap target: nol regresi (sisa: link teks judul produk — inline, exempt).

## 5. QA & Catatan (untuk sesi berikutnya)

- [ ] `npm run dev`, cek manual di browser (360/768/1280px)
- [ ] Tes 7 langkah user journey (`WORKFLOW.md` §10)
- [ ] Tes link WhatsApp + pesan prefilled di HP asli (set `NEXT_PUBLIC_WA_NUMBER` dulu)
- [ ] Lighthouse mobile (target Performance & SEO ≥ 90)
- [ ] Deploy ke Vercel

## 6. Daftar Placeholder yang Harus Diisi Owner

1. **Nomor WhatsApp** — ✅ terisi di sesi 5 (`6285122973291`, tampil `0851-2297-3291`).
   Tetap bisa dioverride lewat env `NEXT_PUBLIC_WA_NUMBER` (`.env.example` sudah diisi).
2. **Alamat** — ✅ terisi di sesi 5 (`Taman Yasmin Sektor 7, Jl. Bambu Apus Raya No. 40,
   Bogor, Jawa Barat`). **Kode pos masih kosong** — naskah tidak menyebutnya, jangan
   ditebak; isi `data/site.ts` → `address.postalCode` bila sudah dikonfirmasi.
3. **Google Maps** — ✅ terisi di sesi 5 (`maps.shareUrl` = `maps.app.goo.gl/Fkh7CjWyZTU6n7Mm7`;
   `maps.embedUrl` = query alamat asli). Ganti embed ke koordinat/titik asli bila tersedia.
4. **Video YouTube** — `data/site.ts` → `youtubeId` (ganti `dQw4w9WgXcQ`)
5. **URL asli** — `data/site.ts` → `url` (ganti dari vercel default sebelum deploy)
6. **Foto produk** — `public/images/products/` (ganti `placeholder.svg`, foto 1:1)
7. **Galeri** — `public/images/gallery/` (8 item, `data/gallery.ts`)
8. **Harga & deskripsi produk** — `data/products.ts` (harga dummy saat ini).
   Sesi 5 **tidak** mengubah katalog (naskah §3.2: nama/deskripsi/harga mengikuti
   katalog yang sudah tersedia) — nama, harga, dan kategori produk tetap apa adanya.
9. **`og-image.png`** — `public/images/` (untuk Open Graph, 1200×630) — **wajib ada
   sebelum deploy** (file PNG, jangan dikonversi WebP)
10. **Sosial media** — ✅ terisi di sesi 5 (Instagram `@kedaipempekevin_`,
    TikTok `@kedaipempekkevin_`; link + `sameAs` JSON-LD).
11. **Foto hero/dekorasi/CTA** — `public/images/hero/` (9 SVG placeholder, path di `data/site.ts` → `assets.*`; cut-out transparan WebP/PNG)
12. **Foto produk asli** — jalankan `npm run convert:images` setelah mengunggah
    JPG/PNG baru, lalu update path di `data/products.ts` & `data/gallery.ts`
13. **`npm audit`** — 12 vulnerability transitive (2 moderate, 9 high, 1 critical);
    tinjau terpisah, belum ditangani di sesi 4

## 7. Aturan Main ke Depan

- Ikuti TECH STACK di prompt awal + `DESIGN.md`. Kalau AI melenceng (ganti stack,
  nambah library asing), ingatkan: "Ikuti TECH STACK di prompt awal dan AGENTS.md".
- Satu prompt = satu fase. Commit ke git tiap fase selesai biar gampang rollback.
- Ganti semua placeholder di atas dengan konten asli **sebelum deploy**.
- `prompt.md` diupdate tiap fase selesai (status terakhir + log + daftar placeholder).
