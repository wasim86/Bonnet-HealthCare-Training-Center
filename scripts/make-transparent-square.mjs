import sharp from 'sharp'
import path from 'path'

async function main() {
  const src = path.join(process.cwd(), 'public', 'images', 'blue.png')
  const out = path.join(process.cwd(), 'public', 'images', 'blue-transparent-256.png')
  try {
    const img = sharp(src).png()
    const trimmed = img.trim()
    await trimmed
      .resize({ width: 256, height: 256, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out)
    console.log('Wrote transparent square PNG:', out)
  } catch (err) {
    console.error('Failed to create transparent square PNG:', err?.message || err)
    process.exit(1)
  }
}

main()