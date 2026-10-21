# DESIGN.md — Landasan Frontend Website Katalog Pempek Kevin (v3)

Dokumen ini menjadi acuan utama UI/UX website katalog Pempek Kevin. Semua halaman, komponen, warna, tipografi, aset, dan pola layout mengikuti dokumen ini. Dokumen ini memperbarui v2 agar sesuai dengan mockup visual terbaru.

Acuan proyek:
- `WORKFLOW.md` — alur, kebutuhan, dan ruang lingkup website.
- `identitas-visual.txt` — identitas visual brand.
- `referensi.webp` — inspirasi layout dan gaya visual.
- Mockup UI Pempek Kevin — acuan visual untuk homepage desktop/mobile, komponen UI, dan halaman turunan.

> **Prinsip utama:** gunakan struktur yang tegas, foto makanan yang menggugah selera, palet merah-marun/kuning/krem, kartu membulat, dan CTA WhatsApp yang jelas. Mockup merupakan referensi tampilan; implementasi harus tetap responsif, aksesibel, dan mengikuti data produk yang sebenarnya.

---

## 1. Prinsip Desain

1. **Mobile-first** — rancang mulai dari lebar 360px, lalu adaptasikan ke tablet dan desktop.
2. **Fokus konversi** — tujuan utama adalah membantu pengunjung melihat menu dan memesan melalui WhatsApp.
3. **Brand yang mudah dikenali** — logo/wordmark Pempek Kevin, merah-marun, kuning, krem, dan elemen dekoratif terinspirasi bahan makanan.
4. **Foto produk sebagai fokus** — gunakan foto pempek dan sajian pendamping yang jelas, konsisten, serta tidak meregang.
5. **Harga terlihat** — harga harus tampak pada kartu produk, kartu unggulan, dan halaman detail.
6. **Navigasi ringkas** — pengunjung dapat berpindah ke Beranda, Produk, Tentang Kami, Kontak, serta mencari produk.
7. **Responsif** — susunan desktop boleh berdampingan, sedangkan mobile ditumpuk dan tidak menimbulkan scroll horizontal yang tidak disengaja.
8. **Aksesibel** — kontras memadai, target sentuh minimal 44px, `alt` deskriptif, fokus keyboard jelas, dan dukung `prefers-reduced-motion`.
9. **Performa** — gunakan Next.js SSG bila sesuai, `next/image`, optimasi ukuran gambar, dan hanya prioritaskan gambar hero yang benar-benar utama.
10. **Konten dapat dirawat** — nama, deskripsi, harga, kategori, tautan, kontak, jam operasional, dan galeri dikelola melalui folder `data/`.

---

## 2. Arah Visual dan Palet Warna

Token warna Tailwind menggunakan namespace `brand`.

| Token | Hex | Pemakaian |
|---|---|---|
| `brand-yellow` | `#FFAE03` | Kartu unggulan kuning, tombol aksen, ornamen, highlight |
| `brand-red` | `#B01F24` | Heading utama, kartu unggulan merah, tombol utama, badge aktif |
| `brand-red-dark` | `#9F1C21` | Footer, panel CTA merah, hover/active |
| `brand-cream` | `#FFF6E3` | Latar hero, kartu produk, bidang kartu kategori |
| `white` | `#FFFFFF` | Navbar dan section konten |
| `neutral-900` | sesuai palet Tailwind | Teks utama di latar terang dan teks di atas kuning |
| `neutral-600/700` | sesuai palet Tailwind | Deskripsi dan teks sekunder |
| `whatsapp` | `#25D366` | Tombol khusus pemesanan WhatsApp |

### Aturan penggunaan warna

