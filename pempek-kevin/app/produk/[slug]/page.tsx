import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/produk/ProductGrid";
import {
  categoryLabel,
  getProductBySlug,
  products,
} from "@/data/products";
import { formatRupiah } from "@/lib/format";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Produk tidak ditemukan" };
  }

  const title = product.name;
  const description = product.description;

  return {
    title,
    description,
    alternates: { canonical: `/produk/${product.slug}` },
    openGraph: {
      type: "article",
      title: `${product.name} — ${site.name}`,
      description,
      url: `/produk/${product.slug}`,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const related = products
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${site.url}${product.image}`,
    category: categoryLabel(product.category),
    brand: { "@type": "Brand", name: site.name },
    ...(product.originalName && product.originalName !== product.name
      ? { alternateName: product.originalName }
      : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${site.url}/produk/${product.slug}`,
    },
  };

  return (
    <>
      <Container className="py-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-brand-red">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/produk" className="hover:text-brand-red">
                Katalog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-neutral-700" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
      </Container>

      <Container className="grid gap-8 pb-12 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-cream ring-1 ring-black/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {product.featured ? (
            <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-neutral-900">
              Unggulan
            </span>
          ) : null}
        </div>

        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-red">
            {categoryLabel(product.category)}
          </span>
          <h1 className="heading-impact text-2xl leading-tight text-neutral-900 text-balance sm:text-3xl">
            {product.name}
          </h1>
          {product.originalName && product.originalName !== product.name ? (
            <p className="text-sm text-neutral-500">
              Nama asli:{" "}
              <span className="font-semibold text-neutral-700">
                {product.originalName}
              </span>
            </p>
          ) : null}
          {product.aliases && product.aliases.length > 0 ? (
            <p className="text-sm text-neutral-500">
              Nama lain:{" "}
              <span className="font-semibold text-neutral-700">
                {product.aliases.join(", ")}
              </span>
            </p>
          ) : null}
          <p className="font-display text-3xl font-bold text-brand-red">
            {formatRupiah(product.price)}
          </p>
          <p className="text-pretty leading-relaxed text-neutral-600">
            {product.description}
          </p>

          <div className="rounded-2xl bg-brand-cream p-4 text-sm text-neutral-600">
            <p>
              Ingin pesan dalam jumlah banyak atau kirim ke luar daerah?
              Hubungi kami langsung agar bisa dibantu.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsAppLink(site.whatsapp, product.name)}
              variant="whatsapp"
              size="lg"
              className="sm:flex-1"
            >
              <WhatsAppIcon />
              Pesan via WhatsApp
            </Button>
            <Button
              href="/produk"
              variant="secondary"
              size="lg"
              className="sm:flex-1"
            >
              Kembali ke Katalog
            </Button>
          </div>
        </div>
      </Container>

      {related.length > 0 ? (
        <section className="bg-brand-cream py-12 md:py-16">
          <Container className="space-y-6">
            <SectionTitle align="left">Produk serupa</SectionTitle>
            <ProductGrid products={related} />
          </Container>
        </section>
      ) : null}
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.05.24-3.53-.73-2.99-1.18-4.89-4.25-5.04-4.45-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39.002.56.01.18.007.42-.07.66.5.24.58.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.995 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41Z" />
    </svg>
  );
}
