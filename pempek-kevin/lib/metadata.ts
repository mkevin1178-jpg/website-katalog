import type { Metadata } from "next";
import { site } from "@/data/site";

/**
 * Gambar preview untuk WhatsApp/sosmed.
 * Sengaja tetap PNG (tidak dikonversi ke WebP) agar kompatibel dengan semua
 * platform preview.
 */
export const ogImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: site.name,
};

/** Metadata Open Graph bawaan untuk halaman utama. */
export const siteOpenGraph = {
  type: "website" as const,
  locale: "id_ID",
  siteName: site.name,
  title: `${site.name} — Pempek Khas Palembang Sejak ${site.foundedYear}`,
  description: site.description,
  url: "/",
  images: [ogImage],
};

/**
 * Metadata halaman: canonical + Open Graph + Twitter Card.
 *
 * `alternates.canonical` dan `openGraph.url` selalu menunjuk ke URL halaman
 * itu sendiri. `metadataBase` pada root layout dipakai agar seluruh URL
 * konsisten dengan domain final.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "id_ID",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
