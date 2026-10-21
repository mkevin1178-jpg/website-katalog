import { Product } from "@/data/products";
import ProductCard from "@/components/produk/ProductCard";

export default function ProductGrid({
  products,
  className = "",
  priorityCount = 0,
}: {
  products: Product[];
  className?: string;
  /** Jumlah gambar pertama yang dimuat prioritas (di atas lipatan). */
  priorityCount?: number;
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-xl bg-neutral-50 p-8 text-center text-neutral-600">
        Belum ada produk pada kategori ini.
      </p>
    );
  }

  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 ${className}`}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
