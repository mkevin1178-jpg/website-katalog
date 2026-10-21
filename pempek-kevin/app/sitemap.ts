import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: "/", priority: 1, changeFrequency: "monthly" as const },
    { url: "/produk", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/tentang", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/galeri", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/lokasi", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.url}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: `${site.url}/produk/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