- Navbar menggunakan latar putih, dengan logo/wordmark merah.
- Hero memakai latar krem dan aksen kuning dengan ornamen organik.
- Kartu produk menggunakan latar krem atau putih; foto menjadi elemen visual utama.
- Kartu unggulan menampilkan dua warna blok: satu merah-marun dan satu kuning.
- Banner promosi dapat menggunakan merah-marun dengan teks putih dan ornamen kuning.
- Footer menggunakan merah gelap, teks putih, dan ikon sosial.
- Jangan gunakan teks putih pada latar kuning atau hijau WhatsApp. Gunakan teks gelap agar terbaca.
- Tombol WhatsApp harus mudah dikenali. Gunakan hijau WhatsApp dengan teks/ikon gelap atau gunakan varian merah-marun dengan ikon WhatsApp jika diperlukan konsistensi pada komponen tertentu. Jangan mencampur varian secara acak: tetapkan satu pola konsisten per konteks.
- Ornamen cabai, cuko, tetesan, atau bentuk organik hanya sebagai aksen; jangan sampai mengganggu teks maupun informasi produk.

---

## 3. Tipografi

Gunakan font yang sudah ditetapkan proyek dan dimuat melalui `next/font/google`.

| Peran | Font | Penggunaan |
|---|---|---|
| Body dan UI | Nunito | Navigasi, deskripsi, label, tombol, teks umum |
| Subjudul dan angka | Quicksand | Harga, angka, penekanan sekunder |
| Heading impact | Nunito 900 | Judul hero, judul section, judul kartu |

Muat Nunito dengan bobot `400`, `600`, `700`, `800`, `900`; Quicksand dapat menggunakan bobot yang tersedia hingga `700`.

### Gaya tipografi

- **Hero heading:** kapital, sangat tebal, rapat, merah-marun, sekitar 3 baris pada desktop maupun mobile sesuai ruang.
- **Judul section:** tebal, merah-marun, rata tengah, ukuran sedang hingga besar.
- **Judul kartu:** tebal, singkat, kontras tinggi.
- **Harga:** tebal, mudah ditemukan, tidak lebih kecil daripada deskripsi.
- **Deskripsi:** ringkas dan nyaman dibaca; utamakan 1–2 kalimat pada kartu.
- **Tombol:** label pendek, tebal, dapat menggunakan uppercase.
- Tulis teks secara normal di kode dan gunakan CSS `uppercase`; jangan menyimpan semua teks konten dalam huruf kapital jika tidak diperlukan.
- Gunakan `.text-balance` untuk heading dan `.text-pretty` untuk paragraf bila tersedia.

---

## 4. Grid, Spacing, dan Bentuk

- Container utama: `max-w-content` (`72rem`) dengan `px-4 sm:px-6 lg:px-8`.
- Section: jarak vertikal umum `py-12 md:py-16`.
- Jarak antar kartu: `gap-4` hingga `gap-6`, menyesuaikan kepadatan konten.
- Kartu utama dan banner: `rounded-3xl`.
- Kartu produk dan kategori: `rounded-2xl`.
- Tombol: `rounded-full`.
- Foto produk: gunakan `object-cover` dengan crop yang konsisten; thumbnail kategori boleh memakai `object-contain` jika sesuai aset.
- Shadow ringan diperbolehkan pada kartu produk. Hindari shadow berat yang membuat tampilan terlalu ramai.
- Layout harus memberi ruang kosong yang cukup agar foto, judul, dan harga tidak saling bertabrakan.

### Breakpoint yang harus diuji

- `360px` — ponsel kecil.
- `768px` — tablet.
- `1280px` — desktop.

---

## 5. Navigasi dan Tombol

### Navbar desktop

- Posisi sticky di bagian atas, latar putih dengan sedikit transparansi/blur bila sesuai.
- Wordmark/logo Pempek Kevin di sisi kiri.
- Navigasi di tengah: **Beranda**, **Produk**, **Tentang Kami**, **Kontak**.
- Sisi kanan: ikon pencarian, tombol WhatsApp berbentuk pill, dan ikon keranjang hanya jika fitur keranjang benar-benar tersedia.
- Tinggi navbar ringkas dan tidak mendominasi hero.

### Navbar mobile

