import { extname, resolve } from 'path'
import Hapi from 'hapi'
import Inert from 'inert'

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 3005,
})
server.register([ Inert ])

export function basicAuth(request, username, password, callback) {
  // console.log(username, password)
  if (username === 'delanylong' && password === 'textiles') {
    return callback(null, true, { id: 'delanylong', name: 'delany and long' })
  }
  return callback(null, false, { id: 'anon', name: 'anonymous' })
}

export function staticFile({ basePath, pathname = '/index.html' }, reply) {
  const filePath = basePath + pathname
  return reply.file(filePath, { confine: false })
}

export function website({ info: { hostname, remotePort }, url }, reply) {
  const location = { ...url, host: hostname }
  const { pathname } = location
  const basePath = resolve('static')
  if (!extname(pathname)) return staticFile({ basePath }, reply)
  return staticFile({ basePath, pathname }, reply)
}

// server.auth.strategy('simple', 'basic', {
//   validateFunc: basicAuth,
// })

server.route({
  method: 'GET',
  path: '/{path*}',
  config: {
    // auth: 'simple',
    handler: website,
  },
})
// Start the server
server.start((err) => {
  if (err) throw err
  console.log('Server running at:', server.info.uri)
})
