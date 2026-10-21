"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/lokasi", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [term, setTerm] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const query = term.trim();
    router.push(query ? `/produk?q=${encodeURIComponent(query)}` : "/produk");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <nav className="flex h-16 items-center gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo-pempek-kevin.png"
              alt={`Logo ${site.name}`}
              width={40}
              height={40}
              className="h-9 w-9"
            />
            <span className="heading-impact text-base tracking-wide text-brand-red">
              {site.name}
            </span>
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-brand-red/10 text-brand-red"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-brand-red"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <IconButton
              aria-label={searchOpen ? "Tutup pencarian" : "Cari produk"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <SearchIcon />
            </IconButton>
            <Button
              href={buildWhatsAppLink(site.whatsapp)}
              variant="whatsapp"
              size="sm"
            >
              <WhatsAppIcon />
              Pesan via WhatsApp
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <IconButton
              aria-label={searchOpen ? "Tutup pencarian" : "Cari produk"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <SearchIcon />
            </IconButton>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-red hover:bg-brand-red/10"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </Container>

      {searchOpen ? (
        <div className="border-t border-neutral-100 bg-white">
          <Container className="py-3">
            <form onSubmit={submitSearch} role="search" className="flex gap-2">
              <label htmlFor="navbar-search" className="sr-only">
                Cari produk
              </label>
              <div className="relative w-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  ref={searchRef}
                  id="navbar-search"
                  type="search"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  placeholder="Cari produk..."
                  className="min-h-[44px] w-full rounded-full border border-neutral-200 bg-white py-2 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-red focus:outline-none"
                />
              </div>
              <Button type="submit" variant="primary" size="md">
                Cari
              </Button>
            </form>
          </Container>
        </div>
      ) : null}

      {open ? (
        <div id="mobile-menu" className="border-t border-neutral-100 bg-white md:hidden">
          <Container className="py-3">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-semibold ${
                      isActive(link.href)
                        ? "bg-brand-red/10 text-brand-red"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <Button
                href={buildWhatsAppLink(site.whatsapp)}
                variant="whatsapp"
                size="md"
                className="w-full"
              >
                <WhatsAppIcon />
                Pesan via WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
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