- Wordmark di kiri.
- Ikon pencarian/WhatsApp dan tombol hamburger di kanan sesuai ruang.
- Menu hamburger membuka navigasi yang mudah digunakan, menutup setelah link dipilih, dan dapat dioperasikan dengan keyboard.
- Jangan tampilkan ikon keranjang yang tidak memiliki fungsi.

### Gaya tombol

Semua tombol memiliki target sentuh minimal 44px pada mobile, bentuk pill, label jelas, dan status hover/focus/disabled yang terlihat.

| Varian | Tampilan | Penggunaan |
|---|---|---|
| `whatsapp` | Hijau WhatsApp atau varian brand yang ditetapkan untuk konteks tersebut, ikon WA | Pesan produk dan CTA pemesanan |
| `primary` | Merah-marun dengan teks putih | Lihat detail, navigasi utama |
| `yellow` | Kuning dengan teks gelap | CTA non-WhatsApp pada latar gelap |
| `light` | Putih/krem dengan teks merah | Tombol pada kartu merah atau area kontras |
| `secondary` | Outline merah dengan teks merah | Aksi sekunder |
| `ghost` | Transparan, mengikuti warna konteks | Link ringan |

- Tombol utama menggunakan teks spesifik seperti **Pesan via WhatsApp**, **Pesan Sekarang**, atau **Lihat Produk**.
- Ikon WhatsApp berada di kiri teks.
- Jangan tampilkan tombol yang tampak aktif jika belum memiliki aksi.
- CTA menuju WhatsApp harus menggunakan nomor resmi dari `data/site.ts` dan helper URL dari `lib/whatsapp.ts`.

---

## 6. Struktur Homepage

Urutan homepage mengikuti mockup terbaru:

1. Navbar.
2. Hero.
3. Bagian **Produk Unggulan / Yang Paling Dicari**.
4. **Pilih Kategori Favoritmu**.
5. Banner CTA pemesanan.
6. Bagian **Tentang Kami** dengan foto/video.
7. Bagian **Galeri / Momen di Balik Kelezatan**.
8. Footer.

### 6.1 Hero

- Latar krem dengan ornamen kuning dan merah sebagai aksen.
- Logo/wordmark tetap berada di navbar; hero tidak perlu mengulang logo besar secara berlebihan.
- Headline besar, tebal, merah-marun, idealnya 2–3 baris.
- Contoh pesan: “Nikmati kelezatan pempek khas Palembang dengan cita rasa autentik dan bahan pilihan.”
- Foto pempek berukuran besar di sisi kanan pada desktop dan berada di bawah/di samping judul pada mobile sesuai lebar layar.
- Foto boleh tampak menimpa bidang warna atau ornamen, tetapi tidak boleh menutup teks penting.
- Tampilkan CTA **Pesan via WhatsApp**. CTA sekunder **Lihat Menu** boleh digunakan untuk menuju katalog.
- Ornamen makanan dibuat ringan dan tidak mengalahkan foto produk.
- Gunakan satu gambar hero utama dengan `priority`; gambar lain lazy-load.

### 6.2 Produk Unggulan

- Heading kecil/eyebrow: **Produk Unggulan**.
- Heading utama: **Yang Paling Dicari**.
- Desktop: dua kartu bento berdampingan, dengan proporsi sekitar 5:7.
- Mobile: kartu ditumpuk vertikal.
- Kartu pertama memakai latar merah-marun; kartu kedua memakai latar kuning.
- Setiap kartu memuat foto produk besar, nama, deskripsi singkat, harga, dan tombol pemesanan.
- Foto boleh sedikit keluar dari tepi kartu untuk memberi kesan dinamis, asalkan tidak menutupi harga atau CTA.
- Ornamen organik memiliki opacity rendah.
- Harga dan nama harus berasal dari data produk; jangan menambahkan harga contoh ke produksi tanpa verifikasi.

### 6.3 Kategori Favorit

