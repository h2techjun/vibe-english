import sharp from "sharp";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const svg = readFileSync(resolve(root, "public/icons/icon.svg"));

const sizes = [192, 512];

for (const size of sizes) {
  const out = resolve(root, `public/icons/icon-${size}.png`);
  await sharp(svg).resize(size, size).png().toFile(out);
  console.log(`Generated ${out}`);
}

const apple = resolve(root, "public/icons/apple-touch-icon.png");
await sharp(svg).resize(180, 180).png().toFile(apple);
console.log(`Generated ${apple}`);
