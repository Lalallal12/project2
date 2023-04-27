'use strict'
//const mongodb = require('mongodb')
const { DB_DATABASE } = process.env

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log(`[INFO] Mongo DB Connection Try..`)
    const client = await fastify.mongo.client.connect();
    try {
      if (client !== null) {
        console.log(`[INFO] Mongo DB Connection Success!`)
        console.log(client)
        reply.code(200).send(`[INFO] Mongo DB Connection Success!`)
      }
    } finally {
      client.close();
    }
  })
}