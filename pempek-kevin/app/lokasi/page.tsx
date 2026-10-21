import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/lokasi/MapEmbed";
import OpeningHours from "@/components/lokasi/OpeningHours";
import { site, addressFull } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Lokasi & Kontak",
  description:
    "Alamat, jam operasional, peta lokasi, dan kontak WhatsApp Pempek Kevin di Bogor.",
  path: "/lokasi",
});

export default function LokasiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lokasi"
        title="Temukan kami di Bogor"
        description="Kunjungi atau hubungi Pempek Kevin di Taman Yasmin Sektor 7, Bogor. Untuk pesanan luar kota, silakan hubungi WhatsApp kami terlebih dahulu."
      />

      <Container className="grid gap-8 py-10 md:grid-cols-2 md:py-14">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              Alamat
            </h2>
            <address className="not-italic text-neutral-600">{addressFull}</address>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              Jam Operasional
            </h2>
            <OpeningHours hours={site.openingHours} />
          </div>

          <div className="space-y-1">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              WhatsApp
            </h2>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-red hover:underline"
            >
              {site.whatsappDisplay}
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsAppLink()}
              variant="whatsapp"
              size="lg"
              className="sm:flex-1"
            >
              Chat WhatsApp
            </Button>
            <Button
              href={site.maps.shareUrl}
              variant="secondary"
              size="lg"
              className="sm:flex-1"
            >
              Buka di Google Maps
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <MapEmbed
            src={site.maps.embedUrl}
            title={`Peta lokasi ${site.name}`}
          />
          <p className="text-xs text-neutral-500">
            Titik peta diarahkan ke alamat Taman Yasmin Sektor 7, Jl. Bambu
            Apus Raya No. 40, Bogor. Gunakan tombol &ldquo;Buka di Google
            Maps&rdquo; untuk Navigasi.
          </p>
        </div>
      </Container>
    </>
  );
}
