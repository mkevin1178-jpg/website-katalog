# DESIGN.md — Landasan Frontend Website Katalog Pempek Kevin (v2)

Dokumen ini jadi acuan tunggal untuk tampilan (UI/UX) website. Semua komponen,
warna, tipografi, dan pola layout harus mengikuti dokumen ini. Acuan strategis ada
di `WORKFLOW.md`, identitas visual mentah di `identitas-visual.txt`, dan inspirasi
layout di `referensi.webp`.

> **Aturan emas v2:** dari referensi kita ambil **layout, bentuk tombol, dan gaya
> tipografi** (ukuran, bobot, huruf kapital, kerapatan baris). Kita **tidak**
> mengambil warna dan font family-nya. Warna tetap palet Pempek Kevin, font
> tetap Nunito dan Quicksand.

---

## 1. Prinsip Desain

1. **Mobile-first** — desain dimulai dari 360px, diperbesar ke atas.
2. **Fokus konversi** — aksi utama = **Pesan via WhatsApp**. Selalu terlihat di
   Navbar (pill CTA), tombol sticky (mobile), kartu bento, kartu produk, dan banner CTA.
3. **Berani tapi rapi** — judul raksasa, kartu besar membulat, foto "keluar" dari
   bingkai. Tetap hangat (merah/kuning) dan terpercaya, bukan ramai.
4. **Harga selalu terlihat** — di kartu bento, kartu produk, dan halaman detail.
5. **Aksesibel** — kontras memadai, target sentuh ≥ 44px di layar sentuh, `alt`
   deskriptif, fokus keyboard jelas, hormati `prefers-reduced-motion`.
6. **Cepat** — statis (SSG), `next/image`, animasi minimal, hanya satu foto `priority`.

## 2. Palet Warna

Token Tailwind terdaftar di `tailwind.config.ts` (namespace `brand`).

| Token | Hex | Kelas | Pemakaian |
|---|---|---|---|
| brand-yellow | `#FFAE03` | `bg-brand-yellow` | Kartu bento kuning, badge, highlight. **Teks di atasnya wajib gelap** (`text-neutral-900` atau `text-brand-red-dark`) |
| brand-red | `#B01F24` | `bg-brand-red`, `text-brand-red` | Heading hero, kartu bento gelap, tile aktif, tombol sekunder |
| brand-red-dark | `#9F1C21` | `bg-brand-red-dark` | Hover/active, footer, panel di atas foto gelap |
| brand-cream | `#FFF6E3` | `bg-brand-cream` | **Baru** (tint dari kuning). Background hero, tile kategori, kartu produk |
| white | `#FFFFFF` | `bg-white` | Background section, teks di atas merah, baris kecil di `BenefitsPanel` |
| netral | `neutral-600/700/900` | — | Body text, heading di atas terang |
| whatsapp | `#25D366` | `bg-[#25D366]` | Khusus tombol WhatsApp. **Teks/ikon `text-neutral-900`** |

**Aturan kontras**
- JANGAN teks putih di atas `#FFAE03` maupun `#25D366` (keduanya gagal kontras). Pakai `text-neutral-900`.
- Teks putih aman di atas `brand-red` dan `brand-red-dark`.
- Teks `brand-red` aman di atas `brand-cream` dan putih.
- Body text pakai `neutral-600` (di atas cream/putih), heading pakai `brand-red` atau `neutral-900`.

**Pemetaan warna referensi → Pempek Kevin**

| Di referensi | Di Pempek Kevin |
|---|---|
| Krem hangat (background hero, tile) | `brand-cream` |
| Cokelat tua (heading, kartu gelap, tile aktif) | `brand-red` / `brand-red-dark` |
| Kuning mentega (kartu, tombol) | `brand-yellow` |
| Putih tulang (background section) | `white` |

## 3. Tipografi

Font family **tidak berubah**, dimuat via `next/font/google` di `app/layout.tsx`:

| Peran | Font | CSS var | Kelas |
|---|---|---|---|
| Body / UI | **Nunito** | `--font-nunito` | `font-sans` (default) |
| Sub-judul / angka | **Quicksand** | `--font-quicksand` | `font-display` |
| Judul besar (impact) | **Nunito bobot 900** | `--font-nunito` | `font-impact` |

Kenapa `font-impact` pakai Nunito 900: gaya referensi bertumpu pada huruf kapital
super tebal dan membulat. Quicksand hanya sampai bobot 700 sehingga kurang tebal,
sedangkan Nunito 900 sudah ada di project dan terminal hurufnya sama-sama membulat.
Muat Nunito dengan `weight: ["400","600","700","800","900"]`.

**Gaya tipografi yang diambil dari referensi**

