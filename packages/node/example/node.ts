import fs from 'node:fs/promises'
import Ocr from '@gutenye/ocr-node'

async function main() {
  const ocr = await Ocr.create({
    onnxOptions: {
      // logSeverityLevel: 0,
    },
  })
  const imagePath = process.argv.slice(2)[0]
  await fs.mkdir('output', { recursive: true })
  console.time('ocr')
  const result = await ocr.detect(imagePath, {
    isDebug: true,
    onnxOptions: {
      // logSeverityLevel: 0,
    },
  })
  console.timeEnd('ocr')

  console.log(result.map((v) => `${v.mean.toFixed(2)} ${v.text}`).join('\n'))
}

main()
