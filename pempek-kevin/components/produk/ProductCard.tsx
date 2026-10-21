import Image from "next/image";
import Link from "next/link";
import { Product, categoryLabel } from "@/data/products";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  /** True untuk gambar di atas lipatan (sisa gambar lazy load). */
  priority?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-brand-cream">
      <Link
        href={`/produk/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-white"
      >
        <Image
          src={product.image}
          alt={`${product.name} — Pempek Kevin`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-neutral-900">
            Unggulan
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="min-h-[2rem] text-xs font-semibold uppercase tracking-wide text-brand-red lg:min-h-0">
          {categoryLabel(product.category)}
        </span>
        <h3 className="heading-impact min-h-[3.75rem] min-[420px]:min-h-[2.5rem] text-base leading-tight text-neutral-900">
          <Link href={`/produk/${product.slug}`} className="hover:text-brand-red">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 min-h-[2.5rem] text-sm text-neutral-600">
          {product.description}
        </p>
        <p className="mt-1 font-display text-xl font-bold text-brand-red">
          {formatRupiah(product.price)}
        </p>

        <div className="mt-auto flex flex-col items-stretch gap-2 pt-3 min-[420px]:flex-row">
          <Button
            href={`/produk/${product.slug}`}
            variant="secondary"
            size="sm"
            className="flex-1"
          >
            Lihat Detail
          </Button>
          <Button
            href={buildWhatsAppLink(product.name)}
            variant="whatsapp"
            size="sm"
            className="flex-1"
          >
            Pesan
          </Button>
        </div>
      </div>
    </article>
  );
}
