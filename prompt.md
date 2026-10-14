# prompt.md — Log Percakapan & Progress Website Katalog Pempek Kevin

Log keputusan, percakapan dengan AI, dan kemajuan pengerjaan. Diperbarui setiap
ada fase yang dikerjakan. Teman: `WORKFLOW.md` (strategi) dan `DESIGN.md` (landasan UI).

---

## Status Terakhir

> **Sesi 1 — SELESAI (Fase 0 + 1 + 2 + 3 + 4 + 5):** project sukses di-scaffold,
> seluruh halaman jadi, lint & build bersih. Tinggal QA manual (Fase 6) di sesi berikutnya.

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

## 5. QA & Catatan (untuk sesi berikutnya)

- [ ] `npm run dev`, cek manual di browser (360/768/1280px)
- [ ] Tes 7 langkah user journey (`WORKFLOW.md` §10)
- [ ] Tes link WhatsApp + pesan prefilled di HP asli
- [ ] Lighthouse mobile (target Performance & SEO ≥ 90)
- [ ] Deploy ke Vercel

## 6. Daftar Placeholder yang Harus Diisi Owner

1. **Nomor WhatsApp** — `data/site.ts` → `whatsapp` (ganti `62XXXXXXXXXX`)
2. **Alamat** — `data/site.ts` → `address.*`
3. **Google Maps** — `data/site.ts` → `maps.embedUrl` & `maps.shareUrl`
4. **Video YouTube** — `data/site.ts` → `youtubeId` (ganti `dQw4w9WgXcQ`)
5. **URL asli** — `data/site.ts` → `url` (ganti dari vercel default sebelum deploy)
6. **Foto produk** — `public/images/products/` (ganti `placeholder.svg`, foto 1:1)
7. **Galeri** — `public/images/gallery/` (8 item, `data/gallery.ts`)
8. **Harga & deskripsi produk** — `data/products.ts` (harga dummy saat ini)
9. **`og-image.png`** — `public/images/` (untuk Open Graph, 1200×630)
10. **Sosial media** — `data/site.ts` → `social.*`

## 7. Aturan Main ke Depan

- Ikuti TECH STACK di prompt awal + `DESIGN.md`. Kalau AI melenceng (ganti stack,
  nambah library asing), ingatkan: "Ikuti TECH STACK di prompt awal dan AGENTS.md".
- Satu prompt = satu fase. Commit ke git tiap fase selesai biar gampang rollback.
- Ganti semua placeholder di atas dengan konten asli **sebelum deploy**.