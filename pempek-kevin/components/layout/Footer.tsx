import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site, addressShort } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/lokasi", label: "Lokasi" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-red-dark text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 py-1">
              <Image
                src="/images/logo-pempek-kevin.webp"
                alt={`Logo ${site.name}`}
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-display text-lg font-bold">{site.name}</span>
            </Link>
            <p className="max-w-xs text-sm text-white/80">{site.tagline}</p>
            <p className="max-w-xs font-display text-base font-bold text-brand-yellow">
              {site.footer.slogan}
            </p>
            <p className="max-w-xs text-sm text-white/80">{site.footer.description}</p>
            <p className="max-w-xs text-xs text-white/70">{site.footer.tagline}</p>
          </div>

          <nav aria-label="Navigasi footer" className="space-y-3">
            <h2 className="font-display text-base font-bold">Navigasi</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-white/80 transition-colors hover:text-brand-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="font-display text-base font-bold">Kontak &amp; Lokasi</h2>
            <address className="space-y-2 text-sm not-italic text-white/80">
              <p>{addressShort}</p>
              {site.openingHours.map((item) => (
                <p key={item.day}>
                  {item.day}: {item.hours}
                </p>
              ))}
            </address>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat WhatsApp ${site.whatsappDisplay}`}
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-yellow hover:underline"
            >
              {site.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            href={site.social.instagram}
            variant="light"
            size="sm"
            aria-label={`Instagram ${site.name}`}
          >
            <InstagramIcon />
            {site.socialHandles.instagram}
          </Button>
          <Button
            href={site.social.tiktok}
            variant="light"
            size="sm"
            aria-label={`TikTok ${site.name}`}
          >
            <TikTokIcon />
            {site.socialHandles.tiktok}
          </Button>
          <Button
            href={buildWhatsAppLink()}
            variant="whatsapp"
            size="sm"
          >
            <WhatsAppIcon />
            WhatsApp
          </Button>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-xs text-white/70">
          &copy; {year} {site.name}. Semua hak dilindungi.
        </div>
      </Container>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 1.9 1.5 3.4 3.5 3.8v3c-1.4 0-2.7-.4-3.8-1.2v6.1a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2 2.8V3h3.3Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.05.24-3.53-.73-2.99-1.18-4.89-4.25-5.04-4.45-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39.002.56.01.18.007.42-.07.66.5.24.58.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.995 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41Z" />
    </svg>
  );
}
