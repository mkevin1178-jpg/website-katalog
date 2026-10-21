import Hero from "@/components/home/Hero";
import FeaturedBento from "@/components/home/FeaturedBento";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import CtaBanner from "@/components/home/CtaBanner";
import AboutPreview from "@/components/home/AboutPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

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
