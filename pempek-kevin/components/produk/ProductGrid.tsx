import { Product } from "@/data/products";
import ProductCard from "@/components/produk/ProductCard";

export default function ProductGrid({
  products,
  className = "",
}: {
  products: Product[];
  className?: string;
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
      className={`grid grid-cols-2 gap-4 lg:grid-cols-3 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
