"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

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
            Sejak {site.foundedYear} &bull; Bogor
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
              </motion.span>
            ))}
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-sm leading-relaxed text-neutral-700 md:mx-0 md:text-base">
            {site.tagline} Dibuat dari ikan segar pilihan dengan resep keluarga
            sejak {site.foundedYear}.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button
              href={buildWhatsAppLink(site.whatsapp)}
              variant="whatsapp"
              size="md"
            >
              <WhatsAppIcon />
              Pesan via WhatsApp
            </Button>
            <Button href="/produk" variant="primary" size="md">
              Lihat Menu
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

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.05.24-3.53-.73-2.99-1.18-4.89-4.25-5.04-4.45-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39.002.56.01.18.007.42-.07.66.5.24.58.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.995 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41Z" />
    </svg>
  );
}
