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
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Tentang Kami",
  description:
    "Berawal dari Hati, Tumbuh Bersama Keluarga — kenali perjalanan Pempek Kevin, UMKM kuliner khas Palembang di Bogor sejak 2009 yang memakai ikan tenggiri pilihan dengan resep keluarga.",
  path: "/tentang",
});

const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "Pempek Kevin Berdiri",
    description:
      "Dimulai dari dapur keluarga di Bogor pada 12 Februari 2009 dengan resep pempek warisan keluarga.",
  },
  {
    year: "2013",
    title: "Mulai Dikenal Pelanggan Lokal",
    description:
      "Pesanan dari mulut ke mulut meningkat, terutama untuk acara keluarga dan hajatan di Bogor.",
  },
  {
    year: "2018",
    title: "Menembus Pasar Luar Negeri",
    description:
      "Produk pernah dikirim ke Australia, Oman, dan Qatar.",
  },
  {
    year: "Sekarang",
    title: "Hadir Secara Digital",
    description:
      "Menghadirkan katalog digital agar pelanggan lebih mudah melihat produk, harga, dan memesan melalui WhatsApp.",
  },
];

const journeyParagraphs = [
  "Sejak dirintis Bu Tata pada 2009, Pempek Kevin terus berkembang dengan menjaga resep keluarga dan kualitas rasa.",
  "Kepercayaan pelanggan menjadi bagian penting dari perjalanan kami untuk terus menghadirkan pempek berkualitas.",
];

const values = [
  {
    title: "Ikan Tenggiri Pilihan",
    description:
      "Ikan tenggiri pilihan menjadi dasar cita rasa gurih khas Palembang yang kami jaga di setiap batch.",
  },
  {
    title: "Semangat Homemade",
    description:
      "Semangat homemade yang kami jaga sejak 2009 tetap hadir di setiap proses pembuatan pempek.",
  },
  {
    title: "Kepercayaan Pelanggan",
    description:
      "Menjaga kualitas produk adalah cara kami mempertahankan kepercayaan pelanggan dari waktu ke waktu.",
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Berawal dari Hati, Tumbuh Bersama Keluarga"
        description="Setiap pempek memiliki cerita. Bagi kami, cerita itu berawal dari kecintaan terhadap kuliner khas Palembang, resep keluarga, dan keinginan untuk berbagi kelezatan dengan lebih banyak orang."
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
        <div className="max-w-prose space-y-5">
          <h2 className="heading-impact text-2xl leading-tight text-neutral-900 text-balance sm:text-3xl">
            Pempek dengan Cita Rasa Autentik
          </h2>
          <p className="text-pretty text-neutral-600">
            Berawal dari kecintaan Bu Tata terhadap kuliner khas Palembang,
            Pempek Kevin lahir pada tahun 2009 dengan sebuah keinginan sederhana:
            menghadirkan cita rasa pempek yang autentik dan berkualitas bagi
            keluarga di Bogor.
          </p>
          <p className="text-pretty text-neutral-600">
            Sebagai pendiri sekaligus sosok pertama di balik Pempek Kevin, Bu
            Tata membawa resep keluarga dan kecintaannya pada masakan
            tradisional ke dalam setiap sajian. Dengan komitmen untuk selalu
            menggunakan ikan tenggiri pilihan dan menjaga kualitas rasa, beliau
            membangun Pempek Kevin secara konsisten dari waktu ke waktu.
          </p>
          <p className="text-pretty text-neutral-600">
            Bagi kami, pempek bukan sekadar makanan, melainkan warisan cita rasa
            yang menyatukan keluarga dan menghadirkan kehangatan dalam setiap
            gigitan.
          </p>
          <Button
            href={buildWhatsAppLink()}
            variant="whatsapp"
            size="md"
          >
            Tanya lewat WhatsApp
          </Button>
        </div>
      </Container>

      <section className="bg-brand-cream py-12 md:py-16">
        <Container>
          <Timeline items={timeline} />

          <div className="mt-10 grid gap-10 border-t border-neutral-200 pt-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-6">
              <Badge className="self-start">Perjalanan</Badge>
              <SectionTitle align="left">Dari 2009 hingga Hari Ini</SectionTitle>
              <div className="space-y-4">
                {journeyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-prose text-pretty text-neutral-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="self-start">Nilai Kami</Badge>
              <SectionTitle align="left">
                Asli Ikan Tenggiri, Dibuat dengan Sepenuh Hati
              </SectionTitle>
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
          </div>
        </Container>
      </section>

      <Container className="space-y-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge>Pencapaian</Badge>
          <SectionTitle>Dipercaya hingga ke Mancanegara</SectionTitle>
          <p className="max-w-2xl text-pretty text-neutral-600">
            Produk Pempek Kevin pernah dikirim hingga ke Australia, Oman, dan
            Qatar. Perjalanan ini menjadi bagian dari cerita kami dalam
            memperkenalkan cita rasa pempek khas Palembang melampaui batas
            geografis.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {["Australia", "Oman", "Qatar"].map((country) => (
            <div
              key={country}
              className="rounded-2xl bg-brand-red px-6 py-8 text-center text-white"
            >
              <p className="font-display text-2xl font-bold">{country}</p>
              <p className="mt-1 text-sm text-white/80">Tujuan pengiriman produk.</p>
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

      <section className="bg-white py-12 md:py-16">
        <Container className="space-y-4">
          <div className="flex flex-col items-center gap-3 text-center">
            <SectionTitle>Lebih dari Sekadar Pempek</SectionTitle>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            <p className="text-pretty text-neutral-600">
              Kami percaya makanan dapat mendekatkan orang-orang. Sepiring
              pempek hangat dan waktu bersama keluarga dapat menciptakan momen
              sederhana yang berarti.
            </p>
            <p className="text-pretty text-neutral-600">
              Melalui Pempek Kevin, kami ingin berbagi kehangatan, tradisi, dan
              kebahagiaan dalam setiap kesempatan.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-100 bg-white py-12 md:py-16">
        <Container className="space-y-4">
          <div className="flex flex-col items-center gap-3 text-center">
            <SectionTitle>
              Terima Kasih Telah Menjadi Bagian dari Cerita Kami
            </SectionTitle>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            <p className="text-pretty text-neutral-600">
              Dari keluarga kami untuk keluarga Anda, terima kasih telah
              mempercayakan Pempek Kevin sebagai bagian dari momen kebersamaan.
            </p>
            <p className="text-pretty text-neutral-600">
              Kami akan terus menghadirkan pempek homemade berbahan ikan tenggiri
              pilihan dengan cita rasa khas Palembang yang dapat dinikmati lintas
              generasi.
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <Button href="/produk" variant="primary" size="md">
              Jelajahi Menu Kami
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