| Elemen | Kelas | Catatan |
|---|---|---|
| Hero statement | `font-impact uppercase text-[clamp(3.25rem,13vw,9rem)] leading-[0.88] tracking-tight text-brand-red` | 3 baris, rata tengah, boleh ditimpa foto |
| Judul section | `font-impact uppercase text-xl sm:text-2xl tracking-wide text-brand-red text-center` | Ukuran sedang, huruf kapital, rata tengah |
| Judul kartu bento | `font-impact uppercase text-2xl md:text-3xl leading-none` | Rapat, 1–3 baris pendek |
| Judul kartu kecil (overlay foto) | `font-impact uppercase text-lg md:text-xl leading-tight` | Ditaruh di sudut kartu |
| Deskripsi kartu | `text-xs sm:text-sm opacity-80 max-w-[28ch]` | Pendek, 1–2 kalimat |
| Harga | `font-display font-bold text-xl md:text-2xl` | Quicksand |
| Label tombol | `font-sans uppercase text-xs font-extrabold tracking-wide` | Nunito 800 |
| Eyebrow/label | `text-xs font-bold uppercase tracking-wide` | — |

Gunakan `.text-balance` untuk judul dan `.text-pretty` untuk paragraf.
Semua judul impact **ditulis normal di kode** (bukan diketik kapital), biar CSS
`uppercase` yang mengubahnya dan teks tetap enak dibaca screen reader.

## 4. Spacing & Layout

- Container: `components/ui/Container.tsx` → `max-w-content` (72rem) + padding
  `px-4 sm:px-6 lg:px-8`.
- Section vertikal: `py-12 md:py-16`. Hero: `pt-6 md:pt-10`, tanpa padding bawah (foto menyentuh batas section).
- Jarak antar kartu bento: `gap-4`.
- Radius: kartu bento `rounded-3xl`, tile kategori dan kartu produk `rounded-2xl`,
  gambar besar `rounded-3xl`, tombol `rounded-full`.
- Shadow: hampir tanpa shadow. Kartu mengandalkan warna blok. Boleh `shadow-sm` di kartu produk.
- Hero adalah **blok penuh lebar** berbackground `brand-cream`; section berikutnya `white`.

**Breakpoint** yang diuji: `360px`, `768px`, `1280px` (lihat `WORKFLOW.md` §9).

## 5. Tombol (gaya referensi: pill kecil, huruf kapital)

Semua tombol: `rounded-full uppercase text-xs font-extrabold tracking-wide`,
`px-5`, ikon opsional di kiri. Tinggi: `min-h-[44px]` di mobile, `md:min-h-[40px]`
di desktop (area sentuh tetap nyaman).

| Varian | Tampilan | Dipakai di |
|---|---|---|
| `whatsapp` | bg `#25D366`, teks `neutral-900`, ikon WA | CTA Navbar, tombol Pesan di kartu, CtaBanner, WhatsAppFloat |
| `yellow` | bg `brand-yellow`, teks `neutral-900` | Tombol di atas kartu merah gelap |
| `light` | bg putih, teks `brand-red` | Tombol di atas kartu kuning |
| `primary` | bg `brand-red`, teks putih | Tombol umum (Lihat Semua, Detail) |
| `secondary` | outline `brand-red`, teks `brand-red` | Aksi sekunder |
| `ghost` | transparan, teks mengikuti konteks | Link ringan |

Aturan: di kartu bento, tombol **Pesan** selalu dipasangkan dengan harga di baris
yang sama (harga kiri, pill kanan). Pada kartu merah gunakan `whatsapp`; pada kartu
kuning juga `whatsapp` (hijau tetap terbaca di kuning). Varian `yellow` dan `light`
hanya untuk aksi non-WA seperti "Lihat Menu".

## 6. Komponen

### UI primitives (`components/ui/`)
- `Button` — varian di atas. Ukuran `sm` (kartu) dan `md` (default). Render `<button>` atau `<Link>`/`<a>` lewat prop `href`.
- `Container`, `Badge`, `PageHeader`, `FadeIn`.
- `SectionTitle` — judul section gaya referensi (impact, uppercase, tengah). Menggantikan `SectionHeading`.
- `BlobPattern` — SVG bentuk organik berulang untuk tekstur di dalam kartu bento. Warna satu tingkat lebih terang/gelap dari kartu (opacity 10–15%), `aria-hidden`, `pointer-events-none`.

### Layout (`components/layout/`)
- `Navbar` (client) — sticky, `bg-white/90 backdrop-blur`. Desktop: logo kiri (teks/logo brand `text-brand-red font-impact`), **link di tengah** (`text-xs font-semibold`), kanan: ikon search + pill CTA WhatsApp. Mobile: logo + hamburger; menu tutup otomatis saat pindah halaman.
- `Footer` — `bg-brand-red-dark`, navigasi + kontak + jam. Tombol Instagram, TikTok, WhatsApp terpisah.
- `WhatsAppFloat` — tombol bulat sticky kanan-bawah, **hanya mobile** (`md:hidden`), ikon gelap.

