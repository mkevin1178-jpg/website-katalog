"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryTabs, { FilterValue } from "@/components/produk/CategoryTabs";
import ProductGrid from "@/components/produk/ProductGrid";
import SearchInput from "@/components/ui/SearchInput";
import { Product, categoryLabel, categories } from "@/data/products";

const validValues = new Set<string>(["semua", ...categories.map((c) => c.value)]);

export default function ProductCatalog({
  products,
  initialFilter,
}: {
  products: Product[];
  /** Nilai awal filter, dikirim dari Server Component. */
  initialFilter: { kategori: string; q: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("q") ?? initialFilter.q);

  const rawCategory = searchParams.get("kategori") ?? initialFilter.kategori;
  const active: FilterValue =
    rawCategory && validValues.has(rawCategory)
      ? (rawCategory as FilterValue)
      : "semua";

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchCategory =
        active === "semua" || product.category === active;
      const matchSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        categoryLabel(product.category).toLowerCase().includes(query) ||
        (product.originalName?.toLowerCase().includes(query) ?? false) ||
        (product.aliases?.some((alias) =>
          alias.toLowerCase().includes(query),
        ) ??
          false);
      return matchCategory && matchSearch;
    });
  }, [active, products, search]);

  const selectCategory = (value: FilterValue) => {
    router.replace(
      value === "semua"
        ? pathname
        : `${pathname}?kategori=${encodeURIComponent(value)}`,
      { scroll: false },
    );
  };

  return (
    <div className="space-y-6">
      <SearchInput
        value={search}
        onValueChange={setSearch}
        className="mx-auto max-w-xl"
      />

      <CategoryTabs active={active} onSelect={selectCategory} />

      <p role="status" aria-live="polite" className="text-xs text-neutral-500">
        {search.trim()
          ? `Menampilkan ${filtered.length} produk untuk pencarian "${search.trim()}".`
          : `Menampilkan ${filtered.length} produk.`}
      </p>

      <ProductGrid products={filtered} priorityCount={4} />
    </div>
  );
}
