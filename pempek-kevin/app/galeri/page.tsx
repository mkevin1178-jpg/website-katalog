import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/galeri/GalleryGrid";
import { galleryItems } from "@/data/gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Galeri",
  description:
    "Galeri foto produk dan dokumentasi proses produksi Pempek Kevin, UMKM pempek khas Palembang di Bogor.",
  path: "/galeri",
});

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Foto produk & proses produksi"
        description="Cuplikan produk dan keseharian dapur Pempek Kevin. Klik foto untuk memperbesar."
      />
      <Container className="py-10 md:py-14">
        <GalleryGrid items={galleryItems} />
      </Container>
    </>
  );
}
