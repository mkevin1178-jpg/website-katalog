import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BlobPattern from "@/components/ui/BlobPattern";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { Product, getFeaturedProducts } from "@/data/products";
import { formatRupiah } from "@/lib/format";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FeaturedBento() {
  const featured = getFeaturedProducts().slice(0, 2);

  return (
    <section className="bg-white py-12 md:py-16">
      <Container className="space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
            {site.featuredSection.eyebrow}
          </p>
          <SectionTitle>{site.featuredSection.title}</SectionTitle>
        </div>

        <FadeIn className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {featured.map((product, index) => (
            <BentoCard key={product.slug} product={product} index={index} />
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}

function BentoCard({ product, index }: { product: Product; index: number }) {
  const tone = product.tone ?? (index % 2 === 0 ? "red" : "yellow");
  const isRed = tone === "red";

  return (
    <article
      className={`relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl p-6 md:min-h-[320px] ${
        index === 0 ? "md:col-span-5" : "md:col-span-7"
      } ${
        isRed ? "bg-brand-red text-white" : "bg-brand-yellow text-neutral-900"
      }`}
    >
      <BlobPattern className={isRed ? "text-white/[0.12]" : "text-black/[0.06]"} />

      <div className="relative z-10 flex flex-1 flex-col md:w-[55%]">
        <h3 className="heading-impact text-2xl leading-none md:text-3xl">
          {product.name}
        </h3>
        <p className="mt-3 max-w-[28ch] text-xs opacity-80 sm:text-sm">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <p
            className={`font-display text-xl font-bold md:text-2xl ${
              isRed ? "text-white" : "text-brand-red-dark"
            }`}
          >
            {formatRupiah(product.price)}
          </p>
          <Button
            href={buildWhatsAppLink(site.whatsapp, product.name)}
            variant="whatsapp"
            size="sm"
          >
            <WhatsAppIcon />
            Pesan
          </Button>
        </div>
      </div>

      <div className="relative z-0 mt-6 -mb-12 flex justify-center md:absolute md:inset-y-0 md:-right-6 md:mt-0 md:mb-0 md:block md:w-[55%]">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          sizes="(max-width: 768px) 80vw, 30vw"
          className="h-auto w-[80%] object-contain object-bottom md:h-full md:w-full"
        />
      </div>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.05.24-3.53-.73-2.99-1.18-4.89-4.25-5.04-4.45-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39.002.56.01.18.007.42-.07.66.5.24.58.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.995 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41Z" />
    </svg>
  );
}