- Heading: **Pilih Kategori Favoritmu**.
- Kategori dapat berupa Pempek, Tekwan, Model, Lenggang, Kerupuk, atau kategori aktual yang tersedia dalam data.
- Desktop: susunan lima tile dalam satu baris jika ruang cukup.
- Mobile: tile horizontal yang bisa digeser, dengan petunjuk visual bahwa masih ada kategori lain.
- Tile memakai latar krem, gambar/ilustrasi kategori, dan label singkat.
- Kategori aktif menggunakan merah-marun dengan teks putih jika komponen berfungsi sebagai filter.
- Pada homepage, tile kategori menuju halaman Produk dengan query kategori, misalnya `/produk?kategori=<slug>`.
- Jangan tampilkan kategori yang tidak memiliki produk.

### 6.4 Banner CTA

- Banner lebar dengan latar merah-marun atau kuning sesuai komposisi halaman.
- Contoh heading: **Pesan Sekarang, Lebih Mudah!**
- Satu kalimat penjelas dan tombol WhatsApp yang kontras.
- Foto cuko atau pempek dapat ditempatkan di sisi banner sebagai cut-out.
- Pada mobile, sembunyikan atau kecilkan ornamen yang membuat teks terlalu sempit.
- Jangan menampilkan nomor telepon atau klaim pengiriman yang belum dikonfirmasi.

### 6.5 Tentang Kami

- Section latar putih/krem dengan layout dua kolom pada desktop dan ditumpuk pada mobile.
- Sisi teks: label **Tentang Kami**, judul seperti **Pempek dengan Cita Rasa Autentik**, paragraf singkat, dan tombol **Selengkapnya**.
- Sisi visual: foto proses pembuatan/aktivitas dapur; tombol play hanya jika benar-benar membuka video.
- Gunakan informasi sejarah, tahun berdiri, dan proses produksi berdasarkan data brand yang telah dikonfirmasi.

### 6.6 Galeri

- Heading contoh: **Momen di Balik Kelezatan**.
- Desktop: beberapa thumbnail sejajar dengan tombol navigasi bila galeri dibuat sebagai carousel.
- Mobile: grid ringkas atau carousel yang bisa digeser.
- Foto menampilkan produk, proses pembuatan, pengemasan, atau aktivitas brand yang benar-benar relevan.
- Klik gambar dapat membuka lightbox; dukung keyboard `←`, `→`, dan `Esc`.
- Setiap foto memiliki `alt` deskriptif.

### 6.7 Footer

- Latar merah gelap dengan wordmark Pempek Kevin.
- Link: Beranda, Produk, Tentang Kami, Kontak.
- Kelompok informasi: lokasi, jam operasional, WhatsApp, dan media sosial jika datanya tersedia.
- Ikon sosial dibuat sebagai link nyata dan memiliki label aksesibel.
- Desktop: informasi dibagi beberapa kolom; mobile: ditumpuk rapi.
- Jangan mengarang alamat, jam operasional, atau akun media sosial.

---

## 7. Komponen Produk dan Pencarian

### 7.1 ProductCard

- Latar `brand-cream` atau putih dengan radius `rounded-2xl`.
- Foto produk di bagian atas, rasio 1:1, `object-cover`.
- Badge **Unggulan** hanya untuk produk yang memang ditandai unggulan.
- Nama produk tebal dan mudah dipindai.
- Deskripsi singkat opsional, sekitar 1–2 baris.
- Harga terlihat jelas di bawah nama/deskripsi.
- Aksi: **Lihat Detail** dan **Pesan**. Pada layar kecil, tombol dapat ditumpuk atau dibuat satu tombol utama plus link sekunder.
- Hover desktop boleh memberi zoom ringan; jangan mengandalkan hover sebagai satu-satunya indikator interaksi.

### 7.2 ProductGrid

- Mobile: `grid-cols-2`.
- Desktop: `grid-cols-3` pada area konten standar; dapat diperluas bila jumlah kolom tetap nyaman.
- Gap konsisten, foto kartu memiliki rasio yang sama.
- Sediakan empty state saat pencarian/filter tidak menemukan hasil.
- Harga, nama, gambar, slug, kategori, dan status unggulan berasal dari `data/products.ts`.

### 7.3 CategoryTabs

