import { site } from "@/data/site";

/**
 * Nomor WhatsApp Pempek Kevin.
 * Sumber tunggal: `NEXT_PUBLIC_WA_NUMBER` (lihat .env.example) dengan
 * fallback ke nilai placeholder di `data/site.ts`.
 */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? site.whatsapp;

export function buildWhatsAppLink(productName?: string): string {
  const text = productName
    ? `Halo Pempek Kevin, saya mau pesan ${productName}.`
    : `Halo Pempek Kevin, saya mau tanya menu dan harga.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
