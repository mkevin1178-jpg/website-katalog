import { site } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(site.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-neutral-900 shadow-lg transition-transform hover:scale-105 md:hidden"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.31-1.96 1.36-.54.05-1.05.24-3.53-.73-2.99-1.18-4.89-4.25-5.04-4.45-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39.002.56.01.18.007.42-.07.66.5.24.58.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.995 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41Z" />
      </svg>
    </a>
  );
}
