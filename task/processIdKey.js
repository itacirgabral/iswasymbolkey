import fs from 'fs'

const iswaidkeytxt = fs.readFileSync('iswa_id_key.txt', 'utf8')

const idkey = iswaidkeytxt
  .split('\n')
  .map(line => line.split(','))

const listKey = idkey.map(el => `  ${JSON.stringify(el)}`).join(',\n')

fs.writeFileSync('index.js', `const idkey = [
${listKey}
]

export default idkey
`)