- Mobile: `flex overflow-x-auto snap-x gap-3`.
- Desktop: grid kategori yang seimbang.
- Tile aktif menggunakan latar merah-marun.
- Di halaman `/produk`, pemilihan kategori memfilter `ProductGrid`.
- Sediakan opsi **Semua** jika seluruh katalog dapat ditampilkan.
- Gunakan `aria-pressed` atau pola aksesibilitas yang sesuai untuk kontrol filter.

### 7.4 Search

- Field pencarian berbentuk kapsul/rounded, dengan ikon kaca pembesar.
- Placeholder: **Cari produk...**
- Pencarian dapat mencocokkan nama produk dan kategori; perilaku pencarian harus konsisten di seluruh halaman.
- Sediakan label aksesibel, status hasil, dan tombol hapus pencarian bila diperlukan.
- Jangan menampilkan ikon pencarian yang tidak berfungsi.

### 7.5 Halaman Detail Produk

- Breadcrumb atau link kembali ke katalog.
- Foto produk utama yang besar, dengan galeri tambahan jika tersedia.
- Nama produk, harga, deskripsi, kategori, dan informasi relevan yang sudah diverifikasi.
- CTA **Pesan via WhatsApp** terlihat tanpa harus menggulir terlalu jauh.
- Produk terkait dapat ditampilkan di bawah detail.
- Harga pada halaman detail harus sama dengan harga di katalog.

---

## 8. Halaman Turunan

### 8.1 Halaman Produk

- Navbar.
- Judul halaman dan deskripsi singkat.
- Search.
- CategoryTabs.
- ProductGrid.
- CTA WhatsApp/banner jika relevan.
- Footer.

### 8.2 Halaman Detail Produk

- Informasi produk lengkap, harga, foto, CTA WhatsApp, dan produk terkait.
- Gunakan metadata SEO khusus dan JSON-LD `Product` jika datanya lengkap dan valid.

### 8.3 Halaman Tentang Kami

- Intro tentang brand.
- Cerita/timeline berdasarkan informasi yang sudah dikonfirmasi.
- Foto proses pembuatan atau video melalui `VideoEmbed`.
- Bagian nilai/keunggulan jika tersedia.
- CTA menuju katalog atau WhatsApp.

### 8.4 Halaman Galeri

- `GalleryGrid` responsif.
- Filter kategori foto boleh ditambahkan bila jumlah aset cukup.
- Lightbox mendukung keyboard dan tombol close yang jelas.

### 8.5 Halaman Kontak/Lokasi

- Informasi alamat, kontak, jam operasional, dan peta jika data tersedia.
- `MapEmbed` memiliki ukuran responsif dan judul/label aksesibel.
- `OpeningHours` membaca data dari `data/site.ts`.
- Jika data belum terverifikasi, tampilkan placeholder internal saat pengembangan, bukan informasi palsu di website publik.

---

## 9. Komponen dan Struktur Folder

### `components/ui/`
- `Button`
- `Container`
- `Badge`
- `PageHeader`
- `SectionTitle`
- `BlobPattern`
- `SearchInput`
- `IconButton`

### `components/layout/`
- `Navbar`
- `Footer`
- `WhatsAppFloat` — opsional untuk mobile, hanya jika tidak menduplikasi CTA sticky lain.

### `components/home/`
- `Hero`
- `FeaturedBento`
- `CategoryShowcase`
- `CtaBanner`
- `AboutPreview`
- `GalleryPreview`

Komponen `StoryBento` dan `BenefitsPanel` boleh digunakan bila kontennya sesuai dengan mockup dan materi brand. Jangan memaksakan section yang tidak memiliki foto atau informasi valid.

### `components/produk/`
- `CategoryTabs`
- `ProductCard`
- `ProductGrid`
- `ProductSearch`
- `ProductDetail`

### Komponen lain
- `components/tentang/Timeline`
- `components/tentang/VideoEmbed`
- `components/galeri/GalleryGrid`
- `components/lokasi/MapEmbed`
- `components/lokasi/OpeningHours`

