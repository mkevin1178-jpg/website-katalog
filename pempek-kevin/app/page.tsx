import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedBento from "@/components/home/FeaturedBento";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import CtaBanner from "@/components/home/CtaBanner";
import AboutPreview from "@/components/home/AboutPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import { siteOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: siteOpenGraph,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBento />
      <CategoryShowcase />
      <CtaBanner />
      <AboutPreview />
      <GalleryPreview />
    </>
  );
}
