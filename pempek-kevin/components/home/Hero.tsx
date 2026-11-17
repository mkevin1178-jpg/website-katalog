"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroBlob from "@/components/ui/HeroBlob";
import { site } from "@/data/site";

const decorationPositions = [
  "left-[2%] top-[12%] w-14 sm:w-16 md:top-[18%] md:w-24",
  "right-[3%] top-[8%] w-12 sm:w-14 md:top-[12%] md:w-20",
  "left-[6%] bottom-[8%] w-12 sm:w-14 md:bottom-[16%] md:w-20",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const taglineLines = site.hero.taglineLines;

  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <Container className="relative z-10 grid items-center gap-10 py-10 md:min-h-[580px] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12 md:py-14 lg:gap-16">
        <div className="text-center md:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-red-dark">
            {site.hero.eyebrow}
          </p>

          <h1 className="heading-impact text-[clamp(3.25rem,9.5vw,6.25rem)] leading-[0.8] tracking-tight text-brand-red md:text-left">
            {site.hero.titleLines.map((line, index) => (
              <motion.span
                key={line}
                className="block whitespace-nowrap"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduce ? 0 : 0.08 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <p className="mt-6 font-display text-lg font-extrabold uppercase tracking-wide text-[#9F1C21] md:text-xl">
            {site.hero.subtitle}
          </p>

          <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-relaxed text-neutral-800 md:mx-0 md:text-base">
            {site.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button href="/produk" variant="primary" size="md">
              Lihat Menu
            </Button>
            <Button href="/tentang" variant="secondary" size="md">
              Cerita Kami
            </Button>
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl md:max-w-none"
        >
          <HeroBlob className="-right-4 -top-4 h-[108%] w-[108%] md:-right-14 md:-top-10 md:h-[124%] md:w-[124%] lg:-right-20 lg:-top-14" />
          <div className="relative z-10 aspect-[4/3] w-full sm:aspect-[3/2]">
            <Image
              src="/images/hero-pempek_FIX.webp"
              alt={site.assets.heroAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain scale-[1.02]"
            />
          </div>
          {taglineLines && taglineLines.length > 0 ? (
            <p className="pointer-events-none absolute left-0 top-0 z-20 -rotate-[12deg] text-center font-script text-lg font-bold leading-[0.95] text-brand-red sm:text-xl md:left-1 md:top-1 md:text-3xl lg:left-3 lg:top-2 lg:text-4xl">
              {taglineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ) : null}
        </motion.div>
      </Container>

      {site.assets.heroDecorations.map((src, index) => {
        const position = decorationPositions[index % decorationPositions.length];
        return (
          <motion.div
            key={src}
            aria-hidden="true"
            className={`absolute z-30 hidden md:block ${position}`}
            initial={false}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 4.5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }
            }
          >
            <Image
              src={src}
              alt=""
              width={300}
              height={300}
              className="h-auto w-full"
            />
          </motion.div>
        );
      })}
    </section>
  );
}
