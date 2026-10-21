/**
 * Konversi gambar raster (JPG/JPEG/PNG) di public/images menjadi WebP.
 *
 * Aturan:
 * - Semua .jpg/.jpeg/.png di bawah public/images dikonversi rekursif.
 * - Quality 80, lebar maksimum 1200px, tanpa memperbesar gambar kecil.
 * - Pengecualian: file berawalan "og-image" (harus tetap PNG/JPG untuk preview
 *   WhatsApp/sosmed) dan file SVG (vektor, dilewati).
 *
 * Jalankan:
 *   node scripts/convert-webp.mjs                     # konversi saja
 *   node scripts/convert-webp.mjs --delete-originals  # hapus file asal
 *     (hapus hanya dilakukan setelah referensi .webp terupdate & build sukses)
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

const QUALITY = 80;
const MAX_WIDTH = 1200;
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const DELETE_ORIGINALS = process.argv.includes("--delete-originals");

/** File og-image dipakai untuk preview WhatsApp/sosmed -> jangan diubah format. */
function isExcluded(fileName) {
  return fileName.toLowerCase().startsWith("og-image");
}

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }
    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (!SOURCE_EXTENSIONS.has(ext)) continue;
    if (isExcluded(entry.name)) continue;

    files.push(fullPath);
  }

  return files.sort();
}

async function main() {
  let files;
  try {
    files = await collectFiles(IMAGES_DIR);
  } catch {
    console.error(`Folder gambar tidak ditemukan: ${IMAGES_DIR}`);
    process.exitCode = 1;
    return;
  }

  if (files.length === 0) {
    console.log("Tidak ada file JPG/JPEG/PNG untuk dikonversi.");
    return;
  }

  let before = 0;
  let after = 0;

  for (const file of files) {
    const source = path.relative(ROOT, file);
    const target = file.replace(/\.(jpe?g|png)$/i, ".webp");

    const originalSize = (await stat(file)).size;

    await sharp(file)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(target);

    const convertedSize = (await stat(target)).size;
    before += originalSize;
    after += convertedSize;

    const saving = originalSize
      ? Math.round((1 - convertedSize / originalSize) * 100)
      : 0;
    console.log(
      `${source} -> ${path.relative(ROOT, target)}  ` +
        `${(originalSize / 1024).toFixed(1)} KB -> ${(convertedSize / 1024).toFixed(1)} KB (-${saving}%)`,
    );

    if (DELETE_ORIGINALS) {
      await unlink(file);
      console.log(`  dihapus: ${source}`);
    }
  }

  const toKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
  console.log(
    `\nTotal ${files.length} file: ${toKb(before)} -> ${toKb(after)} ` +
      `(-${Math.round((1 - after / before) * 100)}%)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
