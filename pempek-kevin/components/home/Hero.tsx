"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const decorationPositions = [
  "left-[2%] top-[12%] w-14 sm:w-16 md:top-[18%] md:w-24",
  "right-[3%] top-[8%] w-12 sm:w-14 md:top-[12%] md:w-20",
  "left-[6%] bottom-[8%] w-12 sm:w-14 md:bottom-[16%] md:w-20",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <Container className="relative z-10 grid items-center gap-8 py-10 md:min-h-[560px] md:grid-cols-2 md:gap-12 md:py-14">
        <div className="text-center md:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-wide text-brand-red-dark">
            {site.hero.eyebrow}
          </p>

          <h1 className="heading-impact text-[clamp(2.75rem,10vw,4.5rem)] leading-[0.78] tracking-tight text-brand-red">
            {site.hero.titleLines.map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduce ? 0 : 0.08 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {line}
                {index < site.hero.titleLines.length - 1 ? " " : null}
              </motion.span>
            ))}
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-sm leading-relaxed text-neutral-700 md:mx-0 md:text-base">
            {site.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
            <Image
              src={site.assets.hero}
              alt={site.assets.heroAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
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
