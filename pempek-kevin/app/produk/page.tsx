import { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductCatalog from "@/components/produk/ProductCatalog";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description:
    "Katalog lengkap Pempek Kevin: pempek signature ikan tenggiri (Kapal Selam Jumbo, Lenjer Jumbo, Selam Mini, Lenjer, Adaan, Kulit Crispy), paket pempek, kuliner khas Palembang (Lenggang, Rujak Mie, Tekwan, Model), hingga frozen food. Harga jelas dan bisa langsung pesan via WhatsApp.",
  alternates: { canonical: "/produk" },
};

export default function ProdukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog"
        title="Pilih pempek favorit Anda"
        description="Empat kategori menu: Pempek Signature, Paket Pempek, Kuliner Khas Palembang, dan Frozen Food. Filter kategori untuk menemukan yang Anda cari, lalu pesan langsung via WhatsApp."
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
          <ProductCatalog products={products} />
        </Suspense>
      </Container>
    </>
  );
}
