import { Suspense } from "react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductCatalog from "@/components/produk/ProductCatalog";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Katalog Produk",
  description:
    "Temukan Pempek favoritmu: pempek signature ikan tenggiri (Kapal Selam Jumbo, Lenjer Jumbo, Selam Mini, Lenjer, Adaan, Kulit Crispy), paket pempek, kuliner khas Palembang (Lenggang, Rujak Mie, Tekwan, Model), hingga frozen food. Harga jelas dan bisa langsung pesan via WhatsApp.",
  path: "/produk",
});

/**
 * Server Component.
 *
 * `searchParams` diakses supaya halaman ini dirender di server pada setiap
 * request: filter kategori (?kategori=) sudah ikut ter-render di HTML awal,
 * sehingga seluruh daftar produk tetap terbaca mesin pencari tanpa perlu
 * menunggu JavaScript. Default filter tetap "Semua".
 */
export default function ProdukPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const kategori =
    typeof searchParams.kategori === "string" ? searchParams.kategori : "semua";
  const q = typeof searchParams.q === "string" ? searchParams.q : "";

  return (
    <>
      <PageHeader
        eyebrow="Katalog"
        title="Temukan Pempek Favoritmu!"
        description={
          <>
            <span className="block">
              Mau menikmati pempek sendiri atau bersama keluarga? Temukan beragam
              pilihan pempek khas Palembang untuk setiap momen.
            </span>
            <span className="block mt-3">
              Mulai dari pempek signature, paket keluarga, kuliner khas Palembang,
              hingga frozen food. Pilih favoritmu dan pesan dengan mudah melalui
              WhatsApp.
            </span>
          </>
        }
      />
      <Container className="py-10 md:py-14">
        <Suspense
          fallback={
            <div
              className="h-32 animate-pulse rounded-2xl bg-neutral-100"
              aria-hidden="true"
            />
          }
        >
          <ProductCatalog products={products} initialFilter={{ kategori, q }} />
        </Suspense>
      </Container>
    </>
  );
}
