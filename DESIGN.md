# DESIGN.md — Landasan Frontend Website Katalog Pempek Kevin

Dokumen ini jadi acuan tunggal untuk tampilan (UI/UX) website. Semua komponen,
warna, tipografi, dan pola layout harus mengikuti dokumen ini. Acuan strategis ada
di `WORKFLOW.md`, identitas visual mentah di `identitas-visual.txt`.

---

## 1. Prinsip Desain

1. **Mobile-first** — desain dimulai dari 360px, diperbesar ke atas.
2. **Fokus konversi** — aksi utama = **Pesan via WhatsApp**. Selalu terlihat di
   Navbar (desktop), tombol sticky (mobile), kartu produk, dan CTA.
3. **Rasa khas Palembang, profesional** — hangat (merah/kuning) tapi rapi dan
   terpercaya. Tidak ramai, tidak berlebihan.
4. **Harga selalu terlihat** — di kartu produk dan halaman detail.
5. **Aksesibel** — kontras memadai, target sentuh ≥ 44px, `alt` deskriptif,
   fokus keyboard jelas, hormati `prefers-reduced-motion`.
6. **Cepat** — statis (SSG), `next/image`, animasi minimal.

## 2. Palet Warna

Token Tailwind terdaftar di `tailwind.config.ts` (namespace `brand`).

| Token | Hex | Kelas | Pemakaian |
|---|---|---|---|
| brand-yellow | `#FFAE03` | `bg-brand-yellow`, `text-brand-yellow` | Aksen, badge, highlight. **Teks di atasnya wajib gelap** (`text-neutral-900`) |
| brand-red | `#B01F24` | `bg-brand-red`, `text-brand-red` | Warna utama: tombol, heading penting |
| brand-red-dark | `#9F1C21` | `bg-brand-red-dark` | Hover/active, footer |
| white | `#FFFFFF` | `bg-white` | Background utama, teks di atas merah |
| netral | `neutral-50/100/600/700/900` | — | Background section, border, body text, heading |
| whatsapp | `#25D366` | `bg-[#25D366]` | Khusus tombol WhatsApp (hijau brand WA) |

**Aturan kontras**
- JANGAN teks putih di atas `#FFAE03` (gagal kontras). Selalu `text-neutral-900`.
- Teks putih aman di atas `brand-red`, `brand-red-dark`, dan `#25D366`.
- Body text pakai `neutral-600`, heading pakai `neutral-900`.

## 3. Tipografi

Font via `next/font/google` (dimuat di `app/layout.tsx`):

| Peran | Font | CSS var | Kelas |
|---|---|---|---|
| Body / UI | **Nunito** | `--font-nunito` | `font-sans` (default) |
| Heading / Display | **Quicksand** | `--font-quicksand` | `font-display` |

Skala umum:
- H1 hero: `text-3xl sm:text-4xl lg:text-5xl font-bold font-display`
- H2 section: `text-2xl sm:text-3xl md:text-4xl font-bold font-display`
- H3 kartu: `text-lg font-bold font-display`
- Body: `text-base` / `text-sm` (`text-neutral-600`)
- Label/eyebrow: `text-xs font-bold uppercase tracking-wide`

Gunakan `.text-balance` untuk heading dan `.text-pretty` untuk paragraf.

## 4. Spacing & Layout

- Container: `components/ui/Container.tsx` → `max-w-content` (72rem) + padding
  `px-4 sm:px-6 lg:px-8`.
- Section vertikal: `py-12 md:py-16` (page header `py-10 md:py-14`).
- Grid produk: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, gap `gap-5`.
- Radius: kartu `rounded-2xl`, hero/gambar besar `rounded-3xl`, tombol `rounded-full`.
- Shadow: `shadow-sm` (kartu), `shadow-md`/`shadow-lg` (hover/gambar).

**Breakpoint** yang diuji: `360px`, `768px`, `1280px` (lihat `WORKFLOW.md` §9).

## 5. Komponen

### UI primitives (`components/ui/`)
- `Button` — varian: `primary` (merah), `secondary` (outline merah), `whatsapp`
  (hijau), `yellow`, `ghost`. Ukuran: `sm` (min-h 40px), `md` (44px), `lg` (48px).
  Bisa render `<button>` atau `<Link>`/`<a>` lewat prop `href`.
- `Container`, `SectionHeading`, `Badge`, `PageHeader`, `FadeIn` (animasi masuk).

### Layout (`components/layout/`)
- `Navbar` (client) — sticky, hamburger mobile, menu tutup otomatis saat pindah
  halaman, CTA WhatsApp.
- `Footer` — `bg-brand-red-dark`, navigasi + kontak + jam.
- `WhatsAppFloat` — tombol bulat sticky kanan-bawah, **hanya mobile** (`md:hidden`).

### Produk (`components/produk/`)
- `ProductCard` — foto (aspect-square), badge "Unggulan", kategori, nama, harga
  tebal (`text-brand-red`), tombol Detail + Pesan.
- `ProductGrid` — grid + empty state.
- `CategoryFilter` (client) — filter kategori dengan `aria-pressed`.

### Home (`components/home/`)
- `Hero`, `Advantages`, `FeaturedProducts`, `StorySection`, `CtaBanner`.

### Lain-lain
- `components/tentang/` → `Timeline`, `VideoEmbed`.
- `components/galeri/` → `GalleryGrid` (client, lightbox + keyboard ←/→/Esc).
- `components/lokasi/` → `MapEmbed`, `OpeningHours`.

## 6. Model Data & Konvensi File

- `data/site.ts` — identitas + kontak + map + video (semua placeholder di-sentralkan di sini).
- `data/products.ts` — tipe `Product` + daftar produk + helper.
- `data/gallery.ts` — item galeri.
- `lib/whatsapp.ts` — `buildWhatsAppLink(phone, productName?)`.
- `lib/format.ts` — `formatRupiah()`.

Investasi: **ubah konten hanya di folder `data/`**, jangan hardcode di komponen.

## 7. Pola Animasi (Framer Motion)

- Wrapper `FadeIn` (fade + slide 16px, `whileInView`, `once: true`).
- Delay bertahap `0.05–0.15s` untuk daftar/cards.
- Hormati `useReducedMotion()` → tanpa animasi.
- Jangan animasikan lebih dari 1–2 properti per elemen.

## 8. Aksesibilitas & SEO (aturan wajib)

- Semua `<Image>` punya `alt` deskriptif; gambar dekoratif `alt=""`.
- Ikon SVG inline pakai `aria-hidden="true"`.
- `:focus-visible` global: outline merah 2px (`app/globals.css`).
- Tap target minimal 44px (`min-h-[44px]`).
- Tiap halaman punya `metadata` (title, description, canonical, Open Graph).
- JSON-LD `Restaurant` di `app/layout.tsx`, JSON-LD `Product` di halaman detail.
- `app/sitemap.ts` + `app/robots.ts` generated otomatis.

## 9. Yang Harus Konsisten

- Aksi utama selalu tombol hijau WhatsApp dengan ikon.
- Badge/highlight kuning selalu berteks gelap.
- Heading selalu `font-display` (Quicksand), body `font-sans` (Nunito).
- Semua konten placeholder di `data/` gampang diganti (lihat daftar di prompt.md).
