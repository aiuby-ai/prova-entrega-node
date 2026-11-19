const VERSION = process.env.APP_VERSION || '1'
const handler = (req, res) => {
  if (req.url === '/healthz') { res.writeHead(200, { 'content-type': 'text/plain' }); return res.end('ok') }
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({ app: 'prova-entrega', version: VERSION }))
}
module.exports = { handler, VERSION }
