import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function main() {
  const svgPath = path.resolve(process.cwd(), 'public/icons/golden-seagull.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  const outDir = path.resolve(process.cwd(), 'public/icons');
  const publicDir = path.resolve(process.cwd(), 'public');

  console.log('Generating Golden Seagull raster icons from SVG...');

  // 1. Generate 48x48 (Crucial for Google Search snippet)
  const png48 = await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(outDir, 'favicon-48x48.png'), png48);
  console.log('Generated favicon-48x48.png (48x48)');

  // 2. Generate 96x96
  const png96 = await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(outDir, 'favicon-96x96.png'), png96);
  console.log('Generated favicon-96x96.png (96x96)');

  // 3. Generate 192x192
  const png192 = await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(outDir, 'favicon-192x192.png'), png192);
  console.log('Generated favicon-192x192.png (192x192)');

  // 4. Generate 180x180 Apple Touch Icon
  const png180 = await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), png180);
  console.log('Generated apple-touch-icon.png (180x180)');

  // 5. Generate 32x32 for ICO
  const png32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  // 6. Build true multi-resolution .ico containing 48x48, 32x32
  const images = [
    { width: 48, height: 48, buffer: png48 },
    { width: 32, height: 32, buffer: png32 }
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * images.length;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(images.length, 4); // Number of images

  const entries: Buffer[] = [];
  const buffers: Buffer[] = [];

  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset of image data
    offset += img.buffer.length;

    entries.push(entry);
    buffers.push(img.buffer);
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...buffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuffer);
  console.log('Generated public/favicon.ico with 48x48 and 32x32 embedded PNGs');

  console.log('All favicon assets successfully generated!');
}

main().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
