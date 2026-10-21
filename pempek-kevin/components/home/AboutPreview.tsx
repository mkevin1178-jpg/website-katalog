import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { site } from "@/data/site";

export default function AboutPreview() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <FadeIn className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
              {site.aboutSection.eyebrow}
            </p>
            <h2 className="heading-impact text-2xl leading-tight text-brand-red text-balance md:text-3xl">
              {site.aboutSection.title}
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-neutral-600 md:text-base">
              {site.story.paragraphs[0]}
            </p>
            <div className="pt-2">
              <Button href="/tentang" variant="primary" size="md">
                {site.story.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-cream ring-1 ring-black/5">
            <Image
              src={site.assets.story}
              alt={site.assets.storyAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
