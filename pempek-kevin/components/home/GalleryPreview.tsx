import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryGrid from "@/components/galeri/GalleryGrid";
import { galleryItems } from "@/data/gallery";
import { site } from "@/data/site";

export default function GalleryPreview() {
  return (
    <section className="bg-brand-cream py-12 md:py-16">
      <Container className="space-y-6">
        <SectionTitle>{site.gallerySection.title}</SectionTitle>
        <GalleryGrid items={galleryItems.slice(0, 6)} />
        <div className="flex justify-center">
          <Button href="/galeri" variant="secondary" size="md">
            {site.gallerySection.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
