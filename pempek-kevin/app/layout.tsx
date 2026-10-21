import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { site } from "@/data/site";

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
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: `${site.name} — Pempek Khas Palembang Sejak ${site.foundedYear}`,
    description: site.description,
    url: site.url,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  icons: {
    icon: "/images/logo-pempek-kevin.png",
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
    postalCode: site.address.postalCode,
    addressCountry: "ID",
  },
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
