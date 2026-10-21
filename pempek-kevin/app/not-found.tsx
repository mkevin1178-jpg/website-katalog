import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-16 text-center">
      <p className="font-display text-5xl font-bold text-brand-red">404</p>
      <h1 className="font-display text-2xl font-bold text-neutral-900">
        Halaman tidak ditemukan
      </h1>
      <p className="max-w-md text-pretty text-neutral-600">
        Maaf, halaman atau produk yang Anda cari tidak tersedia. Silakan kembali
        ke beranda atau lihat katalog kami.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary" size="md">
          Kembali ke Beranda
        </Button>
        <Button href="/produk" variant="secondary" size="md">
          Lihat Katalog
        </Button>
      </div>
    </Container>
  );
}
