const test = require('node:test')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
test('prova do log ao vivo: 15 linhas, uma por segundo', async () => {
  for (let i = 1; i <= 15; i++) { console.log('linha ao vivo ' + i + ' de 15'); await sleep(1000) }
})
