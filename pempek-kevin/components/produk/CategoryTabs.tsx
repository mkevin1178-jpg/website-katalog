"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProductCategory, allCategoryImage, categories } from "@/data/products";

export type FilterValue = "semua" | ProductCategory;

type Tile = { value: FilterValue; label: string; image: string };

const tiles: Tile[] = [
  { value: "semua", label: "Semua", image: allCategoryImage },
  ...categories.map((category) => ({
    value: category.value,
    label: category.label,
    image: category.image,
  })),
];

const tileBase =
  "relative flex w-32 shrink-0 snap-start flex-col items-center gap-2 rounded-2xl p-3 transition-colors md:w-auto";
const tileIdle = "bg-brand-cream text-neutral-900 hover:bg-brand-red/10";

export default function CategoryTabs({
  active,
  onSelect,
}: {
  active: FilterValue;
  onSelect: (value: FilterValue) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      role="group"
      aria-label="Filter kategori produk"
      className="flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
    >
      {tiles.map((tile) => {
        const isActive = active === tile.value;
        return (
          <button
            key={tile.value}
            type="button"
            onClick={() => onSelect(tile.value)}
            aria-pressed={isActive}
            className={`${tileBase} snap-start ${isActive ? "text-white" : tileIdle}`}
          >
            {isActive ? (
              reduce ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl bg-brand-red"
                />
              ) : (
                <motion.span
                  layoutId="category-tab-active"
                  aria-hidden="true"
                  transition={{ type: "spring", stiffness: 450, damping: 38 }}
                  className="absolute inset-0 rounded-2xl bg-brand-red"
                />
              )
            ) : null}
            <span className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={tile.image}
                alt=""
                fill
                sizes="(max-width: 768px) 128px, 20vw"
                className="object-contain p-1"
              />
            </span>
            <span className="text-xs font-semibold">{tile.label}</span>
          </button>
        );
      })}
    </div>
  );
}
