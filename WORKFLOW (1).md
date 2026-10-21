# WORKFLOW — Website Katalog Pempek Kevin (v2, Redesign Layout)

Dokumen alur kerja dari nol sampai deploy. Acuan konten: PDF *Analisis Kebutuhan Sistem Website Katalog Pempek Kevin*. Acuan tampilan: `DESIGN.md` (v2) dan gambar `referensi.webp`.

> **Apa yang berubah di v2:** layout, bentuk tombol, dan gaya tipografi diperbarui mengikuti referensi (hero raksasa dengan foto menimpa teks, tab kategori berbentuk tile, bento grid, banner CTA besar). **Palet warna dan font family Pempek Kevin tidak berubah.**

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
- Tampilan berani (hero besar, bento grid) tapi tetap ringan: gambar dikompres, animasi secukupnya

## 3. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | **Next.js 14** (App Router) + TypeScript |
| Styling | Tailwind CSS (v3, `tailwind.config.ts`) |
| Animasi | Framer Motion (secukupnya) |
| Komponen UI | shadcn/ui (opsional) |
| Data produk | File TypeScript/JSON lokal (`/data/products.ts`) |
| Gambar | `next/image` (WebP/AVIF, PNG transparan hanya untuk cut-out) |
| Video | YouTube embed, lazy-load |
| Lokasi | Google Maps embed |
| Pemesanan | Link `wa.me` dengan pesan prefilled |
| Deploy | Vercel |
| CMS (nanti, opsional) | Sanity / Supabase |

**Soal versi Next.js:** layout di referensi (hero dengan foto menimpa teks, bento grid, tab kategori) murni soal CSS dan komponen, jadi **Next.js 14 sudah cukup**. Tidak ada fitur di desain ini yang butuh versi lebih baru. Upgrade ke versi terbaru boleh dilakukan nanti sebagai pekerjaan terpisah, jangan digabung dengan redesign supaya mudah dilacak kalau ada yang rusak.

## 4. Palet Warna (tidak berubah)

| Token | Hex | Pemakaian |
|---|---|---|
| `brand-yellow` | `#FFAE03` | Kartu bento kuning, badge, highlight. Pakai **teks gelap** di atasnya |
| `brand-red` | `#B01F24` | Warna utama: heading hero, kartu bento gelap, tile aktif |
| `brand-red-dark` | `#9F1C21` | Hover/active, footer |
| `brand-cream` | `#FFF6E3` | **Baru, turunan tint dari kuning.** Background hero dan tile kategori (menggantikan abu-abu netral agar rasa hangat seperti referensi) |
| `white` | `#FFFFFF` | Background bersih, teks di atas merah |
| `whatsapp` | `#25D366` | Khusus tombol WhatsApp, **teks/ikon gelap** di atasnya |

Catatan kontras: teks putih di atas `#FFAE03` kurang terbaca, dan teks putih di atas `#25D366` juga kurang kontras (sekitar 2:1). Pakai `text-neutral-900` untuk keduanya. Teks putih di atas merah aman.

## 5. Sitemap dan Halaman

```
/                  Landing (urutan section ada di bawah)
/tentang           Profil, sejarah, video profil
/produk            Katalog (CategoryTabs + grid kartu produk + harga)
/produk/[slug]     Detail produk (foto, deskripsi, harga, tombol pesan WA)
/galeri            Galeri foto + dokumentasi proses produksi
/lokasi            Google Maps + jam operasional + kontak
```

**Urutan section landing (`/`)**

