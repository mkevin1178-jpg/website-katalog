import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { categories, products } from "@/data/products";
import { site } from "@/data/site";

export default function CategoryShowcase() {
  const availableCategories = categories.filter((category) =>
    products.some((product) => product.category === category.value),
  );

  return (
    <section className="bg-white pb-12 md:pb-16">
      <Container className="space-y-6">
        <div className="space-y-3">
          <SectionTitle>{site.categorySectionTitle}</SectionTitle>
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            {site.categorySectionDescription.map((paragraph) => (
              <p
                key={paragraph}
                className="text-pretty text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            role="list"
            aria-label="Kategori produk"
            className="flex snap-x gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-5 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {availableCategories.map((category) => (
              <Link
                key={category.value}
                role="listitem"
                href={`/produk?kategori=${encodeURIComponent(category.value)}`}
                className="flex w-32 shrink-0 snap-start flex-col items-center gap-2 rounded-2xl bg-brand-cream p-3 text-neutral-900 transition-colors hover:bg-brand-red/10 md:w-auto"
              >
                <span className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 128px, 20vw"
                    className="object-contain p-1"
                  />
                </span>
                <span className="text-xs font-semibold">{category.label}</span>
              </Link>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent md:hidden"
          />
        </div>

        <div className="flex justify-center">
          <Button href="/produk" variant="secondary" size="md">
            Lihat Semua Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
