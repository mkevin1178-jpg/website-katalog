export function buildWhatsAppLink(phone: string, productName?: string): string {
  const text = productName
    ? `Halo Pempek Kevin, saya mau pesan ${productName}.`
    : `Halo Pempek Kevin, saya mau tanya menu dan harga.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
