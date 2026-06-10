import sharp from "sharp";

const input = "public/brand/logo-full.png";
const output = "public/brand/logo-hero.png";

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  if (r > 235 && g > 235 && b > 235) {
    data[i + 3] = 0;
  } else if (r > 215 && g > 215 && b > 215) {
    data[i + 3] = Math.round(((235 - Math.min(r, g, b)) / 20) * 255);
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log("written", output);
