export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const PLACEHOLDER = "/images/gallery/placeholder.svg";

export const galleryItems: GalleryItem[] = [
  { src: PLACEHOLDER, alt: "Foto proses pembuatan pempek", caption: "Proses pembuatan pempek" },
  { src: PLACEHOLDER, alt: "Pempek kapal selam jumbo siap saji", caption: "Kapal Selam Jumbo" },
  { src: PLACEHOLDER, alt: "Penggilingan ikan segar", caption: "Ikan segar pilihan" },
  { src: PLACEHOLDER, alt: "Pempek lenjer", caption: "Lenjer & Lenjer Jumbo" },
  { src: PLACEHOLDER, alt: "Penggorengan pempek adaan", caption: "Proses penggorengan" },
  { src: PLACEHOLDER, alt: "Kuah cuko untuk pempek", caption: "Kuah cuko khas Palembang" },
  { src: PLACEHOLDER, alt: "Packing pesanan pelanggan", caption: "Packing pesanan" },
  { src: PLACEHOLDER, alt: "Paket pempek siap dikirim", caption: "Paket siap dikirim" },
];
