import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/lokasi/MapEmbed";
import OpeningHours from "@/components/lokasi/OpeningHours";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Lokasi & Kontak",
  description:
    "Alamat, jam operasional, peta lokasi, dan kontak WhatsApp Pempek Kevin di Bogor.",
  alternates: { canonical: "/lokasi" },
};

export default function LokasiPage() {
  const address = `${site.address.street}, ${site.address.city}, ${site.address.province} ${site.address.postalCode}, ${site.address.country}`;

  return (
    <>
      <PageHeader
        eyebrow="Lokasi"
        title="Temukan kami di Bogor"
        description="Kunjungi atau hubungi Pempek Kevin. Untuk pesanan luar kota, silakan hubungi WhatsApp kami terlebih dahulu."
      />

      <Container className="grid gap-8 py-10 md:grid-cols-2 md:py-14">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              Alamat
            </h2>
            <address className="not-italic text-neutral-600">{address}</address>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              Jam Operasional
            </h2>
            <OpeningHours hours={site.openingHours} />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsAppLink(site.whatsapp)}
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
            Lokasi pada peta masih placeholder — akan diperbarui dengan titik
            asli usaha.
          </p>
        </div>
      </Container>
    </>
  );
}