Nama komponen dapat menyesuaikan struktur proyek yang sudah ada; hindari membuat duplikat komponen dengan fungsi sama.

---

## 10. Model Data dan Konvensi File

- `data/site.ts` — nama brand, deskripsi, nomor WhatsApp, alamat, jam operasional, tautan sosial, peta, video, dan path aset.
- `data/products.ts` — tipe `Product`, data produk, harga, kategori, foto, slug, dan penanda unggulan.
- `data/gallery.ts` — daftar foto galeri, caption, alt, dan kategori.
- `lib/whatsapp.ts` — helper `buildWhatsAppLink(phone, productName?)`.
- `lib/format.ts` — helper `formatRupiah()`.

Aturan:
- Konten yang bisa berubah harus dipusatkan di folder `data/`.
- Jangan hardcode harga, nomor WhatsApp, jam operasional, atau detail kontak di komponen.
- Gunakan data nyata yang telah dikonfirmasi. Harga pada mockup hanya ilustrasi dan bukan sumber kebenaran data.
- Pastikan slug produk unik dan kategori konsisten antara data, filter, dan URL.

---

## 11. Aset Visual dan Fotografi

- Prioritaskan foto asli Pempek Kevin jika tersedia dan diizinkan untuk digunakan.
- Foto produk harus jelas, pencahayaan konsisten, dan crop tidak memotong bagian makanan secara tidak sengaja.
- Gunakan cut-out PNG/WebP transparan untuk hero atau kartu bento hanya jika asetnya benar-benar tersedia.
- Gunakan gambar kategori yang konsisten: semua foto atau semua ilustrasi dengan gaya yang selaras.
- Ornamen dekoratif seperti cuko, cabai, dan bentuk blob tidak boleh menggantikan foto produk utama.
- Optimalkan gambar melalui `next/image`; tentukan `sizes` dengan tepat.
- Catat sumber dan lisensi aset eksternal. Gunakan aset yang boleh digunakan sesuai lisensinya, termasuk Creative Commons/open source bila relevan.
- Jangan gunakan gambar stok yang memberi kesan sebagai foto asli produk tanpa penjelasan.

---

## 12. Responsivitas dan Perilaku Interaksi

### Desktop (sekitar 1280px)
- Navbar menampilkan logo, navigasi tengah, pencarian, dan CTA WhatsApp.
- Hero dua area: teks dan foto produk.
- FeaturedBento dua kartu berdampingan.
- Kategori tampil dalam satu baris jika cukup.
- About dan galeri menggunakan layout multi-kolom.
- Footer membagi navigasi, kontak, jam, dan sosial.

### Tablet (sekitar 768px)
- Kurangi ukuran heading dan jarak antarkomponen.
- Kartu dapat menggunakan dua kolom jika konten masih nyaman dibaca.
- Navbar boleh beralih ke menu ringkas berdasarkan ruang aktual.

### Mobile (360px ke atas)
- Navbar memakai wordmark dan tombol menu.
- Hero ditumpuk; foto tidak menghalangi heading dan CTA.
- FeaturedBento menjadi satu kolom.
- Kategori dapat digeser horizontal.
- ProductGrid memakai dua kolom dengan kartu yang tidak terlalu sempit.
- Banner CTA menumpuk teks dan tombol; ornamen disederhanakan.
- Footer ditumpuk dan semua link tetap mudah disentuh.
- Hindari overflow horizontal pada seluruh halaman.

### Interaksi
- Semua tombol/link harus memiliki tujuan nyata.
- Pencarian, filter, menu hamburger, carousel, dan lightbox harus dapat digunakan dengan keyboard.
- Jika ada CTA WhatsApp sticky di mobile, pastikan tidak menutupi konten atau kontrol lain.
- Animasi bersifat pendukung, bukan syarat untuk memahami konten.

---

## 13. Animasi