1. `Navbar` — logo kiri, link menu di tengah, ikon search + pill CTA WhatsApp di kanan
2. `Hero` — judul raksasa uppercase 3 baris, foto cut-out menimpa teks, elemen dekoratif melayang
3. `CategoryTabs` — judul section + 5 tile kategori (satu aktif)
4. `FeaturedBento` — 2 kartu besar produk unggulan (gelap + kuning) dengan harga dan pill pesan
5. `StoryBento` — kartu kuning cerita + 2 kartu foto (Sejak 2009, Dikirim ke luar negeri)
6. `BenefitsPanel` — kartu keunggulan di atas foto gelap, daftar baris kecil
7. `CtaBanner` — banner kuning besar "Lapar? Kami siap!" dengan foto di kiri-kanan
8. `Footer`

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
│  ├─ home/ (Hero, FeaturedBento, StoryBento, BenefitsPanel, CtaBanner)
│  ├─ produk/ (ProductCard, ProductGrid, CategoryTabs)
│  └─ ui/ (Button, Container, SectionTitle, Badge, PageHeader, FadeIn, BlobPattern)
├─ data/
│  ├─ products.ts
│  ├─ gallery.ts
│  └─ site.ts          # nama usaha, no WA, alamat, link maps, link video, aset hero
├─ lib/
│  ├─ whatsapp.ts      # helper bikin link wa.me
│  └─ format.ts
├─ public/
│  └─ images/
│     ├─ hero/         # cut-out transparan (WebP/PNG) + elemen dekoratif
│     └─ produk/
├─ AGENTS.md
├─ DESIGN.md
├─ WORKFLOW.md
└─ OPENCODE_PROMPT.md
```

Catatan: `Advantages` diganti nama jadi `BenefitsPanel`, `CategoryFilter` jadi `CategoryTabs`, `FeaturedProducts` jadi `FeaturedBento`. Hapus file lama setelah semua import dipindah.

## 7. Model Data Produk

```ts
export type Product = {
  slug: string;
  name: string;
  category: "pempek" | "makanan-khas" | "paket" | "pelengkap";
  price: number;          // dalam Rupiah
  description: string;
  image: string;          // path di /public/images/produk
  featured?: boolean;     // tampil di FeaturedBento (ambil 2 pertama)
  tone?: "red" | "yellow"; // warna kartu di FeaturedBento, default bergantian
};
```

`tone` bersifat opsional. Kalau kosong, kartu unggulan pertama pakai merah, kedua kuning.

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
4. Siapkan **aset visual khusus desain baru**:
   - 1 foto hero **cut-out** (background transparan, format WebP/PNG): piring pempek, atau owner/pegawai memegang pempek. Lebar sekitar 1200px.
   - 2 sampai 4 elemen dekoratif cut-out kecil (mangkuk cuka, cabai rawit, potongan mentimun, dll). Lebar sekitar 300px.
   - Foto produk unggulan (2 item) sebaiknya piring dari atas dengan background transparan atau bersih supaya bisa "keluar" dari kartu.
   - Foto suasana dapur/proses produksi untuk `StoryBento` dan `BenefitsPanel`.
   - Selama belum ada, pakai placeholder dan tandai di `data/site.ts`.
5. Install OpenCode (lihat `OPENCODE_PROMPT.md`).

### Fase 1 — Setup Project
1. Jalankan `npx create-next-app@14 pempek-kevin` (pilih TypeScript, Tailwind, App Router, ESLint). Kalau project sudah ada, lewati langkah ini.
2. Masuk folder: `cd pempek-kevin`.
3. Init git dan push ke GitHub.
4. Jalankan `opencode`, lalu `/init` untuk bikin `AGENTS.md`.
5. Daftarkan token warna dan font ke Tailwind (lihat `DESIGN.md` bagian 2 dan 3), termasuk `brand-cream` dan `font-impact`.

### Fase 2 — Fondasi
1. Bikin/rapikan `data/site.ts` dan `data/products.ts` (isi data dummy dulu kalau konten asli belum ada).
2. Bikin `lib/whatsapp.ts` dan `lib/format.ts`.
3. Update primitif UI: `Button` (bentuk pill uppercase baru), `SectionTitle`, `BlobPattern`.
4. Bikin layout global baru: Navbar (link tengah + CTA pill), Footer, WhatsAppFloat.

### Fase 3 — Halaman
1. Landing: `Hero` (judul raksasa + foto menimpa teks), `CategoryTabs`, `FeaturedBento`, `StoryBento`, `BenefitsPanel`, `CtaBanner`.
2. Halaman katalog: `CategoryTabs` + `ProductGrid` dengan `ProductCard` gaya baru.
3. Halaman detail produk (`generateStaticParams` supaya SSG).
4. Halaman tentang (sejarah + video profil).
5. Halaman galeri dan lokasi (restyle: kartu `rounded-3xl`, heading uppercase).

### Fase 4 — Polish
1. Animasi halus (Framer Motion): judul hero muncul per baris, dekorasi melayang pelan, gambar kartu zoom saat hover. Jangan berlebihan, hormati `prefers-reduced-motion`.
2. Cek responsif di lebar 360px, 768px, 1280px. Khusus hero: pastikan judul 3 baris tidak terpotong di 360px dan foto tetap menimpa teks.
3. Optimasi gambar (`next/image`, ukuran + `alt` jelas, `priority` hanya untuk foto hero).
4. Metadata SEO per halaman (title, description, Open Graph), `sitemap.xml`, `robots.txt`.
5. Cek kontras warna dan aksesibilitas dasar (teks gelap di atas kuning dan hijau WA).

### Fase 5 — QA
1. `npm run lint` dan `npm run build` harus lolos tanpa error.
2. Tes user journey penuh (lihat bagian 10).
3. Tes semua link WA di HP asli.
4. Lighthouse mobile: target Performance dan SEO di atas 90. Hero berukuran besar rawan menurunkan LCP, jadi cek foto hero dulu kalau skor turun.

### Fase 6 — Deploy
1. Push ke GitHub.
2. Import repo di Vercel, deploy.
3. Pasang domain (opsional).
4. Tes ulang di HP setelah live.

## 10. Checklist User Journey (QA)

- [ ] 1. Mencari: halaman muncul rapi di hasil pencarian (metadata benar)
- [ ] 2. Menemukan: tampilan Open Graph bagus saat link dibagikan
- [ ] 3. Mengunjungi: hero kebuka cepat di HP, judul terbaca penuh
- [ ] 4. Mengenal: `StoryBento`, profil, sejarah, dan video profil mudah ditemukan
- [ ] 5. Menjelajahi: tab kategori memfilter produk, harga terlihat di kartu
- [ ] 6. Memilih: detail produk lengkap
- [ ] 7. Memesan: tombol WA terisi pesan produk yang benar (dari navbar, kartu bento, kartu produk, banner CTA)

## 11. Definition of Done

- Semua halaman di sitemap jadi dan responsif
- Layout mengikuti `DESIGN.md` v2: hero raksasa, tab kategori tile, bento grid, banner CTA
- Harga tampil di kartu produk dan detail
- Tombol WA berfungsi di semua tempat
- `npm run build` sukses, tidak ada error lint
- Palet warna dan font family konsisten (hanya `brand-cream` yang ditambah)
- Sudah live di Vercel

## 12. Pengembangan Lanjutan (opsional)

- CMS (Sanity/Supabase) supaya owner bisa edit produk sendiri
- Pencarian produk (ikon search di Navbar sudah disiapkan)
- Testimoni pelanggan
- Analytics (Vercel Analytics / GA4)
- Upgrade Next.js ke versi terbaru sebagai tugas terpisah
