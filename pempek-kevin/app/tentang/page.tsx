import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Timeline, { TimelineItem } from "@/components/tentang/Timeline";
import VideoEmbed from "@/components/tentang/VideoEmbed";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Pempek Kevin: UMKM kuliner khas Palembang di Bogor yang berdiri sejak 2009, pernah mengirim produk ke Australia, Oman, dan Qatar.",
  alternates: { canonical: "/tentang" },
};

const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "Pempek Kevin berdiri",
    description:
      "Dimulai dari dapur keluarga di Bogor pada 12 Februari 2009 dengan resep pempek warisan keluarga.",
  },
  {
    year: "2013",
    title: "Mulai dikenal pelanggan lokal",
    description:
      "Pesanan dari mulut ke mulut meningkat, terutama untuk acara keluarga dan hajatan di Bogor.",
  },
  {
    year: "2018",
    title: "Menembus pasar luar negeri",
    description:
      "Produk pernah dikirim ke Australia, Oman, dan Qatar, membuktikan cita rasa yang dipercaya.",
  },
  {
    year: "Sekarang",
    title: "Hadir secara digital",
    description:
      "Meluncurkan katalog digital agar pelanggan lebih mudah melihat produk, harga, dan memesan via WhatsApp.",
  },
];

const values = [
  {
    title: "Kualitas bahan",
    description:
      "Ikan segar pilihan dan bumbu berkualitas tanpa pengawet untuk rasa yang konsisten.",
  },
  {
    title: "Resep keluarga",
    description:
      "Resep otentik khas Palembang yang dijaga turun-temurun sejak 2009.",
  },
  {
    title: "Pelayanan ramah",
    description:
      "Siap membantu pemesanan, termasuk pengiriman ke luar daerah dan luar negeri.",
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Pempek khas Palembang yang dipercaya sejak 2009"
        description="Perjalanan Pempek Kevin dari dapur keluarga di Bogor hingga dipercaya pelanggan dari berbagai daerah dan mancanegara."
      />

      <Container className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-cream ring-1 ring-black/5">
          <Image
            src="/images/gallery/placeholder.svg"
            alt="Profil usaha Pempek Kevin"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <h2 className="heading-impact text-2xl leading-tight text-neutral-900 text-balance sm:text-3xl">
            Cita rasa Palembang, dibawa dengan sepenuh hati
          </h2>
          <p className="text-pretty text-neutral-600">
            Pempek Kevin adalah usaha kuliner khas Palembang yang berbasis di
            Bogor. Berdiri sejak {site.foundedYear}, kami menghadirkan pempek
            dari ikan segar dengan resep keluarga yang autentik.
          </p>
          <p className="text-pretty text-neutral-600">
            Kepuasan pelanggan adalah prioritas kami. Dari pesanan keluarga
            hingga pengiriman ke luar negeri, setiap produk disiapkan dengan
            standar dan rasa yang terjaga.
          </p>
          <Button
            href={buildWhatsAppLink(site.whatsapp)}
            variant="whatsapp"
            size="md"
          >
            Tanya lewat WhatsApp
          </Button>
        </div>
      </Container>

      <section className="bg-brand-cream py-12 md:py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="self-start">Perjalanan</Badge>
            <SectionTitle align="left">Sejarah singkat kami</SectionTitle>
            <Timeline items={timeline} />
          </div>
          <div className="space-y-6">
            <Badge className="self-start">Nilai Kami</Badge>
            <SectionTitle align="left">Yang kami pegang teguh</SectionTitle>
            <div className="space-y-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <h3 className="font-display text-lg font-bold text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge>Pencapaian</Badge>
          <SectionTitle>Dipercaya hingga ke mancanegara</SectionTitle>
          <p className="max-w-2xl text-pretty text-neutral-600">
            Produk Pempek Kevin pernah dikirim ke Australia, Oman, dan Qatar —
            bukti cita rasa yang diterima lintas negara.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {["Australia", "Oman", "Qatar"].map((country) => (
            <div
              key={country}
              className="rounded-2xl bg-brand-red px-6 py-8 text-center text-white"
            >
              <p className="font-display text-2xl font-bold">{country}</p>
              <p className="mt-1 text-sm text-white/80">Tujuan pengiriman produk</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-brand-cream py-12 md:py-16">
        <Container className="space-y-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <Badge>Video Profil</Badge>
            <SectionTitle>Kenali Pempek Kevin lebih dekat</SectionTitle>
            <p className="max-w-2xl text-pretty text-neutral-600">
              Saksikan bagaimana kami menyiapkan produk untuk pelanggan.
            </p>
          </div>
          <VideoEmbed
            youtubeId={site.youtubeId}
            title={`Video profil ${site.name}`}
          />
          <p className="text-center text-xs text-neutral-500">
            Video placeholder — akan diganti dengan video profil resmi.
          </p>
        </Container>
      </section>
    </>
  );
}