### Home (`components/home/`)
- `Hero` — lihat §7.
- `FeaturedBento` — 2 kartu besar produk unggulan, lihat §8.
- `StoryBento` — grid cerita, lihat §8.
- `BenefitsPanel` — keunggulan (menggantikan `Advantages`), lihat §8.
- `CtaBanner` — lihat §8.

### Produk (`components/produk/`)
- `CategoryTabs` (client, menggantikan `CategoryFilter`) — baris tile kategori, lihat §9.
- `ProductCard` — bg `brand-cream`, `rounded-2xl`, foto (aspect-square) dengan zoom halus saat hover, badge "Unggulan" (kuning, teks gelap), nama (`font-impact uppercase text-base`), harga (`font-display text-brand-red`), pill Detail + pill Pesan.
- `ProductGrid` — `grid-cols-2 lg:grid-cols-3`, gap `gap-4`, plus empty state.

### Lain-lain
- `components/tentang/` → `Timeline`, `VideoEmbed` (bingkai `rounded-3xl`).
- `components/galeri/` → `GalleryGrid` (client, lightbox + keyboard ←/→/Esc).
- `components/lokasi/` → `MapEmbed` (`rounded-3xl`), `OpeningHours`.

## 7. Hero (komponen paling khas dari referensi)

Struktur:
1. Section penuh lebar `bg-brand-cream`, `relative overflow-hidden`.
2. **Judul raksasa** 3 baris, rata tengah, `z-10`, style hero statement (§3). Contoh isi: `Rasa Asli` / `Palembang` / `Dari Bogor!`
3. **Foto cut-out** (PNG/WebP transparan) di tengah-bawah, `z-20`, menimpa bagian bawah judul. Lebar `w-[70%] sm:w-[45%] lg:w-[34%]`, posisi `absolute bottom-0 left-1/2 -translate-x-1/2`. Satu-satunya `next/image` dengan `priority`.
4. **Dekorasi melayang** 2–4 elemen kecil (cuka, cabai, dll) di kiri/kanan judul, `absolute`, `z-30`, `aria-hidden`, alt kosong. Animasi float pelan (translateY ±8px, 4–6 detik), mati jika `prefers-reduced-motion`.
5. Tinggi section: `min-h-[520px] md:min-h-[640px]`. Konten di mobile ditumpuk: judul di atas, foto menimpa bagian bawah judul.
6. Di bawah foto atau di sisi kiri-bawah: pill `whatsapp` "Pesan Sekarang" dan pill `primary` "Lihat Menu" (di mobile tampil di baris sendiri di bawah hero, tidak menimpa foto).

Catatan: judul adalah `<h1>` sungguhan (bukan gambar). Foto tidak boleh menutupi lebih dari sekitar sepertiga lebar judul agar kata tetap terbaca.

## 8. Pola Bento & Banner

**FeaturedBento** — `grid grid-cols-1 md:grid-cols-12 gap-4`. Dua kartu produk unggulan:
- Kartu A: `md:col-span-5`, `bg-brand-red text-white`.
- Kartu B: `md:col-span-7`, `bg-brand-yellow text-neutral-900`.
- Tinggi: `min-h-[260px] md:min-h-[320px]`, `rounded-3xl`, `overflow-hidden`, `relative`.
- Isi: judul impact kiri-atas, deskripsi kecil, baris bawah (harga + pill `whatsapp`). `BlobPattern` di background kartu.
- Foto produk di sisi kanan, besar, **sebagian keluar/terpotong tepi kartu** (`absolute -right-6 bottom-0`, ukuran sekitar 60% lebar kartu). Di mobile, foto di bawah teks dan terpotong tepi bawah.

**StoryBento** — grid 2 baris:
- Baris 1: kartu kuning lebar penuh (`bg-brand-yellow`) — judul "Sejak 2009, kami masak pakai hati", deskripsi, pill `primary` "Kenali Kami", foto di kanan (lingkaran atau bentuk bebas, terpotong tepi).
- Baris 2: dua kartu foto (`md:col-span-6` masing-masing). Foto sebagai background (`next/image fill object-cover`), overlay gradien gelap tipis, judul kecil impact di sudut (contoh: "Dikirim sampai Australia", "Resep turun-temurun"). Teks putih di atas overlay gelap.

