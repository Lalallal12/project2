const fp = require('fastify-plugin')
const { DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE} = process.env

module.exports = fp(async function (fastify, opts) {
  
  fastify.register(require('@fastify/mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    url: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/?authMechanism=DEFAULT`
  })  
})