- Gunakan transisi singkat dan halus untuk hover/focus.
- Kartu dapat memberi zoom foto ringan (`scale-105`) pada hover desktop.
- `FadeIn` atau animasi masuk boleh digunakan secara terbatas.
- Ornamen float hanya jika tidak mengganggu keterbacaan.
- Hormati `prefers-reduced-motion`; matikan gerakan dekoratif bagi pengguna yang meminta pengurangan gerakan.
- Jangan mengandalkan animasi untuk mengungkap informasi penting.
- Hindari animasi berlebihan yang memperlambat halaman.

---

## 14. Aksesibilitas, SEO, dan Performa

### Aksesibilitas
- Semua gambar konten memiliki `alt` deskriptif; gambar dekoratif memakai `alt=""` dan/atau `aria-hidden="true"`.
- Ikon dekoratif disembunyikan dari screen reader; ikon tombol memiliki label aksesibel.
- `:focus-visible` global menggunakan outline yang kontras.
- Area sentuh minimal 44px.
- Pastikan kontras teks di atas warna solid maupun foto.
- Gunakan heading berurutan dan elemen semantik.
- Search input, menu mobile, filter, dan lightbox harus memiliki label dan status yang jelas.

### SEO
- Setiap halaman memiliki `title`, `description`, canonical, dan Open Graph yang sesuai.
- Gunakan JSON-LD `Restaurant` hanya dengan informasi bisnis yang benar.
- Gunakan JSON-LD `Product` pada detail produk bila data valid.
- Sediakan `app/sitemap.ts` dan `app/robots.ts` bila sesuai dengan struktur Next.js.
- Gunakan URL yang konsisten dan slug yang mudah dibaca.

### Performa
- Optimalkan aset gambar dan font.
- Gunakan SSG untuk halaman katalog yang kontennya dapat dibangun statis.
- Lazy-load gambar di luar viewport.
- Batasi penggunaan client component pada bagian yang memerlukan interaksi.
- Pantau layout shift, terutama pada foto hero dan kartu produk.

---

## 15. Konfigurasi Tailwind (ringkas)

```ts
// tailwind.config.ts — bagian extend
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
      impact: ["var(--font-nunito)", "sans-serif"],
    },
    maxWidth: {
      content: "72rem",
    },
  },
}
```

`font-impact` digunakan bersama bobot 900 dan `uppercase`. Bila perlu, buat utility `.heading-impact` di `app/globals.css`.

---

## 16. Checklist Konsistensi Mockup ke Implementasi

- [ ] Navbar putih, wordmark brand, navigasi, pencarian, dan CTA sesuai breakpoint.
- [ ] Hero menggunakan latar krem, headline merah-marun, foto makanan utama, dan CTA.
- [ ] FeaturedBento menampilkan kartu merah dan kuning dengan nama, foto, harga, dan aksi.
- [ ] Kategori memakai tile konsisten dan mengarah ke katalog/filter yang benar.
- [ ] Banner CTA kontras dan tidak menutupi informasi.
- [ ] Section Tentang Kami dan Galeri memakai konten/foto yang valid.
- [ ] Footer merah gelap memuat navigasi dan informasi yang telah dikonfirmasi.
- [ ] Halaman Produk, Detail Produk, Tentang Kami, dan Galeri memakai sistem visual yang sama.
- [ ] Harga dan informasi produk konsisten di semua halaman.
- [ ] Tidak ada tombol, ikon, atau link yang tidak berfungsi.
- [ ] Tampilan diuji pada 360px, 768px, dan 1280px.
- [ ] Kontras, keyboard focus, `alt`, dan reduced motion sudah diperiksa.
- [ ] Foto eksternal memiliki izin/lisensi penggunaan yang sesuai.

---

## 17. Aturan Akhir

Mockup menjadi panduan visual, bukan alasan untuk mengarang data. Implementasi harus mempertahankan identitas Pempek Kevin, kejelasan katalog, harga yang mudah ditemukan, navigasi sederhana, dan jalur pemesanan WhatsApp yang jelas. Jika detail mockup berbeda dengan data bisnis yang terverifikasi, **data bisnis yang benar harus diutamakan**.
