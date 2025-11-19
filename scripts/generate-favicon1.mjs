import pngToIco from 'png-to-ico'
import { writeFileSync } from 'fs'
import path from 'path'

async function main() {
  const srcPng = path.join(process.cwd(), 'public', 'images', 'blue-transparent-256.png')
  const outIco = path.join(process.cwd(), 'src', 'app', 'favicon1.ico')
  try {
    const buf = await pngToIco(srcPng)
    writeFileSync(outIco, buf)
    console.log('Generated favicon1:', outIco)
  } catch (err) {
    console.error('Failed to generate favicon1.ico:', err?.message || err)
    process.exit(1)
  }
}

main()