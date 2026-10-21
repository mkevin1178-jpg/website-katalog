import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { site } from "@/data/site";
import { ogImage, siteOpenGraph } from "@/lib/metadata";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Pempek Khas Palembang Sejak ${site.foundedYear}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pempek",
    "pempek palembang",
    "pempek bogor",
    "pempek kevin",
    "pempek ikan tenggiri",
    "paket pempek",
    "tekwan",
    "lenggang",
    "rujak mie",
    "pempek frozen",
    "kuliner palembang",
  ],
  openGraph: siteOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [ogImage.url],
  },
  icons: {
    icon: "/images/logo-pempek-kevin.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/og-image.png`,
  servesCuisine: "Indonesian",
  priceRange: "Rp",
  foundingDate: site.foundedDate,
  telephone: `+${site.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "13:30",
      closes: "19:30",
    },
  ],
  sameAs: [site.social.instagramProfile, site.social.tiktokProfile],
  areaServed: ["Bogor", "Jabodetabek", "Australia", "Oman", "Qatar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-neutral-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