**BenefitsPanel** — section dengan foto suasana dapur sebagai background (`fill`, overlay `bg-black/60`). Di atasnya satu kartu `bg-brand-red-dark text-white rounded-3xl` berisi: judul impact, 3 baris keunggulan berupa kartu kecil putih (`rounded-xl`, teks `neutral-900`, judul tebal + sub keterangan kecil), dan 1 pill `yellow`. Foto di sisi kanan kartu (desktop saja).

**CtaBanner** — kartu `bg-brand-yellow rounded-3xl`, teks tengah: judul impact 2 baris ("Lapar?" / "Kami Siap!"), 1 kalimat pendek, pill `whatsapp` besar (`lg`). Foto cut-out di kiri dan kanan yang sebagian keluar tepi kartu (sembunyikan satu di mobile).

## 9. CategoryTabs

- Judul `SectionTitle` di atas, lalu baris tile: mobile `flex overflow-x-auto snap-x gap-3` (bisa digeser), desktop `grid grid-cols-5 gap-3`.
- Tile: `rounded-2xl bg-brand-cream p-3 flex flex-col items-center gap-2`, gambar kecil kategori di atas (aspect-square, `object-contain`), label `text-xs font-semibold` di bawah.
- Tile aktif: `bg-brand-red text-white`, `aria-pressed="true"`.
- Fokus keyboard: outline merah 2px (offset 2px).
- Di `/produk`, memilih tile memfilter `ProductGrid` di bawahnya. Di landing, tile hanya link menuju `/produk?kategori=<slug>`.
- Tile "Semua" selalu di urutan pertama.

## 10. Model Data & Konvensi File

- `data/site.ts` — identitas + kontak + map + video + path aset hero dan dekorasi (semua placeholder di-sentralkan di sini).
- `data/products.ts` — tipe `Product` + daftar produk + helper.
- `data/gallery.ts` — item galeri.
- `lib/whatsapp.ts` — `buildWhatsAppLink(phone, productName?)`.
- `lib/format.ts` — `formatRupiah()`.

Aturan: **ubah konten hanya di folder `data/`**, jangan hardcode di komponen.

## 11. Pola Animasi (Framer Motion)

- Wrapper `FadeIn` (fade + slide 16px, `whileInView`, `once: true`).
- Hero: tiap baris judul muncul bergantian (delay 0.08s), foto naik dari bawah 24px, dekorasi float loop.
- Tile kategori aktif: pindah highlight dengan `layoutId` (halus).
- Kartu produk/bento: gambar `scale-105` saat hover (CSS transition 300ms), bukan JS.
- Hormati `useReducedMotion()` → tanpa animasi.
- Jangan animasikan lebih dari 1–2 properti per elemen.

## 12. Aksesibilitas & SEO (aturan wajib)

- Semua `<Image>` punya `alt` deskriptif; gambar dekoratif (elemen melayang, `BlobPattern`) `alt=""` / `aria-hidden`.
- Ikon SVG inline pakai `aria-hidden="true"`.
- `:focus-visible` global: outline merah 2px (`app/globals.css`).
- Area sentuh minimal 44px di layar sentuh.
- Teks di atas foto selalu punya overlay gelap yang menjaga kontras.
- Tiap halaman punya `metadata` (title, description, canonical, Open Graph).
- JSON-LD `Restaurant` di `app/layout.tsx`, JSON-LD `Product` di halaman detail.
- `app/sitemap.ts` + `app/robots.ts` generated otomatis.

## 13. Konfigurasi Tailwind (ringkas)

```ts
// tailwind.config.ts (bagian yang berubah)
theme: {
  extend: {
    colors: {
      brand: {
        yellow: "#FFAE03",
        red: "#B01F24",
        "red-dark": "#9F1C21",
        cream: "#FFF6E3",
      },
    },
    fontFamily: {
      sans: ["var(--font-nunito)", "sans-serif"],
      display: ["var(--font-quicksand)", "sans-serif"],
      impact: ["var(--font-nunito)", "sans-serif"], // dipakai dengan font-black
    },
    maxWidth: { content: "72rem" },
  },
}
```

Kelas `font-impact` selalu dipasangkan dengan `font-black` (bobot 900) dan `uppercase`.
Boleh dibungkus jadi utility `.heading-impact` di `globals.css`.

## 14. Yang Harus Konsisten

- Aksi utama selalu tombol pill hijau WhatsApp dengan ikon.
- Badge/highlight kuning selalu berteks gelap.
- Judul besar selalu `font-impact font-black uppercase`; sub-judul dan harga `font-display`; body `font-sans`.
- Kartu besar selalu `rounded-3xl`, tombol selalu `rounded-full`.
- Foto utama boleh "keluar" dari bingkai, tapi tidak boleh menutupi teks penting.
- Semua konten placeholder di `data/` gampang diganti.
